open Core_kernel
open Async_kernel
open Incr_dom
open Incr.Let_syntax

module App : sig

  include App_intf.S_simple

  val initial_model: length:int -> Model.t

end = struct

  module Model = struct
    type t = int list

    let cutoff = phys_equal
  end

  module Action = struct
    type t =
      | Increment of int
      | Reset of int
    [@@deriving sexp_of]

    let should_log (_:t) = true
  end

  module State = struct
    type t = unit
  end

  let initial_model ~length : Model.t =
    List.init length ~f:(fun _ -> Random.int 100)

  let apply_action (action:Action.t) (model:Model.t) (_:State.t) =
    let update_idx idx ~f =
      List.mapi model ~f:(fun i c -> if idx = i then f c else c)
    in
    match action with
      | Increment idx -> update_idx idx ~f:(fun c -> c + 1)
      | Reset idx -> update_idx idx ~f:(fun _ -> 0)

  let view (model:Model.t Incr.t) ~inject =
    let open Vdom in
    let%map model = model in
    let rows =
      List.mapi model ~f:(fun i count ->
        let color =
          if count < 10
          then "green"
          else if count < 100
          then "blue"
          else "red"
        in
        Node.tr
          [ Attr.on_click (fun _ev -> inject (Action.Increment i))
          ; Attr.on_double_click (fun _ev -> inject (Action.Reset i))
          ]
          [ Node.td
            []
            [ Node.text (Int.to_string (i + 1)) ]
          ; Node.td
            [ Attr.style [ ("color", color) ] ]
            [ Node.text (Int.to_string count) ]
          ]
      )
    in
    Node.body
      []
      [ Node.h3 [] [ Node.text "My First Incr_dom App" ]
      ; Node.table [] rows
      ]
    
  let on_startup ~schedule (model:Model.t) =
    let l = List.length model in
    Clock_ns.every (Time_ns.Span.of_sec 0.05)
      (fun () -> schedule (Action.Increment (Random.int l)));
    Deferred.return ()
  
  let update_visibility (model:Model.t) = model

  let on_display ~old:(_:Model.t) (_:Model.t) (_:State.t) = ()
end

let () =
  let length =
    let uri =
      Dom_html.window##.location##.search
      |> Js.to_string
      |> Uri.of_string
    in
    let length =
      match Uri.get_query_param uri "rows" with
      | None     -> None
      | Some str ->
        match Or_error.try_with (fun () -> Int.of_string str) with
        | Ok length -> Some length
        | Error err ->
          Async_js.log_s [%message "Failed to parse row num from url" ~_:(err:Error.t)];
          None  
    in
    Option.value length ~default:100
  in
  Start_app.simple
    (module App)
    ~initial_model:(App.initial_model ~length)