(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    function caml_call11(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {return f.length == 11
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])}
    function caml_call29
     (f,
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
      a27,
      a28)
     {return f.length == 29
              ?f
                (a0,
                 a1,
                 a2,
                 a3,
                 a4,
                 a5,
                 a6,
                 a7,
                 a8,
                 a9,
                 a10,
                 a11,
                 a12,
                 a13,
                 a14,
                 a15,
                 a16,
                 a17,
                 a18,
                 a19,
                 a20,
                 a21,
                 a22,
                 a23,
                 a24,
                 a25,
                 a26,
                 a27,
                 a28)
              :runtime.caml_call_gen
                (f,
                 [a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7,
                  a8,
                  a9,
                  a10,
                  a11,
                  a12,
                  a13,
                  a14,
                  a15,
                  a16,
                  a17,
                  a18,
                  a19,
                  a20,
                  a21,
                  a22,
                  a23,
                  a24,
                  a25,
                  a26,
                  a27,
                  a28])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_incremental_kernel=caml_new_string("incremental_kernel"),
     cst_src_before_or_after_ml=caml_new_string("src/before_or_after.ml"),
     cst=caml_new_string(""),
     cst_incremental_kernel$0=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$1=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$2=caml_new_string("incremental_kernel"),
     cst_src_import_ml=caml_new_string("src/import.ml"),
     cst$0=caml_new_string(""),
     cst_incremental_kernel$3=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$4=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$5=caml_new_string("incremental_kernel"),
     cst_src_cutoff_ml=caml_new_string("src/cutoff.ml"),
     cst$1=caml_new_string(""),
     cst_incremental_kernel$6=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$7=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$8=caml_new_string("incremental_kernel"),
     cst_src_node_id_ml=caml_new_string("src/node_id.ml"),
     cst$2=caml_new_string(""),
     cst_incremental_kernel$9=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$10=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$11=caml_new_string("incremental_kernel"),
     cst_src_stabilization_num_ml=caml_new_string("src/stabilization_num.ml"),
     cst$3=caml_new_string(""),
     cst_incremental_kernel$12=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$13=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$14=caml_new_string("incremental_kernel"),
     cst_src_on_update_handler_ml=caml_new_string("src/on_update_handler.ml"),
     cst$4=caml_new_string(""),
     cst_incremental_kernel$15=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$16=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$17=caml_new_string("incremental_kernel"),
     cst_src_should_not_use_ml=caml_new_string("src/should_not_use.ml"),
     cst$5=caml_new_string(""),
     cst_incremental_kernel$18=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$19=caml_new_string("incremental_kernel"),
     cst_Uopt_value_exn=caml_new_string("Uopt.value_exn"),
     cst_None=caml_new_string("None"),
     cst_Some=caml_new_string("Some"),
     cst_incremental_kernel$20=caml_new_string("incremental_kernel"),
     cst_src_uopt_ml=caml_new_string("src/uopt.ml"),
     cst$6=caml_new_string(""),
     cst_incremental_kernel$21=caml_new_string("incremental_kernel"),
     none$0=caml_new_string("Uopt.none"),
     cst_src_uopt_ml$0=caml_new_string("src/uopt.ml"),
     cst_is_none_none=caml_new_string(": <<is_none none>>"),
     cst_src_uopt_ml$1=caml_new_string("src/uopt.ml"),
     cst_not_is_some_none=caml_new_string(": <<not (is_some none)>>"),
     cst_src_uopt_ml$2=caml_new_string("src/uopt.ml"),
     cst_not_is_none_some_13=caml_new_string(": <<not (is_none (some 13))>>"),
     cst_src_uopt_ml$3=caml_new_string("src/uopt.ml"),
     cst_is_some_some_13=caml_new_string(": <<is_some (some 13)>>"),
     cst_src_uopt_ml$4=caml_new_string("src/uopt.ml"),
     cst_Exn_does_raise_fun_value_exn_none=
      caml_new_string(": <<Exn.does_raise (fun () -> value_exn none)>>"),
     cst_src_uopt_ml$5=caml_new_string("src/uopt.ml"),
     cst_value_exn_some_13_13=
      caml_new_string(": <<(value_exn (some 13)) = 13>>"),
     cst_src_uopt_ml$6=caml_new_string("src/uopt.ml"),
     cst_unsafe_value_some_13_13=
      caml_new_string(": <<(unsafe_value (some 13)) = 13>>"),
     cst_incremental_kernel$22=caml_new_string("incremental_kernel"),
     cst_Top=caml_new_string("Top"),
     cst_n=caml_new_string("n"),
     cst_incremental_kernel$23=caml_new_string("incremental_kernel"),
     cst_src_types_ml=caml_new_string("src/types.ml"),
     cst$7=caml_new_string(""),
     cst_incremental_kernel$24=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$25=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$26=caml_new_string("incremental_kernel"),
     cst_src_var_ml=caml_new_string("src/var.ml"),
     cst$8=caml_new_string(""),
     cst_incremental_kernel$27=caml_new_string("incremental_kernel"),
     cst_watch=caml_new_string("watch"),
     cst_set_at=caml_new_string("set_at"),
     cst_value_set_during_stabilization=
      caml_new_string("value_set_during_stabilization"),
     cst_value=caml_new_string("value"),
     cst_incremental_kernel$28=caml_new_string("incremental_kernel"),
     pos=caml_new_string("src/unordered_array_fold.ml:40:23"),
     cst_incremental_kernel$29=caml_new_string("incremental_kernel"),
     cst_src_unordered_array_fold_ml=
      caml_new_string("src/unordered_array_fold.ml"),
     cst$9=caml_new_string(""),
     cst_incremental_kernel$30=caml_new_string("incremental_kernel"),
     cst_num_changes_since_last_full_compute=
      caml_new_string("num_changes_since_last_full_compute"),
     cst_fold_value=caml_new_string("fold_value"),
     cst_children=caml_new_string("children"),
     cst_full_compute_every_n_changes=
      caml_new_string("full_compute_every_n_changes"),
     cst_init=caml_new_string("init"),
     cst_main=caml_new_string("main"),
     cst_incremental_kernel$31=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$32=caml_new_string("incremental_kernel"),
     cst_src_alarm_ml=caml_new_string("src/alarm.ml"),
     cst$10=caml_new_string(""),
     cst_incremental_kernel$33=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$34=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$35=caml_new_string("incremental_kernel"),
     cst_src_step_function_ml=caml_new_string("src/step_function.ml"),
     cst$11=caml_new_string(""),
     cst_incremental_kernel$36=caml_new_string("incremental_kernel"),
     cst_alarm=caml_new_string("alarm"),
     cst_upcoming_steps=caml_new_string("upcoming_steps"),
     cst_value$0=caml_new_string("value"),
     cst_main$0=caml_new_string("main"),
     cst_incremental_kernel$37=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$38=caml_new_string("incremental_kernel"),
     cst_src_array_fold_ml=caml_new_string("src/array_fold.ml"),
     cst$12=caml_new_string(""),
     cst_incremental_kernel$39=caml_new_string("incremental_kernel"),
     cst_children$0=caml_new_string("children"),
     cst_init$0=caml_new_string("init"),
     cst_incremental_kernel$40=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$41=caml_new_string("incremental_kernel"),
     cst_src_at_ml=caml_new_string("src/at.ml"),
     cst$13=caml_new_string(""),
     cst_incremental_kernel$42=caml_new_string("incremental_kernel"),
     cst_alarm$0=caml_new_string("alarm"),
     cst_main$1=caml_new_string("main"),
     cst_incremental_kernel$43=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$44=caml_new_string("incremental_kernel"),
     cst_src_at_intervals_ml=caml_new_string("src/at_intervals.ml"),
     cst$14=caml_new_string(""),
     cst_incremental_kernel$45=caml_new_string("incremental_kernel"),
     cst_alarm$1=caml_new_string("alarm"),
     cst_interval=caml_new_string("interval"),
     cst_main$2=caml_new_string("main"),
     cst_incremental_kernel$46=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$47=caml_new_string("incremental_kernel"),
     cst_src_bind_ml=caml_new_string("src/bind.ml"),
     cst$15=caml_new_string(""),
     cst_incremental_kernel$48=caml_new_string("incremental_kernel"),
     cst_all_nodes_created_on_rhs=caml_new_string("all_nodes_created_on_rhs"),
     cst_rhs_scope=caml_new_string("rhs_scope"),
     cst_lhs_change=caml_new_string("lhs_change"),
     cst_main$3=caml_new_string("main"),
     cst_incremental_kernel$49=caml_new_string("incremental_kernel"),
     pos$1=caml_new_string("src/expert.ml:74:19"),
     pos$2=caml_new_string("src/expert.ml:67:19"),
     pos$0=caml_new_string("src/expert.ml:59:22"),
     cst_incremental_kernel$50=caml_new_string("incremental_kernel"),
     cst_src_expert_ml=caml_new_string("src/expert.ml"),
     cst$16=caml_new_string(""),
     cst_incremental_kernel$51=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$52=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$53=caml_new_string("incremental_kernel"),
     cst_src_sexp_of_ml=caml_new_string("src/sexp_of.ml"),
     cst$17=caml_new_string(""),
     cst_incremental_kernel$54=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$55=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$56=caml_new_string("incremental_kernel"),
     cst_src_scope_ml=caml_new_string("src/scope.ml"),
     cst$18=caml_new_string(""),
     cst_incremental_kernel$57=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$58=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$59=caml_new_string("incremental_kernel"),
     cst_src_freeze_ml=caml_new_string("src/freeze.ml"),
     cst$19=caml_new_string(""),
     cst_incremental_kernel$60=caml_new_string("incremental_kernel"),
     cst_main$4=caml_new_string("main"),
     cst_incremental_kernel$61=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$62=caml_new_string("incremental_kernel"),
     cst_src_if_then_else_ml=caml_new_string("src/if_then_else.ml"),
     cst$20=caml_new_string(""),
     cst_incremental_kernel$63=caml_new_string("incremental_kernel"),
     cst_current_branch=caml_new_string("current_branch"),
     cst_test_change=caml_new_string("test_change"),
     cst_main$5=caml_new_string("main"),
     cst_incremental_kernel$64=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$65=caml_new_string("incremental_kernel"),
     cst_src_join_ml=caml_new_string("src/join.ml"),
     cst$21=caml_new_string(""),
     cst_incremental_kernel$66=caml_new_string("incremental_kernel"),
     cst_lhs_change$0=caml_new_string("lhs_change"),
     cst_main$6=caml_new_string("main"),
     cst_incremental_kernel$67=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$68=caml_new_string("incremental_kernel"),
     cst_src_snapshot_ml=caml_new_string("src/snapshot.ml"),
     cst$22=caml_new_string(""),
     cst_incremental_kernel$69=caml_new_string("incremental_kernel"),
     cst_before=caml_new_string("before"),
     cst_main$7=caml_new_string("main"),
     cst_incremental_kernel$70=caml_new_string("incremental_kernel"),
     cst_Kind_slow_get_child_got_invalid_index=
      caml_new_string("Kind.slow_get_child got invalid index"),
     cst_Invalid=caml_new_string("Invalid"),
     cst_Uninitialized=caml_new_string("Uninitialized"),
     cst_Array_fold=caml_new_string("Array_fold"),
     cst_At=caml_new_string("At"),
     cst_At_intervals=caml_new_string("At_intervals"),
     cst_Bind_lhs_change=caml_new_string("Bind_lhs_change"),
     cst_Bind_main=caml_new_string("Bind_main"),
     cst_Const=caml_new_string("Const"),
     cst_Expert=caml_new_string("Expert"),
     cst_Freeze=caml_new_string("Freeze"),
     cst_If_test_change=caml_new_string("If_test_change"),
     cst_If_then_else=caml_new_string("If_then_else"),
     cst_Join_lhs_change=caml_new_string("Join_lhs_change"),
     cst_Join_main=caml_new_string("Join_main"),
     cst_Map=caml_new_string("Map"),
     cst_Snapshot=caml_new_string("Snapshot"),
     cst_Step_function=caml_new_string("Step_function"),
     cst_Unordered_array_fold=caml_new_string("Unordered_array_fold"),
     cst_Var=caml_new_string("Var"),
     cst_Map2=caml_new_string("Map2"),
     cst_Map3=caml_new_string("Map3"),
     cst_Map4=caml_new_string("Map4"),
     cst_Map5=caml_new_string("Map5"),
     cst_Map6=caml_new_string("Map6"),
     cst_Map7=caml_new_string("Map7"),
     cst_Map8=caml_new_string("Map8"),
     cst_Map9=caml_new_string("Map9"),
     cst_incremental_kernel$71=caml_new_string("incremental_kernel"),
     cst_src_kind_ml=caml_new_string("src/kind.ml"),
     cst$23=caml_new_string(""),
     cst_incremental_kernel$72=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$73=caml_new_string("incremental_kernel"),
     cst_n$0=caml_new_string("n"),
     cst_attempt_to_get_value_of_an_invalid_node=
      caml_new_string("attempt to get value of an invalid node"),
     pos$8=caml_new_string("src/node.ml:301:27"),
     pos$7=caml_new_string("src/node.ml:311:21"),
     pos$6=caml_new_string("src/node.ml:316:19"),
     pos$5=caml_new_string("src/node.ml:367:25"),
     pos$4=caml_new_string("src/node.ml:377:23"),
     pos$3=caml_new_string("src/node.ml:268:15"),
     cst_incremental_kernel$74=caml_new_string("incremental_kernel"),
     cst_src_node_ml=caml_new_string("src/node.ml"),
     cst$24=caml_new_string(""),
     cst_incremental_kernel$75=caml_new_string("incremental_kernel"),
     cst_my_child_index_in_parent_at_index=
      caml_new_string("my_child_index_in_parent_at_index"),
     cst_my_parent_index_in_child_at_index=
      caml_new_string("my_parent_index_in_child_at_index"),
     cst_observers=caml_new_string("observers"),
     cst_old_value_opt=caml_new_string("old_value_opt"),
     cst_next_in_adjust_heights_heap=
      caml_new_string("next_in_adjust_heights_heap"),
     cst_height_in_adjust_heights_heap=
      caml_new_string("height_in_adjust_heights_heap"),
     cst_next_in_recompute_heap=caml_new_string("next_in_recompute_heap"),
     cst_prev_in_recompute_heap=caml_new_string("prev_in_recompute_heap"),
     cst_height_in_recompute_heap=caml_new_string("height_in_recompute_heap"),
     cst_height=caml_new_string("height"),
     cst_next_node_in_same_scope=caml_new_string("next_node_in_same_scope"),
     cst_created_in=caml_new_string("created_in"),
     cst_parent0=caml_new_string("parent0"),
     cst_parent1_and_beyond=caml_new_string("parent1_and_beyond"),
     cst_num_parents=caml_new_string("num_parents"),
     cst_num_on_update_handlers=caml_new_string("num_on_update_handlers"),
     cst_changed_at=caml_new_string("changed_at"),
     cst_cutoff=caml_new_string("cutoff"),
     cst_kind=caml_new_string("kind"),
     cst_value_opt=caml_new_string("value_opt"),
     cst_recomputed_at=caml_new_string("recomputed_at"),
     cst_id=caml_new_string("id"),
     cst_incremental_kernel$76=caml_new_string("incremental_kernel"),
     pos$9=caml_new_string("src/recompute_heap.ml:39:19"),
     cst_incremental_kernel$77=caml_new_string("incremental_kernel"),
     cst_src_recompute_heap_ml=caml_new_string("src/recompute_heap.ml"),
     cst$25=caml_new_string(""),
     cst_incremental_kernel$78=caml_new_string("incremental_kernel"),
     cst_nodes_by_height=caml_new_string("nodes_by_height"),
     cst_height_lower_bound=caml_new_string("height_lower_bound"),
     cst_length=caml_new_string("length"),
     cst_incremental_kernel$79=caml_new_string("incremental_kernel"),
     cst_adding_edge_made_graph_cyclic=
      caml_new_string("adding edge made graph cyclic"),
     cst_node_with_too_large_height=
      caml_new_string("node with too large height"),
     cst_cannot_set_max_height_allowed_less_than_the_max_height_already_seen=
      caml_new_string
       ("cannot set_max_height_allowed less than the max height already seen"),
     cst_incremental_kernel$80=caml_new_string("incremental_kernel"),
     cst_src_adjust_heights_heap_ml=
      caml_new_string("src/adjust_heights_heap.ml"),
     cst$26=caml_new_string(""),
     cst_incremental_kernel$81=caml_new_string("incremental_kernel"),
     cst_nodes_by_height$0=caml_new_string("nodes_by_height"),
     cst_max_height_seen=caml_new_string("max_height_seen"),
     cst_height_lower_bound$0=caml_new_string("height_lower_bound"),
     cst_length$0=caml_new_string("length"),
     cst_incremental_kernel$82=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$83=caml_new_string("incremental_kernel"),
     cst_src_alarm_value_ml=caml_new_string("src/alarm_value.ml"),
     cst$27=caml_new_string(""),
     cst_incremental_kernel$84=caml_new_string("incremental_kernel"),
     cst_action=caml_new_string("action"),
     cst_incremental_kernel$85=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$86=caml_new_string("incremental_kernel"),
     cst_src_config_intf_ml=caml_new_string("src/config_intf.ml"),
     cst$28=caml_new_string(""),
     cst_incremental_kernel$87=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$88=caml_new_string("incremental_kernel"),
     level_bits=[0,14,[0,13,[0,5,0]]],
     cst_incremental_kernel$89=caml_new_string("incremental_kernel"),
     cst_src_config_ml=caml_new_string("src/config.ml"),
     cst$29=caml_new_string(""),
     cst_incremental_kernel$90=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$91=caml_new_string("incremental_kernel"),
     cst_on_update_disallowed=caml_new_string("on_update disallowed"),
     cst_Observer_value_exn_called_after_disallow_future_use=
      caml_new_string("Observer.value_exn called after disallow_future_use"),
     cst_Observer_value_exn_called_without_stabilizing=
      caml_new_string("Observer.value_exn called without stabilizing"),
     cst_attempt_to_get_value_of_an_invalid_node$0=
      caml_new_string("attempt to get value of an invalid node"),
     cst_incremental_kernel$92=caml_new_string("incremental_kernel"),
     cst_src_internal_observer_ml=caml_new_string("src/internal_observer.ml"),
     cst$30=caml_new_string(""),
     cst_incremental_kernel$93=caml_new_string("incremental_kernel"),
     cst_next_in_observing=caml_new_string("next_in_observing"),
     cst_prev_in_observing=caml_new_string("prev_in_observing"),
     cst_next_in_all=caml_new_string("next_in_all"),
     cst_prev_in_all=caml_new_string("prev_in_all"),
     cst_on_update_handlers=caml_new_string("on_update_handlers"),
     cst_observing=caml_new_string("observing"),
     cst_incremental_kernel$94=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$95=caml_new_string("incremental_kernel"),
     cst_src_observer_ml=caml_new_string("src/observer.ml"),
     cst$31=caml_new_string(""),
     cst_incremental_kernel$96=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$97=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$98=caml_new_string("incremental_kernel"),
     cst_src_raised_exn_ml=caml_new_string("src/raised_exn.ml"),
     cst$32=caml_new_string(""),
     cst_incremental_kernel$99=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$100=caml_new_string("incremental_kernel"),
     cst_Trying_to_make_a_node_necessary_whose_defining_bind_is_not_necessary=
      caml_new_string
       ("Trying to make a node necessary whose defining bind is not necessary"),
     cst_on_children_nodes=caml_new_string(" on children nodes"),
     cst_can_only_call$1=caml_new_string("can only call "),
     cst_on_parent_nodes=caml_new_string(" on parent nodes"),
     cst_can_only_call$0=caml_new_string("can only call "),
     cst_during_stabilization=caml_new_string(" during stabilization"),
     cst_can_only_call=caml_new_string("can only call "),
     cst_unexpected_kind_for_expert_node=
      caml_new_string("unexpected kind for expert node"),
     cst_advance_clock=caml_new_string("advance_clock"),
     v1=[0,caml_new_string("_")],
     cst_step_function_got_unsorted_times=
      caml_new_string("step_function got unsorted times"),
     cst_cannot_take_snapshot_in_the_past=
      caml_new_string("cannot take snapshot in the past"),
     cst_at_intervals_got_too_small_interval=
      caml_new_string("at_intervals got too small interval"),
     cst_unordered_array_fold_got_non_positive_full_compute_every_n_changes=
      caml_new_string
       ("unordered_array_fold got non-positive full_compute_every_n_changes"),
     cst_stabilize=caml_new_string("stabilize"),
     cst_cannot_set_var_stabilization_previously_raised=
      caml_new_string("cannot set var -- stabilization previously raised"),
     cst_Observer_value_exn_called_during_stabilization=
      caml_new_string("Observer.value_exn called during stabilization"),
     cst_Observer_value_exn_called_after_stabilize_previously_raised=
      caml_new_string
       ("Observer.value_exn called after stabilize previously raised"),
     cst_attempt_to_run_within_an_invalid_scope=
      caml_new_string("attempt to run within an invalid scope"),
     cst_set_max_height_allowed=caml_new_string("set_max_height_allowed"),
     cst_member_of_all_observers_with_unexpected_state=
      caml_new_string("member of all_observers with unexpected state"),
     cst_cannot_call_am_stabilizing_stabilize_previously_raised=
      caml_new_string
       ("cannot call am_stabilizing -- stabilize previously raised"),
     cst_max_num_parents=caml_new_string("max_num_parents"),
     cst_percentage_of_nodes_by_num_parents=
      caml_new_string("percentage_of_nodes_by_num_parents"),
     cst_percentage_of_nodes_by_num_parents$0=
      caml_new_string("percentage_of_nodes_by_num_parents"),
     cst_max_num_parents$0=caml_new_string("max_num_parents"),
     cst_incremental_kernel$101=caml_new_string("incremental_kernel"),
     cst_src_state_ml=caml_new_string("src/state.ml"),
     cst$33=caml_new_string(""),
     cst_incremental_kernel$102=caml_new_string("incremental_kernel"),
     names=
      [0,
       caml_new_string("currently_running_node"),
       [0,caml_new_string("expert_nodes_created_by_current_node"),0]],
     cst_expert_nodes_created_by_current_node=
      caml_new_string("expert_nodes_created_by_current_node"),
     cst_currently_running_node=caml_new_string("currently_running_node"),
     names$0=
      caml_list_of_js_array
       ([caml_new_string("status"),
         caml_new_string("bind_lhs_change_should_invalidate_rhs"),
         caml_new_string("stabilization_num"),
         caml_new_string("current_scope"),
         caml_new_string("recompute_heap"),
         caml_new_string("adjust_heights_heap"),
         caml_new_string("propagate_invalidity"),
         caml_new_string("num_active_observers"),
         caml_new_string("all_observers"),
         caml_new_string("finalized_observers"),
         caml_new_string("new_observers"),
         caml_new_string("disallowed_observers"),
         caml_new_string("set_during_stabilization"),
         caml_new_string("handle_after_stabilization"),
         caml_new_string("run_on_update_handlers"),
         caml_new_string("timing_wheel"),
         caml_new_string("now"),
         caml_new_string("handle_fired"),
         caml_new_string("fired_alarm_values"),
         caml_new_string("only_in_debug"),
         caml_new_string("num_nodes_became_necessary"),
         caml_new_string("num_nodes_became_unnecessary"),
         caml_new_string("num_nodes_changed"),
         caml_new_string("num_nodes_created"),
         caml_new_string("num_nodes_invalidated"),
         caml_new_string("num_nodes_recomputed"),
         caml_new_string("num_nodes_recomputed_directly_because_one_child"),
         caml_new_string("num_nodes_recomputed_directly_because_min_height"),
         caml_new_string("num_var_sets")]),
     cst_num_var_sets=caml_new_string("num_var_sets"),
     cst_num_nodes_recomputed_directly_because_min_height=
      caml_new_string("num_nodes_recomputed_directly_because_min_height"),
     cst_num_nodes_recomputed_directly_because_one_child=
      caml_new_string("num_nodes_recomputed_directly_because_one_child"),
     cst_num_nodes_recomputed=caml_new_string("num_nodes_recomputed"),
     cst_num_nodes_invalidated=caml_new_string("num_nodes_invalidated"),
     cst_num_nodes_created=caml_new_string("num_nodes_created"),
     cst_num_nodes_changed=caml_new_string("num_nodes_changed"),
     cst_num_nodes_became_unnecessary=
      caml_new_string("num_nodes_became_unnecessary"),
     cst_num_nodes_became_necessary=
      caml_new_string("num_nodes_became_necessary"),
     cst_only_in_debug=caml_new_string("only_in_debug"),
     cst_fired_alarm_values=caml_new_string("fired_alarm_values"),
     cst_handle_fired=caml_new_string("handle_fired"),
     cst_now=caml_new_string("now"),
     cst_timing_wheel=caml_new_string("timing_wheel"),
     cst_run_on_update_handlers=caml_new_string("run_on_update_handlers"),
     cst_handle_after_stabilization=
      caml_new_string("handle_after_stabilization"),
     cst_set_during_stabilization=caml_new_string("set_during_stabilization"),
     cst_disallowed_observers=caml_new_string("disallowed_observers"),
     cst_new_observers=caml_new_string("new_observers"),
     cst_finalized_observers=caml_new_string("finalized_observers"),
     cst_all_observers=caml_new_string("all_observers"),
     cst_num_active_observers=caml_new_string("num_active_observers"),
     cst_propagate_invalidity=caml_new_string("propagate_invalidity"),
     cst_adjust_heights_heap=caml_new_string("adjust_heights_heap"),
     cst_recompute_heap=caml_new_string("recompute_heap"),
     cst_current_scope=caml_new_string("current_scope"),
     cst_stabilization_num=caml_new_string("stabilization_num"),
     cst_bind_lhs_change_should_invalidate_rhs=
      caml_new_string("bind_lhs_change_should_invalidate_rhs"),
     cst_status=caml_new_string("status"),
     tp_loc=caml_new_string("src/state.ml.Stats.t"),
     cst_incremental_kernel$103=caml_new_string("incremental_kernel"),
     cst_attempt_to_compute_balanced_reducer_with_unset_elements=
      caml_new_string
       ("attempt to compute balanced reducer with unset elements"),
     cst_attempt_to_set_negative_index_in_balanced_reducer=
      caml_new_string("attempt to set negative index in balanced reducer"),
     cst_attempt_to_set_out_of_bounds_index_in_balanced_reducer=
      caml_new_string
       ("attempt to set out of bounds index in balanced reducer"),
     cst_non_positive_number_of_leaves_in_balanced_reducer=
      caml_new_string("non-positive number of leaves in balanced reducer"),
     cst_incremental_kernel$104=caml_new_string("incremental_kernel"),
     cst_src_balanced_reducer_ml=caml_new_string("src/balanced_reducer.ml"),
     cst$34=caml_new_string(""),
     cst_incremental_kernel$105=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$106=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$107=caml_new_string("incremental_kernel"),
     cst_src_expert1_ml=caml_new_string("src/expert1.ml"),
     cst$35=caml_new_string(""),
     cst_incremental_kernel$108=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$109=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$110=caml_new_string("incremental_kernel"),
     cst_src_reduce_balanced_ml=caml_new_string("src/reduce_balanced.ml"),
     cst$36=caml_new_string(""),
     cst_incremental_kernel$111=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$112=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$113=caml_new_string("incremental_kernel"),
     cst_src_incremental_intf_ml=caml_new_string("src/incremental_intf.ml"),
     cst$37=caml_new_string(""),
     cst_incremental_kernel$114=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$115=caml_new_string("incremental_kernel"),
     cst_invalid=caml_new_string("<invalid>"),
     cst_unnecessary=caml_new_string("<unnecessary>"),
     cst_uncomputed=caml_new_string("<uncomputed>"),
     cst_Incremental_bug_Observer_on_update_exn_got_unexpected_update_Unnecessary=
      caml_new_string
       ("Incremental bug -- Observer.on_update_exn got unexpected update Unnecessary"),
     cst_incremental_kernel$116=caml_new_string("incremental_kernel"),
     cst_src_incremental_ml=caml_new_string("src/incremental.ml"),
     cst$38=caml_new_string(""),
     cst_incremental_kernel$117=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$118=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$119=caml_new_string("incremental_kernel"),
     cst_src_incremental_kernel_ml=
      caml_new_string("src/incremental_kernel.ml"),
     cst$39=caml_new_string(""),
     cst_incremental_kernel$120=caml_new_string("incremental_kernel"),
     cst_incremental_kernel$121=caml_new_string("incremental_kernel"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel=global_data.Core_kernel,
     include=global_data.Core_kernel__Int,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Debug=global_data.Core_kernel__Debug,
     Base_Invariant=global_data.Base__Invariant,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base_Exn=global_data.Base__Exn,
     Inline_test_config=global_data.Inline_test_config,
     CamlinternalMod=global_data.CamlinternalMod,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Core_kernel_Timing_wheel_ns=global_data.Core_kernel__Timing_wheel_ns,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Stdio_Out_channel=global_data.Stdio__Out_channel,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Core_kernel_Thread_safe_queue=global_data.Core_kernel__Thread_safe_queue,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Lazy=global_data.Core_kernel__Lazy,
     Core_kernel_Gc=global_data.Core_kernel__Gc,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Percent=global_data.Core_kernel__Percent,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Core_kernel_Option_array=global_data.Core_kernel__Option_array,
     Incremental_kernel=
      [0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0];
    caml_register_global(1199,Incremental_kernel,"Incremental_kernel__");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_before_or_after_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$0,cst);
    var
     _b_=[0,caml_new_string("After")],
     _a_=[0,caml_new_string("Before")],
     _m_=
      [0,
       [11,caml_new_string("Time_ns.Span.of_int_ns "),[4,0,0,0,0]],
       caml_new_string("Time_ns.Span.of_int_ns %d")],
     _l_=
      [0,
       [11,caml_new_string("Time_ns.of_int_ns_since_epoch "),[4,0,0,0,0]],
       caml_new_string("Time_ns.of_int_ns_since_epoch %d")],
     _O_=[0,caml_new_string("_")],
     _P_=[0,caml_new_string("src/cutoff.ml"),16,387,409],
     _J_=[0,caml_new_string("Always")],
     _K_=[0,caml_new_string("Never")],
     _L_=[0,caml_new_string("Phys_equal")],
     _M_=[0,caml_new_string("Compare")],
     _N_=[0,caml_new_string("F")],
     _R_=[0,caml_new_string("src/node_id.ml"),6,18],
     _$_=[0,caml_new_string("src/stabilization_num.ml"),6,18],
     _aj_=[0,caml_new_string("created_at")],
     _ak_=[0,caml_new_string("previous_update_kind")],
     _al_=[0,caml_new_string("f")],
     _af_=[0,caml_new_string("Invalidated")],
     _ag_=[0,caml_new_string("Unnecessary")],
     _ah_=[0,caml_new_string("Necessary")],
     _ai_=[0,caml_new_string("Changed")],
     _aa_=[0,caml_new_string("Never_been_updated")],
     _ab_=[0,caml_new_string("Necessary")],
     _ac_=[0,caml_new_string("Changed")],
     _ad_=[0,caml_new_string("Invalidated")],
     _ae_=[0,caml_new_string("Unnecessary")],
     _am_=[0,caml_new_string("_")],
     _bp_=[0,caml_new_string("_")],
     _bn_=[0,caml_new_string("_")],
     _au_=[0,[0]],
     _av_=[0,caml_new_string("src/types.ml"),16,6],
     _aw_=[0,[0,[0,[0]]]],
     _ax_=[0,caml_new_string("src/types.ml"),30,6],
     _ay_=[0,[0]],
     _az_=[0,caml_new_string("src/types.ml"),38,6],
     _aA_=[0,[0]],
     _aB_=[0,caml_new_string("src/types.ml"),46,6],
     _aC_=[0,[0]],
     _aD_=[0,caml_new_string("src/types.ml"),55,6],
     _aE_=[0,[0]],
     _aF_=[0,caml_new_string("src/types.ml"),67,6],
     _aG_=[0,[0]],
     _aH_=[0,caml_new_string("src/types.ml"),87,6],
     _aI_=[0,[0]],
     _aJ_=[0,caml_new_string("src/types.ml"),95,6],
     _aK_=[0,[0]],
     _aL_=[0,caml_new_string("src/types.ml"),106,6],
     _aM_=[0,[0,[0,[0]]]],
     _aN_=[0,caml_new_string("src/types.ml"),121,6],
     _aO_=[0,[0]],
     _aP_=[0,caml_new_string("src/types.ml"),130,6],
     _aQ_=[0,[0]],
     _aR_=[0,caml_new_string("src/types.ml"),188,6],
     _aS_=[0,[0,0,0,0,0]],
     _aT_=[0,caml_new_string("src/types.ml"),226,6],
     _aU_=[0,[0]],
     _aV_=[0,caml_new_string("src/types.ml"),251,6],
     _aW_=[0,[0]],
     _aX_=[0,caml_new_string("src/types.ml"),255,6],
     _aY_=[0,[0,0]],
     _aZ_=[0,caml_new_string("src/types.ml"),259,6],
     _a0_=[0,[0,0]],
     _a1_=[0,caml_new_string("src/types.ml"),266,6],
     _a2_=[0,[0]],
     _a3_=[0,caml_new_string("src/types.ml"),282,6],
     _a4_=[0,[0]],
     _a5_=[0,caml_new_string("src/types.ml"),291,6],
     _a6_=[0,[0]],
     _a7_=[0,caml_new_string("src/types.ml"),304,6],
     _a8_=[0,[0]],
     _a9_=[0,caml_new_string("src/types.ml"),313,6],
     _a__=[0,[0]],
     _a$_=[0,[0,[0,[0]]]],
     _ba_=[0,[0]],
     _bb_=[0,[0]],
     _bc_=[0,[0]],
     _bd_=[0,[0]],
     _be_=[0,[0]],
     _bf_=[0,[0]],
     _bg_=[0,[0]],
     _bh_=[0,[0,[0,[0]]]],
     _bi_=[0,[0]],
     _bj_=[0,[0]],
     _bk_=[0,[0,0,0,0,0]],
     _bl_=[0,[0]],
     _bm_=[0,[0]],
     _bo_=[0,[0,0]],
     _bq_=[0,[0,0]],
     _br_=[0,[0]],
     _bs_=[0,[0]],
     _bt_=[0,[0]],
     _bu_=[0,[0]],
     _bJ_=[0,caml_new_string("_")],
     _bI_=[0,caml_new_string("src/var.ml"),32,20],
     _bH_=[0,caml_new_string("src/var.ml"),33,15],
     _bK_=[0,caml_new_string("src/var.ml"),23,987,1009],
     _bD_=[0,caml_new_string("watch")],
     _bE_=[0,caml_new_string("set_at")],
     _bF_=[0,caml_new_string("value_set_during_stabilization")],
     _bG_=[0,caml_new_string("value")],
     _ca_=[0,caml_new_string("_")],
     _b$_=[0,caml_new_string("_")],
     _b__=[0,caml_new_string("src/unordered_array_fold.ml"),28,37],
     _b9_=[0,caml_new_string("src/unordered_array_fold.ml"),29,15],
     _b8_=[0,caml_new_string("src/unordered_array_fold.ml"),48,8],
     _b7_=[0,caml_new_string("src/unordered_array_fold.ml"),37,15],
     _b6_=[0,caml_new_string("src/unordered_array_fold.ml"),45,11],
     _b5_=[0,caml_new_string("src/unordered_array_fold.ml"),46,11],
     _cb_=[0,caml_new_string("src/unordered_array_fold.ml"),22,768,790],
     _bX_=[0,caml_new_string("num_changes_since_last_full_compute")],
     _bY_=[0,caml_new_string("fold_value")],
     _bZ_=[0,caml_new_string("children")],
     _b0_=[0,caml_new_string("full_compute_every_n_changes")],
     _b1_=[0,caml_new_string("f_inverse")],
     _b2_=[0,caml_new_string("f")],
     _b3_=[0,caml_new_string("init")],
     _b4_=[0,caml_new_string("main")],
     _cr_=[0,caml_new_string("_")],
     _cq_=[0,caml_new_string("src/step_function.ml"),23,30],
     _cp_=[0,caml_new_string("src/step_function.ml"),24,15],
     _co_=[0,caml_new_string("src/step_function.ml"),27,8],
     _cs_=[0,caml_new_string("src/step_function.ml"),16,335,357],
     _ck_=[0,caml_new_string("alarm")],
     _cl_=[0,caml_new_string("upcoming_steps")],
     _cm_=[0,caml_new_string("value")],
     _cn_=[0,caml_new_string("main")],
     _cB_=[0,caml_new_string("_")],
     _cA_=[0,caml_new_string("_")],
     _cC_=[0,caml_new_string("src/array_fold.ml"),14,272,294],
     _cx_=[0,caml_new_string("children")],
     _cy_=[0,caml_new_string("f")],
     _cz_=[0,caml_new_string("init")],
     _cL_=[0,caml_new_string("src/at.ml"),22,19],
     _cK_=[0,caml_new_string("src/at.ml"),23,15],
     _cM_=[0,caml_new_string("src/at.ml"),15,250,272],
     _cH_=[0,caml_new_string("alarm")],
     _cI_=[0,caml_new_string("at")],
     _cJ_=[0,caml_new_string("main")],
     _cZ_=[0,caml_new_string("src/at_intervals.ml"),22,29],
     _cY_=[0,caml_new_string("src/at_intervals.ml"),23,15],
     _cX_=[0,caml_new_string("src/at_intervals.ml"),25,40],
     _c0_=[0,caml_new_string("src/at_intervals.ml"),16,282,304],
     _cT_=[0,caml_new_string("alarm")],
     _cU_=[0,caml_new_string("interval")],
     _cV_=[0,caml_new_string("base")],
     _cW_=[0,caml_new_string("main")],
     _do_=[0,caml_new_string("_")],
     _dn_=[0,caml_new_string("_")],
     _dm_=[0,caml_new_string("src/bind.ml"),53,26],
     _dl_=[0,caml_new_string("src/bind.ml"),54,15],
     _dk_=[0,caml_new_string("src/bind.ml"),58,8],
     _dj_=[0,caml_new_string("src/bind.ml"),61,32],
     _di_=[0,caml_new_string("src/bind.ml"),62,15],
     _dg_=[0,caml_new_string("src/bind.ml"),66,27],
     _dh_=[0,caml_new_string("src/bind.ml"),65,23],
     _df_=[0,caml_new_string("src/bind.ml"),69,10],
     _de_=[0,caml_new_string("src/bind.ml"),70,41],
     _dp_=[0,caml_new_string("src/bind.ml"),47,1595,1617],
     _c9_=[0,caml_new_string("all_nodes_created_on_rhs")],
     _c__=[0,caml_new_string("rhs_scope")],
     _c$_=[0,caml_new_string("rhs")],
     _da_=[0,caml_new_string("lhs_change")],
     _db_=[0,caml_new_string("lhs")],
     _dc_=[0,caml_new_string("f")],
     _dd_=[0,caml_new_string("main")],
     _dF_=[0,caml_new_string("src/expert.ml"),147,2],
     _dE_=[0,caml_new_string("src/expert.ml"),116,2],
     _dC_=[0,caml_new_string("src/expert.ml"),60,17],
     _dD_=[0,caml_new_string("src/expert.ml"),52,2],
     _dv_=[0,caml_new_string("will_fire_all_callbacks")],
     _dw_=[0,caml_new_string("num_invalid_children")],
     _dx_=[0,caml_new_string("force_stale")],
     _dy_=[0,caml_new_string("num_children")],
     _dz_=[0,caml_new_string("children")],
     _dA_=[0,caml_new_string("on_observability_change")],
     _dB_=[0,caml_new_string("f")],
     _dt_=[0,caml_new_string("_")],
     _du_=[0,caml_new_string("E")],
     _dq_=[0,caml_new_string("index")],
     _dr_=[0,caml_new_string("on_change")],
     _ds_=[0,caml_new_string("child")],
     _dH_=[0,caml_new_string("src/scope.ml"),36,2],
     _dQ_=[0,caml_new_string("_")],
     _dP_=[0,caml_new_string("src/freeze.ml"),19,8],
     _dO_=[0,caml_new_string("src/freeze.ml"),23,23],
     _dN_=[0,caml_new_string("src/freeze.ml"),24,15],
     _dR_=[0,caml_new_string("src/freeze.ml"),15,272,294],
     _dK_=[0,caml_new_string("only_freeze_when")],
     _dL_=[0,caml_new_string("child")],
     _dM_=[0,caml_new_string("main")],
     _d8_=[0,caml_new_string("_")],
     _d7_=[0,caml_new_string("src/if_then_else.ml"),26,29],
     _d6_=[0,caml_new_string("src/if_then_else.ml"),32,31],
     _d5_=[0,caml_new_string("src/if_then_else.ml"),33,15],
     _d4_=[0,caml_new_string("src/if_then_else.ml"),37,10],
     _d9_=[0,caml_new_string("src/if_then_else.ml"),20,471,493],
     _dY_=[0,caml_new_string("else_")],
     _dZ_=[0,caml_new_string("then_")],
     _d0_=[0,caml_new_string("current_branch")],
     _d1_=[0,caml_new_string("test_change")],
     _d2_=[0,caml_new_string("test")],
     _d3_=[0,caml_new_string("main")],
     _ek_=[0,caml_new_string("_")],
     _ej_=[0,caml_new_string("src/join.ml"),24,26],
     _ei_=[0,caml_new_string("src/join.ml"),25,15],
     _eh_=[0,caml_new_string("src/join.ml"),30,32],
     _eg_=[0,caml_new_string("src/join.ml"),31,15],
     _el_=[0,caml_new_string("src/join.ml"),18,346,368],
     _ec_=[0,caml_new_string("rhs")],
     _ed_=[0,caml_new_string("lhs_change")],
     _ee_=[0,caml_new_string("lhs")],
     _ef_=[0,caml_new_string("main")],
     _ex_=[0,caml_new_string("_")],
     _ew_=[0,caml_new_string("src/snapshot.ml"),20,8],
     _ev_=[0,caml_new_string("src/snapshot.ml"),24,25],
     _eu_=[0,caml_new_string("src/snapshot.ml"),25,15],
     _ey_=[0,caml_new_string("src/snapshot.ml"),16,264,286],
     _eq_=[0,caml_new_string("value_at")],
     _er_=[0,caml_new_string("before")],
     _es_=[0,caml_new_string("at")],
     _et_=[0,caml_new_string("main")],
     _fO_=[0,caml_new_string("_")],
     _fP_=[0,[0,caml_new_string("src/kind.ml"),276,10122,10130]],
     _fM_=[0,caml_new_string("_")],
     _fL_=[0,caml_new_string("_")],
     _fK_=[0,caml_new_string("_")],
     _fJ_=[0,caml_new_string("_")],
     _fI_=[0,caml_new_string("_")],
     _fH_=[0,caml_new_string("_")],
     _fG_=[0,caml_new_string("_")],
     _fF_=[0,caml_new_string("_")],
     _fE_=[0,caml_new_string("_")],
     _fC_=[0,caml_new_string("_")],
     _fB_=[0,caml_new_string("_")],
     _fA_=[0,caml_new_string("_")],
     _fz_=[0,caml_new_string("_")],
     _fy_=[0,caml_new_string("_")],
     _fx_=[0,caml_new_string("_")],
     _fw_=[0,caml_new_string("_")],
     _fv_=[0,caml_new_string("_")],
     _ft_=[0,caml_new_string("_")],
     _fs_=[0,caml_new_string("_")],
     _fr_=[0,caml_new_string("_")],
     _fq_=[0,caml_new_string("_")],
     _fp_=[0,caml_new_string("_")],
     _fo_=[0,caml_new_string("_")],
     _fn_=[0,caml_new_string("_")],
     _fl_=[0,caml_new_string("_")],
     _fk_=[0,caml_new_string("_")],
     _fj_=[0,caml_new_string("_")],
     _fi_=[0,caml_new_string("_")],
     _fh_=[0,caml_new_string("_")],
     _fg_=[0,caml_new_string("_")],
     _fe_=[0,caml_new_string("_")],
     _fd_=[0,caml_new_string("_")],
     _fc_=[0,caml_new_string("_")],
     _fb_=[0,caml_new_string("_")],
     _fa_=[0,caml_new_string("_")],
     _e__=[0,caml_new_string("_")],
     _e9_=[0,caml_new_string("_")],
     _e8_=[0,caml_new_string("_")],
     _e7_=[0,caml_new_string("_")],
     _e5_=[0,caml_new_string("_")],
     _e4_=[0,caml_new_string("_")],
     _e3_=[0,caml_new_string("_")],
     _e1_=[0,caml_new_string("_")],
     _e0_=[0,caml_new_string("_")],
     _eX_=[0,caml_new_string("_")],
     _eT_=[0,caml_new_string("_")],
     _eQ_=[0,caml_new_string("_")],
     _eN_=[0,caml_new_string("_")],
     _eI_=[0,caml_new_string("_")],
     _eG_=[0,caml_new_string("_")],
     _eF_=[0,caml_new_string("_")],
     _eB_=[0,caml_new_string("_")],
     _ez_=[0,caml_new_string("Invalid")],
     _eA_=[0,caml_new_string("Uninitialized")],
     _eC_=[0,caml_new_string("Array_fold")],
     _eD_=[0,caml_new_string("At")],
     _eE_=[0,caml_new_string("At_intervals")],
     _eH_=[0,caml_new_string("Bind_lhs_change")],
     _eJ_=[0,caml_new_string("Bind_main")],
     _eK_=[0,caml_new_string("Const")],
     _eL_=[0,caml_new_string("Expert")],
     _eM_=[0,caml_new_string("Freeze")],
     _eO_=[0,caml_new_string("If_test_change")],
     _eP_=[0,caml_new_string("If_then_else")],
     _eR_=[0,caml_new_string("Join_lhs_change")],
     _eS_=[0,caml_new_string("Join_main")],
     _eU_=[0,caml_new_string("Map")],
     _eV_=[0,caml_new_string("Snapshot")],
     _eW_=[0,caml_new_string("Step_function")],
     _eY_=[0,caml_new_string("Unordered_array_fold")],
     _eZ_=[0,caml_new_string("Var")],
     _e2_=[0,caml_new_string("Map2")],
     _e6_=[0,caml_new_string("Map3")],
     _e$_=[0,caml_new_string("Map4")],
     _ff_=[0,caml_new_string("Map5")],
     _fm_=[0,caml_new_string("Map6")],
     _fu_=[0,caml_new_string("Map7")],
     _fD_=[0,caml_new_string("Map8")],
     _fN_=[0,caml_new_string("Map9")],
     _hD_=
      [0,
       [11,
        caml_new_string("  "),
        [2,
         0,
         [11,
          caml_new_string(" -> "),
          [2,0,[11,caml_new_string(" [style=dashed]\n"),0]]]]],
       caml_new_string("  %s -> %s [style=dashed]\n")],
     _hC_=
      [0,
       [11,
        caml_new_string("  "),
        [2,0,[11,caml_new_string(" -> "),[2,0,[12,10,0]]]]],
       caml_new_string("  %s -> %s\n")],
     _hB_=
      [0,
       [11,
        caml_new_string("  "),
        [2,
         0,
         [11,
          caml_new_string(' [label="'),
          [2,
           0,
           [12,
            32,
            [2,
             0,
             [11,
              caml_new_string("\\nheight = "),
              [4,0,0,0,[11,caml_new_string('"]\n'),0]]]]]]]]],
       caml_new_string('  %s [label="%s %s\\nheight = %d"]\n')],
     _hz_=
      [0,
       [11,caml_new_string("digraph G {\n"),0],
       caml_new_string("digraph G {\n")],
     _hA_=
      [0,
       [11,caml_new_string("  rankdir = BT\n"),0],
       caml_new_string("  rankdir = BT\n")],
     _hE_=[0,[11,caml_new_string("}\n"),[10,0]],caml_new_string("}\n%!")],
     _hy_=[0,caml_new_string("_")],
     _hx_=[0,caml_new_string("src/node.ml"),415,12],
     _hv_=[0,caml_new_string("src/node.ml"),434,32],
     _hw_=[0,caml_new_string("src/node.ml"),427,14],
     _ht_=[0,caml_new_string("_")],
     _hu_=[0,[0,caml_new_string("src/node.ml"),393,17585,17592]],
     _hr_=[0,caml_new_string("_")],
     _hp_=[0,caml_new_string("src/node.ml"),285,47],
     _ho_=[0,caml_new_string("src/node.ml"),298,13],
     _hn_=[0,caml_new_string("src/node.ml"),307,8],
     _hm_=[0,caml_new_string("src/node.ml"),308,8],
     _hl_=[0,caml_new_string("src/node.ml"),320,13],
     _hj_=[0,caml_new_string("src/node.ml"),323,13],
     _hk_=[0,caml_new_string("src/node.ml"),324,13],
     _hi_=[0,caml_new_string("src/node.ml"),326,8],
     _hh_=[0,caml_new_string("src/node.ml"),327,8],
     _hg_=[0,caml_new_string("src/node.ml"),329,45],
     _hf_=[0,caml_new_string("src/node.ml"),332,10],
     _he_=[0,caml_new_string("src/node.ml"),333,10],
     _hd_=[0,caml_new_string("src/node.ml"),336,45],
     _hc_=[0,caml_new_string("src/node.ml"),339,10],
     _hb_=[0,caml_new_string("src/node.ml"),340,10],
     _ha_=[0,caml_new_string("src/node.ml"),344,13],
     _g$_=[0,caml_new_string("src/node.ml"),347,13],
     _g__=[0,caml_new_string("src/node.ml"),350,10],
     _g9_=[0,caml_new_string("src/node.ml"),351,10],
     _g8_=[0,caml_new_string("src/node.ml"),356,10],
     _g7_=[0,caml_new_string("src/node.ml"),359,34],
     _g6_=[0,caml_new_string("src/node.ml"),373,12],
     _g5_=[0,caml_new_string("src/node.ml"),380,10],
     _g4_=[0,caml_new_string("src/node.ml"),277,6],
     _g3_=[0,caml_new_string("src/node.ml"),278,6],
     _g2_=[0,caml_new_string("src/node.ml"),279,6],
     _g0_=[0,caml_new_string("src/node.ml"),272,8],
     _gZ_=[0,caml_new_string("src/node.ml"),273,8],
     _hq_=[0,caml_new_string("src/node.ml"),270,6],
     _g1_=[0,caml_new_string("src/node.ml"),274,6],
     _hs_=[0,caml_new_string("src/node.ml"),267,11612,11634],
     _gY_=[0,caml_new_string("src/node.ml"),220,21],
     _gX_=[0,caml_new_string("src/node.ml"),128,21],
     _gw_=[0,caml_new_string("creation_backtrace")],
     _gx_=[0,caml_new_string("user_info")],
     _gy_=[0,caml_new_string("force_necessary")],
     _gz_=[0,caml_new_string("my_child_index_in_parent_at_index")],
     _gA_=[0,caml_new_string("my_parent_index_in_child_at_index")],
     _gB_=[0,caml_new_string("on_update_handlers")],
     _gC_=[0,caml_new_string("is_in_handle_after_stabilization")],
     _gD_=[0,caml_new_string("observers")],
     _gE_=[0,caml_new_string("old_value_opt")],
     _gF_=[0,caml_new_string("next_in_adjust_heights_heap")],
     _gG_=[0,caml_new_string("height_in_adjust_heights_heap")],
     _gH_=[0,caml_new_string("next_in_recompute_heap")],
     _gI_=[0,caml_new_string("prev_in_recompute_heap")],
     _gJ_=[0,caml_new_string("height_in_recompute_heap")],
     _gK_=[0,caml_new_string("height")],
     _gL_=[0,caml_new_string("next_node_in_same_scope")],
     _gM_=[0,caml_new_string("created_in")],
     _gN_=[0,caml_new_string("parent0")],
     _gO_=[0,caml_new_string("parent1_and_beyond")],
     _gP_=[0,caml_new_string("num_parents")],
     _gQ_=[0,caml_new_string("num_on_update_handlers")],
     _gR_=[0,caml_new_string("changed_at")],
     _gS_=[0,caml_new_string("cutoff")],
     _gT_=[0,caml_new_string("kind")],
     _gU_=[0,caml_new_string("value_opt")],
     _gV_=[0,caml_new_string("recomputed_at")],
     _gW_=[0,caml_new_string("id")],
     _hS_=[0,caml_new_string("src/recompute_heap.ml"),41,8],
     _hR_=[0,caml_new_string("src/recompute_heap.ml"),42,8],
     _hQ_=[0,caml_new_string("src/recompute_heap.ml"),44,10],
     _hP_=[0,caml_new_string("src/recompute_heap.ml"),49,12],
     _hO_=[0,caml_new_string("src/recompute_heap.ml"),50,12],
     _hT_=[0,caml_new_string("src/recompute_heap.ml"),32,838,860],
     _hL_=[0,caml_new_string("nodes_by_height")],
     _hM_=[0,caml_new_string("height_lower_bound")],
     _hN_=[0,caml_new_string("length")],
     _im_=[0,caml_new_string("_")],
     _ik_=[0,caml_new_string("_")],
     _il_=[0,caml_new_string("child")],
     _in_=[0,caml_new_string("parent")],
     _io_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),136,4840,4847]],
     _ih_=[0,caml_new_string("Height")],
     _ii_=[0,caml_new_string("Max")],
     _ij_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),125,4418,4427]],
     _if_=[0,caml_new_string("max_height_seen")],
     _ig_=[0,[0,caml_new_string("src/adjust_heights_heap.ml"),82,2625,2632]],
     _id_=[0,caml_new_string("src/adjust_heights_heap.ml"),59,8],
     _ic_=[0,caml_new_string("src/adjust_heights_heap.ml"),61,8],
     _ib_=[0,caml_new_string("src/adjust_heights_heap.ml"),62,8],
     _ia_=[0,caml_new_string("src/adjust_heights_heap.ml"),64,10],
     _h$_=[0,caml_new_string("src/adjust_heights_heap.ml"),67,8],
     _h__=[0,caml_new_string("src/adjust_heights_heap.ml"),68,8],
     _ie_=[0,caml_new_string("src/adjust_heights_heap.ml"),55,1579,1601],
     _h6_=[0,caml_new_string("nodes_by_height")],
     _h7_=[0,caml_new_string("max_height_seen")],
     _h8_=[0,caml_new_string("height_lower_bound")],
     _h9_=[0,caml_new_string("length")],
     _hW_=[0,caml_new_string("src/adjust_heights_heap.ml"),24,10],
     _hV_=[0,caml_new_string("src/adjust_heights_heap.ml"),25,10],
     _hU_=[0,caml_new_string("src/adjust_heights_heap.ml"),27,15],
     _hX_=[0,caml_new_string("src/adjust_heights_heap.ml"),20,520,544],
     _iz_=[0,caml_new_string("src/alarm_value.ml"),29,824,846],
     _ix_=[0,caml_new_string("next_fired")],
     _iy_=[0,caml_new_string("action")],
     _it_=[0,caml_new_string("_")],
     _ir_=[0,caml_new_string("_")],
     _ip_=[0,caml_new_string("At")],
     _iq_=[0,caml_new_string("At_intervals")],
     _is_=[0,caml_new_string("Snapshot")],
     _iu_=[0,caml_new_string("Step_function")],
     _jh_=[0,caml_new_string("_")],
     _je_=[0,caml_new_string("_")],
     _jf_=[0,[0,caml_new_string("src/internal_observer.ml"),121,4247,4276]],
     _jg_=[0,caml_new_string("src/internal_observer.ml"),125,31],
     _i__=[0,caml_new_string("_")],
     _ja_=[0,caml_new_string("_")],
     _jc_=[0,caml_new_string("_")],
     _jd_=[0,[0,caml_new_string("src/internal_observer.ml"),111,3909,3913]],
     _jb_=[0,[0,caml_new_string("src/internal_observer.ml"),109,3799,3803]],
     _i$_=[0,[0,caml_new_string("src/internal_observer.ml"),115,4075,4084]],
     _i8_=[0,caml_new_string("_")],
     _i7_=[0,caml_new_string("src/internal_observer.ml"),66,22],
     _i6_=[0,caml_new_string("src/internal_observer.ml"),70,32],
     _i5_=[0,caml_new_string("src/internal_observer.ml"),73,13],
     _i4_=[0,caml_new_string("src/internal_observer.ml"),79,32],
     _i3_=[0,caml_new_string("src/internal_observer.ml"),82,13],
     _i2_=[0,caml_new_string("src/internal_observer.ml"),88,32],
     _i1_=[0,caml_new_string("src/internal_observer.ml"),91,13],
     _i0_=[0,caml_new_string("src/internal_observer.ml"),97,32],
     _iZ_=[0,caml_new_string("src/internal_observer.ml"),100,13],
     _i9_=[0,caml_new_string("src/internal_observer.ml"),58,1678,1700],
     _iS_=[0,caml_new_string("next_in_observing")],
     _iT_=[0,caml_new_string("prev_in_observing")],
     _iU_=[0,caml_new_string("next_in_all")],
     _iV_=[0,caml_new_string("prev_in_all")],
     _iW_=[0,caml_new_string("on_update_handlers")],
     _iX_=[0,caml_new_string("observing")],
     _iY_=[0,caml_new_string("state")],
     _iC_=[0,caml_new_string("Created")],
     _iD_=[0,caml_new_string("In_use")],
     _iE_=[0,caml_new_string("Disallowed")],
     _iF_=[0,caml_new_string("Unlinked")],
     _iB_=[0,caml_new_string("_")],
     _jj_=[0,caml_new_string("backtrace")],
     _jk_=[0,caml_new_string("exn")],
     _ln_=[0,caml_new_string("_")],
     _lo_=[0,[0,caml_new_string("src/state.ml"),554,26505,26512]],
     _lq_=[0,caml_new_string("src/state.ml"),731,4],
     _lr_=[0,caml_new_string("src/state.ml"),754,21],
     _lt_=[0,caml_new_string("src/state.ml"),881,31],
     _lu_=[0,caml_new_string("src/state.ml"),883,22],
     _lv_=[0,caml_new_string("src/state.ml"),884,32],
     _ls_=[0,caml_new_string("src/state.ml"),890,17],
     _lP_=[0,caml_new_string("src/state.ml"),1743,6],
     _lN_=[0,caml_new_string("_")],
     _lL_=[0,caml_new_string("_")],
     _lM_=[0,caml_new_string("current.kind")],
     _lO_=[0,caml_new_string("node.kind")],
     _lJ_=[0,caml_new_string("_")],
     _lH_=[0,caml_new_string("_")],
     _lI_=[0,caml_new_string("current.kind")],
     _lK_=[0,caml_new_string("node.kind")],
     _lG_=[0,caml_new_string("_")],
     _lF_=[5,1],
     _lE_=[0,[0,caml_new_string("src/state.ml"),1537,67139,67146]],
     _lD_=[0,[0,caml_new_string("src/state.ml"),1498,65421,65428]],
     _lC_=[0,1],
     _lB_=[0,[0,caml_new_string("src/state.ml"),1387,61414,61421]],
     _lA_=[0,[0,caml_new_string("src/state.ml"),1119,51385,51389]],
     _lx_=[0,caml_new_string("_")],
     _ly_=[0,[0,caml_new_string("src/state.ml"),1082,50032,50036]],
     _lz_=[0,[0,caml_new_string("src/state.ml"),1079,49895,49899]],
     _lw_=[0,caml_new_string("src/state.ml"),1044,29],
     _lp_=[0,[0,caml_new_string("src/state.ml"),621,29443,29450]],
     _lg_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" during stabilization"),0]]],
       caml_new_string("cannot %s during stabilization")],
     _lh_=[0,[0,caml_new_string("src/state.ml"),326,15118,15122]],
     _li_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" during on-update handlers"),0]]],
       caml_new_string("cannot %s during on-update handlers")],
     _lj_=[0,[0,caml_new_string("src/state.ml"),317,14712,14718]],
     _lk_=
      [0,
       [11,
        caml_new_string("cannot "),
        [2,0,[11,caml_new_string(" -- stabilize previously raised"),0]]],
       caml_new_string("cannot %s -- stabilize previously raised")],
     _ll_=[0,[0,caml_new_string("src/state.ml"),322,14918,14922]],
     _ld_=[0,caml_new_string("src/state.ml"),250,10],
     _lc_=[0,caml_new_string("src/state.ml"),253,10],
     _lb_=[0,caml_new_string("src/state.ml"),256,10],
     _la_=[0,caml_new_string("src/state.ml"),258,10],
     _k$_=[0,caml_new_string("src/state.ml"),272,38],
     _k__=[0,caml_new_string("src/state.ml"),279,46],
     _k7_=[0,caml_new_string("src/state.ml"),288,17],
     _k8_=[0,caml_new_string("src/state.ml"),284,12],
     _k9_=[0,caml_new_string("src/state.ml"),282,45],
     _k6_=[0,caml_new_string("src/state.ml"),293,10],
     _k5_=[0,caml_new_string("src/state.ml"),296,10],
     _k4_=[0,caml_new_string("src/state.ml"),240,39],
     _k3_=[0,caml_new_string("src/state.ml"),241,8],
     _k1_=[0,caml_new_string("_")],
     _k2_=[0,[0,caml_new_string("src/state.ml"),234,10472,10482]],
     _le_=[0,caml_new_string("src/state.ml"),243,6],
     _lf_=[0,caml_new_string("src/state.ml"),228,10166,10190],
     _k0_=[0,[0,caml_new_string("src/state.ml"),220,9900,9904]],
     _kY_=[0,caml_new_string("percentage_of_nodes_by_num_parents")],
     _kZ_=[0,caml_new_string("max_num_parents")],
     _kv_=[0,caml_new_string("num_var_sets")],
     _kw_=
      [0,caml_new_string("num_nodes_recomputed_directly_because_min_height")],
     _kx_=
      [0,caml_new_string("num_nodes_recomputed_directly_because_one_child")],
     _ky_=[0,caml_new_string("num_nodes_recomputed")],
     _kz_=[0,caml_new_string("num_nodes_invalidated")],
     _kA_=[0,caml_new_string("num_nodes_created")],
     _kB_=[0,caml_new_string("num_nodes_changed")],
     _kC_=[0,caml_new_string("num_nodes_became_unnecessary")],
     _kD_=[0,caml_new_string("num_nodes_became_necessary")],
     _kE_=[0,caml_new_string("only_in_debug")],
     _kF_=[0,caml_new_string("fired_alarm_values")],
     _kG_=[0,caml_new_string("handle_fired")],
     _kH_=[0,caml_new_string("now")],
     _kI_=[0,caml_new_string("timing_wheel")],
     _kJ_=[0,caml_new_string("run_on_update_handlers")],
     _kK_=[0,caml_new_string("handle_after_stabilization")],
     _kL_=[0,caml_new_string("set_during_stabilization")],
     _kM_=[0,caml_new_string("disallowed_observers")],
     _kN_=[0,caml_new_string("new_observers")],
     _kO_=[0,caml_new_string("finalized_observers")],
     _kP_=[0,caml_new_string("all_observers")],
     _kQ_=[0,caml_new_string("num_active_observers")],
     _kR_=[0,caml_new_string("propagate_invalidity")],
     _kS_=[0,caml_new_string("adjust_heights_heap")],
     _kT_=[0,caml_new_string("recompute_heap")],
     _kU_=[0,caml_new_string("current_scope")],
     _kV_=[0,caml_new_string("stabilization_num")],
     _kW_=[0,caml_new_string("bind_lhs_change_should_invalidate_rhs")],
     _kX_=[0,caml_new_string("status")],
     _jz_=[0,caml_new_string("src/state.ml"),42,1110,1134],
     _jx_=[0,caml_new_string("expert_nodes_created_by_current_node")],
     _jy_=[0,caml_new_string("currently_running_node")],
     _js_=[0,caml_new_string("src/state.ml"),27,678,702],
     _jq_=[0,caml_new_string("_")],
     _jp_=[0,caml_new_string("_")],
     _jr_=[0,caml_new_string("T")],
     _jl_=[0,caml_new_string("Stabilizing")],
     _jm_=[0,caml_new_string("Running_on_update_handlers")],
     _jn_=[0,caml_new_string("Not_stabilizing")],
     _jo_=[0,caml_new_string("Stabilize_previously_raised")],
     _lY_=[0,caml_new_string("balanced_reducer")],
     _lU_=[0,caml_new_string("index")],
     _lV_=[0,caml_new_string("length")],
     _lW_=[0,caml_new_string("index")],
     _lT_=[0,caml_new_string("_")],
     _lS_=[0,caml_new_string("num_leaves")],
     _lQ_=[0,caml_new_string("src/balanced_reducer.ml"),79,9],
     _lR_=[0,caml_new_string("src/balanced_reducer.ml"),80,9],
     _l2_=[0,caml_new_string("_")],
     _l3_=[0,[0,caml_new_string("src/incremental.ml"),154,4493,4505]],
     _lZ_=[0,caml_new_string("Invalidated")],
     _l0_=[0,caml_new_string("Initialized")],
     _l1_=[0,caml_new_string("Changed")];
    function sexp_of_t(param){return 0 === param?_a_:_b_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Before_or_after=[0,sexp_of_t];
    caml_register_global
     (1203,
      Incremental_kernel_Before_or_after,
      "Incremental_kernel__Before_or_after");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$3,cst$0);
    var
     _c_=include[118],
     _d_=_c_[1],
     _e_=_c_[2],
     _f_=_c_[3],
     _g_=_c_[4],
     _h_=_c_[5],
     _i_=_c_[6],
     min=_c_[9],
     max=_c_[10],
     concat=Core_kernel_String[31],
     _j_=_c_[7],
     _k_=_c_[8],
     debug=0,
     verbose=0;
    function tag(v0,v1,sexp_of_a)
     {var v0$0=caml_call1(Core_kernel[557],v0),v1$0=caml_call1(sexp_of_a,v1);
      return [1,[0,v0$0,[0,v1$0,0]]]}
    var
     sexp_of_time_ns=
      [0,
       function(t)
        {var
          _Cm_=caml_call1(Core_kernel_Time_ns[37],t),
          _Cn_=caml_call2(Core_kernel[366],_l_,_Cm_);
         return caml_call1(Core_kernel[557],_Cn_)}],
     sexp_of_time_ns_span=
      [0,
       function(t)
        {var
          _Ck_=caml_call1(Core_kernel_Time_ns[1][90],t),
          _Cl_=caml_call2(Core_kernel[366],_m_,_Ck_);
         return caml_call1(Core_kernel[557],_Cl_)}],
     Stable=Core_kernel_Time_ns[42],
     Utc=Core_kernel_Time_ns[41],
     random=Core_kernel_Time_ns[40],
     next_multiple=Core_kernel_Time_ns[39],
     of_int_ns_since_epoch=Core_kernel_Time_ns[38],
     to_int_ns_since_epoch=Core_kernel_Time_ns[37],
     of_int63_ns_since_epoch=Core_kernel_Time_ns[36],
     to_int63_ns_since_epoch=Core_kernel_Time_ns[35],
     of_span_since_epoch=Core_kernel_Time_ns[34],
     to_span_since_epoch=Core_kernel_Time_ns[33],
     abs_diff=Core_kernel_Time_ns[32],
     diff=Core_kernel_Time_ns[31],
     sub=Core_kernel_Time_ns[30],
     add=Core_kernel_Time_ns[29],
     now=Core_kernel_Time_ns[28],
     max_value=Core_kernel_Time_ns[27],
     min_value=Core_kernel_Time_ns[26],
     epoch=Core_kernel_Time_ns[25],
     Alternate_sexp=Core_kernel_Time_ns[24],
     max$0=Core_kernel_Time_ns[23],
     min$0=Core_kernel_Time_ns[22],
     compare=Core_kernel_Time_ns[21],
     equal=Core_kernel_Time_ns[20],
     bin_shape_t=Core_kernel_Time_ns[13],
     bin_writer_t=Core_kernel_Time_ns[12],
     bin_write_t=Core_kernel_Time_ns[11],
     bin_size_t=Core_kernel_Time_ns[10],
     bin_reader_t=Core_kernel_Time_ns[9],
     bin_read_t=Core_kernel_Time_ns[8],
     bin_read_t$0=Core_kernel_Time_ns[7],
     bin_t=Core_kernel_Time_ns[6],
     typename_of_t=Core_kernel_Time_ns[5],
     typerep_of_t=Core_kernel_Time_ns[4],
     hash=Core_kernel_Time_ns[3],
     hash_fold_t=Core_kernel_Time_ns[2],
     _n_=Core_kernel_Time_ns[19],
     _o_=Core_kernel_Time_ns[18],
     _p_=Core_kernel_Time_ns[17],
     _q_=Core_kernel_Time_ns[16],
     _r_=Core_kernel_Time_ns[15],
     _s_=Core_kernel_Time_ns[14];
    function sexp_of_t$0(t){return caml_call1(sexp_of_time_ns[1],t)}
    var
     include$0=Core_kernel_Time_ns[1],
     hash_fold_t$0=include$0[1],
     hash$0=include$0[2],
     typerep_of_t$0=include$0[3],
     typename_of_t$0=include$0[4],
     bin_t$0=include$0[5],
     bin_read_t$1=include$0[6],
     bin_read_t$2=include$0[7],
     bin_reader_t$0=include$0[8],
     bin_size_t$0=include$0[9],
     bin_write_t$0=include$0[10],
     bin_writer_t$0=include$0[11],
     bin_shape_t$0=include$0[12],
     equal$0=include$0[19],
     compare$0=include$0[20],
     min$1=include$0[21],
     max$1=include$0[22],
     validate_lbound=include$0[23],
     validate_ubound=include$0[24],
     validate_bound=include$0[25],
     validate_positive=include$0[26],
     validate_non_negative=include$0[27],
     validate_negative=include$0[28],
     validate_non_positive=include$0[29],
     is_positive=include$0[30],
     is_non_negative=include$0[31],
     is_negative=include$0[32],
     is_non_positive=include$0[33],
     sign=include$0[34],
     nanosecond=include$0[35],
     microsecond=include$0[36],
     millisecond=include$0[37],
     second=include$0[38],
     minute=include$0[39],
     hour=include$0[40],
     day=include$0[41],
     of_ns=include$0[42],
     of_us=include$0[43],
     of_ms=include$0[44],
     of_sec=include$0[45],
     of_min=include$0[46],
     of_hr=include$0[47],
     of_day=include$0[48],
     to_ns=include$0[49],
     to_us=include$0[50],
     to_ms=include$0[51],
     to_sec=include$0[52],
     to_min=include$0[53],
     to_hr=include$0[54],
     to_day=include$0[55],
     of_sec_with_microsecond_precision=include$0[56],
     of_int_us=include$0[57],
     of_int_ms=include$0[58],
     of_int_sec=include$0[59],
     to_int_us=include$0[60],
     to_int_ms=include$0[61],
     to_int_sec=include$0[62],
     zero=include$0[63],
     min_value$0=include$0[64],
     max_value$0=include$0[65],
     abs=include$0[68],
     neg=include$0[69],
     scale=include$0[70],
     scale_int=include$0[71],
     scale_int63=include$0[72],
     div=include$0[73],
     create=include$0[76],
     Parts=include$0[77],
     to_parts=include$0[78],
     to_unit_of_time=include$0[79],
     of_unit_of_time=include$0[80],
     robustly_compare=include$0[87],
     to_int63_ns=include$0[88],
     of_int63_ns=include$0[89],
     to_int_ns=include$0[90],
     of_int_ns=include$0[91],
     to_proportional_float=include$0[92],
     since_unix_epoch=include$0[93],
     random$0=include$0[94],
     Alternate_sexp$0=include$0[95],
     _t_=include$0[13],
     _u_=include$0[14],
     _v_=include$0[15],
     _w_=include$0[16],
     _x_=include$0[17],
     _y_=include$0[18],
     _z_=include$0[66],
     _A_=include$0[67],
     _B_=include$0[74],
     _C_=include$0[75],
     _D_=include$0[81],
     _E_=include$0[82],
     _F_=include$0[83],
     _G_=include$0[84],
     _H_=include$0[85],
     _I_=include$0[86];
    function sexp_of_t$1(t){return caml_call1(sexp_of_time_ns_span[1],t)}
    var
     Span=
      [0,
       hash_fold_t$0,
       hash$0,
       typerep_of_t$0,
       typename_of_t$0,
       bin_t$0,
       bin_read_t$1,
       bin_read_t$2,
       bin_reader_t$0,
       bin_size_t$0,
       bin_write_t$0,
       bin_writer_t$0,
       bin_shape_t$0,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       equal$0,
       compare$0,
       min$1,
       max$1,
       validate_lbound,
       validate_ubound,
       validate_bound,
       validate_positive,
       validate_non_negative,
       validate_negative,
       validate_non_positive,
       is_positive,
       is_non_negative,
       is_negative,
       is_non_positive,
       sign,
       nanosecond,
       microsecond,
       millisecond,
       second,
       minute,
       hour,
       day,
       of_ns,
       of_us,
       of_ms,
       of_sec,
       of_min,
       of_hr,
       of_day,
       to_ns,
       to_us,
       to_ms,
       to_sec,
       to_min,
       to_hr,
       to_day,
       of_sec_with_microsecond_precision,
       of_int_us,
       of_int_ms,
       of_int_sec,
       to_int_us,
       to_int_ms,
       to_int_sec,
       zero,
       min_value$0,
       max_value$0,
       _z_,
       _A_,
       abs,
       neg,
       scale,
       scale_int,
       scale_int63,
       div,
       _B_,
       _C_,
       create,
       Parts,
       to_parts,
       to_unit_of_time,
       of_unit_of_time,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       robustly_compare,
       to_int63_ns,
       of_int63_ns,
       to_int_ns,
       of_int_ns,
       to_proportional_float,
       since_unix_epoch,
       random$0,
       Alternate_sexp$0,
       sexp_of_t$1],
     Time_ns=
      [0,
       hash_fold_t,
       hash,
       typerep_of_t,
       typename_of_t,
       bin_t,
       bin_read_t$0,
       bin_read_t,
       bin_reader_t,
       bin_size_t,
       bin_write_t,
       bin_writer_t,
       bin_shape_t,
       _s_,
       _r_,
       _q_,
       _p_,
       _o_,
       _n_,
       equal,
       compare,
       min$0,
       max$0,
       Alternate_sexp,
       epoch,
       min_value,
       max_value,
       now,
       add,
       sub,
       diff,
       abs_diff,
       to_span_since_epoch,
       of_span_since_epoch,
       to_int63_ns_since_epoch,
       of_int63_ns_since_epoch,
       to_int_ns_since_epoch,
       of_int_ns_since_epoch,
       next_multiple,
       random,
       Utc,
       Stable,
       sexp_of_t$0,
       Span];
    Core_kernel_Debug[9][1] = 0;
    var
     bin_t$1=Core_kernel_Array[1],
     bin_read_t$3=Core_kernel_Array[2],
     bin_read_t$4=Core_kernel_Array[3],
     bin_reader_t$1=Core_kernel_Array[4],
     bin_size_t$1=Core_kernel_Array[5],
     bin_write_t$1=Core_kernel_Array[6],
     bin_writer_t$1=Core_kernel_Array[7],
     bin_shape_t$1=Core_kernel_Array[8],
     typerep_of_t$1=Core_kernel_Array[9],
     typename_of_t$1=Core_kernel_Array[10],
     compare$1=Core_kernel_Array[11],
     t_of_sexp=Core_kernel_Array[12],
     sexp_of_t$2=Core_kernel_Array[13],
     binary_search=Core_kernel_Array[14],
     binary_search_segmented=Core_kernel_Array[15],
     mem=Core_kernel_Array[16],
     length=Core_kernel_Array[17],
     is_empty=Core_kernel_Array[18],
     iter=Core_kernel_Array[19],
     fold=Core_kernel_Array[20],
     fold_result=Core_kernel_Array[21],
     fold_until=Core_kernel_Array[22],
     exists=Core_kernel_Array[23],
     for_all=Core_kernel_Array[24],
     count=Core_kernel_Array[25],
     sum=Core_kernel_Array[26],
     find=Core_kernel_Array[27],
     find_map=Core_kernel_Array[28],
     to_list=Core_kernel_Array[29],
     to_array=Core_kernel_Array[30],
     min_elt=Core_kernel_Array[31],
     max_elt=Core_kernel_Array[32],
     invariant=Core_kernel_Array[33],
     max_length=Core_kernel_Array[34],
     create$0=Core_kernel_Array[35],
     init=Core_kernel_Array[36],
     make_matrix=Core_kernel_Array[37],
     append=Core_kernel_Array[38],
     concat$0=Core_kernel_Array[39],
     copy=Core_kernel_Array[40],
     fill=Core_kernel_Array[41],
     blit=Core_kernel_Array[42],
     blito=Core_kernel_Array[43],
     unsafe_blit=Core_kernel_Array[44],
     sub$0=Core_kernel_Array[45],
     subo=Core_kernel_Array[46],
     of_list=Core_kernel_Array[47],
     map=Core_kernel_Array[48],
     folding_map=Core_kernel_Array[49],
     folding_mapi=Core_kernel_Array[50],
     fold_map=Core_kernel_Array[51],
     fold_mapi=Core_kernel_Array[52],
     iteri=Core_kernel_Array[53],
     mapi=Core_kernel_Array[54],
     foldi=Core_kernel_Array[55],
     fold_right=Core_kernel_Array[56],
     sort=Core_kernel_Array[57],
     stable_sort=Core_kernel_Array[58],
     is_sorted=Core_kernel_Array[59],
     is_sorted_strictly=Core_kernel_Array[60],
     concat_map=Core_kernel_Array[61],
     concat_mapi=Core_kernel_Array[62],
     partition_tf=Core_kernel_Array[63],
     partitioni_tf=Core_kernel_Array[64],
     cartesian_product=Core_kernel_Array[65],
     transpose=Core_kernel_Array[66],
     transpose_exn=Core_kernel_Array[67],
     filter_opt=Core_kernel_Array[68],
     filter_map=Core_kernel_Array[69],
     filter_mapi=Core_kernel_Array[70],
     for_alli=Core_kernel_Array[71],
     existsi=Core_kernel_Array[72],
     counti=Core_kernel_Array[73],
     iter2_exn=Core_kernel_Array[74],
     map2_exn=Core_kernel_Array[75],
     fold2_exn=Core_kernel_Array[76],
     for_all2_exn=Core_kernel_Array[77],
     exists2_exn=Core_kernel_Array[78],
     filter=Core_kernel_Array[79],
     filteri=Core_kernel_Array[80],
     swap=Core_kernel_Array[81],
     rev_inplace=Core_kernel_Array[82],
     of_list_rev=Core_kernel_Array[83],
     of_list_map=Core_kernel_Array[84],
     of_list_rev_map=Core_kernel_Array[85],
     replace=Core_kernel_Array[86],
     replace_all=Core_kernel_Array[87],
     map_inplace=Core_kernel_Array[88],
     find_exn=Core_kernel_Array[89],
     find_map_exn=Core_kernel_Array[90],
     findi=Core_kernel_Array[91],
     findi_exn=Core_kernel_Array[92],
     find_mapi=Core_kernel_Array[93],
     find_mapi_exn=Core_kernel_Array[94],
     find_consecutive_duplicate=Core_kernel_Array[95],
     reduce=Core_kernel_Array[96],
     reduce_exn=Core_kernel_Array[97],
     permute=Core_kernel_Array[98],
     random_element=Core_kernel_Array[99],
     random_element_exn=Core_kernel_Array[100],
     zip=Core_kernel_Array[101],
     zip_exn=Core_kernel_Array[102],
     unzip=Core_kernel_Array[103],
     sorted_copy=Core_kernel_Array[104],
     last=Core_kernel_Array[105],
     empty=Core_kernel_Array[106],
     equal$1=Core_kernel_Array[107],
     unsafe_truncate=Core_kernel_Array[108],
     to_sequence=Core_kernel_Array[109],
     to_sequence_mutable=Core_kernel_Array[110],
     Private=Core_kernel_Array[111],
     Int=Core_kernel_Array[112],
     Float=Core_kernel_Array[113],
     normalize=Core_kernel_Array[114],
     slice=Core_kernel_Array[115],
     nget=Core_kernel_Array[116],
     nset=Core_kernel_Array[117],
     Permissioned=Core_kernel_Array[118];
    function realloc(t,len,a)
     {var new_t=caml_call2(create$0,len,a),_Cj_=caml_call1(length,t);
      caml_call5(Core_kernel_Array[42],t,0,new_t,0,_Cj_);
      return new_t}
    var
     Array=
      [0,
       bin_t$1,
       bin_read_t$3,
       bin_read_t$4,
       bin_reader_t$1,
       bin_size_t$1,
       bin_write_t$1,
       bin_writer_t$1,
       bin_shape_t$1,
       typerep_of_t$1,
       typename_of_t$1,
       compare$1,
       t_of_sexp,
       sexp_of_t$2,
       binary_search,
       binary_search_segmented,
       mem,
       length,
       is_empty,
       iter,
       fold,
       fold_result,
       fold_until,
       exists,
       for_all,
       count,
       sum,
       find,
       find_map,
       to_list,
       to_array,
       min_elt,
       max_elt,
       invariant,
       max_length,
       create$0,
       init,
       make_matrix,
       append,
       concat$0,
       copy,
       fill,
       blit,
       blito,
       unsafe_blit,
       sub$0,
       subo,
       of_list,
       map,
       folding_map,
       folding_mapi,
       fold_map,
       fold_mapi,
       iteri,
       mapi,
       foldi,
       fold_right,
       sort,
       stable_sort,
       is_sorted,
       is_sorted_strictly,
       concat_map,
       concat_mapi,
       partition_tf,
       partitioni_tf,
       cartesian_product,
       transpose,
       transpose_exn,
       filter_opt,
       filter_map,
       filter_mapi,
       for_alli,
       existsi,
       counti,
       iter2_exn,
       map2_exn,
       fold2_exn,
       for_all2_exn,
       exists2_exn,
       filter,
       filteri,
       swap,
       rev_inplace,
       of_list_rev,
       of_list_map,
       of_list_rev_map,
       replace,
       replace_all,
       map_inplace,
       find_exn,
       find_map_exn,
       findi,
       findi_exn,
       find_mapi,
       find_mapi_exn,
       find_consecutive_duplicate,
       reduce,
       reduce_exn,
       permute,
       random_element,
       random_element_exn,
       zip,
       zip_exn,
       unzip,
       sorted_copy,
       last,
       empty,
       equal$1,
       unsafe_truncate,
       to_sequence,
       to_sequence_mutable,
       Private,
       Int,
       Float,
       normalize,
       slice,
       nget,
       nset,
       Permissioned,
       realloc];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Import=
      [0,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       min,
       max,
       debug,
       verbose,
       concat,
       tag,
       sexp_of_time_ns,
       sexp_of_time_ns_span,
       Time_ns,
       Array];
    caml_register_global
     (1210,Incremental_kernel_Import,"Incremental_kernel__Import");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_cutoff_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$6,cst$1);
    function sexp_of_t$3(of_a,param)
     {if(typeof param === "number")
       switch(param){case 0:return _J_;case 1:return _K_;default:return _L_}
      else
       {if(0 === param[0])
         {var
           _Cf_=function(_Ci_){return 0},
           v0=caml_call1(Sexplib0_Sexp_conv[24],_Cf_);
          return [1,[0,_M_,[0,v0,0]]]}
        var
         _Cg_=function(_Ch_){return 0},
         v0$0=caml_call1(Sexplib0_Sexp_conv[24],_Cg_);
        return [1,[0,_N_,[0,v0$0,0]]]}}
    function invariant$0(param,t)
     {function _Cb_(param)
       {if(typeof t === "number")
         switch(t){case 0:return 0;case 1:return 0;default:return 0}
        else
         return 0 === t[0]?0:0}
      function _Cc_(param){return _O_}
      function _Cd_(_Ce_){return sexp_of_t$3(_Cc_,_Ce_)}
      return caml_call4(Base_Invariant[1],_P_,t,_Cd_,_Cb_)}
    function create$1(f){return [1,f]}
    function of_compare(f){return [0,f]}
    var poly_equal=[1,runtime.caml_equal],never=1,always=0;
    function should_cutoff(t,old_value,new_value)
     {if(typeof t === "number")
       switch(t)
        {case 0:return 1;
         case 1:return 0;
         default:return caml_call2(Core_kernel[359],old_value,new_value)}
      else
       {if(0 === t[0])
         {var f=t[1];
          return caml_call2(_f_,caml_call2(f,old_value,new_value),0)}
        var f$0=t[1];
        return caml_call2(f$0,old_value,new_value)}}
    function equal$2(t1,match)
     {if(typeof t1 === "number")
       switch(t1)
        {case 0:if(typeof match === "number")if(0 === match)return 1;return 0;
         case 1:if(typeof match === "number")if(1 === match)return 1;return 0;
         default:if(typeof match === "number")if(2 <= match)return 1;return 0}
      else
       {if(0 === t1[0])
         {var _B$_=t1[1];
          if(typeof match !== "number" && 0 === match[0])
           {var f2=match[1];return caml_call2(Core_kernel[359],_B$_,f2)}
          return 0}
        var _Ca_=t1[1];
        if(typeof match !== "number" && 1 === match[0])
         {var f2$0=match[1];return caml_call2(Core_kernel[359],_Ca_,f2$0)}
        return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Cutoff=
      [0,
       sexp_of_t$3,
       invariant$0,
       create$1,
       of_compare,
       always,
       never,
       2,
       poly_equal,
       equal$2,
       should_cutoff];
    caml_register_global
     (1213,Incremental_kernel_Cutoff,"Incremental_kernel__Cutoff");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_node_id_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$9,cst$2);
    var
     incr=include[52],
     sexp_of_t$4=include[96],
     to_string=include[98],
     compare$2=include[107],
     hash_fold_t$1=include[122],
     hash$1=include[123],
     hashable=include[124],
     Table=include[125],
     Hash_set=include[126],
     Hash_queue=include[127],
     phys_equal=2,
     _Q_=include[100];
    function invariant$1(t)
     {if(caml_call2(_Q_,t,1))return 0;throw [0,Assert_failure,_R_]}
    var r=[0,0];
    function next(param){caml_call1(incr,r);return r[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _S_=
      [0,
       Hash_set[1],
       Hash_set[2],
       Hash_set[3],
       Hash_set[4],
       Hash_set[5],
       Hash_set[6]],
     Incremental_kernel_Node_id=
      [0,
       sexp_of_t$4,
       compare$2,
       hash_fold_t$1,
       hash$1,
       hashable,
       [0,
        Table[1],
        Table[2],
        Table[3],
        Table[4],
        Table[5],
        Table[6],
        Table[7],
        Table[8],
        Table[9],
        Table[10],
        Table[11],
        Table[12],
        Table[13],
        Table[14],
        Table[15],
        Table[16],
        Table[17],
        Table[18],
        Table[19],
        Table[20],
        Table[21],
        Table[22],
        Table[23],
        Table[24],
        Table[25],
        Table[26],
        Table[27],
        Table[28],
        Table[29],
        Table[30],
        Table[31],
        Table[32],
        Table[33],
        Table[34],
        Table[35],
        Table[36],
        Table[37],
        Table[38],
        Table[39],
        Table[40],
        Table[41],
        Table[42],
        Table[43],
        Table[44],
        Table[45],
        Table[46],
        Table[47],
        Table[48],
        Table[49],
        Table[50],
        Table[51],
        Table[52],
        Table[53],
        Table[54],
        Table[55],
        Table[56],
        Table[57],
        Table[58],
        Table[59],
        Table[60],
        Table[61],
        Table[62],
        Table[63],
        Table[64],
        Table[65],
        Table[66],
        Table[67],
        Table[68],
        Table[69],
        Table[70],
        Table[71],
        Table[72],
        Table[73],
        Table[74],
        Table[75],
        Table[76],
        Table[77]],
       _S_,
       Hash_queue,
       invariant$1,
       next,
       to_string];
    caml_register_global
     (1215,Incremental_kernel_Node_id,"Incremental_kernel__Node_id");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_stabilization_num_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$12,cst$3);
    var
     _T_=include[15],
     _V_=include[73],
     _W_=include[96],
     _X_=include[100],
     _Z_=include[106],
     ___=include[107],
     _U_=include[18],
     _Y_=include[102];
    function invariant$2(t)
     {if(caml_call2(_X_,t,-1))return 0;throw [0,Assert_failure,_$_]}
    var none=-1;
    function is_none(t){return caml_call2(_Y_,t,none)}
    function is_some(t){return caml_call2(_X_,t,0)}
    function add1(t){return caml_call2(_U_,t,1)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Stabilization_num=
      [0,___,_W_,_Z_,invariant$2,none,_T_,is_none,is_some,add1,_V_];
    caml_register_global
     (1216,
      Incremental_kernel_Stabilization_num,
      "Incremental_kernel__Stabilization_num");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_on_update_handler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$15,cst$4);
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       if(0 === a_001)
        if(typeof match === "number")
         return 0 === match?0:-1;
        else
         var switch$0=0 === match[0]?0:1;
       else
        if(typeof match === "number")
         return 0 === match?1:0;
        else
         var switch$0=0 === match[0]?0:1;
      else
       {if(0 === a_001[0])
         {var _B8_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];return caml_call2(cmp_a,_B8_,b_004)}
          return -1}
        var _B9_=a_001[2],_B__=a_001[1];
        if(typeof match === "number")
         return -1;
        else
         {if(0 !== match[0])
           {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_B__,b_006);
            return 0 === n?caml_call2(cmp_a,_B9_,b_008):n}
          var switch$0=0}}
      return switch$0?1:1}
    function sexp_of_t$5(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_af_:_ag_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_ah_,[0,v0$0,0]]]}
        var
         v1=param[2],
         v0$1=param[1],
         v0$2=caml_call1(of_a,v0$1),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,_ai_,[0,v0$2,[0,v1$0,0]]]]}}
    var Node_update=[0,compare$3,sexp_of_t$5];
    function sexp_of_t$6(of_a,param)
     {var
       v_previous_update_kind=param[2],
       v_created_at=param[3],
       arg=caml_call1(_W_,v_created_at),
       bnds=[0,[1,[0,_aj_,[0,arg,0]]],0];
      switch(v_previous_update_kind)
       {case 0:var arg$0=_aa_;break;
        case 1:var arg$0=_ab_;break;
        case 2:var arg$0=_ac_;break;
        case 3:var arg$0=_ad_;break;
        default:var arg$0=_ae_}
      var bnds$0=[0,[1,[0,_ak_,[0,arg$0,0]]],bnds];
      function _B6_(_B7_){return 0}
      var
       arg$1=caml_call1(Sexplib0_Sexp_conv[24],_B6_),
       bnds$1=[0,[1,[0,_al_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create$2(f,created_at){return [0,f,0,created_at]}
    function really_run(t,node_update)
     {var
       _B5_=
        typeof node_update === "number"
         ?0 === node_update?3:4
         :0 === node_update[0]?1:2;
      t[2] = _B5_;
      return caml_call1(t[1],node_update)}
    function run(t,node_update,now)
     {var _B4_=caml_call2(_h_,caml_call2(___,t[3],now),0);
      if(_B4_)
       {switch(t[2])
         {case 0:
           var
            switch$0=
             typeof node_update === "number"?2:1 === node_update[0]?0:2;
           break;
          case 1:
           var
            switch$0=
             typeof node_update === "number"?2:0 === node_update[0]?1:2;
           break;
          case 2:
           var
            switch$0=
             typeof node_update === "number"?2:0 === node_update[0]?1:2;
           break;
          case 3:return 0;
          default:
           var
            switch$0=
             typeof node_update === "number"
              ?1 === node_update?1:2
              :1 === node_update[0]?0:2}
        switch(switch$0)
         {case 0:var a=node_update[2];return really_run(t,[0,a]);
          case 1:return 0;
          default:return really_run(t,node_update)}}
      return _B4_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_On_update_handler=
      [0,Node_update,sexp_of_t$6,create$2,run];
    caml_register_global
     (1218,
      Incremental_kernel_On_update_handler,
      "Incremental_kernel__On_update_handler");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_should_not_use_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$18,cst$5);
    function sexp_of_t$7(param){return _am_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Should_not_use=[0,sexp_of_t$7];
    caml_register_global
     (1219,
      Incremental_kernel_Should_not_use,
      "Incremental_kernel__Should_not_use");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_uopt_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$21,cst$6);
    function is_none$0(t){return caml_call2(Core_kernel[359],t,none$0)}
    function is_some$0(t){return 1 - is_none$0(t)}
    function invariant$3(invariant_a,t)
     {var _B3_=is_some$0(t);return _B3_?caml_call1(invariant_a,t):_B3_}
    function sexp_of_t$8(sexp_of_a,t)
     {return is_none$0(t)
              ?caml_call1(Core_kernel[557],cst_None)
              :tag(cst_Some,t,sexp_of_a)}
    function some(a){return a}
    function value_exn(t)
     {return is_none$0(t)?caml_call1(Core_kernel[164],cst_Uopt_value_exn):t}
    function unsafe_value(t){return t}
    function _an_(param){return is_none$0(none$0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_is_none_none,
      0,
      cst_src_uopt_ml$0,
      30,
      0,
      25,
      _an_);
    function _ao_(param){return 1 - is_some$0(none$0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_not_is_some_none,
      0,
      cst_src_uopt_ml$1,
      31,
      0,
      31,
      _ao_);
    function _ap_(param){return 1 - is_none$0(13)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_not_is_none_some_13,
      0,
      cst_src_uopt_ml$2,
      32,
      0,
      36,
      _ap_);
    function _aq_(param){return is_some$0(13)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_is_some_some_13,
      0,
      cst_src_uopt_ml$3,
      33,
      0,
      30,
      _aq_);
    function _ar_(param)
     {function _B2_(param){return value_exn(none$0)}
      return caml_call1(Base_Exn[16],_B2_)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_Exn_does_raise_fun_value_exn_none,
      0,
      cst_src_uopt_ml$4,
      34,
      0,
      54,
      _ar_);
    function _as_(param){return caml_call2(_f_,value_exn(13),13)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_value_exn_some_13_13,
      0,
      cst_src_uopt_ml$5,
      35,
      0,
      37,
      _as_);
    function _at_(param){return caml_call2(_f_,13,13)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_unsafe_value_some_13_13,
      0,
      cst_src_uopt_ml$6,
      36,
      0,
      40,
      _at_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Uopt=
      [0,
       sexp_of_t$8,
       invariant$3,
       none$0,
       some,
       is_none$0,
       is_some$0,
       value_exn,
       unsafe_value];
    caml_register_global
     (1222,Incremental_kernel_Uopt,"Incremental_kernel__Uopt");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$24,cst$7);
    var
     Alarm=caml_call2(CamlinternalMod[1],_av_,_au_),
     Alarm_value=caml_call2(CamlinternalMod[1],_ax_,_aw_),
     Array_fold=caml_call2(CamlinternalMod[1],_az_,_ay_),
     At=caml_call2(CamlinternalMod[1],_aB_,_aA_),
     At_intervals=caml_call2(CamlinternalMod[1],_aD_,_aC_),
     Bind=caml_call2(CamlinternalMod[1],_aF_,_aE_),
     Expert=caml_call2(CamlinternalMod[1],_aH_,_aG_),
     Freeze=caml_call2(CamlinternalMod[1],_aJ_,_aI_),
     If_then_else=caml_call2(CamlinternalMod[1],_aL_,_aK_),
     Internal_observer=caml_call2(CamlinternalMod[1],_aN_,_aM_),
     Join=caml_call2(CamlinternalMod[1],_aP_,_aO_),
     Kind=caml_call2(CamlinternalMod[1],_aR_,_aQ_),
     Node=caml_call2(CamlinternalMod[1],_aT_,_aS_),
     Observer=caml_call2(CamlinternalMod[1],_aV_,_aU_),
     Packed_internal_observer=caml_call2(CamlinternalMod[1],_aX_,_aW_),
     Packed_node=caml_call2(CamlinternalMod[1],_aZ_,_aY_),
     include$1=caml_call2(CamlinternalMod[1],_a1_,_a0_),
     Snapshot=caml_call2(CamlinternalMod[1],_a3_,_a2_),
     Step_function=caml_call2(CamlinternalMod[1],_a5_,_a4_),
     Unordered_array_fold=caml_call2(CamlinternalMod[1],_a7_,_a6_),
     Var=caml_call2(CamlinternalMod[1],_a9_,_a8_);
    caml_call3(CamlinternalMod[2],_a__,Alarm,Alarm);
    caml_call3(CamlinternalMod[2],_a$_,Alarm_value,Alarm_value);
    caml_call3(CamlinternalMod[2],_ba_,Array_fold,Array_fold);
    caml_call3(CamlinternalMod[2],_bb_,At,At);
    caml_call3(CamlinternalMod[2],_bc_,At_intervals,At_intervals);
    caml_call3(CamlinternalMod[2],_bd_,Bind,Bind);
    caml_call3(CamlinternalMod[2],_be_,Expert,Expert);
    caml_call3(CamlinternalMod[2],_bf_,Freeze,Freeze);
    caml_call3(CamlinternalMod[2],_bg_,If_then_else,If_then_else);
    caml_call3(CamlinternalMod[2],_bh_,Internal_observer,Internal_observer);
    caml_call3(CamlinternalMod[2],_bi_,Join,Join);
    caml_call3(CamlinternalMod[2],_bj_,Kind,Kind);
    function sexp_of_t$9(param,t)
     {var
       _B1_=
        caml_call2(concat,0,[0,cst_n,[0,caml_call1(to_string,t[1]),0]]);
      return caml_call1(Core_kernel[557],_B1_)}
    function pack(t){return t}
    function is_valid(t)
     {var _B0_=t[4];
      if(typeof _B0_ === "number")if(0 === _B0_)return 0;
      return 1}
    function is_necessary(t)
     {var _BV_=caml_call2(_g_,t[8],0);
      if(_BV_)
       var _BW_=_BV_;
      else
       {var _BX_=is_some$0(t[20]);
        if(_BX_)
         var _BW_=_BX_;
        else
         {var _BY_=t[4];
          if(typeof _BY_ === "number")
           var switch$0=0;
          else
           if(7 === _BY_[0])var _BZ_=1,switch$0=1;else var switch$0=0;
          if(! switch$0)var _BZ_=0;
          var _BW_=_BZ_ || t[25]}}
      return _BW_}
    caml_call3
     (CamlinternalMod[2],_bk_,Node,[0,sexp_of_t$9,pack,is_valid,is_necessary]);
    caml_call3(CamlinternalMod[2],_bl_,Observer,Observer);
    caml_call3
     (CamlinternalMod[2],
      _bm_,
      Packed_internal_observer,
      Packed_internal_observer);
    function sexp_of_t$10(t)
     {function _BU_(param){return _bn_}
      return caml_call1(caml_call1(Node[1],_BU_),t)}
    caml_call3(CamlinternalMod[2],_bo_,Packed_node,[0,sexp_of_t$10]);
    function sexp_of_t$11(param)
     {if(param)
       {var bind=param[1],_BS_=bind[1],_BT_=function(param){return _bp_};
        return caml_call1(caml_call1(Node[1],_BT_),_BS_)}
      return caml_call1(Core_kernel[557],cst_Top)}
    caml_call3(CamlinternalMod[2],_bq_,include$1,[0,sexp_of_t$11]);
    caml_call3(CamlinternalMod[2],_br_,Snapshot,Snapshot);
    caml_call3(CamlinternalMod[2],_bs_,Step_function,Step_function);
    caml_call3
     (CamlinternalMod[2],_bt_,Unordered_array_fold,Unordered_array_fold);
    caml_call3(CamlinternalMod[2],_bu_,Var,Var);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Types=
      [0,
       Alarm,
       Alarm_value,
       Array_fold,
       At,
       At_intervals,
       Bind,
       Expert,
       Freeze,
       If_then_else,
       Internal_observer,
       Join,
       Kind,
       Node,
       Observer,
       Packed_internal_observer,
       Packed_node,
       include$1,
       Snapshot,
       Step_function,
       Unordered_array_fold,
       Var];
    caml_register_global
     (1224,Incremental_kernel_Types,"Incremental_kernel__Types");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_var_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$27,cst$8);
    function watch(r){return r[4]}
    function set_at(r){return r[3]}
    function set_set_at(r,v){r[3] = v;return 0}
    function value_set_during_stabilization(r){return r[2]}
    function set_value_set_during_stabilization(r,v){r[2] = v;return 0}
    function value(r){return r[1]}
    function set_value(r,v){r[1] = v;return 0}
    function _bv_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _bw_=0,
     watch$0=[0,[0,function(param){return 0},cst_watch,_bw_,watch,_bv_]];
    function _bx_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _by_=[0,set_set_at],
     set_at$0=[0,[0,function(param){return 0},cst_set_at,_by_,set_at,_bx_]];
    function _bz_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _bA_=[0,set_value_set_during_stabilization],
     value_set_during_stabilization$0=
      [0,
       [0,
        function(param){return 0},
        cst_value_set_during_stabilization,
        _bA_,
        value_set_during_stabilization,
        _bz_]];
    function _bB_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _bC_=[0,set_value],
     value$0=[0,[0,function(param){return 0},cst_value,_bC_,value,_bB_]];
    function sexp_of_t$12(of_a,param)
     {var
       v_value=param[1],
       v_value_set_during_stabilization=param[2],
       v_set_at=param[3],
       v_watch=param[4],
       arg=caml_call2(Node[1],of_a,v_watch),
       bnds=[0,[1,[0,_bD_,[0,arg,0]]],0],
       arg$0=caml_call1(_W_,v_set_at),
       bnds$0=[0,[1,[0,_bE_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$8(of_a,v_value_set_during_stabilization),
       bnds$1=[0,[1,[0,_bF_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(of_a,v_value),
       bnds$2=[0,[1,[0,_bG_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$4(invariant_a,t)
     {function _BM_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         watch_fun=
          check
           (function(watch)
             {var _BR_=watch[4];
              if(typeof _BR_ === "number")
               {if(0 === _BR_)return 0}
              else
               if(16 === _BR_[0])
                {var t$0=_BR_[1];
                 if(caml_call2(Core_kernel[359],t,t$0))return 0;
                 throw [0,Assert_failure,_bI_]}
              throw [0,Assert_failure,_bH_]}),
         set_at_fun=check(invariant$2),
         value_set_during_stabilization_fun=
          check(function(_BQ_){return invariant$3(invariant_a,_BQ_)}),
         value_fun=check(invariant_a);
        caml_call1(value_fun,value$0);
        caml_call1
         (value_set_during_stabilization_fun,value_set_during_stabilization$0);
        caml_call1(set_at_fun,set_at$0);
        return caml_call1(watch_fun,watch$0)}
      function _BN_(param){return _bJ_}
      function _BO_(_BP_){return sexp_of_t$12(_BN_,_BP_)}
      return caml_call4(Base_Invariant[1],_bK_,t,_BO_,_BM_)}
    function sexp_of_t$13(v){return sexp_of_t$12(sexp_of_t$7,v)}
    var Packed=[0,sexp_of_t$13];
    function pack$0(t){return t}
    function latest_value(t){return is_some$0(t[2])?t[2]:t[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var include$2=[0,invariant$4,sexp_of_t$12,Packed,pack$0,latest_value];
    caml_register_global(1225,include$2,"Incremental_kernel__Var");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_unordered_array_fold_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$30,cst$9);
    function num_changes_since_last_full_compute(r){return r[8]}
    function set_num_changes_since_last_full_compute(r,v){r[8] = v;return 0}
    function fold_value(r){return r[7]}
    function set_fold_value(r,v){r[7] = v;return 0}
    function children(r){return r[6]}
    function full_compute_every_n_changes(r){return r[5]}
    function init$0(r){return r[2]}
    function main(r){return r[1]}
    function _bL_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v]}
    var
     _bM_=[0,set_num_changes_since_last_full_compute],
     num_changes_since_last_full_compute$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_changes_since_last_full_compute,
        _bM_,
        num_changes_since_last_full_compute,
        _bL_]];
    function _bN_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8]]}
    var
     _bO_=[0,set_fold_value],
     fold_value$0=
      [0,[0,function(param){return 0},cst_fold_value,_bO_,fold_value,_bN_]];
    function _bP_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8]]}
    var
     _bQ_=0,
     children$0=
      [0,[0,function(param){return 0},cst_children,_bQ_,children,_bP_]];
    function _bR_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8]]}
    var
     _bS_=0,
     full_compute_every_n_changes$0=
      [0,
       [0,
        function(param){return 0},
        cst_full_compute_every_n_changes,
        _bS_,
        full_compute_every_n_changes,
        _bR_]];
    function _bT_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8]]}
    var
     _bU_=0,
     init$1=[0,[0,function(param){return 0},cst_init,_bU_,init$0,_bT_]];
    function _bV_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8]]}
    var
     _bW_=0,
     main$0=[0,[0,function(param){return 0},cst_main,_bW_,main,_bV_]];
    function sexp_of_t$14(of_a,of_acc,param)
     {var
       v_children=param[6],
       v_full_compute_every_n_changes=param[5],
       v_init=param[2],
       v_main=param[1],
       v_fold_value=param[7],
       v_num_changes_since_last_full_compute=param[8],
       arg=caml_call1(Core_kernel[455],v_num_changes_since_last_full_compute),
       bnds=[0,[1,[0,_bX_,[0,arg,0]]],0],
       arg$0=sexp_of_t$8(of_acc,v_fold_value),
       bnds$0=[0,[1,[0,_bY_,[0,arg$0,0]]],bnds],
       _BH_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Core_kernel[395],_BH_,v_children),
       bnds$1=[0,[1,[0,_bZ_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[455],v_full_compute_every_n_changes),
       bnds$2=[0,[1,[0,_b0_,[0,arg$2,0]]],bnds$1];
      function _BI_(_BL_){return 0}
      var
       arg$3=caml_call1(Sexplib0_Sexp_conv[24],_BI_),
       bnds$3=[0,[1,[0,_b1_,[0,arg$3,0]]],bnds$2];
      function _BJ_(_BK_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_BJ_),
       bnds$4=[0,[1,[0,_b2_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(of_acc,v_init),
       bnds$5=[0,[1,[0,_b3_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call2(Node[1],of_acc,v_main),
       bnds$6=[0,[1,[0,_b4_,[0,arg$6,0]]],bnds$5];
      return [1,bnds$6]}
    function invariant$5(invariant_a,invariant_acc,t)
     {function _Bz_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         num_changes_since_last_full_compute_fun=
          check
           (function(num_changes_since_last_full_compute)
             {if(caml_call2(_d_,num_changes_since_last_full_compute,0))
               {if(caml_call2(_e_,num_changes_since_last_full_compute,t[5]))
                 return 0;
                throw [0,Assert_failure,_b5_]}
              throw [0,Assert_failure,_b6_]}),
         fold_value_fun=
          check
           (function(fold_value)
             {invariant$3(invariant_acc,fold_value);
              var
               got=is_some$0(fold_value),
               expect=caml_call2(_h_,t[8],t[5]),
               sexpifier=Core_kernel[410],
               comparator=Core_kernel[406];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)}),
         children_fun=
          check
           (function(children)
             {function _BF_(child)
               {invariant$3(invariant_a,child[3]);
                var _BG_=caml_call2(_h_,t[8],t[5]);
                if(_BG_)
                 {if(is_some$0(child[3]))return 0;
                  throw [0,Assert_failure,_b7_]}
                return _BG_}
              return caml_call2(Array[19],children,_BF_)}),
         full_compute_every_n_changes_fun=
          check
           (function(full_compute_every_n_changes)
             {if(caml_call2(_g_,full_compute_every_n_changes,0))return 0;
              throw [0,Assert_failure,_b8_]}),
         init_fun=check(invariant_acc),
         main_fun=
          check
           (function(main)
             {var _BE_=main[4];
              if(typeof _BE_ === "number")
               {if(0 === _BE_)return 0}
              else
               if(15 === _BE_[0])
                {var t$0=_BE_[1];
                 if(caml_call2(Core_kernel[360],t,t$0))return 0;
                 throw [0,Assert_failure,_b__]}
              throw [0,Assert_failure,_b9_]});
        caml_call1(main_fun,main$0);
        caml_call1(init_fun,init$1);
        caml_call1
         (full_compute_every_n_changes_fun,full_compute_every_n_changes$0);
        caml_call1(children_fun,children$0);
        caml_call1(fold_value_fun,fold_value$0);
        return caml_call1
                (num_changes_since_last_full_compute_fun,
                 num_changes_since_last_full_compute$0)}
      function _BA_(param){return _b$_}
      function _BB_(param){return _ca_}
      function _BC_(_BD_){return sexp_of_t$14(_BB_,_BA_,_BD_)}
      return caml_call4(Base_Invariant[1],_cb_,t,_BC_,_Bz_)}
    function create$3
     (init,f,f_inverse,full_compute_every_n_changes,children,main)
     {return [0,
              main,
              init,
              f,
              f_inverse,
              full_compute_every_n_changes,
              children,
              none$0,
              full_compute_every_n_changes]}
    function compute(t)
     {if(caml_call2(_f_,t[8],t[5]))
       {t[8] = 0;
        var
         children=t[6],
         f=t[3],
         init=t[2],
         result=[0,init],
         _Bw_=caml_call1(Array[17],children) - 1 | 0,
         _Bv_=0;
        if(! (_Bw_ < 0))
         {var i=_Bv_;
          for(;;)
           {var _Bx_=value_exn(children[i + 1][3]);
            result[1] = caml_call2(f,result[1],_Bx_);
            var _By_=i + 1 | 0;
            if(_Bw_ !== i){var i=_By_;continue}
            break}}
        t[7] = result[1]}
      return value_exn(t[7])}
    function force_full_compute(t){t[7] = none$0;t[8] = t[5];return 0}
    function child_changed(t,old_value_opt,new_value)
     {if(caml_call2(_h_,t[8],t[5] - 1 | 0))
       {t[8] = t[8] + 1 | 0;
        var
         _Br_=value_exn(old_value_opt),
         _Bs_=value_exn(t[7]),
         _Bt_=caml_call2(t[4],_Bs_,_Br_);
        t[7] = caml_call2(t[3],_Bt_,new_value);
        return 0}
      var _Bu_=caml_call2(_h_,t[8],t[5]);
      return _Bu_?force_full_compute(t):_Bu_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Unordered_array_fold=
      [0,
       invariant$5,
       sexp_of_t$14,
       create$3,
       compute,
       child_changed,
       force_full_compute];
    caml_register_global
     (1227,
      Incremental_kernel_Unordered_array_fold,
      "Incremental_kernel__Unordered_array_fold");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$33,cst$10);
    function sexp_of_t$15(v)
     {return caml_call2
              (Core_kernel_Timing_wheel_ns[6][1],Sexplib0_Sexp_conv[23],v)}
    function invariant$6(param){return 0}
    var null$0=caml_call1(Core_kernel_Timing_wheel_ns[6][2],0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Alarm=[0,sexp_of_t$15,invariant$6,null$0];
    caml_register_global
     (1229,Incremental_kernel_Alarm,"Incremental_kernel__Alarm");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_step_function_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$36,cst$11);
    function alarm(r){return r[4]}
    function set_alarm(r,v){r[4] = v;return 0}
    function upcoming_steps(r){return r[3]}
    function set_upcoming_steps(r,v){r[3] = v;return 0}
    function value$1(r){return r[2]}
    function set_value$0(r,v){r[2] = v;return 0}
    function main$1(r){return r[1]}
    function _cc_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _cd_=[0,set_alarm],
     alarm$0=[0,[0,function(param){return 0},cst_alarm,_cd_,alarm,_cc_]];
    function _ce_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _cf_=[0,set_upcoming_steps],
     upcoming_steps$0=
      [0,
       [0,
        function(param){return 0},
        cst_upcoming_steps,
        _cf_,
        upcoming_steps,
        _ce_]];
    function _cg_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _ch_=[0,set_value$0],
     value$2=[0,[0,function(param){return 0},cst_value$0,_ch_,value$1,_cg_]];
    function _ci_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _cj_=0,
     main$2=[0,[0,function(param){return 0},cst_main$0,_cj_,main$1,_ci_]];
    function sexp_of_t$16(of_a,param)
     {var
       v_main=param[1],
       v_value=param[2],
       v_upcoming_steps=param[3],
       v_alarm=param[4],
       arg=sexp_of_t$15(v_alarm),
       bnds=[0,[1,[0,_ck_,[0,arg,0]]],0];
      function _Bq_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Time_ns[42],v0),
         v1$0=caml_call1(of_a,v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$0=caml_call2(Core_kernel[513],_Bq_,v_upcoming_steps),
       bnds$0=[0,[1,[0,_cl_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_a,v_value),
       bnds$1=[0,[1,[0,_cm_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_cn_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$7(invariant_a,t)
     {function _Bi_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$6),
         upcoming_steps_fun=
          check
           (function(upcoming_steps)
             {function _Bn_(param,_Bp_)
               {var time2=_Bp_[1],time1=param[1];
                return caml_call2(Time_ns[20],time1,time2)}
              if(caml_call2(Core_kernel_List[147],upcoming_steps,_Bn_))
               {var
                 _Bo_=
                  function(param)
                   {var a=param[2];return caml_call1(invariant_a,a)};
                return caml_call2(Core_kernel_List[19],upcoming_steps,_Bo_)}
              throw [0,Assert_failure,_co_]}),
         value_fun=check(invariant_a),
         main_fun=
          check
           (function(main)
             {var _Bm_=main[4];
              if(typeof _Bm_ === "number")
               {if(0 === _Bm_)return 0}
              else
               switch(_Bm_[0])
                {case 5:return 0;
                 case 14:
                  var t$0=_Bm_[1];
                  if(caml_call2(Core_kernel[359],t,t$0))return 0;
                  throw [0,Assert_failure,_cq_]
                 }
              throw [0,Assert_failure,_cp_]});
        caml_call1(main_fun,main$2);
        caml_call1(value_fun,value$2);
        caml_call1(upcoming_steps_fun,upcoming_steps$0);
        return caml_call1(alarm_fun,alarm$0)}
      function _Bj_(param){return _cr_}
      function _Bk_(_Bl_){return sexp_of_t$16(_Bj_,_Bl_)}
      return caml_call4(Base_Invariant[1],_cs_,t,_Bk_,_Bi_)}
    function advance(t,time_passed)
     {var value=[0,t[2]],upcoming_steps=[0,t[3]],continue$0=[0,1];
      for(;;)
       {if(continue$0[1])
         {var _Bh_=upcoming_steps[1];
          if(_Bh_)
           {var rest=_Bh_[2],match=_Bh_[1],a=match[2],step_at=match[1];
            if(caml_call1(time_passed,step_at))
             {value[1] = a;upcoming_steps[1] = rest}
            else
             continue$0[1] = 0}
          else
           continue$0[1] = 0;
          continue}
        t[2] = value[1];
        t[3] = upcoming_steps[1];
        return 0}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Step_function=[0,invariant$7,sexp_of_t$16,advance];
    caml_register_global
     (1231,
      Incremental_kernel_Step_function,
      "Incremental_kernel__Step_function");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_array_fold_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$39,cst$12);
    function children$1(r){return r[3]}
    function init$2(r){return r[1]}
    function _ct_(r,v){return [0,r[1],r[2],v]}
    var
     _cu_=0,
     children$2=
      [0,[0,function(param){return 0},cst_children$0,_cu_,children$1,_ct_]];
    function _cv_(r,v){return [0,v,r[2],r[3]]}
    var
     _cw_=0,
     init$3=[0,[0,function(param){return 0},cst_init$0,_cw_,init$2,_cv_]];
    function sexp_of_t$17(of_a,of_acc,param)
     {var
       v_children=param[3],
       v_init=param[1],
       _Be_=caml_call1(Node[1],of_a),
       arg=caml_call2(Core_kernel[395],_Be_,v_children),
       bnds=[0,[1,[0,_cx_,[0,arg,0]]],0];
      function _Bf_(_Bg_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_Bf_),
       bnds$0=[0,[1,[0,_cy_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_acc,v_init),
       bnds$1=[0,[1,[0,_cz_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$8(invariant_a,invariant_acc,t)
     {function _A__(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         children_fun=
          check
           (function(children)
             {function _Bd_(child){return invariant$3(invariant_a,child[3])}
              return caml_call2(Array[19],children,_Bd_)}),
         init_fun=check(invariant_acc);
        caml_call1(init_fun,init$3);
        return caml_call1(children_fun,children$2)}
      function _A$_(param){return _cA_}
      function _Ba_(param){return _cB_}
      function _Bb_(_Bc_){return sexp_of_t$17(_Ba_,_A$_,_Bc_)}
      return caml_call4(Base_Invariant[1],_cC_,t,_Bb_,_A__)}
    function compute$0(param)
     {var
       children=param[3],
       f=param[2],
       init=param[1],
       result=[0,init],
       _A7_=caml_call1(Array[17],children) - 1 | 0,
       _A6_=0;
      if(! (_A7_ < 0))
       {var i=_A6_;
        for(;;)
         {var _A8_=value_exn(children[i + 1][3]);
          result[1] = caml_call2(f,result[1],_A8_);
          var _A9_=i + 1 | 0;
          if(_A7_ !== i){var i=_A9_;continue}
          break}}
      return result[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Array_fold=[0,sexp_of_t$17,invariant$8,compute$0];
    caml_register_global
     (1232,Incremental_kernel_Array_fold,"Incremental_kernel__Array_fold");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_at_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$42,cst$13);
    function alarm$1(r){return r[3]}
    function set_alarm$0(r,v){r[3] = v;return 0}
    function main$3(r){return r[1]}
    function _cD_(r,v){return [0,r[1],r[2],v]}
    var
     _cE_=[0,set_alarm$0],
     alarm$2=[0,[0,function(param){return 0},cst_alarm$0,_cE_,alarm$1,_cD_]];
    function _cF_(r,v){return [0,v,r[2],r[3]]}
    var
     _cG_=0,
     main$4=[0,[0,function(param){return 0},cst_main$1,_cG_,main$3,_cF_]];
    function sexp_of_t$18(param)
     {var
       v_at=param[2],
       v_main=param[1],
       v_alarm=param[3],
       arg=sexp_of_t$15(v_alarm),
       bnds=[0,[1,[0,_cH_,[0,arg,0]]],0],
       arg$0=caml_call1(Time_ns[42],v_at),
       bnds$0=[0,[1,[0,_cI_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Node[1],Incremental_kernel_Before_or_after[1],v_main),
       bnds$1=[0,[1,[0,_cJ_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$9(t)
     {function _A4_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$6),
         main_fun=
          check
           (function(main)
             {var _A5_=main[4];
              if(typeof _A5_ === "number")
               {if(0 === _A5_)return 0}
              else
               switch(_A5_[0])
                {case 1:
                  var t$0=_A5_[1];
                  if(caml_call2(Core_kernel[359],t,t$0))return 0;
                  throw [0,Assert_failure,_cL_];
                 case 5:if(0 !== _A5_[1])return 0;break
                 }
              throw [0,Assert_failure,_cK_]});
        caml_call1(main_fun,main$4);
        return caml_call1(alarm_fun,alarm$2)}
      return caml_call4(Base_Invariant[1],_cM_,t,sexp_of_t$18,_A4_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_At=[0,invariant$9,sexp_of_t$18];
    caml_register_global(1233,Incremental_kernel_At,"Incremental_kernel__At");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$44);
    caml_call1(Expect_test_collector[4][1],cst_src_at_intervals_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$45,cst$14);
    function alarm$3(r){return r[4]}
    function set_alarm$1(r,v){r[4] = v;return 0}
    function interval(r){return r[3]}
    function main$5(r){return r[1]}
    function _cN_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _cO_=[0,set_alarm$1],
     alarm$4=[0,[0,function(param){return 0},cst_alarm$1,_cO_,alarm$3,_cN_]];
    function _cP_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _cQ_=0,
     interval$0=
      [0,[0,function(param){return 0},cst_interval,_cQ_,interval,_cP_]];
    function _cR_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _cS_=0,
     main$6=[0,[0,function(param){return 0},cst_main$2,_cS_,main$5,_cR_]];
    function sexp_of_t$19(param)
     {var
       v_interval=param[3],
       v_base=param[2],
       v_main=param[1],
       v_alarm=param[4],
       arg=sexp_of_t$15(v_alarm),
       bnds=[0,[1,[0,_cT_,[0,arg,0]]],0],
       arg$0=caml_call1(Time_ns[43][96],v_interval),
       bnds$0=[0,[1,[0,_cU_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[42],v_base),
       bnds$1=[0,[1,[0,_cV_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[598],v_main),
       bnds$2=[0,[1,[0,_cW_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$10(t)
     {function _A2_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         alarm_fun=check(invariant$6),
         interval_fun=
          check
           (function(interval)
             {if(caml_call1(Time_ns[43][30],interval))return 0;
              throw [0,Assert_failure,_cX_]}),
         main_fun=
          check
           (function(main)
             {var _A3_=main[4];
              if(typeof _A3_ === "number")
               {if(0 === _A3_)return 0}
              else
               if(2 === _A3_[0])
                {var t$0=_A3_[1];
                 if(caml_call2(Core_kernel[359],t,t$0))return 0;
                 throw [0,Assert_failure,_cZ_]}
              throw [0,Assert_failure,_cY_]});
        caml_call1(main_fun,main$6);
        caml_call1(interval_fun,interval$0);
        return caml_call1(alarm_fun,alarm$4)}
      return caml_call4(Base_Invariant[1],_c0_,t,sexp_of_t$19,_A2_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_At_intervals=[0,invariant$10,sexp_of_t$19];
    caml_register_global
     (1234,Incremental_kernel_At_intervals,"Incremental_kernel__At_intervals");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_bind_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$48,cst$15);
    function all_nodes_created_on_rhs(r){return r[7]}
    function set_all_nodes_created_on_rhs(r,v){r[7] = v;return 0}
    function rhs_scope(r){return r[6]}
    function set_rhs_scope(r,v){r[6] = v;return 0}
    function lhs_change(r){return r[4]}
    function main$7(r){return r[1]}
    function _c1_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _c2_=[0,set_all_nodes_created_on_rhs],
     all_nodes_created_on_rhs$0=
      [0,
       [0,
        function(param){return 0},
        cst_all_nodes_created_on_rhs,
        _c2_,
        all_nodes_created_on_rhs,
        _c1_]];
    function _c3_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _c4_=[0,set_rhs_scope],
     rhs_scope$0=
      [0,[0,function(param){return 0},cst_rhs_scope,_c4_,rhs_scope,_c3_]];
    function _c5_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _c6_=0,
     lhs_change$0=
      [0,[0,function(param){return 0},cst_lhs_change,_c6_,lhs_change,_c5_]];
    function _c7_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _c8_=0,
     main$8=[0,[0,function(param){return 0},cst_main$3,_c8_,main$7,_c7_]];
    function sexp_of_t$20(of_a,of_b,param)
     {var
       v_main=param[1],
       v_lhs_change=param[4],
       v_lhs=param[3],
       v_rhs=param[5],
       v_rhs_scope=param[6],
       v_all_nodes_created_on_rhs=param[7],
       arg=sexp_of_t$8(Packed_node[1],v_all_nodes_created_on_rhs),
       bnds=[0,[1,[0,_c9_,[0,arg,0]]],0],
       arg$0=caml_call1(include$1[1],v_rhs_scope),
       bnds$0=[0,[1,[0,_c__,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$8(caml_call1(Node[1],of_b),v_rhs),
       bnds$1=[0,[1,[0,_c$_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[598],v_lhs_change),
       bnds$2=[0,[1,[0,_da_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],of_a,v_lhs),
       bnds$3=[0,[1,[0,_db_,[0,arg$3,0]]],bnds$2];
      function _A0_(_A1_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_A0_),
       bnds$4=[0,[1,[0,_dc_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call2(Node[1],of_b,v_main),
       bnds$5=[0,[1,[0,_dd_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function same(t1,t2){return caml_call2(Core_kernel[360],t1,t2)}
    function is_valid$0(t)
     {var _AZ_=t[1][4];
      if(typeof _AZ_ === "number")if(0 === _AZ_)return 0;
      return 1}
    function iter_nodes_created_on_rhs(t,f)
     {var r=[0,t[7]];
      for(;;)
       {if(is_some$0(r[1]))
         {var _AY_=r[1];r[1] = _AY_[12];caml_call1(f,_AY_);continue}
        return 0}}
    function invariant$11(invariant_a,invariant_b,t)
     {function _AQ_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         all_nodes_created_on_rhs_fun=
          check
           (function(param)
             {return iter_nodes_created_on_rhs
                      (t,
                       function(node)
                        {if(caml_call2(Core_kernel[359],node[11],t[6]))
                          {var _AX_=caml_call1(Node[4],node);
                           if(_AX_)
                            {if(caml_call2(_h_,t[4][13],node[13]))return 0;
                             throw [0,Assert_failure,_de_]}
                           return _AX_}
                         throw [0,Assert_failure,_df_]})}),
         rhs_scope_fun=
          check
           (function(param)
             {if(param)
               {var t$0=param[1];
                if(same(t,t$0))return 0;
                throw [0,Assert_failure,_dg_]}
              throw [0,Assert_failure,_dh_]}),
         lhs_change_fun=
          check
           (function(lhs_change)
             {if(caml_call2(Core_kernel[359],lhs_change[11],t[1][11]))
               {var _AW_=lhs_change[4];
                if(typeof _AW_ === "number")
                 {if(0 === _AW_)return 0}
                else
                 if(3 === _AW_[0])
                  {var t$0=_AW_[1];
                   if(same(t,t$0))return 0;
                   throw [0,Assert_failure,_dj_]}
                throw [0,Assert_failure,_di_]}
              throw [0,Assert_failure,_dk_]}),
         main_fun=
          check
           (function(main)
             {var _AV_=main[4];
              if(typeof _AV_ === "number")
               {if(0 === _AV_)return 0}
              else
               if(4 === _AV_[0])
                {var t$0=_AV_[1];
                 if(same(t,t$0))return 0;
                 throw [0,Assert_failure,_dm_]}
              throw [0,Assert_failure,_dl_]});
        caml_call1(main_fun,main$8);
        caml_call1(lhs_change_fun,lhs_change$0);
        caml_call1(rhs_scope_fun,rhs_scope$0);
        return caml_call1
                (all_nodes_created_on_rhs_fun,all_nodes_created_on_rhs$0)}
      function _AR_(param){return _dn_}
      function _AS_(param){return _do_}
      function _AT_(_AU_){return sexp_of_t$20(_AS_,_AR_,_AU_)}
      return caml_call4(Base_Invariant[1],_dp_,t,_AT_,_AQ_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Bind=
      [0,invariant$11,sexp_of_t$20,is_valid$0,iter_nodes_created_on_rhs];
    caml_register_global
     (1235,Incremental_kernel_Bind,"Incremental_kernel__Bind");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_expert_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$51,cst$16);
    function sexp_of_t$21(of_a,param)
     {var
       v_child=param[1],
       v_index=param[3],
       arg=sexp_of_t$8(Core_kernel[455],v_index),
       bnds=[0,[1,[0,_dq_,[0,arg,0]]],0];
      function _AO_(_AP_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_AO_),
       bnds$0=[0,[1,[0,_dr_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_ds_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function sexp_of_packed_edge(param)
     {var v0=param[1],v0$0=sexp_of_t$21(function(param){return _dt_},v0);
      return [1,[0,_du_,[0,v0$0,0]]]}
    function sexp_of_t$22(of_a,param)
     {var
       v_children=param[3],
       v_num_children=param[4],
       v_force_stale=param[5],
       v_num_invalid_children=param[6],
       v_will_fire_all_callbacks=param[7],
       arg=caml_call1(Core_kernel[410],v_will_fire_all_callbacks),
       bnds=[0,[1,[0,_dv_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_num_invalid_children),
       bnds$0=[0,[1,[0,_dw_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[410],v_force_stale),
       bnds$1=[0,[1,[0,_dx_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[455],v_num_children),
       bnds$2=[0,[1,[0,_dy_,[0,arg$2,0]]],bnds$1];
      function _AI_(_AN_){return sexp_of_t$8(sexp_of_packed_edge,_AN_)}
      var
       arg$3=caml_call2(Array[13],_AI_,v_children),
       bnds$3=[0,[1,[0,_dz_,[0,arg$3,0]]],bnds$2];
      function _AJ_(_AM_){return 0}
      var
       arg$4=caml_call1(Sexplib0_Sexp_conv[24],_AJ_),
       bnds$4=[0,[1,[0,_dA_,[0,arg$4,0]]],bnds$3];
      function _AK_(_AL_){return 0}
      var
       arg$5=caml_call1(Sexplib0_Sexp_conv[24],_AK_),
       bnds$5=[0,[1,[0,_dB_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function invariant$12(invariant_a,param)
     {var children=param[3],num_children=param[4];
      if(caml_call2(_e_,num_children,caml_call1(Array[17],children)))
       {var
         _AH_=
          function(expect,uopt)
           {var match=caml_call2(_h_,expect,num_children);
            if(0 === match)
             {if(is_none$0(uopt))return 0;throw [0,Assert_failure,_dC_]}
            var
             match$0=value_exn(uopt),
             r=match$0[1],
             got=value_exn(r[3]),
             sexpifier=Core_kernel[455],
             comparator=Core_kernel[451];
            return caml_call8
                    (Ppx_assert_lib_Runtime[3],
                     pos$0,
                     sexpifier,
                     comparator,
                     0,
                     0,
                     0,
                     expect,
                     got)};
        return caml_call2(Array[53],children,_AH_)}
      throw [0,Assert_failure,_dD_]}
    function invariant_about_num_invalid_children(param)
     {var
       children=param[3],
       num_children=param[4],
       num_invalid_children=param[6];
      return function(is_necessary)
       {if(is_necessary)
         {var count_invalid_children=[0,0],_AF_=num_children - 1 | 0,_AE_=0;
          if(! (_AF_ < 0))
           {var i=_AE_;
            for(;;)
             {var
               match=value_exn(caml_check_bound(children,i)[i + 1]),
               r=match[1];
              if(1 - caml_call1(Node[3],r[1]))count_invalid_children[1]++;
              var _AG_=i + 1 | 0;
              if(_AF_ !== i){var i=_AG_;continue}
              break}}
          var sexpifier=Core_kernel[455],comparator=Core_kernel[451];
          return caml_call8
                  (Ppx_assert_lib_Runtime[3],
                   pos$1,
                   sexpifier,
                   comparator,
                   0,
                   0,
                   0,
                   count_invalid_children[1],
                   num_invalid_children)}
        var sexpifier$0=Core_kernel[455],comparator$0=Core_kernel[451];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$2,
                 sexpifier$0,
                 comparator$0,
                 0,
                 0,
                 0,
                 0,
                 num_invalid_children)}}
    function create$4(f,on_observability_change)
     {return [0,f,on_observability_change,[0],0,0,0,1]}
    function make_stale(t){return t[5]?534011858:(t[5] = 1,17724)}
    function incr_invalid_children(t){t[6] = t[6] + 1 | 0;return 0}
    function decr_invalid_children(t){t[6] = t[6] - 1 | 0;return 0}
    function add_child_edge(t,packed_edge)
     {var edge=packed_edge[1];
      if(is_none$0(edge[3]))
       {var _AC_=caml_call1(Array[17],t[3]);
        if(caml_call2(_d_,t[4],_AC_))
         {var
           _AD_=2 * caml_call1(Array[17],t[3]) | 0,
           new_max=caml_call2(include[109],2,_AD_);
          t[3] = caml_call3(Array[119],t[3],new_max,none$0)}
        var new_child_index=t[4];
        edge[3] = new_child_index;
        caml_check_bound(t[3],new_child_index)[new_child_index + 1]
        =
        packed_edge;
        t[4] = t[4] + 1 | 0;
        t[5] = 1;
        return new_child_index}
      throw [0,Assert_failure,_dE_]}
    function swap_children(t,child_index1,child_index2)
     {var
       match=value_exn(caml_check_bound(t[3],child_index1)[child_index1 + 1]),
       edge1=match[1],
       match$0=
        value_exn(caml_check_bound(t[3],child_index2)[child_index2 + 1]),
       edge2=match$0[1];
      edge1[3] = child_index2;
      edge2[3] = child_index1;
      return caml_call3(Array[81],t[3],child_index1,child_index2)}
    function last_child_edge_exn(t)
     {var last_index=t[4] - 1 | 0;
      return value_exn(caml_check_bound(t[3],last_index)[last_index + 1])}
    function remove_last_child_edge_exn(t)
     {var
       last_index=t[4] - 1 | 0,
       match=caml_check_bound(t[3],last_index)[last_index + 1];
      caml_check_bound(t[3],last_index)[last_index + 1] = none$0;
      t[4] = last_index;
      t[5] = 1;
      if(is_some$0(match)){var edge=match[1];edge[3] = none$0;return 0}
      throw [0,Assert_failure,_dF_]}
    function before_main_computation(t)
     {if(caml_call2(_g_,t[6],0))return 144245463;
      t[5] = 0;
      var will_fire_all_callbacks=t[7];
      t[7] = 0;
      if(will_fire_all_callbacks)
       {var _Az_=t[4] - 1 | 0,_Ay_=0;
        if(! (_Az_ < 0))
         {var i=_Ay_;
          for(;;)
           {var
             match=value_exn(caml_check_bound(t[3],i)[i + 1]),
             r=match[1],
             _AA_=value_exn(r[1][3]);
            caml_call1(r[2],_AA_);
            var _AB_=i + 1 | 0;
            if(_Az_ !== i){var i=_AB_;continue}
            break}}}
      return 17724}
    function observability_change(t,is_now_observable)
     {caml_call1(t[2],is_now_observable);
      var _Aw_=1 - is_now_observable,_Ax_=_Aw_?(t[7] = 1,t[6] = 0,0):_Aw_;
      return _Ax_}
    function run_edge_callback(t,child_index)
     {var _At_=1 - t[7];
      if(_At_)
       {var
         match=value_exn(caml_check_bound(t[3],child_index)[child_index + 1]),
         r=match[1],
         _Au_=is_some$0(r[1][3]);
        if(_Au_)return caml_call1(r[2],r[1][3]);
        var _Av_=_Au_}
      else
       var _Av_=_At_;
      return _Av_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Expert=
      [0,
       invariant$12,
       sexp_of_t$22,
       sexp_of_t$21,
       invariant_about_num_invalid_children,
       create$4,
       make_stale,
       incr_invalid_children,
       decr_invalid_children,
       add_child_edge,
       swap_children,
       last_child_edge_exn,
       remove_last_child_edge_exn,
       before_main_computation,
       observability_change,
       run_edge_callback];
    caml_register_global
     (1236,Incremental_kernel_Expert,"Incremental_kernel__Expert");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_sexp_of_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$54,cst$17);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Sexp_of=[0];
    caml_register_global
     (1237,Incremental_kernel_Sexp_of,"Incremental_kernel__Sexp_of");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$56);
    caml_call1(Expect_test_collector[4][1],cst_src_scope_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$57,cst$18);
    var _dG_=include$1[1],top=0;
    function is_top(param){return param?0:1}
    function invariant$13(param)
     {if(param)
       {var bind=param[1],_Aq_=function(_As_){return 0};
        return invariant$11(function(_Ar_){return 0},_Aq_,bind)}
      return 0}
    function height(param)
     {if(param){var bind=param[1];return bind[4][13]}return -1}
    function is_valid$1(param)
     {if(param){var bind=param[1];return is_valid$0(bind)}return 1}
    function is_necessary$0(param)
     {if(param){var bind=param[1];return caml_call1(Node[4],bind[1])}return 1}
    function add_node(t,node)
     {if(caml_call2(Core_kernel[359],node[11],t))
       {if(t)
         {var bind=t[1];
          node[12] = bind[7];
          bind[7] = caml_call1(Node[2],node);
          return 0}
        return 0}
      throw [0,Assert_failure,_dH_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$58);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$3=
      [0,
       _dG_,
       invariant$13,
       top,
       is_top,
       height,
       is_valid$1,
       is_necessary$0,
       add_node];
    caml_register_global(1238,include$3,"Incremental_kernel__Scope");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$59);
    caml_call1(Expect_test_collector[4][1],cst_src_freeze_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$60,cst$19);
    function main$9(r){return r[1]}
    function _dI_(r,v){return [0,v,r[2],r[3]]}
    var
     _dJ_=0,
     main$10=[0,[0,function(param){return 0},cst_main$4,_dJ_,main$9,_dI_]];
    function sexp_of_t$23(of_a,param)
     {var v_child=param[2],v_main=param[1],bnds=0;
      function _Ao_(_Ap_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_Ao_),
       bnds$0=[0,[1,[0,_dK_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Node[1],of_a,v_child),
       bnds$1=[0,[1,[0,_dL_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_dM_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$14(invariant_a,t)
     {function _Aj_(param)
       {function f(main)
         {if(is_top(main[11]))
           {var _An_=main[4];
            if(typeof _An_ === "number")
             {if(0 === _An_)return 0}
            else
             switch(_An_[0])
              {case 5:return 0;
               case 7:
                var t$0=_An_[1];
                if(caml_call2(Core_kernel[359],t,t$0))return 0;
                throw [0,Assert_failure,_dO_]
               }
            throw [0,Assert_failure,_dN_]}
          throw [0,Assert_failure,_dP_]}
        var main_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(main_fun,main$10);
        return 0}
      function _Ak_(param){return _dQ_}
      function _Al_(_Am_){return sexp_of_t$23(_Ak_,_Am_)}
      return caml_call4(Base_Invariant[1],_dR_,t,_Al_,_Aj_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$61);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Freeze=[0,invariant$14,sexp_of_t$23];
    caml_register_global
     (1239,Incremental_kernel_Freeze,"Incremental_kernel__Freeze");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$62);
    caml_call1(Expect_test_collector[4][1],cst_src_if_then_else_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$63,cst$20);
    function current_branch(r){return r[4]}
    function set_current_branch(r,v){r[4] = v;return 0}
    function test_change(r){return r[3]}
    function main$11(r){return r[1]}
    function _dS_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _dT_=[0,set_current_branch],
     current_branch$0=
      [0,
       [0,
        function(param){return 0},
        cst_current_branch,
        _dT_,
        current_branch,
        _dS_]];
    function _dU_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _dV_=0,
     test_change$0=
      [0,[0,function(param){return 0},cst_test_change,_dV_,test_change,_dU_]];
    function _dW_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _dX_=0,
     main$12=[0,[0,function(param){return 0},cst_main$5,_dX_,main$11,_dW_]];
    function sexp_of_t$24(of_a,param)
     {var
       v_test_change=param[3],
       v_test=param[2],
       v_main=param[1],
       v_current_branch=param[4],
       v_else=param[6],
       v_then=param[5],
       arg=caml_call2(Node[1],of_a,v_else),
       bnds=[0,[1,[0,_dY_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],of_a,v_then),
       bnds$0=[0,[1,[0,_dZ_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$8(caml_call1(Node[1],of_a),v_current_branch),
       bnds$1=[0,[1,[0,_d0_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],Core_kernel[598],v_test_change),
       bnds$2=[0,[1,[0,_d1_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call2(Node[1],Core_kernel[410],v_test),
       bnds$3=[0,[1,[0,_d2_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call2(Node[1],of_a,v_main),
       bnds$4=[0,[1,[0,_d3_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function invariant$15(invariant_a,t)
     {function _Ac_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         current_branch_fun=
          check
           (function(current_branch)
             {var _Ai_=is_some$0(current_branch);
              if(_Ai_)
               {var current_branch$0=value_exn(current_branch);
                if(! caml_call2(Core_kernel[359],current_branch$0,t[5]))
                 if(! caml_call2(Core_kernel[359],current_branch$0,t[6]))
                  throw [0,Assert_failure,_d4_];
                return 0}
              return _Ai_}),
         test_change_fun=
          check
           (function(test_change)
             {var _Ah_=test_change[4];
              if(typeof _Ah_ === "number")
               {if(0 === _Ah_)return 0}
              else
               if(8 === _Ah_[0])
                {var t$0=_Ah_[1];
                 if(caml_call2(Core_kernel[360],t,t$0))return 0;
                 throw [0,Assert_failure,_d6_]}
              throw [0,Assert_failure,_d5_]}),
         main_fun=
          check
           (function(main)
             {var _Ag_=main[4];
              if(typeof _Ag_ === "number")
               {if(0 === _Ag_)return 0}
              else
               if(9 === _Ag_[0])
                {var t$0=_Ag_[1];
                 if(caml_call2(Core_kernel[359],t,t$0))return 0;
                 throw [0,Assert_failure,_d7_]}
              return 0});
        caml_call1(main_fun,main$12);
        caml_call1(test_change_fun,test_change$0);
        caml_call1(current_branch_fun,current_branch$0);
        return 0}
      function _Ad_(param){return _d8_}
      function _Ae_(_Af_){return sexp_of_t$24(_Ad_,_Af_)}
      return caml_call4(Base_Invariant[1],_d9_,t,_Ae_,_Ac_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$64);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_If_then_else=[0,invariant$15,sexp_of_t$24];
    caml_register_global
     (1240,Incremental_kernel_If_then_else,"Incremental_kernel__If_then_else");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$65);
    caml_call1(Expect_test_collector[4][1],cst_src_join_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$66,cst$21);
    function lhs_change$1(r){return r[3]}
    function main$13(r){return r[1]}
    function _d__(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _d$_=0,
     lhs_change$2=
      [0,
       [0,function(param){return 0},cst_lhs_change$0,_d$_,lhs_change$1,_d__]];
    function _ea_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _eb_=0,
     main$14=[0,[0,function(param){return 0},cst_main$6,_eb_,main$13,_ea_]];
    function sexp_of_t$25(of_a,param)
     {var
       v_lhs_change=param[3],
       v_lhs=param[2],
       v_main=param[1],
       v_rhs=param[4],
       arg=sexp_of_t$8(caml_call1(Node[1],of_a),v_rhs),
       bnds=[0,[1,[0,_ec_,[0,arg,0]]],0],
       arg$0=caml_call2(Node[1],Core_kernel[598],v_lhs_change),
       bnds$0=[0,[1,[0,_ed_,[0,arg$0,0]]],bnds],
       _Ab_=caml_call1(Node[1],of_a),
       arg$1=caml_call2(Node[1],_Ab_,v_lhs),
       bnds$1=[0,[1,[0,_ee_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_ef_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function same$0(t1,t2){return caml_call2(Core_kernel[360],t1,t2)}
    function invariant$16(invariant_a,t)
     {function _z7_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         lhs_change_fun=
          check
           (function(lhs_change)
             {var _Aa_=lhs_change[4];
              if(typeof _Aa_ === "number")
               {if(0 === _Aa_)return 0}
              else
               if(10 === _Aa_[0])
                {var t$0=_Aa_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_eh_]}
              throw [0,Assert_failure,_eg_]}),
         main_fun=
          check
           (function(main)
             {var _z$_=main[4];
              if(typeof _z$_ === "number")
               {if(0 === _z$_)return 0}
              else
               if(11 === _z$_[0])
                {var t$0=_z$_[1];
                 if(same$0(t,t$0))return 0;
                 throw [0,Assert_failure,_ej_]}
              throw [0,Assert_failure,_ei_]});
        caml_call1(main_fun,main$14);
        caml_call1(lhs_change_fun,lhs_change$2);
        return 0}
      function _z8_(param){return _ek_}
      function _z9_(_z__){return sexp_of_t$25(_z8_,_z__)}
      return caml_call4(Base_Invariant[1],_el_,t,_z9_,_z7_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$67);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Join=[0,invariant$16,sexp_of_t$25];
    caml_register_global
     (1241,Incremental_kernel_Join,"Incremental_kernel__Join");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$68);
    caml_call1(Expect_test_collector[4][1],cst_src_snapshot_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$69,cst$22);
    function before(r){return r[3]}
    function main$15(r){return r[1]}
    function _em_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _en_=0,
     before$0=[0,[0,function(param){return 0},cst_before,_en_,before,_em_]];
    function _eo_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _ep_=0,
     main$16=[0,[0,function(param){return 0},cst_main$7,_ep_,main$15,_eo_]];
    function sexp_of_t$26(of_a,param)
     {var
       v_value_at=param[4],
       v_before=param[3],
       v_at=param[2],
       v_main=param[1],
       arg=caml_call2(Node[1],of_a,v_value_at),
       bnds=[0,[1,[0,_eq_,[0,arg,0]]],0],
       arg$0=caml_call1(of_a,v_before),
       bnds$0=[0,[1,[0,_er_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Time_ns[42],v_at),
       bnds$1=[0,[1,[0,_es_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Node[1],of_a,v_main),
       bnds$2=[0,[1,[0,_et_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$17(invariant_a,t)
     {function _z2_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         before_fun=check(invariant_a),
         main_fun=
          check
           (function(main)
             {if(is_top(main[11]))
               {var _z6_=main[4];
                if(typeof _z6_ === "number")
                 {if(0 === _z6_)return 0}
                else
                 switch(_z6_[0])
                  {case 5:return 0;
                   case 13:
                    var t$0=_z6_[1];
                    if(caml_call2(Core_kernel[359],t,t$0))return 0;
                    throw [0,Assert_failure,_ev_]
                   }
                throw [0,Assert_failure,_eu_]}
              throw [0,Assert_failure,_ew_]});
        caml_call1(main_fun,main$16);
        caml_call1(before_fun,before$0);
        return 0}
      function _z3_(param){return _ex_}
      function _z4_(_z5_){return sexp_of_t$26(_z3_,_z5_)}
      return caml_call4(Base_Invariant[1],_ey_,t,_z4_,_z2_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$70);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Snapshot=[0,invariant$17,sexp_of_t$26];
    caml_register_global
     (1242,Incremental_kernel_Snapshot,"Incremental_kernel__Snapshot");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$71);
    caml_call1(Expect_test_collector[4][1],cst_src_kind_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$72,cst$23);
    function sexp_of_t$27(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_ez_:_eA_;
      else
       switch(param[0])
        {case 0:
          var
           v0=param[1],
           v0$0=sexp_of_t$17(function(param){return _eB_},of_a,v0);
          return [1,[0,_eC_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=sexp_of_t$18(v0$1);
          return [1,[0,_eD_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=sexp_of_t$19(v0$3);
          return [1,[0,_eE_,[0,v0$4,0]]];
         case 3:
          var
           v0$5=param[1],
           _y2_=function(param){return _eF_},
           v0$6=sexp_of_t$20(function(param){return _eG_},_y2_,v0$5);
          return [1,[0,_eH_,[0,v0$6,0]]];
         case 4:
          var
           v0$7=param[1],
           v0$8=sexp_of_t$20(function(param){return _eI_},of_a,v0$7);
          return [1,[0,_eJ_,[0,v0$8,0]]];
         case 5:
          var v0$9=param[1],v0$10=caml_call1(of_a,v0$9);
          return [1,[0,_eK_,[0,v0$10,0]]];
         case 6:
          var v0$11=param[1],v0$12=sexp_of_t$22(of_a,v0$11);
          return [1,[0,_eL_,[0,v0$12,0]]];
         case 7:
          var v0$13=param[1],v0$14=sexp_of_t$23(of_a,v0$13);
          return [1,[0,_eM_,[0,v0$14,0]]];
         case 8:
          var
           v0$15=param[1],
           v0$16=sexp_of_t$24(function(param){return _eN_},v0$15);
          return [1,[0,_eO_,[0,v0$16,0]]];
         case 9:
          var v0$17=param[1],v0$18=sexp_of_t$24(of_a,v0$17);
          return [1,[0,_eP_,[0,v0$18,0]]];
         case 10:
          var
           v0$19=param[1],
           v0$20=sexp_of_t$25(function(param){return _eQ_},v0$19);
          return [1,[0,_eR_,[0,v0$20,0]]];
         case 11:
          var v0$21=param[1],v0$22=sexp_of_t$25(of_a,v0$21);
          return [1,[0,_eS_,[0,v0$22,0]]];
         case 12:
          var
           v1=param[2],
           _y3_=function(_z0_){return 0},
           v0$23=caml_call1(Sexplib0_Sexp_conv[24],_y3_),
           _y4_=function(param){return _eT_},
           v1$0=caml_call2(Node[1],_y4_,v1);
          return [1,[0,_eU_,[0,v0$23,[0,v1$0,0]]]];
         case 13:
          var v0$24=param[1],v0$25=sexp_of_t$26(of_a,v0$24);
          return [1,[0,_eV_,[0,v0$25,0]]];
         case 14:
          var v0$26=param[1],v0$27=sexp_of_t$16(of_a,v0$26);
          return [1,[0,_eW_,[0,v0$27,0]]];
         case 15:
          var
           v0$28=param[1],
           v0$29=sexp_of_t$14(function(param){return _eX_},of_a,v0$28);
          return [1,[0,_eY_,[0,v0$29,0]]];
         case 16:
          var v0$30=param[1],v0$31=sexp_of_t$12(of_a,v0$30);
          return [1,[0,_eZ_,[0,v0$31,0]]];
         case 17:
          var
           v2=param[3],
           v1$1=param[2],
           _y5_=function(_zZ_){return 0},
           v0$32=caml_call1(Sexplib0_Sexp_conv[24],_y5_),
           _y6_=function(param){return _e0_},
           v1$2=caml_call2(Node[1],_y6_,v1$1),
           _y7_=function(param){return _e1_},
           v2$0=caml_call2(Node[1],_y7_,v2);
          return [1,[0,_e2_,[0,v0$32,[0,v1$2,[0,v2$0,0]]]]];
         case 18:
          var
           v3=param[4],
           v2$1=param[3],
           v1$3=param[2],
           _y8_=function(_zY_){return 0},
           v0$33=caml_call1(Sexplib0_Sexp_conv[24],_y8_),
           _y9_=function(param){return _e3_},
           v1$4=caml_call2(Node[1],_y9_,v1$3),
           _y__=function(param){return _e4_},
           v2$2=caml_call2(Node[1],_y__,v2$1),
           _y$_=function(param){return _e5_},
           v3$0=caml_call2(Node[1],_y$_,v3);
          return [1,[0,_e6_,[0,v0$33,[0,v1$4,[0,v2$2,[0,v3$0,0]]]]]];
         case 19:
          var
           v4=param[5],
           v3$1=param[4],
           v2$3=param[3],
           v1$5=param[2],
           _za_=function(_zX_){return 0},
           v0$34=caml_call1(Sexplib0_Sexp_conv[24],_za_),
           _zb_=function(param){return _e7_},
           v1$6=caml_call2(Node[1],_zb_,v1$5),
           _zc_=function(param){return _e8_},
           v2$4=caml_call2(Node[1],_zc_,v2$3),
           _zd_=function(param){return _e9_},
           v3$2=caml_call2(Node[1],_zd_,v3$1),
           _ze_=function(param){return _e__},
           v4$0=caml_call2(Node[1],_ze_,v4);
          return [1,[0,_e$_,[0,v0$34,[0,v1$6,[0,v2$4,[0,v3$2,[0,v4$0,0]]]]]]];
         case 20:
          var
           v5=param[6],
           v4$1=param[5],
           v3$3=param[4],
           v2$5=param[3],
           v1$7=param[2],
           _zf_=function(_zW_){return 0},
           v0$35=caml_call1(Sexplib0_Sexp_conv[24],_zf_),
           _zg_=function(param){return _fa_},
           v1$8=caml_call2(Node[1],_zg_,v1$7),
           _zh_=function(param){return _fb_},
           v2$6=caml_call2(Node[1],_zh_,v2$5),
           _zi_=function(param){return _fc_},
           v3$4=caml_call2(Node[1],_zi_,v3$3),
           _zj_=function(param){return _fd_},
           v4$2=caml_call2(Node[1],_zj_,v4$1),
           _zk_=function(param){return _fe_},
           v5$0=caml_call2(Node[1],_zk_,v5);
          return [1,
                  [0,
                   _ff_,
                   [0,v0$35,[0,v1$8,[0,v2$6,[0,v3$4,[0,v4$2,[0,v5$0,0]]]]]]]];
         case 21:
          var
           v6=param[7],
           v5$1=param[6],
           v4$3=param[5],
           v3$5=param[4],
           v2$7=param[3],
           v1$9=param[2],
           _zl_=function(_zV_){return 0},
           v0$36=caml_call1(Sexplib0_Sexp_conv[24],_zl_),
           _zm_=function(param){return _fg_},
           v1$10=caml_call2(Node[1],_zm_,v1$9),
           _zn_=function(param){return _fh_},
           v2$8=caml_call2(Node[1],_zn_,v2$7),
           _zo_=function(param){return _fi_},
           v3$6=caml_call2(Node[1],_zo_,v3$5),
           _zp_=function(param){return _fj_},
           v4$4=caml_call2(Node[1],_zp_,v4$3),
           _zq_=function(param){return _fk_},
           v5$2=caml_call2(Node[1],_zq_,v5$1),
           _zr_=function(param){return _fl_},
           v6$0=caml_call2(Node[1],_zr_,v6);
          return [1,
                  [0,
                   _fm_,
                   [0,
                    v0$36,
                    [0,v1$10,[0,v2$8,[0,v3$6,[0,v4$4,[0,v5$2,[0,v6$0,0]]]]]]]]];
         case 22:
          var
           v7=param[8],
           v6$1=param[7],
           v5$3=param[6],
           v4$5=param[5],
           v3$7=param[4],
           v2$9=param[3],
           v1$11=param[2],
           _zs_=function(_zU_){return 0},
           v0$37=caml_call1(Sexplib0_Sexp_conv[24],_zs_),
           _zt_=function(param){return _fn_},
           v1$12=caml_call2(Node[1],_zt_,v1$11),
           _zu_=function(param){return _fo_},
           v2$10=caml_call2(Node[1],_zu_,v2$9),
           _zv_=function(param){return _fp_},
           v3$8=caml_call2(Node[1],_zv_,v3$7),
           _zw_=function(param){return _fq_},
           v4$6=caml_call2(Node[1],_zw_,v4$5),
           _zx_=function(param){return _fr_},
           v5$4=caml_call2(Node[1],_zx_,v5$3),
           _zy_=function(param){return _fs_},
           v6$2=caml_call2(Node[1],_zy_,v6$1),
           _zz_=function(param){return _ft_},
           v7$0=caml_call2(Node[1],_zz_,v7);
          return [1,
                  [0,
                   _fu_,
                   [0,
                    v0$37,
                    [0,
                     v1$12,
                     [0,v2$10,[0,v3$8,[0,v4$6,[0,v5$4,[0,v6$2,[0,v7$0,0]]]]]]]]]];
         case 23:
          var
           v8=param[9],
           v7$1=param[8],
           v6$3=param[7],
           v5$5=param[6],
           v4$7=param[5],
           v3$9=param[4],
           v2$11=param[3],
           v1$13=param[2],
           _zA_=function(_zT_){return 0},
           v0$38=caml_call1(Sexplib0_Sexp_conv[24],_zA_),
           _zB_=function(param){return _fv_},
           v1$14=caml_call2(Node[1],_zB_,v1$13),
           _zC_=function(param){return _fw_},
           v2$12=caml_call2(Node[1],_zC_,v2$11),
           _zD_=function(param){return _fx_},
           v3$10=caml_call2(Node[1],_zD_,v3$9),
           _zE_=function(param){return _fy_},
           v4$8=caml_call2(Node[1],_zE_,v4$7),
           _zF_=function(param){return _fz_},
           v5$6=caml_call2(Node[1],_zF_,v5$5),
           _zG_=function(param){return _fA_},
           v6$4=caml_call2(Node[1],_zG_,v6$3),
           _zH_=function(param){return _fB_},
           v7$2=caml_call2(Node[1],_zH_,v7$1),
           _zI_=function(param){return _fC_},
           v8$0=caml_call2(Node[1],_zI_,v8);
          return [1,
                  [0,
                   _fD_,
                   [0,
                    v0$38,
                    [0,
                     v1$14,
                     [0,
                      v2$12,
                      [0,v3$10,[0,v4$8,[0,v5$6,[0,v6$4,[0,v7$2,[0,v8$0,0]]]]]]]]]]];
         default:
          var
           v9=param[10],
           v8$1=param[9],
           v7$3=param[8],
           v6$5=param[7],
           v5$7=param[6],
           v4$9=param[5],
           v3$11=param[4],
           v2$13=param[3],
           v1$15=param[2],
           _zJ_=function(_z1_){return 0},
           v0$39=caml_call1(Sexplib0_Sexp_conv[24],_zJ_),
           _zK_=function(param){return _fE_},
           v1$16=caml_call2(Node[1],_zK_,v1$15),
           _zL_=function(param){return _fF_},
           v2$14=caml_call2(Node[1],_zL_,v2$13),
           _zM_=function(param){return _fG_},
           v3$12=caml_call2(Node[1],_zM_,v3$11),
           _zN_=function(param){return _fH_},
           v4$10=caml_call2(Node[1],_zN_,v4$9),
           _zO_=function(param){return _fI_},
           v5$8=caml_call2(Node[1],_zO_,v5$7),
           _zP_=function(param){return _fJ_},
           v6$6=caml_call2(Node[1],_zP_,v6$5),
           _zQ_=function(param){return _fK_},
           v7$4=caml_call2(Node[1],_zQ_,v7$3),
           _zR_=function(param){return _fL_},
           v8$2=caml_call2(Node[1],_zR_,v8$1),
           _zS_=function(param){return _fM_},
           v9$0=caml_call2(Node[1],_zS_,v9);
          return [1,
                  [0,
                   _fN_,
                   [0,
                    v0$39,
                    [0,
                     v1$16,
                     [0,
                      v2$14,
                      [0,
                       v3$12,
                       [0,v4$10,[0,v5$8,[0,v6$6,[0,v7$4,[0,v8$2,[0,v9$0,0]]]]]]]]]]]]}}
    function name(param)
     {if(typeof param === "number")
       return 0 === param?cst_Invalid:cst_Uninitialized;
      else
       switch(param[0])
        {case 0:return cst_Array_fold;
         case 1:return cst_At;
         case 2:return cst_At_intervals;
         case 3:return cst_Bind_lhs_change;
         case 4:return cst_Bind_main;
         case 5:return cst_Const;
         case 6:return cst_Expert;
         case 7:return cst_Freeze;
         case 8:return cst_If_test_change;
         case 9:return cst_If_then_else;
         case 10:return cst_Join_lhs_change;
         case 11:return cst_Join_main;
         case 12:return cst_Map;
         case 13:return cst_Snapshot;
         case 14:return cst_Step_function;
         case 15:return cst_Unordered_array_fold;
         case 16:return cst_Var;
         case 17:return cst_Map2;
         case 18:return cst_Map3;
         case 19:return cst_Map4;
         case 20:return cst_Map5;
         case 21:return cst_Map6;
         case 22:return cst_Map7;
         case 23:return cst_Map8;
         default:return cst_Map9}}
    function invariant$18(invariant_a,t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var array_fold=t[1];
          return invariant$8(function(_y1_){return 0},invariant_a,array_fold);
         case 1:var at=t[1];return invariant$9(at);
         case 2:var at_intervals=t[1];return invariant$10(at_intervals);
         case 3:
          var bind=t[1],_yT_=function(_y0_){return 0};
          return invariant$11(function(_yZ_){return 0},_yT_,bind);
         case 4:
          var bind$0=t[1];
          return invariant$11(function(_yY_){return 0},invariant_a,bind$0);
         case 5:var a=t[1];return caml_call1(invariant_a,a);
         case 6:var e=t[1];return invariant$12(invariant_a,e);
         case 7:var freeze=t[1];return invariant$14(invariant_a,freeze);
         case 8:
          var if_then_else=t[1];
          return invariant$15(function(_yX_){return 0},if_then_else);
         case 9:
          var if_then_else$0=t[1];
          return invariant$15(invariant_a,if_then_else$0);
         case 10:
          var join=t[1];return invariant$16(function(_yW_){return 0},join);
         case 11:var join$0=t[1];return invariant$16(invariant_a,join$0);
         case 12:return 0;
         case 13:var snapshot=t[1];return invariant$17(invariant_a,snapshot);
         case 14:
          var step_function=t[1];
          return invariant$7(invariant_a,step_function);
         case 15:
          var unordered_array_fold=t[1];
          return invariant$5
                  (function(_yV_){return 0},invariant_a,unordered_array_fold);
         case 16:
          var var$0=t[1];return invariant$4(function(_yU_){return 0},var$0);
         case 17:return 0;
         case 18:return 0;
         case 19:return 0;
         case 20:return 0;
         case 21:return 0;
         case 22:return 0;
         case 23:return 0;
         default:return 0}}
    function initial_num_children(t)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var match=t[1],children=match[3];
          return caml_call1(Array[17],children);
         case 1:return 0;
         case 2:return 0;
         case 3:return 1;
         case 4:return 2;
         case 5:return 0;
         case 6:return 0;
         case 7:return 1;
         case 8:return 1;
         case 9:return 2;
         case 10:return 1;
         case 11:return 2;
         case 12:return 1;
         case 13:return 0;
         case 14:return 0;
         case 15:
          var match$0=t[1],children$0=match$0[6];
          return caml_call1(Array[17],children$0);
         case 16:return 0;
         case 17:return 2;
         case 18:return 3;
         case 19:return 4;
         case 20:return 5;
         case 21:return 6;
         case 22:return 7;
         case 23:return 8;
         default:return 9}}
    var
     bind_rhs_child_index=1,
     freeze_child_index=0,
     if_branch_child_index=1,
     join_rhs_child_index=1;
    function iteri_children(t,f)
     {if(typeof t === "number")
       return 0 === t?0:0;
      else
       switch(t[0])
        {case 0:
          var
           match=t[1],
           children=match[3],
           _yI_=caml_call1(Array[17],children) - 1 | 0,
           _yH_=0;
          if(! (_yI_ < 0))
           {var i=_yH_;
            for(;;)
             {caml_call2(f,i,caml_call1(Node[2],children[i + 1]));
              var _yJ_=i + 1 | 0;
              if(_yI_ !== i){var i=_yJ_;continue}
              break}}
          return 0;
         case 1:return 0;
         case 2:return 0;
         case 3:
          var bind=t[1];return caml_call2(f,0,caml_call1(Node[2],bind[3]));
         case 4:
          var match$0=t[1],lhs_change=match$0[4],rhs=match$0[5];
          caml_call2(f,0,caml_call1(Node[2],lhs_change));
          var _yK_=is_some$0(rhs);
          return _yK_?caml_call2(f,1,caml_call1(Node[2],rhs)):_yK_;
         case 5:return 0;
         case 6:
          var
           match$1=t[1],
           children$0=match$1[3],
           num_children=match$1[4],
           _yM_=num_children - 1 | 0,
           _yL_=0;
          if(! (_yM_ < 0))
           {var i$0=_yL_;
            for(;;)
             {var match$2=value_exn(children$0[i$0 + 1]),r=match$2[1];
              caml_call2(f,i$0,caml_call1(Node[2],r[1]));
              var _yN_=i$0 + 1 | 0;
              if(_yM_ !== i$0){var i$0=_yN_;continue}
              break}}
          return 0;
         case 7:
          var match$3=t[1],child=match$3[2];
          return caml_call2(f,0,caml_call1(Node[2],child));
         case 8:
          var match$4=t[1],test=match$4[2];
          return caml_call2(f,0,caml_call1(Node[2],test));
         case 9:
          var match$5=t[1],test_change=match$5[3],current_branch=match$5[4];
          caml_call2(f,0,caml_call1(Node[2],test_change));
          var _yO_=is_some$0(current_branch);
          return _yO_?caml_call2(f,1,caml_call1(Node[2],current_branch)):_yO_;
         case 10:
          var match$6=t[1],lhs=match$6[2];
          return caml_call2(f,0,caml_call1(Node[2],lhs));
         case 11:
          var match$7=t[1],lhs_change$0=match$7[3],rhs$0=match$7[4];
          caml_call2(f,0,caml_call1(Node[2],lhs_change$0));
          var _yP_=is_some$0(rhs$0);
          return _yP_?caml_call2(f,1,caml_call1(Node[2],rhs$0)):_yP_;
         case 12:
          var node0=t[2];return caml_call2(f,0,caml_call1(Node[2],node0));
         case 13:return 0;
         case 14:return 0;
         case 15:
          var
           match$8=t[1],
           children$1=match$8[6],
           _yR_=caml_call1(Array[17],children$1) - 1 | 0,
           _yQ_=0;
          if(! (_yR_ < 0))
           {var i$1=_yQ_;
            for(;;)
             {caml_call2(f,i$1,caml_call1(Node[2],children$1[i$1 + 1]));
              var _yS_=i$1 + 1 | 0;
              if(_yR_ !== i$1){var i$1=_yS_;continue}
              break}}
          return 0;
         case 16:return 0;
         case 17:
          var node1=t[3],node0$0=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$0));
          return caml_call2(f,1,caml_call1(Node[2],node1));
         case 18:
          var node2=t[4],node1$0=t[3],node0$1=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$1));
          caml_call2(f,1,caml_call1(Node[2],node1$0));
          return caml_call2(f,2,caml_call1(Node[2],node2));
         case 19:
          var node3=t[5],node2$0=t[4],node1$1=t[3],node0$2=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$2));
          caml_call2(f,1,caml_call1(Node[2],node1$1));
          caml_call2(f,2,caml_call1(Node[2],node2$0));
          return caml_call2(f,3,caml_call1(Node[2],node3));
         case 20:
          var node4=t[6],node3$0=t[5],node2$1=t[4],node1$2=t[3],node0$3=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$3));
          caml_call2(f,1,caml_call1(Node[2],node1$2));
          caml_call2(f,2,caml_call1(Node[2],node2$1));
          caml_call2(f,3,caml_call1(Node[2],node3$0));
          return caml_call2(f,4,caml_call1(Node[2],node4));
         case 21:
          var
           node5=t[7],
           node4$0=t[6],
           node3$1=t[5],
           node2$2=t[4],
           node1$3=t[3],
           node0$4=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$4));
          caml_call2(f,1,caml_call1(Node[2],node1$3));
          caml_call2(f,2,caml_call1(Node[2],node2$2));
          caml_call2(f,3,caml_call1(Node[2],node3$1));
          caml_call2(f,4,caml_call1(Node[2],node4$0));
          return caml_call2(f,5,caml_call1(Node[2],node5));
         case 22:
          var
           node6=t[8],
           node5$0=t[7],
           node4$1=t[6],
           node3$2=t[5],
           node2$3=t[4],
           node1$4=t[3],
           node0$5=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$5));
          caml_call2(f,1,caml_call1(Node[2],node1$4));
          caml_call2(f,2,caml_call1(Node[2],node2$3));
          caml_call2(f,3,caml_call1(Node[2],node3$2));
          caml_call2(f,4,caml_call1(Node[2],node4$1));
          caml_call2(f,5,caml_call1(Node[2],node5$0));
          return caml_call2(f,6,caml_call1(Node[2],node6));
         case 23:
          var
           node7=t[9],
           node6$0=t[8],
           node5$1=t[7],
           node4$2=t[6],
           node3$3=t[5],
           node2$4=t[4],
           node1$5=t[3],
           node0$6=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$6));
          caml_call2(f,1,caml_call1(Node[2],node1$5));
          caml_call2(f,2,caml_call1(Node[2],node2$4));
          caml_call2(f,3,caml_call1(Node[2],node3$3));
          caml_call2(f,4,caml_call1(Node[2],node4$2));
          caml_call2(f,5,caml_call1(Node[2],node5$1));
          caml_call2(f,6,caml_call1(Node[2],node6$0));
          return caml_call2(f,7,caml_call1(Node[2],node7));
         default:
          var
           node8=t[10],
           node7$0=t[9],
           node6$1=t[8],
           node5$2=t[7],
           node4$3=t[6],
           node3$4=t[5],
           node2$5=t[4],
           node1$6=t[3],
           node0$7=t[2];
          caml_call2(f,0,caml_call1(Node[2],node0$7));
          caml_call2(f,1,caml_call1(Node[2],node1$6));
          caml_call2(f,2,caml_call1(Node[2],node2$5));
          caml_call2(f,3,caml_call1(Node[2],node3$4));
          caml_call2(f,4,caml_call1(Node[2],node4$3));
          caml_call2(f,5,caml_call1(Node[2],node5$2));
          caml_call2(f,6,caml_call1(Node[2],node6$1));
          caml_call2(f,7,caml_call1(Node[2],node7$0));
          return caml_call2(f,8,caml_call1(Node[2],node8))}}
    function slow_get_child(t,index)
     {if(typeof t !== "number")
       switch(t[0])
        {case 0:
          var
           match=t[1],
           children=match[3],
           _yD_=caml_check_bound(children,index)[index + 1];
          return caml_call1(Node[2],_yD_);
         case 6:
          var
           match$0=t[1],
           children$0=match$0[3],
           match$1=value_exn(caml_check_bound(children$0,index)[index + 1]),
           edge=match$1[1];
          return caml_call1(Node[2],edge[1]);
         case 15:
          var
           match$2=t[1],
           children$1=match$2[6],
           _yE_=caml_check_bound(children$1,index)[index + 1];
          return caml_call1(Node[2],_yE_)
         }
      function _yC_(r)
       {iteri_children
         (t,
          function(i,child)
           {var _yG_=caml_call2(_f_,i,index);
            return _yG_?caml_call1(r,child):_yG_});
        function _yF_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[455],v0),
           v1$0=sexp_of_t$27(function(param){return _fO_},v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        return caml_call5
                (Core_kernel[349],
                 0,
                 _fP_,
                 cst_Kind_slow_get_child_got_invalid_index,
                 [0,index,t],
                 _yF_)}
      return caml_call1(Core_kernel[369],_yC_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$73);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Kind=
      [0,
       invariant$18,
       sexp_of_t$27,
       name,
       initial_num_children,
       slow_get_child,
       bind_rhs_child_index,
       freeze_child_index,
       if_branch_child_index,
       join_rhs_child_index,
       iteri_children];
    caml_register_global
     (1243,Incremental_kernel_Kind,"Incremental_kernel__Kind");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$74);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$75,cst$24);
    function user_info(r){return r[26]}
    function my_child_index_in_parent_at_index(r){return r[24]}
    function set_my_child_index_in_parent_at_index(r,v){r[24] = v;return 0}
    function my_parent_index_in_child_at_index(r){return r[23]}
    function set_my_parent_index_in_child_at_index(r,v){r[23] = v;return 0}
    function observers(r){return r[20]}
    function set_observers(r,v){r[20] = v;return 0}
    function old_value_opt(r){return r[19]}
    function set_old_value_opt(r,v){r[19] = v;return 0}
    function next_in_adjust_heights_heap(r){return r[18]}
    function set_next_in_adjust_heights_heap(r,v){r[18] = v;return 0}
    function height_in_adjust_heights_heap(r){return r[17]}
    function set_height_in_adjust_heights_heap(r,v){r[17] = v;return 0}
    function next_in_recompute_heap(r){return r[16]}
    function set_next_in_recompute_heap(r,v){r[16] = v;return 0}
    function prev_in_recompute_heap(r){return r[15]}
    function set_prev_in_recompute_heap(r,v){r[15] = v;return 0}
    function height_in_recompute_heap(r){return r[14]}
    function set_height_in_recompute_heap(r,v){r[14] = v;return 0}
    function height$0(r){return r[13]}
    function set_height(r,v){r[13] = v;return 0}
    function next_node_in_same_scope(r){return r[12]}
    function set_next_node_in_same_scope(r,v){r[12] = v;return 0}
    function created_in(r){return r[11]}
    function set_created_in(r,v){r[11] = v;return 0}
    function parent0(r){return r[10]}
    function set_parent0(r,v){r[10] = v;return 0}
    function parent1_and_beyond(r){return r[9]}
    function set_parent1_and_beyond(r,v){r[9] = v;return 0}
    function num_parents(r){return r[8]}
    function set_num_parents(r,v){r[8] = v;return 0}
    function num_on_update_handlers(r){return r[7]}
    function set_num_on_update_handlers(r,v){r[7] = v;return 0}
    function changed_at(r){return r[6]}
    function set_changed_at(r,v){r[6] = v;return 0}
    function cutoff(r){return r[5]}
    function set_cutoff(r,v){r[5] = v;return 0}
    function kind(r){return r[4]}
    function set_kind(r,v){r[4] = v;return 0}
    function value_opt(r){return r[3]}
    function set_value_opt(r,v){r[3] = v;return 0}
    function recomputed_at(r){return r[2]}
    function set_recomputed_at(r,v){r[2] = v;return 0}
    function id(r){return r[1]}
    function _fQ_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27]]}
    var
     _fR_=[0,set_my_child_index_in_parent_at_index],
     my_child_index_in_parent_at_index$0=
      [0,
       [0,
        function(param){return 0},
        cst_my_child_index_in_parent_at_index,
        _fR_,
        my_child_index_in_parent_at_index,
        _fQ_]];
    function _fS_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              v,
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _fT_=[0,set_my_parent_index_in_child_at_index],
     my_parent_index_in_child_at_index$0=
      [0,
       [0,
        function(param){return 0},
        cst_my_parent_index_in_child_at_index,
        _fT_,
        my_parent_index_in_child_at_index,
        _fS_]];
    function _fU_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _fV_=[0,set_observers],
     observers$0=
      [0,[0,function(param){return 0},cst_observers,_fV_,observers,_fU_]];
    function _fW_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _fX_=[0,set_old_value_opt],
     old_value_opt$0=
      [0,
       [0,function(param){return 0},cst_old_value_opt,_fX_,old_value_opt,_fW_]];
    function _fY_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _fZ_=[0,set_next_in_adjust_heights_heap],
     next_in_adjust_heights_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_next_in_adjust_heights_heap,
        _fZ_,
        next_in_adjust_heights_heap,
        _fY_]];
    function _f0_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f1_=[0,set_height_in_adjust_heights_heap],
     height_in_adjust_heights_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_height_in_adjust_heights_heap,
        _f1_,
        height_in_adjust_heights_heap,
        _f0_]];
    function _f2_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f3_=[0,set_next_in_recompute_heap],
     next_in_recompute_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_next_in_recompute_heap,
        _f3_,
        next_in_recompute_heap,
        _f2_]];
    function _f4_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f5_=[0,set_prev_in_recompute_heap],
     prev_in_recompute_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_prev_in_recompute_heap,
        _f5_,
        prev_in_recompute_heap,
        _f4_]];
    function _f6_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f7_=[0,set_height_in_recompute_heap],
     height_in_recompute_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_height_in_recompute_heap,
        _f7_,
        height_in_recompute_heap,
        _f6_]];
    function _f8_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f9_=[0,set_height],
     height$1=[0,[0,function(param){return 0},cst_height,_f9_,height$0,_f8_]];
    function _f__(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _f$_=[0,set_next_node_in_same_scope],
     next_node_in_same_scope$0=
      [0,
       [0,
        function(param){return 0},
        cst_next_node_in_same_scope,
        _f$_,
        next_node_in_same_scope,
        _f__]];
    function _ga_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gb_=[0,set_created_in],
     created_in$0=
      [0,[0,function(param){return 0},cst_created_in,_gb_,created_in,_ga_]];
    function _gc_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gd_=[0,set_parent0],
     parent0$0=[0,[0,function(param){return 0},cst_parent0,_gd_,parent0,_gc_]];
    function _ge_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gf_=[0,set_parent1_and_beyond],
     parent1_and_beyond$0=
      [0,
       [0,
        function(param){return 0},
        cst_parent1_and_beyond,
        _gf_,
        parent1_and_beyond,
        _ge_]];
    function _gg_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gh_=[0,set_num_parents],
     num_parents$0=
      [0,[0,function(param){return 0},cst_num_parents,_gh_,num_parents,_gg_]];
    function _gi_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gj_=[0,set_num_on_update_handlers],
     num_on_update_handlers$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_on_update_handlers,
        _gj_,
        num_on_update_handlers,
        _gi_]];
    function _gk_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gl_=[0,set_changed_at],
     changed_at$0=
      [0,[0,function(param){return 0},cst_changed_at,_gl_,changed_at,_gk_]];
    function _gm_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gn_=[0,set_cutoff],
     cutoff$0=[0,[0,function(param){return 0},cst_cutoff,_gn_,cutoff,_gm_]];
    function _go_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gp_=[0,set_kind],
     kind$0=[0,[0,function(param){return 0},cst_kind,_gp_,kind,_go_]];
    function _gq_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gr_=[0,set_value_opt],
     value_opt$0=
      [0,[0,function(param){return 0},cst_value_opt,_gr_,value_opt,_gq_]];
    function _gs_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var
     _gt_=[0,set_recomputed_at],
     recomputed_at$0=
      [0,
       [0,function(param){return 0},cst_recomputed_at,_gt_,recomputed_at,_gs_]];
    function _gu_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27]]}
    var _gv_=0,id$0=[0,[0,function(param){return 0},cst_id,_gv_,id,_gu_]];
    function sexp_of_t$28(of_a,param)
     {var
       v_id=param[1],
       v_recomputed_at=param[2],
       v_value_opt=param[3],
       v_kind=param[4],
       v_cutoff=param[5],
       v_changed_at=param[6],
       v_num_on_update_handlers=param[7],
       v_num_parents=param[8],
       v_parent1_and_beyond=param[9],
       v_parent0=param[10],
       v_created_in=param[11],
       v_next_node_in_same_scope=param[12],
       v_height=param[13],
       v_height_in_recompute_heap=param[14],
       v_prev_in_recompute_heap=param[15],
       v_next_in_recompute_heap=param[16],
       v_height_in_adjust_heights_heap=param[17],
       v_next_in_adjust_heights_heap=param[18],
       v_old_value_opt=param[19],
       v_observers=param[20],
       v_is_in_handle_after_stabilization=param[21],
       v_on_update_handlers=param[22],
       v_my_parent_index_in_child_at_index=param[23],
       v_my_child_index_in_parent_at_index=param[24],
       v_force_necessary=param[25],
       v_user_info=param[26],
       v_creation_backtrace=param[27],
       arg=caml_call2(Core_kernel[542],Base_Backtrace[1],v_creation_backtrace),
       bnds=[0,[1,[0,_gw_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[542],Core_kernel_Info[5],v_user_info),
       bnds$0=[0,[1,[0,_gx_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[410],v_force_necessary),
       bnds$1=[0,[1,[0,_gy_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2
         (Core_kernel[395],
          Core_kernel[455],
          v_my_child_index_in_parent_at_index),
       bnds$2=[0,[1,[0,_gz_,[0,arg$2,0]]],bnds$1],
       arg$3=
        caml_call2
         (Core_kernel[395],
          Core_kernel[455],
          v_my_parent_index_in_child_at_index),
       bnds$3=[0,[1,[0,_gA_,[0,arg$3,0]]],bnds$2];
      function _yx_(_yB_){return sexp_of_t$6(of_a,_yB_)}
      var
       arg$4=caml_call2(Core_kernel[513],_yx_,v_on_update_handlers),
       bnds$4=[0,[1,[0,_gB_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[410],v_is_in_handle_after_stabilization),
       bnds$5=[0,[1,[0,_gC_,[0,arg$5,0]]],bnds$4],
       arg$6=sexp_of_t$8(Sexplib0_Sexp_conv[23],v_observers),
       bnds$6=[0,[1,[0,_gD_,[0,arg$6,0]]],bnds$5],
       arg$7=sexp_of_t$8(of_a,v_old_value_opt),
       bnds$7=[0,[1,[0,_gE_,[0,arg$7,0]]],bnds$6],
       arg$8=sexp_of_t$8(Packed_node[1],v_next_in_adjust_heights_heap),
       bnds$8=[0,[1,[0,_gF_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel[455],v_height_in_adjust_heights_heap),
       bnds$9=[0,[1,[0,_gG_,[0,arg$9,0]]],bnds$8],
       arg$10=sexp_of_t$8(Packed_node[1],v_next_in_recompute_heap),
       bnds$10=[0,[1,[0,_gH_,[0,arg$10,0]]],bnds$9],
       arg$11=sexp_of_t$8(Packed_node[1],v_prev_in_recompute_heap),
       bnds$11=[0,[1,[0,_gI_,[0,arg$11,0]]],bnds$10],
       arg$12=caml_call1(Core_kernel[455],v_height_in_recompute_heap),
       bnds$12=[0,[1,[0,_gJ_,[0,arg$12,0]]],bnds$11],
       arg$13=caml_call1(Core_kernel[455],v_height),
       bnds$13=[0,[1,[0,_gK_,[0,arg$13,0]]],bnds$12],
       arg$14=sexp_of_t$8(Packed_node[1],v_next_node_in_same_scope),
       bnds$14=[0,[1,[0,_gL_,[0,arg$14,0]]],bnds$13],
       arg$15=caml_call1(_dG_,v_created_in),
       bnds$15=[0,[1,[0,_gM_,[0,arg$15,0]]],bnds$14],
       arg$16=sexp_of_t$8(Packed_node[1],v_parent0),
       bnds$16=[0,[1,[0,_gN_,[0,arg$16,0]]],bnds$15],
       _yy_=Packed_node[1];
      function _yz_(_yA_){return sexp_of_t$8(_yy_,_yA_)}
      var
       arg$17=caml_call2(Core_kernel[395],_yz_,v_parent1_and_beyond),
       bnds$17=[0,[1,[0,_gO_,[0,arg$17,0]]],bnds$16],
       arg$18=caml_call1(Core_kernel[455],v_num_parents),
       bnds$18=[0,[1,[0,_gP_,[0,arg$18,0]]],bnds$17],
       arg$19=caml_call1(Core_kernel[455],v_num_on_update_handlers),
       bnds$19=[0,[1,[0,_gQ_,[0,arg$19,0]]],bnds$18],
       arg$20=caml_call1(_W_,v_changed_at),
       bnds$20=[0,[1,[0,_gR_,[0,arg$20,0]]],bnds$19],
       arg$21=sexp_of_t$3(of_a,v_cutoff),
       bnds$21=[0,[1,[0,_gS_,[0,arg$21,0]]],bnds$20],
       arg$22=sexp_of_t$27(of_a,v_kind),
       bnds$22=[0,[1,[0,_gT_,[0,arg$22,0]]],bnds$21],
       arg$23=sexp_of_t$8(of_a,v_value_opt),
       bnds$23=[0,[1,[0,_gU_,[0,arg$23,0]]],bnds$22],
       arg$24=caml_call1(_W_,v_recomputed_at),
       bnds$24=[0,[1,[0,_gV_,[0,arg$24,0]]],bnds$23],
       arg$25=caml_call1(sexp_of_t$4,v_id),
       bnds$25=[0,[1,[0,_gW_,[0,arg$25,0]]],bnds$24];
      return [1,bnds$25]}
    function same$1(t1,t2){return caml_call2(Core_kernel[360],t1,t2)}
    function pack$1(t){return t}
    function set_user_info(t,user_info){t[26] = user_info;return 0}
    var is_necessary$1=Node[4];
    function iteri_children$0(t,f){return iteri_children(t[4],f)}
    var is_valid$2=Node[3];
    function edge_is_stale(child,parent)
     {return caml_call2(_g_,caml_call2(___,child[6],parent[2]),0)}
    function is_stale_with_respect_to_a_child(t)
     {var is_stale=[0,0];
      iteri_children$0
       (t,
        function(param,child)
         {var _yv_=edge_is_stale(child,t),_yw_=_yv_?(is_stale[1] = 1,0):_yv_;
          return _yw_});
      return is_stale[1]}
    function is_stale(t)
     {var _yp_=t[4];
      if(typeof _yp_ === "number")
       {if(0 === _yp_)return 0;throw [0,Assert_failure,_gX_]}
      else
       switch(_yp_[0])
        {case 1:return is_none(t[2]);
         case 2:return is_none(t[2]);
         case 3:
          var _yr_=is_none(t[2]);
          return _yr_?_yr_:is_stale_with_respect_to_a_child(t);
         case 5:return is_none(t[2]);
         case 6:
          var match=_yp_[1],force_stale=match[5];
          if(force_stale)
           var force_stale$0=force_stale;
          else
           {var _ys_=is_none(t[2]);
            if(! _ys_)return is_stale_with_respect_to_a_child(t);
            var force_stale$0=_ys_}
          return force_stale$0;
         case 8:
          var _yt_=is_none(t[2]);
          return _yt_?_yt_:is_stale_with_respect_to_a_child(t);
         case 10:
          var _yu_=is_none(t[2]);
          return _yu_?_yu_:is_stale_with_respect_to_a_child(t);
         case 13:return is_none(t[2]);
         case 14:return is_none(t[2]);
         case 16:
          var match$0=_yp_[1],set_at=match$0[3];
          return caml_call2(_g_,caml_call2(___,set_at,t[2]),0);
         default:
          var _yq_=is_none(t[2]);
          return _yq_?_yq_:is_stale_with_respect_to_a_child(t)}}
    function needs_to_be_computed(t)
     {var _yo_=caml_call1(is_necessary$1,t);return _yo_?is_stale(t):_yo_}
    function is_in_recompute_heap(t){return caml_call2(_d_,t[14],0)}
    function is_in_adjust_heights_heap(t){return caml_call2(_d_,t[17],0)}
    function get_parent(t,index)
     {if(caml_call2(_f_,index,0))
       var _ym_=t[10];
      else
       var _yn_=index - 1 | 0,_ym_=caml_check_bound(t[9],_yn_)[_yn_ + 1];
      return value_exn(_ym_)}
    function iteri_parents(t,f)
     {var _yg_=caml_call2(_g_,t[8],0);
      if(_yg_)
       {caml_call2(f,0,value_exn(t[10]));
        var _yi_=t[8] - 1 | 0,_yh_=1;
        if(! (_yi_ < 1))
         {var index=_yh_;
          for(;;)
           {var _yk_=index - 1 | 0;
            caml_call2
             (f,index,value_exn(caml_check_bound(t[9],_yk_)[_yk_ + 1]));
            var _yl_=index + 1 | 0;
            if(_yi_ !== index){var index=_yl_;continue}
            break}}
        var _yj_=0}
      else
       var _yj_=_yg_;
      return _yj_}
    function has_child(t,child)
     {var has=[0,0];
      iteri_children$0
       (t,
        function(param,child$0)
         {var _ye_=has[1],_yf_=_ye_ || same$1(child,child$0);
          has[1] = _yf_;
          return 0});
      return has[1]}
    function has_parent(t,parent)
     {var has=[0,0];
      iteri_parents
       (t,
        function(param,parent$0)
         {var _yc_=has[1],_yd_=_yc_ || same$1(parent,parent$0);
          has[1] = _yd_;
          return 0});
      return has[1]}
    function should_be_invalidated(t)
     {var _x$_=t[4];
      if(typeof _x$_ === "number")
       {if(0 === _x$_)return 0;throw [0,Assert_failure,_gY_]}
      else
       switch(_x$_[0])
        {case 1:return 0;
         case 2:return 0;
         case 3:
          var match=_x$_[1],lhs=match[3];
          return 1 - caml_call1(is_valid$2,lhs);
         case 4:
          var match$0=_x$_[1],lhs_change=match$0[4];
          return 1 - caml_call1(is_valid$2,lhs_change);
         case 6:return 0;
         case 8:
          var match$1=_x$_[1],test=match$1[2];
          return 1 - caml_call1(is_valid$2,test);
         case 9:
          var match$2=_x$_[1],test_change=match$2[3];
          return 1 - caml_call1(is_valid$2,test_change);
         case 10:
          var match$3=_x$_[1],lhs$0=match$3[2];
          return 1 - caml_call1(is_valid$2,lhs$0);
         case 11:
          var match$4=_x$_[1],lhs_change$0=match$4[3];
          return 1 - caml_call1(is_valid$2,lhs_change$0);
         case 5:
         case 13:
         case 14:
         case 16:return 0;
         default:
          var has=[0,0];
          iteri_children$0
           (t,
            function(param,child)
             {var _ya_=has[1],_yb_=_ya_ || 1 - caml_call1(is_valid$2,child);
              has[1] = _yb_;
              return 0});
          return has[1]}}
    function fold_observers(t,init,f)
     {var r=[0,t[20]],ac=[0,init];
      for(;;)
       {if(is_some$0(r[1]))
         {var observer=value_exn(r[1]);
          r[1] = observer[7];
          ac[1] = caml_call2(f,ac[1],observer);
          continue}
        return ac[1]}}
    function invariant$19(invariant_a,t)
     {function _xM_(param)
       {var
         t2=is_in_recompute_heap(t),
         t1=needs_to_be_computed(t),
         sexpifier=Core_kernel[410],
         comparator=Core_kernel[406];
        caml_call8
         (Ppx_assert_lib_Runtime[2],pos$3,sexpifier,comparator,0,0,0,t1,t2);
        if(caml_call1(is_necessary$1,t))
         {var _xQ_=height(t[11]);
          if(! caml_call2(_g_,t[13],_xQ_))throw [0,Assert_failure,_hq_];
          iteri_children$0
           (t,
            function(param,child)
             {if(caml_call2(_g_,t[13],child[13]))
               {if(has_parent(child,t))return 0;throw [0,Assert_failure,_gZ_]}
              throw [0,Assert_failure,_g0_]});
          if(should_be_invalidated(t))throw [0,Assert_failure,_g1_]}
        iteri_parents
         (t,
          function(param,parent)
           {if(has_child(parent,t))
             {if(caml_call1(is_necessary$1,parent))
               {if(caml_call2(_h_,t[13],parent[13]))return 0;
                throw [0,Assert_failure,_g2_]}
              throw [0,Assert_failure,_g3_]}
            throw [0,Assert_failure,_g4_]});
        function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         my_child_index_in_parent_at_index_fun=
          check
           (function(my_child_index_in_parent_at_index)
             {var
               got=caml_call1(Array[17],my_child_index_in_parent_at_index),
               expect=caml_call1(Array[17],t[9]) + 1 | 0,
               sexpifier=Core_kernel[455],
               comparator=Core_kernel[451];
              caml_call8
               (Ppx_assert_lib_Runtime[3],
                pos$4,
                sexpifier,
                comparator,
                0,
                0,
                0,
                expect,
                got);
              return iteri_parents
                      (t,
                       function(parent_index,parent)
                        {var
                          _x__=
                           caml_check_bound
                             (my_child_index_in_parent_at_index,parent_index)
                            [parent_index + 1];
                         if(same$1(t,slow_get_child(parent[4],_x__)))return 0;
                         throw [0,Assert_failure,_g5_]})}),
         my_parent_index_in_child_at_index_fun=
          check
           (function(my_parent_index_in_child_at_index)
             {var
               _x8_=t[4],
               switch$0=typeof _x8_ === "number"?0:6 === _x8_[0]?1:0;
              if(! switch$0)
               {var
                 got=caml_call1(Array[17],my_parent_index_in_child_at_index),
                 expect=initial_num_children(t[4]),
                 sexpifier=Core_kernel[455],
                 comparator=Core_kernel[451];
                caml_call8
                 (Ppx_assert_lib_Runtime[3],
                  pos$5,
                  sexpifier,
                  comparator,
                  0,
                  0,
                  0,
                  expect,
                  got)}
              var _x9_=caml_call1(is_necessary$1,t);
              return _x9_
                      ?iteri_children$0
                        (t,
                         function(child_index,child)
                          {if
                            (same$1
                              (t,
                               get_parent
                                (child,
                                 caml_check_bound
                                   (my_parent_index_in_child_at_index,child_index)
                                  [child_index + 1])))
                            return 0;
                           throw [0,Assert_failure,_g6_]})
                      :_x9_}),
         observers_fun=
          check
           (function(param)
             {return fold_observers
                      (t,
                       0,
                       function(param$0,param)
                        {var state=param[1],observing=param[2];
                         if(caml_call2(Core_kernel[359],t,observing))
                          {var switcher=state - 1 | 0;
                           if(1 < switcher >>> 0)throw [0,Assert_failure,_g7_];
                           return 0}
                         throw [0,Assert_failure,_g8_]})}),
         old_value_opt_fun=
          check(function(_x7_){return invariant$3(invariant_a,_x7_)}),
         next_in_adjust_heights_heap_fun=
          check
           (function(next_in_adjust_heights_heap)
             {if(is_in_adjust_heights_heap(t))
               {var _x6_=is_some$0(next_in_adjust_heights_heap);
                if(_x6_)
                 {var next=value_exn(next_in_adjust_heights_heap);
                  if(is_in_adjust_heights_heap(next))
                   {if(caml_call2(_f_,t[17],next[17]))return 0;
                    throw [0,Assert_failure,_g9_]}
                  throw [0,Assert_failure,_g__]}
                return _x6_}
              if(is_none$0(next_in_adjust_heights_heap))return 0;
              throw [0,Assert_failure,_g$_]}),
         height_in_adjust_heights_heap_fun=
          check
           (function(height_in_adjust_heights_heap)
             {var _x5_=caml_call2(_d_,height_in_adjust_heights_heap,0);
              if(_x5_)
               {if(caml_call2(_h_,height_in_adjust_heights_heap,t[13]))
                 return 0;
                throw [0,Assert_failure,_ha_]}
              return _x5_}),
         next_in_recompute_heap_fun=
          check
           (function(next_in_recompute_heap)
             {if(1 - is_in_recompute_heap(t))
               if(! is_none$0(next_in_recompute_heap))
                throw [0,Assert_failure,_hd_];
              var _x4_=is_some$0(next_in_recompute_heap);
              if(_x4_)
               {var next=value_exn(next_in_recompute_heap);
                if(same$1(t,value_exn(next[15])))
                 {if(caml_call2(_f_,t[14],next[14]))return 0;
                  throw [0,Assert_failure,_hb_]}
                throw [0,Assert_failure,_hc_]}
              return _x4_}),
         prev_in_recompute_heap_fun=
          check
           (function(prev_in_recompute_heap)
             {if(1 - is_in_recompute_heap(t))
               if(! is_none$0(prev_in_recompute_heap))
                throw [0,Assert_failure,_hg_];
              var _x3_=is_some$0(prev_in_recompute_heap);
              if(_x3_)
               {var prev=value_exn(prev_in_recompute_heap);
                if(same$1(t,value_exn(prev[16])))
                 {if(caml_call2(_f_,t[14],prev[14]))return 0;
                  throw [0,Assert_failure,_he_]}
                throw [0,Assert_failure,_hf_]}
              return _x3_}),
         height_in_recompute_heap_fun=
          check
           (function(height_in_recompute_heap)
             {if(caml_call2(_d_,height_in_recompute_heap,-1))
               {if(caml_call2(_e_,height_in_recompute_heap,t[13]))return 0;
                throw [0,Assert_failure,_hh_]}
              throw [0,Assert_failure,_hi_]}),
         height_fun=
          check
           (function(height)
             {if(caml_call1(is_necessary$1,t))
               {if(caml_call2(_d_,height,0))return 0;
                throw [0,Assert_failure,_hj_]}
              if(caml_call2(_f_,height,-1))return 0;
              throw [0,Assert_failure,_hk_]}),
         next_node_in_same_scope_fun=
          check
           (function(next_node_in_same_scope)
             {var
               _x1_=is_top(t[11]),
               _x2_=_x1_ || 1 - caml_call1(is_valid$2,t);
              if(_x2_)
               {if(is_none$0(next_node_in_same_scope))return 0;
                throw [0,Assert_failure,_hl_]}
              return _x2_}),
         created_in_fun=check(invariant$13),
         parent0_fun=
          check
           (function(parent0)
             {var
               t2=is_some$0(parent0),
               t1=caml_call2(_g_,t[8],0),
               sexpifier=Core_kernel[410],
               comparator=Core_kernel[406];
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$6,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       t1,
                       t2)}),
         parent1_and_beyond_fun=
          check
           (function(parent1_and_beyond)
             {var _xY_=caml_call1(Array[17],parent1_and_beyond),_xX_=1;
              if(! (_xY_ < 1))
               {var parent_index=_xX_;
                for(;;)
                 {var
                   _xZ_=parent_index - 1 | 0,
                   t2=
                    is_some$0
                     (caml_check_bound(parent1_and_beyond,_xZ_)[_xZ_ + 1]),
                   t1=caml_call2(_h_,parent_index,t[8]),
                   sexpifier=Core_kernel[410],
                   comparator=Core_kernel[406];
                  caml_call8
                   (Ppx_assert_lib_Runtime[2],
                    pos$7,
                    sexpifier,
                    comparator,
                    0,
                    0,
                    0,
                    t1,
                    t2);
                  var _x0_=parent_index + 1 | 0;
                  if(_xY_ !== parent_index){var parent_index=_x0_;continue}
                  break}}
              return 0}),
         num_parents_fun=
          check
           (function(num_parents)
             {if(caml_call2(_d_,num_parents,0))
               {if
                 (caml_call2
                   (_e_,num_parents,1 + caml_call1(Array[17],t[9]) | 0))
                 return 0;
                throw [0,Assert_failure,_hm_]}
              throw [0,Assert_failure,_hn_]}),
         _xR_=
          fold_observers
           (t,
            0,
            function(n,param)
             {var on_update_handlers=param[3];
              return n
                     +
                     caml_call1(Core_kernel_List[17],on_update_handlers)
                     |
                     0}),
         expect=caml_call1(Core_kernel_List[17],t[22]) + _xR_ | 0,
         num_on_update_handlers_fun=
          check
           (function(got)
             {var sexpifier=Core_kernel[455],comparator=Core_kernel[451];
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$8,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       expect,
                       got)}),
         changed_at_fun=
          check
           (function(changed_at)
             {invariant$2(changed_at);
              var _xW_=is_some(t[2]);
              if(_xW_)
               {if(caml_call2(_e_,caml_call2(___,changed_at,t[2]),0))return 0;
                throw [0,Assert_failure,_ho_]}
              return _xW_}),
         cutoff_fun=
          check(function(_xV_){return invariant$0(invariant_a,_xV_)}),
         kind_fun=
          check
           (function(kind)
             {invariant$18(invariant_a,kind);
              if(typeof kind !== "number" && 6 === kind[0])
               {var e=kind[1],_xU_=caml_call1(is_necessary$1,t);
                return caml_call1
                        (invariant_about_num_invalid_children(e),_xU_)}
              return 0}),
         value_opt_fun=
          check
           (function(value_opt)
             {var
               _xS_=caml_call1(is_valid$2,t),
               _xT_=_xS_?1 - is_stale(t):_xS_;
              if(_xT_)if(! is_some$0(value_opt))throw [0,Assert_failure,_hp_];
              return invariant$3(invariant_a,value_opt)}),
         recomputed_at_fun=check(invariant$2),
         id_fun=check(invariant$1);
        caml_call1(id_fun,id$0);
        caml_call1(recomputed_at_fun,recomputed_at$0);
        caml_call1(value_opt_fun,value_opt$0);
        caml_call1(kind_fun,kind$0);
        caml_call1(cutoff_fun,cutoff$0);
        caml_call1(changed_at_fun,changed_at$0);
        caml_call1(num_on_update_handlers_fun,num_on_update_handlers$0);
        caml_call1(num_parents_fun,num_parents$0);
        caml_call1(parent1_and_beyond_fun,parent1_and_beyond$0);
        caml_call1(parent0_fun,parent0$0);
        caml_call1(created_in_fun,created_in$0);
        caml_call1(next_node_in_same_scope_fun,next_node_in_same_scope$0);
        caml_call1(height_fun,height$1);
        caml_call1(height_in_recompute_heap_fun,height_in_recompute_heap$0);
        caml_call1(prev_in_recompute_heap_fun,prev_in_recompute_heap$0);
        caml_call1(next_in_recompute_heap_fun,next_in_recompute_heap$0);
        caml_call1
         (height_in_adjust_heights_heap_fun,height_in_adjust_heights_heap$0);
        caml_call1
         (next_in_adjust_heights_heap_fun,next_in_adjust_heights_heap$0);
        caml_call1(old_value_opt_fun,old_value_opt$0);
        caml_call1(observers_fun,observers$0);
        caml_call1
         (my_parent_index_in_child_at_index_fun,
          my_parent_index_in_child_at_index$0);
        caml_call1
         (my_child_index_in_parent_at_index_fun,
          my_child_index_in_parent_at_index$0);
        return 0}
      function _xN_(param){return _hr_}
      function _xO_(_xP_){return sexp_of_t$28(_xN_,_xP_)}
      return caml_call4(Base_Invariant[1],_hs_,t,_xO_,_xM_)}
    function unsafe_value$0(t){return t[3]}
    function value_exn$0(t)
     {if(is_some$0(t[3]))return t[3];
      function _xJ_(param){return _ht_}
      function _xK_(_xL_){return sexp_of_t$28(_xJ_,_xL_)}
      return caml_call5
              (Core_kernel[349],
               0,
               _hu_,
               cst_attempt_to_get_value_of_an_invalid_node,
               t,
               _xK_)}
    function get_cutoff(t){return t[5]}
    function set_cutoff$0(t,cutoff){t[5] = cutoff;return 0}
    function is_const(t)
     {var _xI_=t[4];
      if(typeof _xI_ !== "number" && 5 === _xI_[0])return 1;
      return 0}
    function on_update(t,on_update_handler)
     {t[22] = [0,on_update_handler,t[22]];t[7] = t[7] + 1 | 0;return 0}
    function run_on_update_handlers(t,node_update,now)
     {var r=[0,t[22]];
      for(;;)
       {if(caml_call1(Core_kernel_List[18],r[1]))
         {var r$0=[0,t[20]];
          a:
          for(;;)
           {if(is_some$0(r$0[1]))
             {var observer=value_exn(r$0[1]);
              r$0[1] = observer[7];
              var r$1=[0,observer[3]];
              for(;;)
               {if(caml_call1(Core_kernel_List[18],r$1[1]))continue a;
                var _xF_=r$1[1];
                if(_xF_)
                 {var rest=_xF_[2],on_update_handler=_xF_[1];
                  r$1[1] = rest;
                  var _xG_=observer[1];
                  if(0 !== _xG_)
                   {var switcher=_xG_ - 1 | 0;
                    switch(switcher)
                     {case 0:
                       run(on_update_handler,node_update,now);var switch$0=0;break;
                      case 1:var switch$0=0;break;
                      default:var switch$0=1}
                    if(! switch$0)continue}
                  throw [0,Assert_failure,_hv_]}
                throw [0,Assert_failure,_hw_]}}
            return 0}}
        var _xH_=r[1];
        if(_xH_)
         {var rest$0=_xH_[2],on_update_handler$0=_xH_[1];
          r[1] = rest$0;
          run(on_update_handler$0,node_update,now);
          continue}
        throw [0,Assert_failure,_hx_]}}
    var keep_node_creation_backtrace=[0,0];
    function set_kind$0(t,kind)
     {t[4] = kind;
      var _xE_=initial_num_children(kind);
      t[23] = caml_call2(Array[35],_xE_,-1);
      return 0}
    function create$5(created_in,kind)
     {var
       _xB_=
        keep_node_creation_backtrace[1]
         ?[0,caml_call2(Base_Backtrace[2],0,0)]
         :0,
       _xC_=initial_num_children(kind),
       _xD_=caml_call2(Array[35],_xC_,-1),
       t=
        [0,
         next(0),
         none,
         none$0,
         kind,
         phys_equal,
         none,
         0,
         0,
         [0],
         none$0,
         created_in,
         none$0,
         -1,
         -1,
         none$0,
         none$0,
         -1,
         none$0,
         none$0,
         none$0,
         0,
         0,
         _xD_,
         [0,-1],
         0,
         0,
         _xB_];
      add_node(created_in,t);
      return t}
    function max_num_parents(t){return 1 + caml_call1(Array[17],t[9]) | 0}
    function set_parent(child,parent,parent_index)
     {if(caml_call2(_f_,parent_index,0)){child[10] = parent;return 0}
      var _xA_=parent_index - 1 | 0;
      return caml_check_bound(child[9],_xA_)[_xA_ + 1] = parent}
    function link(child,child_index,parent,parent_index)
     {set_parent(child,caml_call1(Node[2],parent),parent_index);
      caml_check_bound(child[24],parent_index)[parent_index + 1]
      =
      child_index;
      return caml_check_bound(parent[23],child_index)[child_index + 1]
             =
             parent_index}
    function add_parent(child,parent,child_index)
     {var _xz_=max_num_parents(child);
      if(caml_call2(_f_,child[8],_xz_))
       {var new_max_num_parents=2 * max_num_parents(child) | 0;
        child[9]
        =
        caml_call3(Array[119],child[9],new_max_num_parents - 1 | 0,none$0);
        child[24] = caml_call3(Array[119],child[24],new_max_num_parents,-1)}
      var max_num_children=caml_call1(Array[17],parent[23]);
      if(caml_call2(_d_,child_index,max_num_children))
       {var
         new_max_num_children=
          caml_call2(include[109],2,2 * max_num_children | 0);
        parent[23] = caml_call3(Array[119],parent[23],new_max_num_children,-1)}
      link(child,child_index,parent,child[8]);
      child[8] = child[8] + 1 | 0;
      return 0}
    function remove_parent(child,parent,child_index)
     {var
       parent_index=caml_check_bound(parent[23],child_index)[child_index + 1],
       parent_index$0=child[8] - 1 | 0;
      if(caml_call2(_h_,parent_index,parent_index$0))
       {var
         _xx_=parent_index$0 - 1 | 0,
         _xy_=value_exn(caml_check_bound(child[9],_xx_)[_xx_ + 1]);
        link
         (child,
          caml_check_bound(child[24],parent_index$0)[parent_index$0 + 1],
          _xy_,
          parent_index)}
      set_parent(child,none$0,parent_index$0);
      child[8] = child[8] - 1 | 0;
      return 0}
    function swap_children_except_in_kind
     (parent,child1,child_index1,child2,child_index2)
     {var
       index_of_parent_in_child1=
        caml_check_bound(parent[23],child_index1)[child_index1 + 1],
       index_of_parent_in_child2=
        caml_check_bound(parent[23],child_index2)[child_index2 + 1];
      caml_check_bound(child1[24],index_of_parent_in_child1)
       [index_of_parent_in_child1 + 1]
      =
      child_index2;
      caml_check_bound(child2[24],index_of_parent_in_child2)
       [index_of_parent_in_child2 + 1]
      =
      child_index1;
      caml_check_bound(parent[23],child_index1)[child_index1 + 1]
      =
      index_of_parent_in_child2;
      return caml_check_bound(parent[23],child_index2)[child_index2 + 1]
             =
             index_of_parent_in_child1}
    function sexp_of_t$29(t)
     {return sexp_of_t$28(function(param){return _hy_},t)}
    function invariant$20(t){return invariant$19(function(_xw_){return 0},t)}
    function iter_descendants_internal(ts,f)
     {var seen=caml_call3(_S_[2],0,0,0);
      function iter_descendants(t)
       {var _xv_=1 - caml_call2(Core_kernel_Hash_set[20],seen,t[1]);
        return _xv_
                ?(caml_call2(Core_kernel_Hash_set[22],seen,t[1]),
                  caml_call1(f,t),
                  iteri_children$0
                   (t,function(param,t){return iter_descendants(t)}))
                :_xv_}
      caml_call2(Core_kernel_List[19],ts,iter_descendants);
      return seen}
    function iter_descendants(ts,f){iter_descendants_internal(ts,f);return 0}
    function save_dot(file,ts)
     {function _xl_(out)
       {function node_name(node)
         {var _xu_=caml_call1(to_string,node[1]);
          return caml_call2(Core_kernel[178],cst_n$0,_xu_)}
        caml_call2(Core_kernel[351],out,_hz_);
        caml_call2(Core_kernel[351],out,_hA_);
        var
         bind_edges=[0,0],
         seen=
          iter_descendants_internal
           (ts,
            function(t)
             {var name$0=node_name(t),_xq_=t[13],_xr_=name(t[4]);
              caml_call6(Core_kernel[351],out,_hB_,name$0,name$0,_xr_,_xq_);
              iteri_children$0
               (t,
                function(param,from)
                 {var _xt_=node_name(from);
                  return caml_call4(Core_kernel[351],out,_hC_,_xt_,name$0)});
              var _xs_=t[4];
              if(typeof _xs_ !== "number" && 3 === _xs_[0])
               {var bind=_xs_[1];
                return iter_nodes_created_on_rhs
                        (bind,
                         function(to)
                          {bind_edges[1] = [0,[0,t,to],bind_edges[1]];return 0})}
              return 0});
        function _xm_(param)
         {var
           to=param[2],
           from=param[1],
           _xn_=caml_call2(Core_kernel_Hash_set[20],seen,to[1]);
          if(_xn_)
           {var _xo_=node_name(to),_xp_=node_name(from);
            return caml_call4(Core_kernel[351],out,_hD_,_xp_,_xo_)}
          return _xn_}
        caml_call2(Core_kernel_List[19],bind_edges[1],_xm_);
        return caml_call2(Core_kernel[351],out,_hE_)}
      return caml_call6(Stdio_Out_channel[6],0,0,0,0,file,_xl_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$76);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Packed$0=
      [0,
       sexp_of_t$29,
       invariant$20,
       function(M)
        {function fold(t,init,f)
          {var ac=[0,init],r=[0,t];
           for(;;)
            {if(is_some$0(r[1]))
              {var _xk_=r[1];
               r[1] = caml_call1(M[1],_xk_);
               ac[1] = caml_call2(f,ac[1],_xk_);
               continue}
             return ac[1]}}
         function iter(t,f)
          {return fold(t,0,function(param,n){return caml_call1(f,n)})}
         function invariant(t){return iter(t,invariant$20)}
         function length(t)
          {return fold(t,0,function(n,param){return n + 1 | 0})}
         function sexp_of_t(t)
          {var
            _xi_=fold(t,0,function(ac,n){return [0,n,ac]}),
            _xj_=caml_call1(Core_kernel_List[47],_xi_);
           return caml_call1(caml_call1(Core_kernel[513],Packed_node[1]),_xj_)}
         return [0,sexp_of_t,invariant,length,iter]},
       iter_descendants,
       save_dot],
     include$4=
      [0,
       Packed$0,
       sexp_of_t$28,
       invariant$19,
       create$5,
       set_kind$0,
       pack$1,
       same$1,
       iteri_children$0,
       get_parent,
       add_parent,
       remove_parent,
       swap_children_except_in_kind,
       is_const,
       is_in_recompute_heap,
       is_necessary$1,
       is_valid$2,
       should_be_invalidated,
       edge_is_stale,
       is_stale,
       needs_to_be_computed,
       value_exn$0,
       unsafe_value$0,
       get_cutoff,
       set_cutoff$0,
       on_update,
       run_on_update_handlers,
       keep_node_creation_backtrace,
       user_info,
       set_user_info,
       has_child,
       has_parent];
    caml_register_global(1248,include$4,"Incremental_kernel__Node");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$77);
    caml_call1(Expect_test_collector[4][1],cst_src_recompute_heap_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$78,cst$25);
    function next$0(node){return node[16]}
    var As_recompute_list=caml_call1(Packed$0[3],[0,next$0]);
    function nodes_by_height(r){return r[3]}
    function set_nodes_by_height(r,v){r[3] = v;return 0}
    function height_lower_bound(r){return r[2]}
    function set_height_lower_bound(r,v){r[2] = v;return 0}
    function length$0(r){return r[1]}
    function set_length(r,v){r[1] = v;return 0}
    function _hF_(r,v){return [0,r[1],r[2],v]}
    var
     _hG_=[0,set_nodes_by_height],
     nodes_by_height$0=
      [0,
       [0,
        function(param){return 0},
        cst_nodes_by_height,
        _hG_,
        nodes_by_height,
        _hF_]];
    function _hH_(r,v){return [0,r[1],v,r[3]]}
    var
     _hI_=[0,set_height_lower_bound],
     height_lower_bound$0=
      [0,
       [0,
        function(param){return 0},
        cst_height_lower_bound,
        _hI_,
        height_lower_bound,
        _hH_]];
    function _hJ_(r,v){return [0,v,r[2],r[3]]}
    var
     _hK_=[0,set_length],
     length$1=[0,[0,function(param){return 0},cst_length,_hK_,length$0,_hJ_]];
    function sexp_of_t$30(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_nodes_by_height=param[3],
       max_nonempty_index=[0,-1],
       bnds=0;
      function _xf_(i,l)
       {var _xg_=is_some$0(l),_xh_=_xg_?(max_nonempty_index[1] = i,0):_xg_;
        return _xh_}
      caml_call2(Array[53],v_nodes_by_height,_xf_);
      var
       v=
        caml_call3
         (Array[45],v_nodes_by_height,0,max_nonempty_index[1] + 1 | 0),
       arg=caml_call2(Array[13],As_recompute_list[1],v),
       bnds$0=[0,[1,[0,_hL_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[455],v_height_lower_bound),
       bnds$1=[0,[1,[0,_hM_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[455],v_length),
       bnds$2=[0,[1,[0,_hN_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed(t){return caml_call1(Array[17],t[3]) - 1 | 0}
    function invariant$21(t)
     {function _w9_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=
          check
           (function(nodes_by_height)
             {function _xd_(height,node)
               {function _xe_(node)
                 {if(caml_call2(_f_,node[14],height))
                   {if(needs_to_be_computed(node))return 0;
                    throw [0,Assert_failure,_hO_]}
                  throw [0,Assert_failure,_hP_]}
                return caml_call2(As_recompute_list[4],node,_xe_)}
              return caml_call2(Array[53],nodes_by_height,_xd_)}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(_d_,height_lower_bound,0))
               {if
                 (caml_call2
                   (_e_,height_lower_bound,caml_call1(Array[17],t[3])))
                 {var _xb_=height_lower_bound - 1 | 0,_xa_=0;
                  if(! (_xb_ < 0))
                   {var height=_xa_;
                    for(;;)
                     {if(! is_none$0(caml_check_bound(t[3],height)[height + 1]))
                       throw [0,Assert_failure,_hQ_];
                      var _xc_=height + 1 | 0;
                      if(_xb_ !== height){var height=_xc_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_hR_]}
              throw [0,Assert_failure,_hS_]}),
         length_fun=
          check
           (function(t1)
             {var actual_length=[0,0];
              function _w__(node)
               {var _w$_=caml_call1(As_recompute_list[3],node);
                actual_length[1] = actual_length[1] + _w$_ | 0;
                return 0}
              caml_call2(Array[19],t[3],_w__);
              var sexpifier=Core_kernel[455],comparator=Core_kernel[451];
              return caml_call8
                      (Ppx_assert_lib_Runtime[2],
                       pos$9,
                       sexpifier,
                       comparator,
                       0,
                       0,
                       0,
                       t1,
                       actual_length[1])});
        caml_call1(length_fun,length$1);
        caml_call1(height_lower_bound_fun,height_lower_bound$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$0)}
      return caml_call4(Base_Invariant[1],_hT_,t,sexp_of_t$30,_w9_)}
    function create_nodes_by_height(max_height_allowed)
     {return caml_call2(Array[35],max_height_allowed + 1 | 0,none$0)}
    function set_max_height_allowed(t,max_height_allowed)
     {var
       src=t[3],
       dst=create_nodes_by_height(max_height_allowed),
       _w6_=caml_call1(Array[17],dst),
       _w7_=caml_call2(min,caml_call1(Array[17],src),_w6_);
      caml_call5(Array[42],src,0,dst,0,_w7_);
      t[3] = dst;
      var _w8_=caml_call1(Array[17],dst);
      t[2] = caml_call2(min,t[2],_w8_);
      return 0}
    function create$6(max_height_allowed)
     {return [0,
              0,
              max_height_allowed + 1 | 0,
              create_nodes_by_height(max_height_allowed)]}
    function link$0(t,node)
     {var height=node[13];
      node[14] = height;
      var next=caml_check_bound(t[3],height)[height + 1];
      node[16] = next;
      if(is_some$0(next))next[15] = node;
      t[3][height + 1] = node;
      return 0}
    function unlink(t,node)
     {var
       prev=node[15],
       next=node[16],
       _w4_=node[14],
       _w5_=caml_check_bound(t[3],_w4_)[_w4_ + 1];
      if(caml_call2(Core_kernel[360],node,_w5_))t[3][node[14] + 1] = next;
      if(is_some$0(next))next[15] = prev;
      if(is_some$0(prev))prev[16] = next;
      node[15] = none$0;
      return 0}
    function add$0(t,node)
     {var height=node[13];
      if(caml_call2(_h_,height,t[2]))t[2] = height;
      link$0(t,node);
      t[1] = t[1] + 1 | 0;
      return 0}
    function remove(t,node)
     {unlink(t,node);
      node[16] = none$0;
      node[14] = -1;
      t[1] = t[1] - 1 | 0;
      return 0}
    function increase_height(t,node){unlink(t,node);return link$0(t,node)}
    function min_height(t)
     {if(caml_call2(_f_,t[1],0))
       t[2] = caml_call1(Array[17],t[3]);
      else
       {var nodes_by_height=t[3];
        for(;;)
         {var _w3_=t[2];
          if(is_none$0(caml_check_bound(nodes_by_height,_w3_)[_w3_ + 1]))
           {t[2] = t[2] + 1 | 0;continue}
          break}}
      return t[2]}
    function remove_min(t)
     {var
       nodes_by_height=t[3],
       _wZ_=t[2],
       node=[0,caml_check_bound(nodes_by_height,_wZ_)[_wZ_ + 1]];
      for(;;)
       {if(is_none$0(node[1]))
         {t[2] = t[2] + 1 | 0;
          var _w0_=t[2];
          node[1] = caml_check_bound(nodes_by_height,_w0_)[_w0_ + 1];
          continue}
        var _w1_=node[1];
        _w1_[14] = -1;
        t[1] = t[1] - 1 | 0;
        var next=_w1_[16],_w2_=t[2];
        caml_check_bound(t[3],_w2_)[_w2_ + 1] = next;
        if(is_some$0(next))next[15] = none$0;
        _w1_[16] = none$0;
        return _w1_}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$79);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Recompute_heap=
      [0,
       sexp_of_t$30,
       invariant$21,
       create$6,
       length$0,
       max_height_allowed,
       set_max_height_allowed,
       min_height,
       add$0,
       remove,
       remove_min,
       increase_height];
    caml_register_global
     (1249,
      Incremental_kernel_Recompute_heap,
      "Incremental_kernel__Recompute_heap");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$80);
    caml_call1(Expect_test_collector[4][1],cst_src_adjust_heights_heap_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$81,cst$26);
    function next$1(node){return node[18]}
    var As_adjust_heights_list=caml_call1(Packed$0[3],[0,next$1]);
    function sexp_of_t$31(t)
     {var max_nonempty_index=[0,-1];
      function _wW_(i,l)
       {var _wX_=is_some$0(l),_wY_=_wX_?(max_nonempty_index[1] = i,0):_wX_;
        return _wY_}
      caml_call2(Array[53],t,_wW_);
      var v=caml_call3(Array[45],t,0,max_nonempty_index[1] + 1 | 0);
      return caml_call2(Array[13],As_adjust_heights_list[1],v)}
    function invariant$22(t)
     {function _wS_(param)
       {function _wT_(height,nodes)
         {caml_call1(As_adjust_heights_list[2],nodes);
          function _wU_(node)
           {if(caml_call2(_f_,node[17],height))
             {if(caml_call2(_g_,node[13],node[17]))
               {var _wV_=is_in_recompute_heap(node);
                if(_wV_)
                 {if(caml_call2(_f_,node[14],node[17]))return 0;
                  throw [0,Assert_failure,_hU_]}
                return _wV_}
              throw [0,Assert_failure,_hV_]}
            throw [0,Assert_failure,_hW_]}
          return caml_call2(As_adjust_heights_list[4],nodes,_wU_)}
        return caml_call2(Array[53],t,_wT_)}
      return caml_call4(Base_Invariant[1],_hX_,t,sexp_of_t$31,_wS_)}
    function create$7(max_height_allowed)
     {return caml_call2(Array[35],max_height_allowed + 1 | 0,none$0)}
    function nodes_by_height$1(r){return r[4]}
    function set_nodes_by_height$0(r,v){r[4] = v;return 0}
    function max_height_seen(r){return r[3]}
    function set_max_height_seen(r,v){r[3] = v;return 0}
    function height_lower_bound$1(r){return r[2]}
    function set_height_lower_bound$0(r,v){r[2] = v;return 0}
    function length$2(r){return r[1]}
    function set_length$0(r,v){r[1] = v;return 0}
    function _hY_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _hZ_=[0,set_nodes_by_height$0],
     nodes_by_height$2=
      [0,
       [0,
        function(param){return 0},
        cst_nodes_by_height$0,
        _hZ_,
        nodes_by_height$1,
        _hY_]];
    function _h0_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _h1_=[0,set_max_height_seen],
     max_height_seen$0=
      [0,
       [0,
        function(param){return 0},
        cst_max_height_seen,
        _h1_,
        max_height_seen,
        _h0_]];
    function _h2_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _h3_=[0,set_height_lower_bound$0],
     height_lower_bound$2=
      [0,
       [0,
        function(param){return 0},
        cst_height_lower_bound$0,
        _h3_,
        height_lower_bound$1,
        _h2_]];
    function _h4_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _h5_=[0,set_length$0],
     length$3=
      [0,[0,function(param){return 0},cst_length$0,_h5_,length$2,_h4_]];
    function sexp_of_t$32(param)
     {var
       v_length=param[1],
       v_height_lower_bound=param[2],
       v_max_height_seen=param[3],
       v_nodes_by_height=param[4],
       arg=sexp_of_t$31(v_nodes_by_height),
       bnds=[0,[1,[0,_h6_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_max_height_seen),
       bnds$0=[0,[1,[0,_h7_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[455],v_height_lower_bound),
       bnds$1=[0,[1,[0,_h8_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[455],v_length),
       bnds$2=[0,[1,[0,_h9_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function max_height_allowed$0(t)
     {return caml_call1(Array[17],t[4]) - 1 | 0}
    function invariant$23(t)
     {function _wL_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         nodes_by_height_fun=check(invariant$22),
         max_height_seen_fun=
          check
           (function(max_height_seen)
             {if(caml_call2(_d_,max_height_seen,0))
               {if(caml_call2(_e_,max_height_seen,max_height_allowed$0(t)))
                 return 0;
                throw [0,Assert_failure,_h__]}
              throw [0,Assert_failure,_h$_]}),
         height_lower_bound_fun=
          check
           (function(height_lower_bound)
             {if(caml_call2(_d_,height_lower_bound,0))
               {if
                 (caml_call2
                   (_e_,height_lower_bound,caml_call1(Array[17],t[4])))
                 {var _wQ_=height_lower_bound - 1 | 0,_wP_=0;
                  if(! (_wQ_ < 0))
                   {var height=_wP_;
                    for(;;)
                     {if(! is_none$0(caml_check_bound(t[4],height)[height + 1]))
                       throw [0,Assert_failure,_ia_];
                      var _wR_=height + 1 | 0;
                      if(_wQ_ !== height){var height=_wR_;continue}
                      break}}
                  return 0}
                throw [0,Assert_failure,_ib_]}
              throw [0,Assert_failure,_ic_]}),
         length_fun=
          check
           (function(length)
             {var r=[0,0],_wN_=t[4];
              function _wM_(node)
               {var _wO_=caml_call1(As_adjust_heights_list[3],node);
                r[1] = r[1] + _wO_ | 0;
                return 0}
              caml_call2(Array[19],_wN_,_wM_);
              if(caml_call2(_f_,length,r[1]))return 0;
              throw [0,Assert_failure,_id_]});
        caml_call1(length_fun,length$3);
        caml_call1(height_lower_bound_fun,height_lower_bound$2);
        caml_call1(max_height_seen_fun,max_height_seen$0);
        return caml_call1(nodes_by_height_fun,nodes_by_height$2)}
      return caml_call4(Base_Invariant[1],_ie_,t,sexp_of_t$32,_wL_)}
    function create$8(max_height_allowed)
     {return [0,0,max_height_allowed + 1 | 0,0,create$7(max_height_allowed)]}
    function set_max_height_allowed$0(t,max_height_allowed)
     {if(caml_call2(_h_,max_height_allowed,t[3]))
       {var
         _wK_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[455],v0),
             v0$1=v1[2],
             v1$0=[1,[0,_if_,[0,caml_call1(Core_kernel[455],v0$1),0]]];
            return [1,[0,v0$0,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[349],
          0,
          _ig_,
          cst_cannot_set_max_height_allowed_less_than_the_max_height_already_seen,
          [0,max_height_allowed,[0,-794774856,t[3]]],
          _wK_)}
      t[4] = create$7(max_height_allowed);
      return 0}
    function set_height$0(t,node,height)
     {if(caml_call2(_g_,height,t[3]))
       {t[3] = height;
        if(caml_call2(_g_,height,max_height_allowed$0(t)))
         {var
           _wI_=
            function(param)
             {var
               v1=param[2],
               v0=param[1],
               v0$0=v0[2],
               v0$1=[1,[0,_ih_,[0,caml_call1(Core_kernel[455],v0$0),0]]],
               v0$2=v1[2],
               v1$0=[1,[0,_ii_,[0,caml_call1(Core_kernel[455],v0$2),0]]];
              return [1,[0,v0$1,[0,v1$0,0]]]},
           _wJ_=[0,[0,920681479,height],[0,3850884,max_height_allowed$0(t)]];
          caml_call5
           (Core_kernel[349],0,_ij_,cst_node_with_too_large_height,_wJ_,_wI_)}}
      node[13] = height;
      return 0}
    function ensure_height_requirement
     (t,original_child,original_parent,child,parent)
     {if(same$1(parent,original_child))
       {var
         _wE_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=v0[2],
             _wG_=0,
             v0$1=
              [1,
               [0,
                _il_,
                [0,sexp_of_t$28(function(param){return _ik_},v0$0),_wG_]]],
             v0$2=v1[2],
             _wH_=0,
             v1$0=
              [1,
               [0,
                _in_,
                [0,sexp_of_t$28(function(param){return _im_},v0$2),_wH_]]];
            return [1,[0,v0$1,[0,v1$0,0]]]};
        caml_call5
         (Core_kernel[349],
          0,
          _io_,
          cst_adding_edge_made_graph_cyclic,
          [0,[0,-977688164,original_child],[0,-310508246,original_parent]],
          _wE_)}
      var _wF_=caml_call2(_d_,child[13],parent[13]);
      if(_wF_)
       {if(caml_call2(_f_,parent[17],-1))
         {var height=parent[13];
          parent[17] = height;
          t[1] = t[1] + 1 | 0;
          parent[18] = caml_check_bound(t[4],height)[height + 1];
          t[4][height + 1] = parent}
        return set_height$0(t,parent,child[13] + 1 | 0)}
      return _wF_}
    function adjust_heights(t,recompute_heap,original_child,original_parent)
     {t[2] = original_parent[13];
      ensure_height_requirement
       (t,original_child,original_parent,original_child,original_parent);
      b:
      for(;;)
       {if(caml_call2(_g_,t[1],0))
         {var r=[0,t[2]];
          for(;;)
           {var _wx_=r[1];
            if(is_none$0(caml_check_bound(t[4],_wx_)[_wx_ + 1]))
             {r[1]++;continue}
            var height=r[1];
            t[2] = height;
            var child=t[4][height + 1];
            child[17] = -1;
            t[1] = t[1] - 1 | 0;
            t[4][height + 1] = child[18];
            child[18] = none$0;
            if(is_in_recompute_heap(child))
             increase_height(recompute_heap,child);
            if(caml_call2(_g_,child[8],0))
             {ensure_height_requirement
               (t,original_child,original_parent,child,value_exn(child[10]));
              var _wz_=child[8] - 1 | 0,_wy_=1;
              if(! (_wz_ < 1))
               {var parent_index=_wy_;
                for(;;)
                 {var _wC_=parent_index - 1 | 0;
                  ensure_height_requirement
                   (t,
                    original_child,
                    original_parent,
                    child,
                    value_exn(caml_check_bound(child[9],_wC_)[_wC_ + 1]));
                  var _wD_=parent_index + 1 | 0;
                  if(_wz_ !== parent_index){var parent_index=_wD_;continue}
                  break}}}
            var _wA_=child[4];
            if(typeof _wA_ === "number")
             var switch$0=0;
            else
             if(3 === _wA_[0])
              {var
                match=_wA_[1],
                all_nodes_created_on_rhs=match[7],
                r$0=[0,all_nodes_created_on_rhs];
               for(;;)
                {if(is_some$0(r$0[1]))
                  {var _wB_=r$0[1];
                   r$0[1] = _wB_[12];
                   if(caml_call1(is_necessary$1,_wB_))
                    ensure_height_requirement
                     (t,original_child,original_parent,child,_wB_);
                   continue}
                 var switch$0=1;
                 break}}
             else
              var switch$0=0;
            continue b}}
        return debug}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$82);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Adjust_heights_heap=
      [0,
       sexp_of_t$32,
       invariant$23,
       create$8,
       length$2,
       max_height_allowed$0,
       set_max_height_allowed$0,
       max_height_seen,
       set_height$0,
       adjust_heights];
    caml_register_global
     (1250,
      Incremental_kernel_Adjust_heights_heap,
      "Incremental_kernel__Adjust_heights_heap");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$83);
    caml_call1(Expect_test_collector[4][1],cst_src_alarm_value_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$84,cst$27);
    function f(param)
     {switch(param[0])
       {case 0:var at=param[1];return invariant$9(at);
        case 1:var at_intervals=param[1];return invariant$10(at_intervals);
        case 2:
         var snapshot=param[1];
         return invariant$17(function(_wv_){return 0},snapshot);
        default:
         var step_function=param[1];
         return invariant$7(function(_ww_){return 0},step_function)}}
    function action(r){return r[1]}
    function _iv_(r,v){return [0,v,r[2]]}
    var
     _iw_=0,
     action$0=[0,[0,function(param){return 0},cst_action,_iw_,action,_iv_]];
    function sexp_of_t$33(param)
     {var
       v_action=param[1],
       v_next_fired=param[2],
       arg=caml_call1(Sexplib0_Sexp_conv[23],v_next_fired),
       bnds=[0,[1,[0,_ix_,[0,arg,0]]],0];
      switch(v_action[0])
       {case 0:
         var
          v0=v_action[1],
          v0$0=sexp_of_t$18(v0),
          arg$0=[1,[0,_ip_,[0,v0$0,0]]];
         break;
        case 1:
         var
          v0$1=v_action[1],
          v0$2=sexp_of_t$19(v0$1),
          arg$0=[1,[0,_iq_,[0,v0$2,0]]];
         break;
        case 2:
         var
          v0$3=v_action[1],
          v0$4=sexp_of_t$26(function(param){return _ir_},v0$3),
          arg$0=[1,[0,_is_,[0,v0$4,0]]];
         break;
        default:
         var
          v0$5=v_action[1],
          v0$6=sexp_of_t$16(function(param){return _it_},v0$5),
          arg$0=[1,[0,_iu_,[0,v0$6,0]]]}
      var bnds$0=[0,[1,[0,_iy_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$24(t)
     {function _wu_(param)
       {var action_fun=caml_call2(Base_Invariant[2],t,f);
        caml_call1(action_fun,action$0);
        return 0}
      return caml_call4(Base_Invariant[1],_iz_,t,sexp_of_t$33,_wu_)}
    function create$9(action){return [0,action,none$0]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$85);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Alarm_value=
      [0,[0],invariant$24,sexp_of_t$33,create$9];
    caml_register_global
     (1251,Incremental_kernel_Alarm_value,"Incremental_kernel__Alarm_value");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$86);
    caml_call1(Expect_test_collector[4][1],cst_src_config_intf_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$87,cst$28);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$88);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Config_intf=[0];
    caml_register_global
     (1252,Incremental_kernel_Config_intf,"Incremental_kernel__Config_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$89);
    caml_call1(Expect_test_collector[4][1],cst_src_config_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$90,cst$29);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$91);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    function _iA_(_wt_)
     {var
       start=caml_call1(Time_ns[27],0),
       alarm_precision=Core_kernel_Timing_wheel_ns[2][10],
       _ws_=[0,caml_call1(Core_kernel_Timing_wheel_ns[8][5],level_bits)],
       timing_wheel_config=
        caml_call3(Core_kernel_Timing_wheel_ns[9][4],_ws_,alarm_precision,0);
      return [0,1,start,timing_wheel_config]}
    var Incremental_kernel_Config=[0,_iA_];
    caml_register_global
     (1253,Incremental_kernel_Config,"Incremental_kernel__Config");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$92);
    caml_call1(Expect_test_collector[4][1],cst_src_internal_observer_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$93,cst$30);
    function sexp_of_t$34(param)
     {var internal_observer=param[1],_wq_=internal_observer[2];
      function _wr_(param){return _iB_}
      return caml_call1(caml_call1(Node[1],_wr_),_wq_)}
    function next_in_all(param){var t=param[1];return t[5]}
    function set_prev_in_all(param,t2){var t1=param[1];t1[4] = t2;return 0}
    function next_in_observing(r){return r[7]}
    function set_next_in_observing(r,v){r[7] = v;return 0}
    function prev_in_observing(r){return r[6]}
    function set_prev_in_observing(r,v){r[6] = v;return 0}
    function next_in_all$0(r){return r[5]}
    function set_next_in_all(r,v){r[5] = v;return 0}
    function prev_in_all(r){return r[4]}
    function set_prev_in_all$0(r,v){r[4] = v;return 0}
    function on_update_handlers(r){return r[3]}
    function set_on_update_handlers(r,v){r[3] = v;return 0}
    function observing(r){return r[2]}
    function _iG_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _iH_=[0,set_next_in_observing],
     next_in_observing$0=
      [0,
       [0,
        function(param){return 0},
        cst_next_in_observing,
        _iH_,
        next_in_observing,
        _iG_]];
    function _iI_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _iJ_=[0,set_prev_in_observing],
     prev_in_observing$0=
      [0,
       [0,
        function(param){return 0},
        cst_prev_in_observing,
        _iJ_,
        prev_in_observing,
        _iI_]];
    function _iK_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _iL_=[0,set_next_in_all],
     next_in_all$1=
      [0,
       [0,function(param){return 0},cst_next_in_all,_iL_,next_in_all$0,_iK_]];
    function _iM_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _iN_=[0,set_prev_in_all$0],
     prev_in_all$0=
      [0,[0,function(param){return 0},cst_prev_in_all,_iN_,prev_in_all,_iM_]];
    function _iO_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _iP_=[0,set_on_update_handlers],
     on_update_handlers$0=
      [0,
       [0,
        function(param){return 0},
        cst_on_update_handlers,
        _iP_,
        on_update_handlers,
        _iO_]];
    function _iQ_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _iR_=0,
     observing$0=
      [0,[0,function(param){return 0},cst_observing,_iR_,observing,_iQ_]];
    function sexp_of_internal_observer(of_a,param)
     {var
       v_state=param[1],
       v_observing=param[2],
       v_on_update_handlers=param[3],
       v_prev_in_all=param[4],
       v_next_in_all=param[5],
       v_prev_in_observing=param[6],
       v_next_in_observing=param[7],
       arg=sexp_of_t$8(Sexplib0_Sexp_conv[23],v_next_in_observing),
       bnds=[0,[1,[0,_iS_,[0,arg,0]]],0],
       arg$0=sexp_of_t$8(Sexplib0_Sexp_conv[23],v_prev_in_observing),
       bnds$0=[0,[1,[0,_iT_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$8(sexp_of_t$34,v_next_in_all),
       bnds$1=[0,[1,[0,_iU_,[0,arg$1,0]]],bnds$0],
       arg$2=sexp_of_t$8(sexp_of_t$34,v_prev_in_all),
       bnds$2=[0,[1,[0,_iV_,[0,arg$2,0]]],bnds$1];
      function _wo_(_wp_){return sexp_of_t$6(of_a,_wp_)}
      var
       arg$3=caml_call2(Core_kernel[513],_wo_,v_on_update_handlers),
       bnds$3=[0,[1,[0,_iW_,[0,arg$3,0]]],bnds$2],
       arg$4=sexp_of_t$28(of_a,v_observing),
       bnds$4=[0,[1,[0,_iX_,[0,arg$4,0]]],bnds$3];
      switch(v_state)
       {case 0:var arg$5=_iC_;break;
        case 1:var arg$5=_iD_;break;
        case 2:var arg$5=_iE_;break;
        default:var arg$5=_iF_}
      var bnds$5=[0,[1,[0,_iY_,[0,arg$5,0]]],bnds$4];
      return [1,bnds$5]}
    function use_is_allowed(t){return 2 <= t[1]?0:1}
    function same$2(t1,t2){return caml_call2(Core_kernel[360],t1,t2)}
    function same_as_packed(t1,param){var t2=param[1];return same$2(t1,t2)}
    function invariant$25(invariant_a,t)
     {function _wd_(param)
       {function check(f){return caml_call2(Base_Invariant[2],t,f)}
        var
         next_in_observing_fun=
          check
           (function(next_in_observing)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! is_none$0(next_in_observing))
                throw [0,Assert_failure,_i0_];
              var _wm_=is_some$0(next_in_observing);
              if(_wm_)
               {var _wn_=value_exn(value_exn(next_in_observing)[6]);
                if(caml_call2(Core_kernel[359],t,_wn_))return 0;
                throw [0,Assert_failure,_iZ_]}
              return _wm_}),
         prev_in_observing_fun=
          check
           (function(prev_in_observing)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! is_none$0(prev_in_observing))
                throw [0,Assert_failure,_i2_];
              var _wk_=is_some$0(prev_in_observing);
              if(_wk_)
               {var _wl_=value_exn(value_exn(prev_in_observing)[7]);
                if(caml_call2(Core_kernel[359],t,_wl_))return 0;
                throw [0,Assert_failure,_i1_]}
              return _wk_}),
         next_in_all_fun=
          check
           (function(next_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! is_none$0(next_in_all))throw [0,Assert_failure,_i4_];
              var _wj_=is_some$0(next_in_all);
              if(_wj_)
               {var param=value_exn(next_in_all),t$0=param[1];
                if(same_as_packed(t,value_exn(t$0[4])))return 0;
                throw [0,Assert_failure,_i3_]}
              return _wj_}),
         prev_in_all_fun=
          check
           (function(prev_in_all)
             {var switcher=t[1] - 1 | 0;
              if(1 < switcher >>> 0)
               if(! is_none$0(prev_in_all))throw [0,Assert_failure,_i6_];
              var _wi_=is_some$0(prev_in_all);
              if(_wi_)
               {if
                 (same_as_packed
                   (t,value_exn(next_in_all(value_exn(prev_in_all)))))
                 return 0;
                throw [0,Assert_failure,_i5_]}
              return _wi_}),
         on_update_handlers_fun=
          check
           (function(on_update_handlers)
             {if(3 <= t[1])
               {if(caml_call1(Core_kernel_List[18],on_update_handlers))
                 return 0;
                throw [0,Assert_failure,_i7_]}
              return 0}),
         observing_fun=
          check(function(_wh_){return invariant$19(invariant_a,_wh_)});
        caml_call1(observing_fun,observing$0);
        caml_call1(on_update_handlers_fun,on_update_handlers$0);
        caml_call1(prev_in_all_fun,prev_in_all$0);
        caml_call1(next_in_all_fun,next_in_all$1);
        caml_call1(prev_in_observing_fun,prev_in_observing$0);
        return caml_call1(next_in_observing_fun,next_in_observing$0)}
      function _we_(param){return _i8_}
      function _wf_(_wg_){return sexp_of_internal_observer(_we_,_wg_)}
      return caml_call4(Base_Invariant[1],_i9_,t,_wf_,_wd_)}
    function value_exn$1(t)
     {var _v5_=t[1];
      if(1 === _v5_)
       {var uopt=t[2][3];
        if(is_none$0(uopt))
         {var
           _v6_=function(param){return _i__},
           _v7_=function(_wc_){return sexp_of_internal_observer(_v6_,_wc_)};
          caml_call5
           (Core_kernel[349],
            0,
            _i$_,
            cst_attempt_to_get_value_of_an_invalid_node$0,
            t,
            _v7_)}
        return uopt}
      if(0 === _v5_)
       {var
         _v8_=function(param){return _ja_},
         _v9_=function(_wb_){return sexp_of_internal_observer(_v8_,_wb_)};
        return caml_call5
                (Core_kernel[349],
                 0,
                 _jb_,
                 cst_Observer_value_exn_called_without_stabilizing,
                 t,
                 _v9_)}
      function _v__(param){return _jc_}
      function _v$_(_wa_){return sexp_of_internal_observer(_v__,_wa_)}
      return caml_call5
              (Core_kernel[349],
               0,
               _jd_,
               cst_Observer_value_exn_called_after_disallow_future_use,
               t,
               _v$_)}
    function on_update_exn(t,on_update_handler)
     {if(2 <= t[1])
       {var
         _v1_=function(param){return _je_},
         _v2_=function(_v4_){return sexp_of_internal_observer(_v1_,_v4_)};
        return caml_call5
                (Core_kernel[349],0,_jf_,cst_on_update_disallowed,t,_v2_)}
      t[3] = [0,on_update_handler,t[3]];
      var _v3_=t[1];
      if(1 === _v3_)
       {var observing=t[2];observing[7] = observing[7] + 1 | 0;return 0}
      if(0 === _v3_)return 0;
      throw [0,Assert_failure,_jg_]}
    function unlink$0(t)
     {var prev=t[6],next=t[7];
      t[6] = none$0;
      t[7] = none$0;
      if(is_some$0(next))next[6] = prev;
      if(is_some$0(prev))prev[7] = next;
      var observing=t[2],_vY_=value_exn(observing[20]);
      if(caml_call2(Core_kernel[359],t,_vY_))observing[20] = next;
      var _vZ_=caml_call1(Core_kernel_List[17],t[3]);
      observing[7] = observing[7] - _vZ_ | 0;
      t[3] = 0;
      var prev$0=t[4],next$0=t[5];
      t[4] = none$0;
      t[5] = none$0;
      if(is_some$0(next$0))set_prev_in_all(next$0,prev$0);
      var _v0_=is_some$0(prev$0);
      if(_v0_){var t1=prev$0[1];t1[5] = next$0;return 0}
      return _v0_}
    function sexp_of_t$35(param)
     {var internal_observer=param[1];
      return sexp_of_internal_observer
              (function(param){return _jh_},internal_observer)}
    function invariant$26(param)
     {var t=param[1];return invariant$25(function(_vX_){return 0},t)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$94);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _ji_=[0,sexp_of_t$35,invariant$26,next_in_all,set_prev_in_all],
     Incremental_kernel_Internal_observer=
      [0,
       [0],
       invariant$25,
       sexp_of_internal_observer,
       same$2,
       observing,
       use_is_allowed,
       value_exn$1,
       on_update_exn,
       unlink$0,
       _ji_];
    caml_register_global
     (1254,
      Incremental_kernel_Internal_observer,
      "Incremental_kernel__Internal_observer");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$95);
    caml_call1(Expect_test_collector[4][1],cst_src_observer_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$96,cst$31);
    function sexp_of_t$36(of_a,v)
     {function _vV_(_vW_){return sexp_of_internal_observer(of_a,_vW_)}
      return caml_call2(Core_kernel[583],_vV_,v)}
    function invariant$27(invariant_a,t)
     {return invariant$25(invariant_a,t[1])}
    function observing$1(t){return t[1][2]}
    function use_is_allowed$0(t){return use_is_allowed(t[1])}
    function value_exn$2(t){return value_exn$1(t[1])}
    function on_update_exn$0(t,on_update_handler)
     {return on_update_exn(t[1],on_update_handler)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$97);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$5=
      [0,
       invariant$27,
       sexp_of_t$36,
       observing$1,
       use_is_allowed$0,
       value_exn$2,
       on_update_exn$0];
    caml_register_global(1255,include$5,"Incremental_kernel__Observer");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$98);
    caml_call1(Expect_test_collector[4][1],cst_src_raised_exn_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$99,cst$32);
    function sexp_of_t$37(param)
     {var
       v_backtrace=param[2],
       v_exn=param[1],
       arg=caml_call1(Base_Backtrace[1],v_backtrace),
       bnds=[0,[1,[0,_jj_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[614],v_exn),
       bnds$0=[0,[1,[0,_jk_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function create$10(exn){return [0,exn,caml_call1(Base_Backtrace[6][4],0)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$100);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Raised_exn=[0,sexp_of_t$37,create$10];
    caml_register_global
     (1256,Incremental_kernel_Raised_exn,"Incremental_kernel__Raised_exn");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$101);
    caml_call1(Expect_test_collector[4][1],cst_src_state_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$102,cst$33);
    function sexp_of_status(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _jl_;case 1:return _jm_;default:return _jn_}
      var v0=param[1],v0$0=sexp_of_t$37(v0);
      return [1,[0,_jo_,[0,v0$0,0]]]}
    var Node_update$0=0;
    function sexp_of_t$38(param)
     {var
       v1=param[2],
       v0=param[1],
       v0$0=sexp_of_t$28(function(param){return _jp_},v0);
      function _vU_(param){return _jq_}
      var v1$0=caml_call2(Node_update[2],_vU_,v1);
      return [1,[0,_jr_,[0,v0$0,[0,v1$0,0]]]]}
    function invariant$28(t)
     {var node=t[1];
      function _vS_(param){return invariant$19(function(_vT_){return 0},node)}
      return caml_call4(Base_Invariant[1],_js_,t,sexp_of_t$38,_vS_)}
    var Run_on_update_handlers=[0,sexp_of_t$38,invariant$28];
    function expert_nodes_created_by_current_node(r){return r[2]}
    function set_expert_nodes_created_by_current_node(r,v){r[2] = v;return 0}
    function currently_running_node(r){return r[1]}
    function set_currently_running_node(r,v){r[1] = v;return 0}
    function _jt_(r,v){return [0,r[1],v]}
    var
     _ju_=[0,set_expert_nodes_created_by_current_node],
     expert_nodes_created_by_current_node$0=
      [0,
       [0,
        function(param){return 0},
        cst_expert_nodes_created_by_current_node,
        _ju_,
        expert_nodes_created_by_current_node,
        _jt_]];
    function _jv_(r,v){return [0,v,r[2]]}
    var
     _jw_=[0,set_currently_running_node],
     currently_running_node$0=
      [0,
       [0,
        function(param){return 0},
        cst_currently_running_node,
        _jw_,
        currently_running_node,
        _jv_]];
    function make_creator
     (currently_running_node_fun,
      expert_nodes_created_by_current_node_fun,
      compile_acc)
     {var
       match=
        caml_call2
         (currently_running_node_fun,currently_running_node$0,compile_acc),
       compile_acc$0=match[2],
       currently_running_node_gen=match[1],
       match$0=
        caml_call2
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       expert_nodes_created_by_current_node_gen=match$0[1];
      return [0,
              function(acc)
               {var
                 currently_running_node=
                  caml_call1(currently_running_node_gen,acc),
                 expert_nodes_created_by_current_node=
                  caml_call1(expert_nodes_created_by_current_node_gen,acc);
                return [0,
                        currently_running_node,
                        expert_nodes_created_by_current_node]},
              compile_acc$1]}
    function create$11
     (currently_running_node,expert_nodes_created_by_current_node)
     {return [0,currently_running_node,expert_nodes_created_by_current_node]}
    function map$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _vR_=
        caml_call1
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0);
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _vR_]}
    function iter$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {caml_call1(currently_running_node_fun,currently_running_node$0);
      return caml_call1
              (expert_nodes_created_by_current_node_fun,
               expert_nodes_created_by_current_node$0)}
    function fold$0
     (init,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {return caml_call2
              (expert_nodes_created_by_current_node_fun,
               caml_call2
                (currently_running_node_fun,init,currently_running_node$0),
               expert_nodes_created_by_current_node$0)}
    function map_poly(record)
     {var
       _vQ_=
        [0,caml_call1(record[1],expert_nodes_created_by_current_node$0),0];
      return [0,caml_call1(record[1],currently_running_node$0),_vQ_]}
    function for_all$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _vP_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _vP_
              ?caml_call1
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0)
              :_vP_}
    function exists$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _vO_=
        caml_call1(currently_running_node_fun,currently_running_node$0);
      return _vO_
              ?_vO_
              :caml_call1
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0)}
    function to_list$0
     (currently_running_node_fun,expert_nodes_created_by_current_node_fun)
     {var
       _vN_=
        [0,
         caml_call1
          (expert_nodes_created_by_current_node_fun,
           expert_nodes_created_by_current_node$0),
         0];
      return [0,
              caml_call1(currently_running_node_fun,currently_running_node$0),
              _vN_]}
    function iter$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {caml_call3
       (currently_running_node_fun,currently_running_node$0,record,record[1]);
      return caml_call3
              (expert_nodes_created_by_current_node_fun,
               expert_nodes_created_by_current_node$0,
               record,
               record[2])}
    function fold$1
     (record,
      init,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var _vM_=record[2];
      return caml_call4
              (expert_nodes_created_by_current_node_fun,
               caml_call4
                (currently_running_node_fun,
                 init,
                 currently_running_node$0,
                 record,
                 record[1]),
               expert_nodes_created_by_current_node$0,
               record,
               _vM_)}
    function for_all$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _vL_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _vL_
              ?caml_call3
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0,
                 record,
                 record[2])
              :_vL_}
    function exists$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _vK_=
        caml_call3
         (currently_running_node_fun,
          currently_running_node$0,
          record,
          record[1]);
      return _vK_
              ?_vK_
              :caml_call3
                (expert_nodes_created_by_current_node_fun,
                 expert_nodes_created_by_current_node$0,
                 record,
                 record[2])}
    function to_list$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _vJ_=
        [0,
         caml_call3
          (expert_nodes_created_by_current_node_fun,
           expert_nodes_created_by_current_node$0,
           record,
           record[2]),
         0];
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _vJ_]}
    function map$1
     (record,
      currently_running_node_fun,
      expert_nodes_created_by_current_node_fun)
     {var
       _vI_=
        caml_call3
         (expert_nodes_created_by_current_node_fun,
          expert_nodes_created_by_current_node$0,
          record,
          record[2]);
      return [0,
              caml_call3
               (currently_running_node_fun,
                currently_running_node$0,
                record,
                record[1]),
              _vI_]}
    function set_all_mutable_fields
     (record,currently_running_node,expert_nodes_created_by_current_node)
     {record[1] = currently_running_node;
      record[2] = expert_nodes_created_by_current_node;
      return 0}
    var
     Direct=
      [0,
       iter$1,
       fold$1,
       for_all$1,
       exists$1,
       to_list$1,
       map$1,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       expert_nodes_created_by_current_node$0,
       currently_running_node$0,
       make_creator,
       create$11,
       map$0,
       iter$0,
       fold$0,
       map_poly,
       for_all$0,
       exists$0,
       to_list$0,
       Direct];
    function sexp_of_t$39(param)
     {var
       v_currently_running_node=param[1],
       v_expert_nodes_created_by_current_node=param[2],
       arg=
        caml_call2
         (Core_kernel[513],Packed$0[1],v_expert_nodes_created_by_current_node),
       bnds=[0,[1,[0,_jx_,[0,arg,0]]],0],
       arg$0=caml_call2(Core_kernel[542],Packed$0[1],v_currently_running_node),
       bnds$0=[0,[1,[0,_jy_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$29(t)
     {function _vD_(param)
       {function _vE_(_vH_){return 0}
        function _vF_(_vG_){return 0}
        return caml_call2(Fields[7],_vF_,_vE_)}
      return caml_call4(Base_Invariant[1],_jz_,t,sexp_of_t$39,_vD_)}
    function create$12(param){return [0,0,0]}
    var
     Only_in_debug=
      [0,
       expert_nodes_created_by_current_node,
       set_expert_nodes_created_by_current_node,
       currently_running_node,
       set_currently_running_node,
       Fields,
       sexp_of_t$39,
       invariant$29,
       create$12];
    function num_var_sets(r){return r[29]}
    function set_num_var_sets(r,v){r[29] = v;return 0}
    function num_nodes_recomputed_directly_because_min_height(r){return r[28]}
    function set_num_nodes_recomputed_directly_because_min_height(r,v)
     {r[28] = v;return 0}
    function num_nodes_recomputed_directly_because_one_child(r){return r[27]}
    function set_num_nodes_recomputed_directly_because_one_child(r,v)
     {r[27] = v;return 0}
    function num_nodes_recomputed(r){return r[26]}
    function set_num_nodes_recomputed(r,v){r[26] = v;return 0}
    function num_nodes_invalidated(r){return r[25]}
    function set_num_nodes_invalidated(r,v){r[25] = v;return 0}
    function num_nodes_created(r){return r[24]}
    function set_num_nodes_created(r,v){r[24] = v;return 0}
    function num_nodes_changed(r){return r[23]}
    function set_num_nodes_changed(r,v){r[23] = v;return 0}
    function num_nodes_became_unnecessary(r){return r[22]}
    function set_num_nodes_became_unnecessary(r,v){r[22] = v;return 0}
    function num_nodes_became_necessary(r){return r[21]}
    function set_num_nodes_became_necessary(r,v){r[21] = v;return 0}
    function only_in_debug(r){return r[20]}
    function set_only_in_debug(r,v){r[20] = v;return 0}
    function fired_alarm_values(r){return r[19]}
    function set_fired_alarm_values(r,v){r[19] = v;return 0}
    function handle_fired(r){return r[18]}
    function _jA_(r){return r[17]}
    function set_now(r,v){r[17] = v;return 0}
    function timing_wheel(r){return r[16]}
    function run_on_update_handlers$0(r){return r[15]}
    function handle_after_stabilization(r){return r[14]}
    function set_during_stabilization(r){return r[13]}
    function disallowed_observers(r){return r[12]}
    function new_observers(r){return r[11]}
    function finalized_observers(r){return r[10]}
    function all_observers(r){return r[9]}
    function set_all_observers(r,v){r[9] = v;return 0}
    function num_active_observers(r){return r[8]}
    function set_num_active_observers(r,v){r[8] = v;return 0}
    function propagate_invalidity(r){return r[7]}
    function adjust_heights_heap(r){return r[6]}
    function recompute_heap(r){return r[5]}
    function current_scope(r){return r[4]}
    function set_current_scope(r,v){r[4] = v;return 0}
    function stabilization_num(r){return r[3]}
    function set_stabilization_num(r,v){r[3] = v;return 0}
    function bind_lhs_change_should_invalidate_rhs(r){return r[2]}
    function status(r){return r[1]}
    function set_status(r,v){r[1] = v;return 0}
    function _jB_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              v]}
    var
     _jC_=[0,set_num_var_sets],
     num_var_sets$0=
      [0,
       [0,function(param){return 0},cst_num_var_sets,_jC_,num_var_sets,_jB_]];
    function _jD_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              v,
              r[29]]}
    var
     _jE_=[0,set_num_nodes_recomputed_directly_because_min_height],
     num_nodes_recomputed_directly_because_min_height$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_recomputed_directly_because_min_height,
        _jE_,
        num_nodes_recomputed_directly_because_min_height,
        _jD_]];
    function _jF_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              v,
              r[28],
              r[29]]}
    var
     _jG_=[0,set_num_nodes_recomputed_directly_because_one_child],
     num_nodes_recomputed_directly_because_one_child$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_recomputed_directly_because_one_child,
        _jG_,
        num_nodes_recomputed_directly_because_one_child,
        _jF_]];
    function _jH_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              v,
              r[27],
              r[28],
              r[29]]}
    var
     _jI_=[0,set_num_nodes_recomputed],
     num_nodes_recomputed$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_recomputed,
        _jI_,
        num_nodes_recomputed,
        _jH_]];
    function _jJ_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              v,
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jK_=[0,set_num_nodes_invalidated],
     num_nodes_invalidated$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_invalidated,
        _jK_,
        num_nodes_invalidated,
        _jJ_]];
    function _jL_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jM_=[0,set_num_nodes_created],
     num_nodes_created$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_created,
        _jM_,
        num_nodes_created,
        _jL_]];
    function _jN_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              v,
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jO_=[0,set_num_nodes_changed],
     num_nodes_changed$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_changed,
        _jO_,
        num_nodes_changed,
        _jN_]];
    function _jP_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              v,
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jQ_=[0,set_num_nodes_became_unnecessary],
     num_nodes_became_unnecessary$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_became_unnecessary,
        _jQ_,
        num_nodes_became_unnecessary,
        _jP_]];
    function _jR_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              v,
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jS_=[0,set_num_nodes_became_necessary],
     num_nodes_became_necessary$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_nodes_became_necessary,
        _jS_,
        num_nodes_became_necessary,
        _jR_]];
    function _jT_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jU_=[0,set_only_in_debug],
     only_in_debug$0=
      [0,
       [0,function(param){return 0},cst_only_in_debug,_jU_,only_in_debug,_jT_]];
    function _jV_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jW_=[0,set_fired_alarm_values],
     fired_alarm_values$0=
      [0,
       [0,
        function(param){return 0},
        cst_fired_alarm_values,
        _jW_,
        fired_alarm_values,
        _jV_]];
    function _jX_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _jY_=0,
     handle_fired$0=
      [0,
       [0,function(param){return 0},cst_handle_fired,_jY_,handle_fired,_jX_]];
    function _jZ_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j0_=[0,set_now],
     now$0=[0,[0,function(param){return 0},cst_now,_j0_,_jA_,_jZ_]];
    function _j1_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j2_=0,
     timing_wheel$0=
      [0,
       [0,function(param){return 0},cst_timing_wheel,_j2_,timing_wheel,_j1_]];
    function _j3_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j4_=0,
     run_on_update_handlers$1=
      [0,
       [0,
        function(param){return 0},
        cst_run_on_update_handlers,
        _j4_,
        run_on_update_handlers$0,
        _j3_]];
    function _j5_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j6_=0,
     handle_after_stabilization$0=
      [0,
       [0,
        function(param){return 0},
        cst_handle_after_stabilization,
        _j6_,
        handle_after_stabilization,
        _j5_]];
    function _j7_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j8_=0,
     set_during_stabilization$0=
      [0,
       [0,
        function(param){return 0},
        cst_set_during_stabilization,
        _j8_,
        set_during_stabilization,
        _j7_]];
    function _j9_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _j__=0,
     disallowed_observers$0=
      [0,
       [0,
        function(param){return 0},
        cst_disallowed_observers,
        _j__,
        disallowed_observers,
        _j9_]];
    function _j$_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ka_=0,
     new_observers$0=
      [0,
       [0,function(param){return 0},cst_new_observers,_ka_,new_observers,_j$_]];
    function _kb_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _kc_=0,
     finalized_observers$0=
      [0,
       [0,
        function(param){return 0},
        cst_finalized_observers,
        _kc_,
        finalized_observers,
        _kb_]];
    function _kd_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ke_=[0,set_all_observers],
     all_observers$0=
      [0,
       [0,function(param){return 0},cst_all_observers,_ke_,all_observers,_kd_]];
    function _kf_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _kg_=[0,set_num_active_observers],
     num_active_observers$0=
      [0,
       [0,
        function(param){return 0},
        cst_num_active_observers,
        _kg_,
        num_active_observers,
        _kf_]];
    function _kh_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ki_=0,
     propagate_invalidity$0=
      [0,
       [0,
        function(param){return 0},
        cst_propagate_invalidity,
        _ki_,
        propagate_invalidity,
        _kh_]];
    function _kj_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _kk_=0,
     adjust_heights_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_adjust_heights_heap,
        _kk_,
        adjust_heights_heap,
        _kj_]];
    function _kl_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _km_=0,
     recompute_heap$0=
      [0,
       [0,
        function(param){return 0},
        cst_recompute_heap,
        _km_,
        recompute_heap,
        _kl_]];
    function _kn_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ko_=[0,set_current_scope],
     current_scope$0=
      [0,
       [0,function(param){return 0},cst_current_scope,_ko_,current_scope,_kn_]];
    function _kp_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _kq_=[0,set_stabilization_num],
     stabilization_num$0=
      [0,
       [0,
        function(param){return 0},
        cst_stabilization_num,
        _kq_,
        stabilization_num,
        _kp_]];
    function _kr_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ks_=0,
     bind_lhs_change_should_invalidate_rhs$0=
      [0,
       [0,
        function(param){return 0},
        cst_bind_lhs_change_should_invalidate_rhs,
        _ks_,
        bind_lhs_change_should_invalidate_rhs,
        _kr_]];
    function _kt_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28],
              r[29]]}
    var
     _ku_=[0,set_status],
     status$0=[0,[0,function(param){return 0},cst_status,_ku_,status,_kt_]];
    function make_creator$0
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun,
      compile_acc)
     {var
       match=caml_call2(status_fun,status$0,compile_acc),
       compile_acc$0=match[2],
       status_gen=match[1],
       match$0=
        caml_call2
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          compile_acc$0),
       compile_acc$1=match$0[2],
       bind_lhs_change_should_invalidate_rhs_gen=match$0[1],
       match$1=
        caml_call2(stabilization_num_fun,stabilization_num$0,compile_acc$1),
       compile_acc$2=match$1[2],
       stabilization_num_gen=match$1[1],
       match$2=caml_call2(current_scope_fun,current_scope$0,compile_acc$2),
       compile_acc$3=match$2[2],
       current_scope_gen=match$2[1],
       match$3=caml_call2(recompute_heap_fun,recompute_heap$0,compile_acc$3),
       compile_acc$4=match$3[2],
       recompute_heap_gen=match$3[1],
       match$4=
        caml_call2
         (adjust_heights_heap_fun,adjust_heights_heap$0,compile_acc$4),
       compile_acc$5=match$4[2],
       adjust_heights_heap_gen=match$4[1],
       match$5=
        caml_call2
         (propagate_invalidity_fun,propagate_invalidity$0,compile_acc$5),
       compile_acc$6=match$5[2],
       propagate_invalidity_gen=match$5[1],
       match$6=
        caml_call2
         (num_active_observers_fun,num_active_observers$0,compile_acc$6),
       compile_acc$7=match$6[2],
       num_active_observers_gen=match$6[1],
       match$7=caml_call2(all_observers_fun,all_observers$0,compile_acc$7),
       compile_acc$8=match$7[2],
       all_observers_gen=match$7[1],
       match$8=
        caml_call2
         (finalized_observers_fun,finalized_observers$0,compile_acc$8),
       compile_acc$9=match$8[2],
       finalized_observers_gen=match$8[1],
       match$9=caml_call2(new_observers_fun,new_observers$0,compile_acc$9),
       compile_acc$10=match$9[2],
       new_observers_gen=match$9[1],
       match$10=
        caml_call2
         (disallowed_observers_fun,disallowed_observers$0,compile_acc$10),
       compile_acc$11=match$10[2],
       disallowed_observers_gen=match$10[1],
       match$11=
        caml_call2
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          compile_acc$11),
       compile_acc$12=match$11[2],
       set_during_stabilization_gen=match$11[1],
       match$12=
        caml_call2
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          compile_acc$12),
       compile_acc$13=match$12[2],
       handle_after_stabilization_gen=match$12[1],
       match$13=
        caml_call2
         (run_on_update_handlers_fun,run_on_update_handlers$1,compile_acc$13),
       compile_acc$14=match$13[2],
       run_on_update_handlers_gen=match$13[1],
       match$14=caml_call2(timing_wheel_fun,timing_wheel$0,compile_acc$14),
       compile_acc$15=match$14[2],
       timing_wheel_gen=match$14[1],
       match$15=caml_call2(now_fun,now$0,compile_acc$15),
       compile_acc$16=match$15[2],
       now_gen=match$15[1],
       match$16=caml_call2(handle_fired_fun,handle_fired$0,compile_acc$16),
       compile_acc$17=match$16[2],
       handle_fired_gen=match$16[1],
       match$17=
        caml_call2(fired_alarm_values_fun,fired_alarm_values$0,compile_acc$17),
       compile_acc$18=match$17[2],
       fired_alarm_values_gen=match$17[1],
       match$18=caml_call2(only_in_debug_fun,only_in_debug$0,compile_acc$18),
       compile_acc$19=match$18[2],
       only_in_debug_gen=match$18[1],
       match$19=
        caml_call2
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          compile_acc$19),
       compile_acc$20=match$19[2],
       num_nodes_became_necessary_gen=match$19[1],
       match$20=
        caml_call2
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          compile_acc$20),
       compile_acc$21=match$20[2],
       num_nodes_became_unnecessary_gen=match$20[1],
       match$21=
        caml_call2(num_nodes_changed_fun,num_nodes_changed$0,compile_acc$21),
       compile_acc$22=match$21[2],
       num_nodes_changed_gen=match$21[1],
       match$22=
        caml_call2(num_nodes_created_fun,num_nodes_created$0,compile_acc$22),
       compile_acc$23=match$22[2],
       num_nodes_created_gen=match$22[1],
       match$23=
        caml_call2
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,compile_acc$23),
       compile_acc$24=match$23[2],
       num_nodes_invalidated_gen=match$23[1],
       match$24=
        caml_call2
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,compile_acc$24),
       compile_acc$25=match$24[2],
       num_nodes_recomputed_gen=match$24[1],
       match$25=
        caml_call2
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          compile_acc$25),
       compile_acc$26=match$25[2],
       num_nodes_recomputed_directly_because_one_child_gen=match$25[1],
       match$26=
        caml_call2
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          compile_acc$26),
       compile_acc$27=match$26[2],
       num_nodes_recomputed_directly_because_min_height_gen=match$26[1],
       match$27=caml_call2(num_var_sets_fun,num_var_sets$0,compile_acc$27),
       compile_acc$28=match$27[2],
       num_var_sets_gen=match$27[1];
      return [0,
              function(acc)
               {var
                 status=caml_call1(status_gen,acc),
                 bind_lhs_change_should_invalidate_rhs=
                  caml_call1(bind_lhs_change_should_invalidate_rhs_gen,acc),
                 stabilization_num=caml_call1(stabilization_num_gen,acc),
                 current_scope=caml_call1(current_scope_gen,acc),
                 recompute_heap=caml_call1(recompute_heap_gen,acc),
                 adjust_heights_heap=caml_call1(adjust_heights_heap_gen,acc),
                 propagate_invalidity=caml_call1(propagate_invalidity_gen,acc),
                 num_active_observers=caml_call1(num_active_observers_gen,acc),
                 all_observers=caml_call1(all_observers_gen,acc),
                 finalized_observers=caml_call1(finalized_observers_gen,acc),
                 new_observers=caml_call1(new_observers_gen,acc),
                 disallowed_observers=caml_call1(disallowed_observers_gen,acc),
                 set_during_stabilization=
                  caml_call1(set_during_stabilization_gen,acc),
                 handle_after_stabilization=
                  caml_call1(handle_after_stabilization_gen,acc),
                 run_on_update_handlers=
                  caml_call1(run_on_update_handlers_gen,acc),
                 timing_wheel=caml_call1(timing_wheel_gen,acc),
                 now=caml_call1(now_gen,acc),
                 handle_fired=caml_call1(handle_fired_gen,acc),
                 fired_alarm_values=caml_call1(fired_alarm_values_gen,acc),
                 only_in_debug=caml_call1(only_in_debug_gen,acc),
                 num_nodes_became_necessary=
                  caml_call1(num_nodes_became_necessary_gen,acc),
                 num_nodes_became_unnecessary=
                  caml_call1(num_nodes_became_unnecessary_gen,acc),
                 num_nodes_changed=caml_call1(num_nodes_changed_gen,acc),
                 num_nodes_created=caml_call1(num_nodes_created_gen,acc),
                 num_nodes_invalidated=
                  caml_call1(num_nodes_invalidated_gen,acc),
                 num_nodes_recomputed=caml_call1(num_nodes_recomputed_gen,acc),
                 num_nodes_recomputed_directly_because_one_child=
                  caml_call1
                   (num_nodes_recomputed_directly_because_one_child_gen,acc),
                 num_nodes_recomputed_directly_because_min_height=
                  caml_call1
                   (num_nodes_recomputed_directly_because_min_height_gen,acc),
                 num_var_sets=caml_call1(num_var_sets_gen,acc);
                return [0,
                        status,
                        bind_lhs_change_should_invalidate_rhs,
                        stabilization_num,
                        current_scope,
                        recompute_heap,
                        adjust_heights_heap,
                        propagate_invalidity,
                        num_active_observers,
                        all_observers,
                        finalized_observers,
                        new_observers,
                        disallowed_observers,
                        set_during_stabilization,
                        handle_after_stabilization,
                        run_on_update_handlers,
                        timing_wheel,
                        now,
                        handle_fired,
                        fired_alarm_values,
                        only_in_debug,
                        num_nodes_became_necessary,
                        num_nodes_became_unnecessary,
                        num_nodes_changed,
                        num_nodes_created,
                        num_nodes_invalidated,
                        num_nodes_recomputed,
                        num_nodes_recomputed_directly_because_one_child,
                        num_nodes_recomputed_directly_because_min_height,
                        num_var_sets]},
              compile_acc$28]}
    function create$13
     (status,
      bind_lhs_change_should_invalidate_rhs,
      stabilization_num,
      current_scope,
      recompute_heap,
      adjust_heights_heap,
      propagate_invalidity,
      num_active_observers,
      all_observers,
      finalized_observers,
      new_observers,
      disallowed_observers,
      set_during_stabilization,
      handle_after_stabilization,
      run_on_update_handlers,
      timing_wheel,
      now,
      handle_fired,
      fired_alarm_values,
      only_in_debug,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_because_one_child,
      num_nodes_recomputed_directly_because_min_height,
      num_var_sets)
     {return [0,
              status,
              bind_lhs_change_should_invalidate_rhs,
              stabilization_num,
              current_scope,
              recompute_heap,
              adjust_heights_heap,
              propagate_invalidity,
              num_active_observers,
              all_observers,
              finalized_observers,
              new_observers,
              disallowed_observers,
              set_during_stabilization,
              handle_after_stabilization,
              run_on_update_handlers,
              timing_wheel,
              now,
              handle_fired,
              fired_alarm_values,
              only_in_debug,
              num_nodes_became_necessary,
              num_nodes_became_unnecessary,
              num_nodes_changed,
              num_nodes_created,
              num_nodes_invalidated,
              num_nodes_recomputed,
              num_nodes_recomputed_directly_because_one_child,
              num_nodes_recomputed_directly_because_min_height,
              num_var_sets]}
    function map$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _vb_=caml_call1(num_var_sets_fun,num_var_sets$0),
       _vc_=
        caml_call1
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0),
       _vd_=
        caml_call1
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0),
       _ve_=caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _vf_=caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _vg_=caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _vh_=caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _vi_=
        caml_call1
         (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
       _vj_=
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _vk_=caml_call1(only_in_debug_fun,only_in_debug$0),
       _vl_=caml_call1(fired_alarm_values_fun,fired_alarm_values$0),
       _vm_=caml_call1(handle_fired_fun,handle_fired$0),
       _vn_=caml_call1(now_fun,now$0),
       _vo_=caml_call1(timing_wheel_fun,timing_wheel$0),
       _vp_=caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _vq_=
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _vr_=
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _vs_=caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _vt_=caml_call1(new_observers_fun,new_observers$0),
       _vu_=caml_call1(finalized_observers_fun,finalized_observers$0),
       _vv_=caml_call1(all_observers_fun,all_observers$0),
       _vw_=caml_call1(num_active_observers_fun,num_active_observers$0),
       _vx_=caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _vy_=caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _vz_=caml_call1(recompute_heap_fun,recompute_heap$0),
       _vA_=caml_call1(current_scope_fun,current_scope$0),
       _vB_=caml_call1(stabilization_num_fun,stabilization_num$0),
       _vC_=
        caml_call1
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0);
      return [0,
              caml_call1(status_fun,status$0),
              _vC_,
              _vB_,
              _vA_,
              _vz_,
              _vy_,
              _vx_,
              _vw_,
              _vv_,
              _vu_,
              _vt_,
              _vs_,
              _vr_,
              _vq_,
              _vp_,
              _vo_,
              _vn_,
              _vm_,
              _vl_,
              _vk_,
              _vj_,
              _vi_,
              _vh_,
              _vg_,
              _vf_,
              _ve_,
              _vd_,
              _vc_,
              _vb_]}
    function iter$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {caml_call1(status_fun,status$0);
      caml_call1
       (bind_lhs_change_should_invalidate_rhs_fun,
        bind_lhs_change_should_invalidate_rhs$0);
      caml_call1(stabilization_num_fun,stabilization_num$0);
      caml_call1(current_scope_fun,current_scope$0);
      caml_call1(recompute_heap_fun,recompute_heap$0);
      caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0);
      caml_call1(propagate_invalidity_fun,propagate_invalidity$0);
      caml_call1(num_active_observers_fun,num_active_observers$0);
      caml_call1(all_observers_fun,all_observers$0);
      caml_call1(finalized_observers_fun,finalized_observers$0);
      caml_call1(new_observers_fun,new_observers$0);
      caml_call1(disallowed_observers_fun,disallowed_observers$0);
      caml_call1(set_during_stabilization_fun,set_during_stabilization$0);
      caml_call1(handle_after_stabilization_fun,handle_after_stabilization$0);
      caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1);
      caml_call1(timing_wheel_fun,timing_wheel$0);
      caml_call1(now_fun,now$0);
      caml_call1(handle_fired_fun,handle_fired$0);
      caml_call1(fired_alarm_values_fun,fired_alarm_values$0);
      caml_call1(only_in_debug_fun,only_in_debug$0);
      caml_call1(num_nodes_became_necessary_fun,num_nodes_became_necessary$0);
      caml_call1
       (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0);
      caml_call1(num_nodes_changed_fun,num_nodes_changed$0);
      caml_call1(num_nodes_created_fun,num_nodes_created$0);
      caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0);
      caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0);
      caml_call1
       (num_nodes_recomputed_directly_because_one_child_fun,
        num_nodes_recomputed_directly_because_one_child$0);
      caml_call1
       (num_nodes_recomputed_directly_because_min_height_fun,
        num_nodes_recomputed_directly_because_min_height$0);
      return caml_call1(num_var_sets_fun,num_var_sets$0)}
    function fold$2
     (init,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {return caml_call2
              (num_var_sets_fun,
               caml_call2
                (num_nodes_recomputed_directly_because_min_height_fun,
                 caml_call2
                  (num_nodes_recomputed_directly_because_one_child_fun,
                   caml_call2
                    (num_nodes_recomputed_fun,
                     caml_call2
                      (num_nodes_invalidated_fun,
                       caml_call2
                        (num_nodes_created_fun,
                         caml_call2
                          (num_nodes_changed_fun,
                           caml_call2
                            (num_nodes_became_unnecessary_fun,
                             caml_call2
                              (num_nodes_became_necessary_fun,
                               caml_call2
                                (only_in_debug_fun,
                                 caml_call2
                                  (fired_alarm_values_fun,
                                   caml_call2
                                    (handle_fired_fun,
                                     caml_call2
                                      (now_fun,
                                       caml_call2
                                        (timing_wheel_fun,
                                         caml_call2
                                          (run_on_update_handlers_fun,
                                           caml_call2
                                            (handle_after_stabilization_fun,
                                             caml_call2
                                              (set_during_stabilization_fun,
                                               caml_call2
                                                (disallowed_observers_fun,
                                                 caml_call2
                                                  (new_observers_fun,
                                                   caml_call2
                                                    (finalized_observers_fun,
                                                     caml_call2
                                                      (all_observers_fun,
                                                       caml_call2
                                                        (num_active_observers_fun,
                                                         caml_call2
                                                          (propagate_invalidity_fun,
                                                           caml_call2
                                                            (adjust_heights_heap_fun,
                                                             caml_call2
                                                              (recompute_heap_fun,
                                                               caml_call2
                                                                (current_scope_fun,
                                                                 caml_call2
                                                                  (stabilization_num_fun,
                                                                   caml_call2
                                                                    (bind_lhs_change_should_invalidate_rhs_fun,
                                                                     caml_call2(status_fun,init,status$0),
                                                                     bind_lhs_change_should_invalidate_rhs$0),
                                                                   stabilization_num$0),
                                                                 current_scope$0),
                                                               recompute_heap$0),
                                                             adjust_heights_heap$0),
                                                           propagate_invalidity$0),
                                                         num_active_observers$0),
                                                       all_observers$0),
                                                     finalized_observers$0),
                                                   new_observers$0),
                                                 disallowed_observers$0),
                                               set_during_stabilization$0),
                                             handle_after_stabilization$0),
                                           run_on_update_handlers$1),
                                         timing_wheel$0),
                                       now$0),
                                     handle_fired$0),
                                   fired_alarm_values$0),
                                 only_in_debug$0),
                               num_nodes_became_necessary$0),
                             num_nodes_became_unnecessary$0),
                           num_nodes_changed$0),
                         num_nodes_created$0),
                       num_nodes_invalidated$0),
                     num_nodes_recomputed$0),
                   num_nodes_recomputed_directly_because_one_child$0),
                 num_nodes_recomputed_directly_because_min_height$0),
               num_var_sets$0)}
    function map_poly$0(record)
     {var
       _uL_=[0,caml_call1(record[1],num_var_sets$0),0],
       _uM_=
        [0,
         caml_call1
          (record[1],num_nodes_recomputed_directly_because_min_height$0),
         _uL_],
       _uN_=
        [0,
         caml_call1
          (record[1],num_nodes_recomputed_directly_because_one_child$0),
         _uM_],
       _uO_=[0,caml_call1(record[1],num_nodes_recomputed$0),_uN_],
       _uP_=[0,caml_call1(record[1],num_nodes_invalidated$0),_uO_],
       _uQ_=[0,caml_call1(record[1],num_nodes_created$0),_uP_],
       _uR_=[0,caml_call1(record[1],num_nodes_changed$0),_uQ_],
       _uS_=[0,caml_call1(record[1],num_nodes_became_unnecessary$0),_uR_],
       _uT_=[0,caml_call1(record[1],num_nodes_became_necessary$0),_uS_],
       _uU_=[0,caml_call1(record[1],only_in_debug$0),_uT_],
       _uV_=[0,caml_call1(record[1],fired_alarm_values$0),_uU_],
       _uW_=[0,caml_call1(record[1],handle_fired$0),_uV_],
       _uX_=[0,caml_call1(record[1],now$0),_uW_],
       _uY_=[0,caml_call1(record[1],timing_wheel$0),_uX_],
       _uZ_=[0,caml_call1(record[1],run_on_update_handlers$1),_uY_],
       _u0_=[0,caml_call1(record[1],handle_after_stabilization$0),_uZ_],
       _u1_=[0,caml_call1(record[1],set_during_stabilization$0),_u0_],
       _u2_=[0,caml_call1(record[1],disallowed_observers$0),_u1_],
       _u3_=[0,caml_call1(record[1],new_observers$0),_u2_],
       _u4_=[0,caml_call1(record[1],finalized_observers$0),_u3_],
       _u5_=[0,caml_call1(record[1],all_observers$0),_u4_],
       _u6_=[0,caml_call1(record[1],num_active_observers$0),_u5_],
       _u7_=[0,caml_call1(record[1],propagate_invalidity$0),_u6_],
       _u8_=[0,caml_call1(record[1],adjust_heights_heap$0),_u7_],
       _u9_=[0,caml_call1(record[1],recompute_heap$0),_u8_],
       _u__=[0,caml_call1(record[1],current_scope$0),_u9_],
       _u$_=[0,caml_call1(record[1],stabilization_num$0),_u__],
       _va_=
        [0,caml_call1(record[1],bind_lhs_change_should_invalidate_rhs$0),_u$_];
      return [0,caml_call1(record[1],status$0),_va_]}
    function for_all$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _uj_=caml_call1(status_fun,status$0),
       _uk_=
        _uj_
         ?caml_call1
           (bind_lhs_change_should_invalidate_rhs_fun,
            bind_lhs_change_should_invalidate_rhs$0)
         :_uj_,
       _ul_=_uk_?caml_call1(stabilization_num_fun,stabilization_num$0):_uk_,
       _um_=_ul_?caml_call1(current_scope_fun,current_scope$0):_ul_,
       _un_=_um_?caml_call1(recompute_heap_fun,recompute_heap$0):_um_,
       _uo_=
        _un_?caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0):_un_,
       _up_=
        _uo_?caml_call1(propagate_invalidity_fun,propagate_invalidity$0):_uo_,
       _uq_=
        _up_?caml_call1(num_active_observers_fun,num_active_observers$0):_up_,
       _ur_=_uq_?caml_call1(all_observers_fun,all_observers$0):_uq_,
       _us_=
        _ur_?caml_call1(finalized_observers_fun,finalized_observers$0):_ur_,
       _ut_=_us_?caml_call1(new_observers_fun,new_observers$0):_us_,
       _uu_=
        _ut_?caml_call1(disallowed_observers_fun,disallowed_observers$0):_ut_,
       _uv_=
        _uu_
         ?caml_call1(set_during_stabilization_fun,set_during_stabilization$0)
         :_uu_,
       _uw_=
        _uv_
         ?caml_call1
           (handle_after_stabilization_fun,handle_after_stabilization$0)
         :_uv_,
       _ux_=
        _uw_
         ?caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1)
         :_uw_,
       _uy_=_ux_?caml_call1(timing_wheel_fun,timing_wheel$0):_ux_,
       _uz_=_uy_?caml_call1(now_fun,now$0):_uy_,
       _uA_=_uz_?caml_call1(handle_fired_fun,handle_fired$0):_uz_,
       _uB_=_uA_?caml_call1(fired_alarm_values_fun,fired_alarm_values$0):_uA_,
       _uC_=_uB_?caml_call1(only_in_debug_fun,only_in_debug$0):_uB_,
       _uD_=
        _uC_
         ?caml_call1
           (num_nodes_became_necessary_fun,num_nodes_became_necessary$0)
         :_uC_,
       _uE_=
        _uD_
         ?caml_call1
           (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0)
         :_uD_,
       _uF_=_uE_?caml_call1(num_nodes_changed_fun,num_nodes_changed$0):_uE_,
       _uG_=_uF_?caml_call1(num_nodes_created_fun,num_nodes_created$0):_uF_,
       _uH_=
        _uG_
         ?caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0)
         :_uG_,
       _uI_=
        _uH_?caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0):_uH_,
       _uJ_=
        _uI_
         ?caml_call1
           (num_nodes_recomputed_directly_because_one_child_fun,
            num_nodes_recomputed_directly_because_one_child$0)
         :_uI_,
       _uK_=
        _uJ_
         ?caml_call1
           (num_nodes_recomputed_directly_because_min_height_fun,
            num_nodes_recomputed_directly_because_min_height$0)
         :_uJ_;
      return _uK_?caml_call1(num_var_sets_fun,num_var_sets$0):_uK_}
    function exists$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _ui_=caml_call1(status_fun,status$0),
       _tT_=
        _ui_
        ||
        caml_call1
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0),
       _tU_=_tT_ || caml_call1(stabilization_num_fun,stabilization_num$0),
       _tV_=_tU_ || caml_call1(current_scope_fun,current_scope$0),
       _tW_=_tV_ || caml_call1(recompute_heap_fun,recompute_heap$0),
       _tX_=_tW_ || caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),
       _tY_=
        _tX_
        ||
        caml_call1(propagate_invalidity_fun,propagate_invalidity$0),
       _tZ_=
        _tY_
        ||
        caml_call1(num_active_observers_fun,num_active_observers$0),
       _t0_=_tZ_ || caml_call1(all_observers_fun,all_observers$0),
       _t1_=_t0_ || caml_call1(finalized_observers_fun,finalized_observers$0),
       _t2_=_t1_ || caml_call1(new_observers_fun,new_observers$0),
       _t3_=
        _t2_
        ||
        caml_call1(disallowed_observers_fun,disallowed_observers$0),
       _t4_=
        _t3_
        ||
        caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
       _t5_=
        _t4_
        ||
        caml_call1
         (handle_after_stabilization_fun,handle_after_stabilization$0),
       _t6_=
        _t5_
        ||
        caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
       _t7_=_t6_ || caml_call1(timing_wheel_fun,timing_wheel$0),
       _t8_=_t7_ || caml_call1(now_fun,now$0),
       _t9_=_t8_ || caml_call1(handle_fired_fun,handle_fired$0),
       _t__=_t9_ || caml_call1(fired_alarm_values_fun,fired_alarm_values$0),
       _t$_=_t__ || caml_call1(only_in_debug_fun,only_in_debug$0),
       _ua_=
        _t$_
        ||
        caml_call1
         (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
       _ub_=
        _ua_
        ||
        caml_call1
         (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
       _uc_=_ub_ || caml_call1(num_nodes_changed_fun,num_nodes_changed$0),
       _ud_=_uc_ || caml_call1(num_nodes_created_fun,num_nodes_created$0),
       _ue_=
        _ud_
        ||
        caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),
       _uf_=
        _ue_
        ||
        caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),
       _ug_=
        _uf_
        ||
        caml_call1
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0),
       _uh_=
        _ug_
        ||
        caml_call1
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0);
      return _uh_?_uh_:caml_call1(num_var_sets_fun,num_var_sets$0)}
    function to_list$2
     (status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _tr_=[0,caml_call1(num_var_sets_fun,num_var_sets$0),0],
       _ts_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_because_min_height_fun,
           num_nodes_recomputed_directly_because_min_height$0),
         _tr_],
       _tt_=
        [0,
         caml_call1
          (num_nodes_recomputed_directly_because_one_child_fun,
           num_nodes_recomputed_directly_because_one_child$0),
         _ts_],
       _tu_=
        [0,caml_call1(num_nodes_recomputed_fun,num_nodes_recomputed$0),_tt_],
       _tv_=
        [0,caml_call1(num_nodes_invalidated_fun,num_nodes_invalidated$0),_tu_],
       _tw_=[0,caml_call1(num_nodes_created_fun,num_nodes_created$0),_tv_],
       _tx_=[0,caml_call1(num_nodes_changed_fun,num_nodes_changed$0),_tw_],
       _ty_=
        [0,
         caml_call1
          (num_nodes_became_unnecessary_fun,num_nodes_became_unnecessary$0),
         _tx_],
       _tz_=
        [0,
         caml_call1
          (num_nodes_became_necessary_fun,num_nodes_became_necessary$0),
         _ty_],
       _tA_=[0,caml_call1(only_in_debug_fun,only_in_debug$0),_tz_],
       _tB_=[0,caml_call1(fired_alarm_values_fun,fired_alarm_values$0),_tA_],
       _tC_=[0,caml_call1(handle_fired_fun,handle_fired$0),_tB_],
       _tD_=[0,caml_call1(now_fun,now$0),_tC_],
       _tE_=[0,caml_call1(timing_wheel_fun,timing_wheel$0),_tD_],
       _tF_=
        [0,
         caml_call1(run_on_update_handlers_fun,run_on_update_handlers$1),
         _tE_],
       _tG_=
        [0,
         caml_call1
          (handle_after_stabilization_fun,handle_after_stabilization$0),
         _tF_],
       _tH_=
        [0,
         caml_call1(set_during_stabilization_fun,set_during_stabilization$0),
         _tG_],
       _tI_=
        [0,caml_call1(disallowed_observers_fun,disallowed_observers$0),_tH_],
       _tJ_=[0,caml_call1(new_observers_fun,new_observers$0),_tI_],
       _tK_=[0,caml_call1(finalized_observers_fun,finalized_observers$0),_tJ_],
       _tL_=[0,caml_call1(all_observers_fun,all_observers$0),_tK_],
       _tM_=
        [0,caml_call1(num_active_observers_fun,num_active_observers$0),_tL_],
       _tN_=
        [0,caml_call1(propagate_invalidity_fun,propagate_invalidity$0),_tM_],
       _tO_=[0,caml_call1(adjust_heights_heap_fun,adjust_heights_heap$0),_tN_],
       _tP_=[0,caml_call1(recompute_heap_fun,recompute_heap$0),_tO_],
       _tQ_=[0,caml_call1(current_scope_fun,current_scope$0),_tP_],
       _tR_=[0,caml_call1(stabilization_num_fun,stabilization_num$0),_tQ_],
       _tS_=
        [0,
         caml_call1
          (bind_lhs_change_should_invalidate_rhs_fun,
           bind_lhs_change_should_invalidate_rhs$0),
         _tR_];
      return [0,caml_call1(status_fun,status$0),_tS_]}
    function iter$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {caml_call3(status_fun,status$0,record,record[1]);
      caml_call3
       (bind_lhs_change_should_invalidate_rhs_fun,
        bind_lhs_change_should_invalidate_rhs$0,
        record,
        record[2]);
      caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]);
      caml_call3(current_scope_fun,current_scope$0,record,record[4]);
      caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]);
      caml_call3
       (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]);
      caml_call3
       (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]);
      caml_call3
       (num_active_observers_fun,num_active_observers$0,record,record[8]);
      caml_call3(all_observers_fun,all_observers$0,record,record[9]);
      caml_call3
       (finalized_observers_fun,finalized_observers$0,record,record[10]);
      caml_call3(new_observers_fun,new_observers$0,record,record[11]);
      caml_call3
       (disallowed_observers_fun,disallowed_observers$0,record,record[12]);
      caml_call3
       (set_during_stabilization_fun,
        set_during_stabilization$0,
        record,
        record[13]);
      caml_call3
       (handle_after_stabilization_fun,
        handle_after_stabilization$0,
        record,
        record[14]);
      caml_call3
       (run_on_update_handlers_fun,run_on_update_handlers$1,record,record[15]);
      caml_call3(timing_wheel_fun,timing_wheel$0,record,record[16]);
      caml_call3(now_fun,now$0,record,record[17]);
      caml_call3(handle_fired_fun,handle_fired$0,record,record[18]);
      caml_call3
       (fired_alarm_values_fun,fired_alarm_values$0,record,record[19]);
      caml_call3(only_in_debug_fun,only_in_debug$0,record,record[20]);
      caml_call3
       (num_nodes_became_necessary_fun,
        num_nodes_became_necessary$0,
        record,
        record[21]);
      caml_call3
       (num_nodes_became_unnecessary_fun,
        num_nodes_became_unnecessary$0,
        record,
        record[22]);
      caml_call3(num_nodes_changed_fun,num_nodes_changed$0,record,record[23]);
      caml_call3(num_nodes_created_fun,num_nodes_created$0,record,record[24]);
      caml_call3
       (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[25]);
      caml_call3
       (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[26]);
      caml_call3
       (num_nodes_recomputed_directly_because_one_child_fun,
        num_nodes_recomputed_directly_because_one_child$0,
        record,
        record[27]);
      caml_call3
       (num_nodes_recomputed_directly_because_min_height_fun,
        num_nodes_recomputed_directly_because_min_height$0,
        record,
        record[28]);
      return caml_call3(num_var_sets_fun,num_var_sets$0,record,record[29])}
    function fold$3
     (record,
      init,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _s1_=record[29],
       _s2_=record[28],
       _s3_=record[27],
       _s4_=record[26],
       _s5_=record[25],
       _s6_=record[24],
       _s7_=record[23],
       _s8_=record[22],
       _s9_=record[21],
       _s__=record[20],
       _s$_=record[19],
       _ta_=record[18],
       _tb_=record[17],
       _tc_=record[16],
       _td_=record[15],
       _te_=record[14],
       _tf_=record[13],
       _tg_=record[12],
       _th_=record[11],
       _ti_=record[10],
       _tj_=record[9],
       _tk_=record[8],
       _tl_=record[7],
       _tm_=record[6],
       _tn_=record[5],
       _to_=record[4],
       _tp_=record[3],
       _tq_=record[2];
      return caml_call4
              (num_var_sets_fun,
               caml_call4
                (num_nodes_recomputed_directly_because_min_height_fun,
                 caml_call4
                  (num_nodes_recomputed_directly_because_one_child_fun,
                   caml_call4
                    (num_nodes_recomputed_fun,
                     caml_call4
                      (num_nodes_invalidated_fun,
                       caml_call4
                        (num_nodes_created_fun,
                         caml_call4
                          (num_nodes_changed_fun,
                           caml_call4
                            (num_nodes_became_unnecessary_fun,
                             caml_call4
                              (num_nodes_became_necessary_fun,
                               caml_call4
                                (only_in_debug_fun,
                                 caml_call4
                                  (fired_alarm_values_fun,
                                   caml_call4
                                    (handle_fired_fun,
                                     caml_call4
                                      (now_fun,
                                       caml_call4
                                        (timing_wheel_fun,
                                         caml_call4
                                          (run_on_update_handlers_fun,
                                           caml_call4
                                            (handle_after_stabilization_fun,
                                             caml_call4
                                              (set_during_stabilization_fun,
                                               caml_call4
                                                (disallowed_observers_fun,
                                                 caml_call4
                                                  (new_observers_fun,
                                                   caml_call4
                                                    (finalized_observers_fun,
                                                     caml_call4
                                                      (all_observers_fun,
                                                       caml_call4
                                                        (num_active_observers_fun,
                                                         caml_call4
                                                          (propagate_invalidity_fun,
                                                           caml_call4
                                                            (adjust_heights_heap_fun,
                                                             caml_call4
                                                              (recompute_heap_fun,
                                                               caml_call4
                                                                (current_scope_fun,
                                                                 caml_call4
                                                                  (stabilization_num_fun,
                                                                   caml_call4
                                                                    (bind_lhs_change_should_invalidate_rhs_fun,
                                                                     caml_call4(status_fun,init,status$0,record,record[1]),
                                                                     bind_lhs_change_should_invalidate_rhs$0,
                                                                     record,
                                                                     _tq_),
                                                                   stabilization_num$0,
                                                                   record,
                                                                   _tp_),
                                                                 current_scope$0,
                                                                 record,
                                                                 _to_),
                                                               recompute_heap$0,
                                                               record,
                                                               _tn_),
                                                             adjust_heights_heap$0,
                                                             record,
                                                             _tm_),
                                                           propagate_invalidity$0,
                                                           record,
                                                           _tl_),
                                                         num_active_observers$0,
                                                         record,
                                                         _tk_),
                                                       all_observers$0,
                                                       record,
                                                       _tj_),
                                                     finalized_observers$0,
                                                     record,
                                                     _ti_),
                                                   new_observers$0,
                                                   record,
                                                   _th_),
                                                 disallowed_observers$0,
                                                 record,
                                                 _tg_),
                                               set_during_stabilization$0,
                                               record,
                                               _tf_),
                                             handle_after_stabilization$0,
                                             record,
                                             _te_),
                                           run_on_update_handlers$1,
                                           record,
                                           _td_),
                                         timing_wheel$0,
                                         record,
                                         _tc_),
                                       now$0,
                                       record,
                                       _tb_),
                                     handle_fired$0,
                                     record,
                                     _ta_),
                                   fired_alarm_values$0,
                                   record,
                                   _s$_),
                                 only_in_debug$0,
                                 record,
                                 _s__),
                               num_nodes_became_necessary$0,
                               record,
                               _s9_),
                             num_nodes_became_unnecessary$0,
                             record,
                             _s8_),
                           num_nodes_changed$0,
                           record,
                           _s7_),
                         num_nodes_created$0,
                         record,
                         _s6_),
                       num_nodes_invalidated$0,
                       record,
                       _s5_),
                     num_nodes_recomputed$0,
                     record,
                     _s4_),
                   num_nodes_recomputed_directly_because_one_child$0,
                   record,
                   _s3_),
                 num_nodes_recomputed_directly_because_min_height$0,
                 record,
                 _s2_),
               num_var_sets$0,
               record,
               _s1_)}
    function for_all$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _sz_=caml_call3(status_fun,status$0,record,record[1]),
       _sA_=
        _sz_
         ?caml_call3
           (bind_lhs_change_should_invalidate_rhs_fun,
            bind_lhs_change_should_invalidate_rhs$0,
            record,
            record[2])
         :_sz_,
       _sB_=
        _sA_
         ?caml_call3
           (stabilization_num_fun,stabilization_num$0,record,record[3])
         :_sA_,
       _sC_=
        _sB_
         ?caml_call3(current_scope_fun,current_scope$0,record,record[4])
         :_sB_,
       _sD_=
        _sC_
         ?caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5])
         :_sC_,
       _sE_=
        _sD_
         ?caml_call3
           (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6])
         :_sD_,
       _sF_=
        _sE_
         ?caml_call3
           (propagate_invalidity_fun,propagate_invalidity$0,record,record[7])
         :_sE_,
       _sG_=
        _sF_
         ?caml_call3
           (num_active_observers_fun,num_active_observers$0,record,record[8])
         :_sF_,
       _sH_=
        _sG_
         ?caml_call3(all_observers_fun,all_observers$0,record,record[9])
         :_sG_,
       _sI_=
        _sH_
         ?caml_call3
           (finalized_observers_fun,finalized_observers$0,record,record[10])
         :_sH_,
       _sJ_=
        _sI_
         ?caml_call3(new_observers_fun,new_observers$0,record,record[11])
         :_sI_,
       _sK_=
        _sJ_
         ?caml_call3
           (disallowed_observers_fun,disallowed_observers$0,record,record[12])
         :_sJ_,
       _sL_=
        _sK_
         ?caml_call3
           (set_during_stabilization_fun,
            set_during_stabilization$0,
            record,
            record[13])
         :_sK_,
       _sM_=
        _sL_
         ?caml_call3
           (handle_after_stabilization_fun,
            handle_after_stabilization$0,
            record,
            record[14])
         :_sL_,
       _sN_=
        _sM_
         ?caml_call3
           (run_on_update_handlers_fun,
            run_on_update_handlers$1,
            record,
            record[15])
         :_sM_,
       _sO_=
        _sN_
         ?caml_call3(timing_wheel_fun,timing_wheel$0,record,record[16])
         :_sN_,
       _sP_=_sO_?caml_call3(now_fun,now$0,record,record[17]):_sO_,
       _sQ_=
        _sP_
         ?caml_call3(handle_fired_fun,handle_fired$0,record,record[18])
         :_sP_,
       _sR_=
        _sQ_
         ?caml_call3
           (fired_alarm_values_fun,fired_alarm_values$0,record,record[19])
         :_sQ_,
       _sS_=
        _sR_
         ?caml_call3(only_in_debug_fun,only_in_debug$0,record,record[20])
         :_sR_,
       _sT_=
        _sS_
         ?caml_call3
           (num_nodes_became_necessary_fun,
            num_nodes_became_necessary$0,
            record,
            record[21])
         :_sS_,
       _sU_=
        _sT_
         ?caml_call3
           (num_nodes_became_unnecessary_fun,
            num_nodes_became_unnecessary$0,
            record,
            record[22])
         :_sT_,
       _sV_=
        _sU_
         ?caml_call3
           (num_nodes_changed_fun,num_nodes_changed$0,record,record[23])
         :_sU_,
       _sW_=
        _sV_
         ?caml_call3
           (num_nodes_created_fun,num_nodes_created$0,record,record[24])
         :_sV_,
       _sX_=
        _sW_
         ?caml_call3
           (num_nodes_invalidated_fun,
            num_nodes_invalidated$0,
            record,
            record[25])
         :_sW_,
       _sY_=
        _sX_
         ?caml_call3
           (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[26])
         :_sX_,
       _sZ_=
        _sY_
         ?caml_call3
           (num_nodes_recomputed_directly_because_one_child_fun,
            num_nodes_recomputed_directly_because_one_child$0,
            record,
            record[27])
         :_sY_,
       _s0_=
        _sZ_
         ?caml_call3
           (num_nodes_recomputed_directly_because_min_height_fun,
            num_nodes_recomputed_directly_because_min_height$0,
            record,
            record[28])
         :_sZ_;
      return _s0_
              ?caml_call3(num_var_sets_fun,num_var_sets$0,record,record[29])
              :_s0_}
    function exists$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _sy_=caml_call3(status_fun,status$0,record,record[1]),
       _r9_=
        _sy_
        ||
        caml_call3
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          record,
          record[2]),
       _r__=
        _r9_
        ||
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _r$_=
        _r__
        ||
        caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _sa_=
        _r$_
        ||
        caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _sb_=
        _sa_
        ||
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _sc_=
        _sb_
        ||
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _sd_=
        _sc_
        ||
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _se_=
        _sd_
        ||
        caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _sf_=
        _se_
        ||
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _sg_=
        _sf_
        ||
        caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _sh_=
        _sg_
        ||
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _si_=
        _sh_
        ||
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _sj_=
        _si_
        ||
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _sk_=
        _sj_
        ||
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _sl_=
        _sk_
        ||
        caml_call3(timing_wheel_fun,timing_wheel$0,record,record[16]),
       _sm_=_sl_ || caml_call3(now_fun,now$0,record,record[17]),
       _sn_=
        _sm_
        ||
        caml_call3(handle_fired_fun,handle_fired$0,record,record[18]),
       _so_=
        _sn_
        ||
        caml_call3
         (fired_alarm_values_fun,fired_alarm_values$0,record,record[19]),
       _sp_=
        _so_
        ||
        caml_call3(only_in_debug_fun,only_in_debug$0,record,record[20]),
       _sq_=
        _sp_
        ||
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[21]),
       _sr_=
        _sq_
        ||
        caml_call3
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          record,
          record[22]),
       _ss_=
        _sr_
        ||
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[23]),
       _st_=
        _ss_
        ||
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[24]),
       _su_=
        _st_
        ||
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[25]),
       _sv_=
        _su_
        ||
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[26]),
       _sw_=
        _sv_
        ||
        caml_call3
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          record,
          record[27]),
       _sx_=
        _sw_
        ||
        caml_call3
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          record,
          record[28]);
      return _sx_
              ?_sx_
              :caml_call3(num_var_sets_fun,num_var_sets$0,record,record[29])}
    function to_list$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _rH_=
        [0,caml_call3(num_var_sets_fun,num_var_sets$0,record,record[29]),0],
       _rI_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_because_min_height_fun,
           num_nodes_recomputed_directly_because_min_height$0,
           record,
           record[28]),
         _rH_],
       _rJ_=
        [0,
         caml_call3
          (num_nodes_recomputed_directly_because_one_child_fun,
           num_nodes_recomputed_directly_because_one_child$0,
           record,
           record[27]),
         _rI_],
       _rK_=
        [0,
         caml_call3
          (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[26]),
         _rJ_],
       _rL_=
        [0,
         caml_call3
          (num_nodes_invalidated_fun,
           num_nodes_invalidated$0,
           record,
           record[25]),
         _rK_],
       _rM_=
        [0,
         caml_call3
          (num_nodes_created_fun,num_nodes_created$0,record,record[24]),
         _rL_],
       _rN_=
        [0,
         caml_call3
          (num_nodes_changed_fun,num_nodes_changed$0,record,record[23]),
         _rM_],
       _rO_=
        [0,
         caml_call3
          (num_nodes_became_unnecessary_fun,
           num_nodes_became_unnecessary$0,
           record,
           record[22]),
         _rN_],
       _rP_=
        [0,
         caml_call3
          (num_nodes_became_necessary_fun,
           num_nodes_became_necessary$0,
           record,
           record[21]),
         _rO_],
       _rQ_=
        [0,
         caml_call3(only_in_debug_fun,only_in_debug$0,record,record[20]),
         _rP_],
       _rR_=
        [0,
         caml_call3
          (fired_alarm_values_fun,fired_alarm_values$0,record,record[19]),
         _rQ_],
       _rS_=
        [0,caml_call3(handle_fired_fun,handle_fired$0,record,record[18]),_rR_],
       _rT_=[0,caml_call3(now_fun,now$0,record,record[17]),_rS_],
       _rU_=
        [0,caml_call3(timing_wheel_fun,timing_wheel$0,record,record[16]),_rT_],
       _rV_=
        [0,
         caml_call3
          (run_on_update_handlers_fun,
           run_on_update_handlers$1,
           record,
           record[15]),
         _rU_],
       _rW_=
        [0,
         caml_call3
          (handle_after_stabilization_fun,
           handle_after_stabilization$0,
           record,
           record[14]),
         _rV_],
       _rX_=
        [0,
         caml_call3
          (set_during_stabilization_fun,
           set_during_stabilization$0,
           record,
           record[13]),
         _rW_],
       _rY_=
        [0,
         caml_call3
          (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
         _rX_],
       _rZ_=
        [0,
         caml_call3(new_observers_fun,new_observers$0,record,record[11]),
         _rY_],
       _r0_=
        [0,
         caml_call3
          (finalized_observers_fun,finalized_observers$0,record,record[10]),
         _rZ_],
       _r1_=
        [0,
         caml_call3(all_observers_fun,all_observers$0,record,record[9]),
         _r0_],
       _r2_=
        [0,
         caml_call3
          (num_active_observers_fun,num_active_observers$0,record,record[8]),
         _r1_],
       _r3_=
        [0,
         caml_call3
          (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
         _r2_],
       _r4_=
        [0,
         caml_call3
          (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
         _r3_],
       _r5_=
        [0,
         caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
         _r4_],
       _r6_=
        [0,
         caml_call3(current_scope_fun,current_scope$0,record,record[4]),
         _r5_],
       _r7_=
        [0,
         caml_call3
          (stabilization_num_fun,stabilization_num$0,record,record[3]),
         _r6_],
       _r8_=
        [0,
         caml_call3
          (bind_lhs_change_should_invalidate_rhs_fun,
           bind_lhs_change_should_invalidate_rhs$0,
           record,
           record[2]),
         _r7_];
      return [0,caml_call3(status_fun,status$0,record,record[1]),_r8_]}
    function map$3
     (record,
      status_fun,
      bind_lhs_change_should_invalidate_rhs_fun,
      stabilization_num_fun,
      current_scope_fun,
      recompute_heap_fun,
      adjust_heights_heap_fun,
      propagate_invalidity_fun,
      num_active_observers_fun,
      all_observers_fun,
      finalized_observers_fun,
      new_observers_fun,
      disallowed_observers_fun,
      set_during_stabilization_fun,
      handle_after_stabilization_fun,
      run_on_update_handlers_fun,
      timing_wheel_fun,
      now_fun,
      handle_fired_fun,
      fired_alarm_values_fun,
      only_in_debug_fun,
      num_nodes_became_necessary_fun,
      num_nodes_became_unnecessary_fun,
      num_nodes_changed_fun,
      num_nodes_created_fun,
      num_nodes_invalidated_fun,
      num_nodes_recomputed_fun,
      num_nodes_recomputed_directly_because_one_child_fun,
      num_nodes_recomputed_directly_because_min_height_fun,
      num_var_sets_fun)
     {var
       _rf_=caml_call3(num_var_sets_fun,num_var_sets$0,record,record[29]),
       _rg_=
        caml_call3
         (num_nodes_recomputed_directly_because_min_height_fun,
          num_nodes_recomputed_directly_because_min_height$0,
          record,
          record[28]),
       _rh_=
        caml_call3
         (num_nodes_recomputed_directly_because_one_child_fun,
          num_nodes_recomputed_directly_because_one_child$0,
          record,
          record[27]),
       _ri_=
        caml_call3
         (num_nodes_recomputed_fun,num_nodes_recomputed$0,record,record[26]),
       _rj_=
        caml_call3
         (num_nodes_invalidated_fun,num_nodes_invalidated$0,record,record[25]),
       _rk_=
        caml_call3
         (num_nodes_created_fun,num_nodes_created$0,record,record[24]),
       _rl_=
        caml_call3
         (num_nodes_changed_fun,num_nodes_changed$0,record,record[23]),
       _rm_=
        caml_call3
         (num_nodes_became_unnecessary_fun,
          num_nodes_became_unnecessary$0,
          record,
          record[22]),
       _rn_=
        caml_call3
         (num_nodes_became_necessary_fun,
          num_nodes_became_necessary$0,
          record,
          record[21]),
       _ro_=caml_call3(only_in_debug_fun,only_in_debug$0,record,record[20]),
       _rp_=
        caml_call3
         (fired_alarm_values_fun,fired_alarm_values$0,record,record[19]),
       _rq_=caml_call3(handle_fired_fun,handle_fired$0,record,record[18]),
       _rr_=caml_call3(now_fun,now$0,record,record[17]),
       _rs_=caml_call3(timing_wheel_fun,timing_wheel$0,record,record[16]),
       _rt_=
        caml_call3
         (run_on_update_handlers_fun,
          run_on_update_handlers$1,
          record,
          record[15]),
       _ru_=
        caml_call3
         (handle_after_stabilization_fun,
          handle_after_stabilization$0,
          record,
          record[14]),
       _rv_=
        caml_call3
         (set_during_stabilization_fun,
          set_during_stabilization$0,
          record,
          record[13]),
       _rw_=
        caml_call3
         (disallowed_observers_fun,disallowed_observers$0,record,record[12]),
       _rx_=caml_call3(new_observers_fun,new_observers$0,record,record[11]),
       _ry_=
        caml_call3
         (finalized_observers_fun,finalized_observers$0,record,record[10]),
       _rz_=caml_call3(all_observers_fun,all_observers$0,record,record[9]),
       _rA_=
        caml_call3
         (num_active_observers_fun,num_active_observers$0,record,record[8]),
       _rB_=
        caml_call3
         (propagate_invalidity_fun,propagate_invalidity$0,record,record[7]),
       _rC_=
        caml_call3
         (adjust_heights_heap_fun,adjust_heights_heap$0,record,record[6]),
       _rD_=caml_call3(recompute_heap_fun,recompute_heap$0,record,record[5]),
       _rE_=caml_call3(current_scope_fun,current_scope$0,record,record[4]),
       _rF_=
        caml_call3(stabilization_num_fun,stabilization_num$0,record,record[3]),
       _rG_=
        caml_call3
         (bind_lhs_change_should_invalidate_rhs_fun,
          bind_lhs_change_should_invalidate_rhs$0,
          record,
          record[2]);
      return [0,
              caml_call3(status_fun,status$0,record,record[1]),
              _rG_,
              _rF_,
              _rE_,
              _rD_,
              _rC_,
              _rB_,
              _rA_,
              _rz_,
              _ry_,
              _rx_,
              _rw_,
              _rv_,
              _ru_,
              _rt_,
              _rs_,
              _rr_,
              _rq_,
              _rp_,
              _ro_,
              _rn_,
              _rm_,
              _rl_,
              _rk_,
              _rj_,
              _ri_,
              _rh_,
              _rg_,
              _rf_]}
    function set_all_mutable_fields$0
     (record,
      status,
      stabilization_num,
      current_scope,
      num_active_observers,
      all_observers,
      now,
      fired_alarm_values,
      only_in_debug,
      num_nodes_became_necessary,
      num_nodes_became_unnecessary,
      num_nodes_changed,
      num_nodes_created,
      num_nodes_invalidated,
      num_nodes_recomputed,
      num_nodes_recomputed_directly_because_one_child,
      num_nodes_recomputed_directly_because_min_height,
      num_var_sets)
     {record[1] = status;
      record[3] = stabilization_num;
      record[4] = current_scope;
      record[8] = num_active_observers;
      record[9] = all_observers;
      record[17] = now;
      record[19] = fired_alarm_values;
      record[20] = only_in_debug;
      record[21] = num_nodes_became_necessary;
      record[22] = num_nodes_became_unnecessary;
      record[23] = num_nodes_changed;
      record[24] = num_nodes_created;
      record[25] = num_nodes_invalidated;
      record[26] = num_nodes_recomputed;
      record[27] = num_nodes_recomputed_directly_because_one_child;
      record[28] = num_nodes_recomputed_directly_because_min_height;
      record[29] = num_var_sets;
      return 0}
    var
     Direct$0=
      [0,
       iter$3,
       fold$3,
       for_all$3,
       exists$3,
       to_list$3,
       map$3,
       set_all_mutable_fields$0],
     Fields$0=
      [0,
       names$0,
       num_var_sets$0,
       num_nodes_recomputed_directly_because_min_height$0,
       num_nodes_recomputed_directly_because_one_child$0,
       num_nodes_recomputed$0,
       num_nodes_invalidated$0,
       num_nodes_created$0,
       num_nodes_changed$0,
       num_nodes_became_unnecessary$0,
       num_nodes_became_necessary$0,
       only_in_debug$0,
       fired_alarm_values$0,
       handle_fired$0,
       now$0,
       timing_wheel$0,
       run_on_update_handlers$1,
       handle_after_stabilization$0,
       set_during_stabilization$0,
       disallowed_observers$0,
       new_observers$0,
       finalized_observers$0,
       all_observers$0,
       num_active_observers$0,
       propagate_invalidity$0,
       adjust_heights_heap$0,
       recompute_heap$0,
       current_scope$0,
       stabilization_num$0,
       bind_lhs_change_should_invalidate_rhs$0,
       status$0,
       make_creator$0,
       create$13,
       map$2,
       iter$2,
       fold$2,
       map_poly$0,
       for_all$2,
       exists$2,
       to_list$2,
       Direct$0];
    function sexp_of_t$40(param)
     {var
       v_status=param[1],
       v_bind_lhs_change_should_invalidate_rhs=param[2],
       v_stabilization_num=param[3],
       v_current_scope=param[4],
       v_propagate_invalidity=param[7],
       v_adjust_heights_heap=param[6],
       v_recompute_heap=param[5],
       v_num_active_observers=param[8],
       v_all_observers=param[9],
       v_timing_wheel=param[16],
       v_run_on_update_handlers=param[15],
       v_handle_after_stabilization=param[14],
       v_set_during_stabilization=param[13],
       v_disallowed_observers=param[12],
       v_new_observers=param[11],
       v_finalized_observers=param[10],
       v_now=param[17],
       v_fired_alarm_values=param[19],
       v_only_in_debug=param[20],
       v_num_nodes_became_necessary=param[21],
       v_num_nodes_became_unnecessary=param[22],
       v_num_nodes_changed=param[23],
       v_num_nodes_created=param[24],
       v_num_nodes_invalidated=param[25],
       v_num_nodes_recomputed=param[26],
       v_num_nodes_recomputed_directly_because_one_child=param[27],
       v_num_nodes_recomputed_directly_because_min_height=param[28],
       v_num_var_sets=param[29],
       arg=caml_call1(Core_kernel[455],v_num_var_sets),
       bnds=[0,[1,[0,_kv_,[0,arg,0]]],0],
       arg$0=
        caml_call1
         (Core_kernel[455],v_num_nodes_recomputed_directly_because_min_height),
       bnds$0=[0,[1,[0,_kw_,[0,arg$0,0]]],bnds],
       arg$1=
        caml_call1
         (Core_kernel[455],v_num_nodes_recomputed_directly_because_one_child),
       bnds$1=[0,[1,[0,_kx_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[455],v_num_nodes_recomputed),
       bnds$2=[0,[1,[0,_ky_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[455],v_num_nodes_invalidated),
       bnds$3=[0,[1,[0,_kz_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[455],v_num_nodes_created),
       bnds$4=[0,[1,[0,_kA_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(Core_kernel[455],v_num_nodes_changed),
       bnds$5=[0,[1,[0,_kB_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(Core_kernel[455],v_num_nodes_became_unnecessary),
       bnds$6=[0,[1,[0,_kC_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel[455],v_num_nodes_became_necessary),
       bnds$7=[0,[1,[0,_kD_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call1(Only_in_debug[6],v_only_in_debug),
       bnds$8=[0,[1,[0,_kE_,[0,arg$8,0]]],bnds$7],
       arg$9=sexp_of_t$8(sexp_of_t$33,v_fired_alarm_values),
       bnds$9=[0,[1,[0,_kF_,[0,arg$9,0]]],bnds$8];
      function _rd_(_re_){return 0}
      var
       arg$10=caml_call1(Sexplib0_Sexp_conv[24],_rd_),
       bnds$10=[0,[1,[0,_kG_,[0,arg$10,0]]],bnds$9],
       arg$11=sexp_of_t$12(Time_ns[42],v_now),
       bnds$11=[0,[1,[0,_kH_,[0,arg$11,0]]],bnds$10],
       arg$12=
        caml_call2(Core_kernel_Timing_wheel_ns[3],sexp_of_t$33,v_timing_wheel),
       bnds$12=[0,[1,[0,_kI_,[0,arg$12,0]]],bnds$11],
       arg$13=
        caml_call2
         (Core_kernel_Stack[10],
          Run_on_update_handlers[1],
          v_run_on_update_handlers),
       bnds$13=[0,[1,[0,_kJ_,[0,arg$13,0]]],bnds$12],
       arg$14=
        caml_call2
         (Core_kernel_Stack[10],Packed$0[1],v_handle_after_stabilization),
       bnds$14=[0,[1,[0,_kK_,[0,arg$14,0]]],bnds$13],
       arg$15=
        caml_call2(Core_kernel_Stack[10],Packed[1],v_set_during_stabilization),
       bnds$15=[0,[1,[0,_kL_,[0,arg$15,0]]],bnds$14],
       arg$16=caml_call2(Core_kernel_Stack[10],_ji_[1],v_disallowed_observers),
       bnds$16=[0,[1,[0,_kM_,[0,arg$16,0]]],bnds$15],
       arg$17=caml_call2(Core_kernel_Stack[10],_ji_[1],v_new_observers),
       bnds$17=[0,[1,[0,_kN_,[0,arg$17,0]]],bnds$16],
       arg$18=
        caml_call2
         (Core_kernel_Thread_safe_queue[1],_ji_[1],v_finalized_observers),
       bnds$18=[0,[1,[0,_kO_,[0,arg$18,0]]],bnds$17],
       arg$19=sexp_of_t$8(_ji_[1],v_all_observers),
       bnds$19=[0,[1,[0,_kP_,[0,arg$19,0]]],bnds$18],
       arg$20=caml_call1(Core_kernel[455],v_num_active_observers),
       bnds$20=[0,[1,[0,_kQ_,[0,arg$20,0]]],bnds$19],
       arg$21=
        caml_call2(Core_kernel_Stack[10],Packed$0[1],v_propagate_invalidity),
       bnds$21=[0,[1,[0,_kR_,[0,arg$21,0]]],bnds$20],
       arg$22=sexp_of_t$32(v_adjust_heights_heap),
       bnds$22=[0,[1,[0,_kS_,[0,arg$22,0]]],bnds$21],
       arg$23=sexp_of_t$30(v_recompute_heap),
       bnds$23=[0,[1,[0,_kT_,[0,arg$23,0]]],bnds$22],
       arg$24=caml_call1(_dG_,v_current_scope),
       bnds$24=[0,[1,[0,_kU_,[0,arg$24,0]]],bnds$23],
       arg$25=caml_call1(_W_,v_stabilization_num),
       bnds$25=[0,[1,[0,_kV_,[0,arg$25,0]]],bnds$24],
       arg$26=
        caml_call1(Core_kernel[410],v_bind_lhs_change_should_invalidate_rhs),
       bnds$26=[0,[1,[0,_kW_,[0,arg$26,0]]],bnds$25],
       arg$27=sexp_of_status(v_status),
       bnds$27=[0,[1,[0,_kX_,[0,arg$27,0]]],bnds$26];
      return [1,bnds$27]}
    function now$1(t){return t[17][1]}
    function timing_wheel_length(t)
     {return caml_call1(Core_kernel_Timing_wheel_ns[15],t[16])}
    function num_stabilizes(t){return caml_call1(_V_,t[3])}
    function max_height_allowed$1(t){return max_height_allowed$0(t[6])}
    function max_height_seen$1(t){return t[6][3]}
    function alarm_would_have_fired(t,at)
     {var
       _rb_=caml_call2(Core_kernel_Timing_wheel_ns[17],t[16],at),
       _rc_=caml_call1(Core_kernel_Timing_wheel_ns[18],t[16]);
      return caml_call2(Core_kernel_Timing_wheel_ns[5][6],_rc_,_rb_)}
    function iter_observers(t,f)
     {var r=[0,t[9]];
      for(;;)
       {if(is_some$0(r[1]))
         {var _ra_=r[1];
          r[1] = caml_call1(_ji_[3],_ra_);
          caml_call1(f,_ra_);
          continue}
        return 0}}
    function directly_observed(t)
     {var r=[0,0];
      iter_observers
       (t,
        function(param)
         {var internal_observer=param[1];
          r[1] = [0,internal_observer[2],r[1]];
          return 0});
      return r[1]}
    function save_dot$0(t,file)
     {var _q$_=directly_observed(t);return caml_call2(Packed$0[5],file,_q$_)}
    function iter_observer_descendants(t,f)
     {var _q__=directly_observed(t);return caml_call2(Packed$0[4],_q__,f)}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       max_num_parents_field=[0,0],
       percentage_of_nodes_by_num_parents_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _q0_=param[1];
          if(1 === _q0_[0])
           {var _q1_=_q0_[1];
            if(_q1_)
             {var _q2_=_q1_[1];
              if(0 === _q2_[0])
               {var _q3_=_q1_[2],_q4_=_q2_[1];
                if(! _q3_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_q4_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _q3_[2])
                 {var tail=param[2],field_sexp=_q3_[1];
                  if(caml_string_notequal(_q4_,cst_max_num_parents))
                   if
                    (caml_string_notequal
                      (_q4_,cst_percentage_of_nodes_by_num_parents))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_q4_,extra[1]]}
                   else
                    if(percentage_of_nodes_by_num_parents_field[1])
                     duplicates[1] = [0,_q4_,duplicates[1]];
                    else
                     {var
                       _q5_=
                        function(sexp)
                         {if(1 === sexp[0])
                           {var _q8_=sexp[1];
                            if(_q8_)
                             {var _q9_=_q8_[2];
                              if(_q9_)
                               if(! _q9_[2])
                                {var
                                  v1=_q9_[1],
                                  v0=_q8_[1],
                                  v0$0=caml_call1(Core_kernel[454],v0),
                                  v1$0=caml_call1(Core_kernel_Percent[50],v1);
                                 return [0,v0$0,v1$0]}}}
                          return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                       fvalue=caml_call2(Core_kernel[512],_q5_,field_sexp);
                      percentage_of_nodes_by_num_parents_field[1] = [0,fvalue]}
                  else
                   if(max_num_parents_field[1])
                    duplicates[1] = [0,_q4_,duplicates[1]];
                   else
                    {var fvalue$0=caml_call1(Core_kernel[454],field_sexp);
                     max_num_parents_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_q0_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _q6_=max_num_parents_field[1],
         _q7_=percentage_of_nodes_by_num_parents_field[1];
        if(_q6_)
         if(_q7_)
          {var
            percentage_of_nodes_by_num_parents_value=_q7_[1],
            max_num_parents_value=_q6_[1];
           return [0,
                   max_num_parents_value,
                   percentage_of_nodes_by_num_parents_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === max_num_parents_field[1]?1:0,cst_max_num_parents$0],
                  [0,
                   [0,
                    0 === percentage_of_nodes_by_num_parents_field[1]?1:0,
                    cst_percentage_of_nodes_by_num_parents$0],
                   0]])}}
    function sexp_of_t$41(param)
     {var
       v_percentage_of_nodes_by_num_parents=param[2],
       v_max_num_parents=param[1],
       bnds=0;
      function _qZ_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[455],v0),
         v1$0=caml_call1(Core_kernel_Percent[51],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg=
        caml_call2(Core_kernel[513],_qZ_,v_percentage_of_nodes_by_num_parents),
       bnds$0=[0,[1,[0,_kY_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[455],v_max_num_parents),
       bnds$1=[0,[1,[0,_kZ_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    var Stats=[0,t_of_sexp$0,sexp_of_t$41];
    function stats(t)
     {var max_num_parents=[0,-1],num_necessary_nodes=[0,0];
      iter_observer_descendants
       (t,
        function(node)
         {num_necessary_nodes[1]++;
          max_num_parents[1]
          =
          caml_call2(include[109],max_num_parents[1],node[8]);
          return 0});
      var
       max_num_parents$0=max_num_parents[1],
       num_nodes_by_num_parents=
        caml_call2(Array[35],max_num_parents$0 + 1 | 0,0);
      iter_observer_descendants
       (t,
        function(node)
         {var
           num_parents=node[8],
           _qY_=
            caml_check_bound(num_nodes_by_num_parents,num_parents)
             [num_parents + 1]
            +
            1
            |
            0;
          return caml_check_bound(num_nodes_by_num_parents,num_parents)
                  [num_parents + 1]
                 =
                 _qY_});
      function _qW_(i,ac,num_nodes)
       {return caml_call2(_f_,num_nodes,0)
                ?ac
                :[0,
                  [0,
                   i,
                   caml_call1
                    (Core_kernel_Percent[63],num_nodes / num_necessary_nodes[1])],
                  ac]}
      var
       _qX_=caml_call3(Array[55],num_nodes_by_num_parents,0,_qW_),
       percentage_of_nodes_by_num_parents=
        caml_call1(Core_kernel_List[47],_qX_);
      return [0,max_num_parents$0,percentage_of_nodes_by_num_parents]}
    function am_stabilizing(t)
     {var _qV_=t[1];
      if(typeof _qV_ === "number")return 2 <= _qV_?0:1;
      var raised_exn=_qV_[1];
      return caml_call5
              (Core_kernel[349],
               0,
               _k0_,
               cst_cannot_call_am_stabilizing_stabilize_previously_raised,
               raised_exn,
               sexp_of_t$37)}
    function invariant$30(t)
     {if(typeof t[1] === "number")
       {var
         _p4_=
          function(param)
           {function check(f){return caml_call2(Base_Invariant[2],t,f)}
            iter_observers
             (t,
              function(param)
               {var
                 internal_observer=param[1],
                 switcher=internal_observer[1] - 1 | 0;
                if(1 < switcher >>> 0)
                 {var
                   _qR_=function(param){return _k1_},
                   _qS_=
                    function(_qU_){return sexp_of_internal_observer(_qR_,_qU_)};
                  caml_call5
                   (Core_kernel[349],
                    0,
                    _k2_,
                    cst_member_of_all_observers_with_unexpected_state,
                    internal_observer,
                    _qS_)}
                return invariant$25
                        (function(_qT_){return 0},internal_observer)});
            iter_observer_descendants
             (t,
              function(node)
               {invariant$19(function(_qQ_){return 0},node);
                if(1 - am_stabilizing(t))
                 if(! is_none$0(node[19]))throw [0,Assert_failure,_k4_];
                if(caml_call2(_e_,node[13],t[6][3]))return 0;
                throw [0,Assert_failure,_k3_]});
            var _p5_=max_height_allowed(t[5]);
            if(caml_call2(_f_,max_height_allowed$0(t[6]),_p5_))
             {var
               _p6_=function(_qP_){return 0},
               _p7_=function(_qO_){return 0},
               _p8_=function(_qN_){return 0},
               _p9_=function(_qM_){return 0},
               _p__=function(_qL_){return 0},
               _p$_=function(_qK_){return 0},
               _qa_=function(_qJ_){return 0},
               _qb_=function(_qI_){return 0},
               _qc_=function(_qH_){return 0},
               _qd_=check(Only_in_debug[7]),
               _qe_=
                check
                 (function(fired_alarm_values)
                   {if(is_none$0(fired_alarm_values))return 0;
                    throw [0,Assert_failure,_k5_]}),
               _qf_=function(_qG_){return 0},
               _qg_=
                check
                 (function(now)
                   {var _qF_=caml_call1(Core_kernel_Timing_wheel_ns[12],t[16]);
                    if(caml_call2(Time_ns[19],now[1],_qF_))return 0;
                    throw [0,Assert_failure,_k6_]}),
               _qh_=
                check(caml_call1(Core_kernel_Timing_wheel_ns[7],invariant$24)),
               _qi_=
                check
                 (caml_call1(Core_kernel_Stack[11],Run_on_update_handlers[2])),
               _qj_=check(caml_call1(Core_kernel_Stack[11],Packed$0[2])),
               _qk_=
                check
                 (function(set_during_stabilization)
                   {var _qD_=t[1];
                    if(typeof _qD_ === "number")
                     {if(0 === _qD_)
                       {var
                         _qE_=
                          function(var$0)
                           {if(is_some$0(var$0[2]))return 0;
                            throw [0,Assert_failure,_k7_]};
                        return caml_call2
                                (Core_kernel_Stack[11],_qE_,set_during_stabilization)}
                      if
                       (caml_call1(Core_kernel_Stack[14],set_during_stabilization))
                       return 0;
                      throw [0,Assert_failure,_k8_]}
                    throw [0,Assert_failure,_k9_]}),
               _ql_=
                function(packed)
                 {caml_call1(_ji_[2],packed);
                  var internal_observer=packed[1];
                  if(2 === internal_observer[1])return 0;
                  throw [0,Assert_failure,_k__]},
               _qm_=check(caml_call1(Core_kernel_Stack[11],_ql_)),
               _qn_=
                function(packed)
                 {caml_call1(_ji_[2],packed);
                  var
                   internal_observer=packed[1],
                   switcher=internal_observer[1] - 1 | 0;
                  if(1 < switcher >>> 0)return 0;
                  throw [0,Assert_failure,_k$_]},
               _qo_=check(caml_call1(Core_kernel_Stack[11],_qn_)),
               _qp_=function(_qC_){return 0},
               _qq_=function(_qB_){return 0},
               _qr_=
                check
                 (function(num_active_observers)
                   {if(caml_call2(_d_,num_active_observers,0))return 0;
                    throw [0,Assert_failure,_la_]}),
               _qs_=
                check
                 (function(propagate_invalidity)
                   {if(caml_call1(Core_kernel_Stack[14],propagate_invalidity))
                     return 0;
                    throw [0,Assert_failure,_lb_]}),
               _qt_=
                check
                 (function(adjust_heights_heap)
                   {if(caml_call2(_f_,adjust_heights_heap[1],0))
                     return invariant$23(adjust_heights_heap);
                    throw [0,Assert_failure,_lc_]}),
               _qu_=check(invariant$21),
               _qv_=
                check
                 (function(current_scope)
                   {if(caml_call2(Core_kernel[359],current_scope,top))return 0;
                    throw [0,Assert_failure,_ld_]}),
               _qw_=check(invariant$2),
               _qx_=function(_qA_){return 0},
               _qy_=function(_qz_){return 0};
              return caml_call29
                      (Fields$0[34],
                       _qy_,
                       _qx_,
                       _qw_,
                       _qv_,
                       _qu_,
                       _qt_,
                       _qs_,
                       _qr_,
                       _qq_,
                       _qp_,
                       _qo_,
                       _qm_,
                       _qk_,
                       _qj_,
                       _qi_,
                       _qh_,
                       _qg_,
                       _qf_,
                       _qe_,
                       _qd_,
                       _qc_,
                       _qb_,
                       _qa_,
                       _p$_,
                       _p__,
                       _p9_,
                       _p8_,
                       _p7_,
                       _p6_)}
            throw [0,Assert_failure,_le_]};
        return caml_call4(Base_Invariant[1],_lf_,t,sexp_of_t$40,_p4_)}
      return 0}
    function ensure_not_stabilizing(t,name,allow_in_update_handler)
     {var _pW_=t[1];
      if(typeof _pW_ === "number")
       switch(_pW_)
        {case 0:
          var
           backtrace=caml_call2(Base_Backtrace[2],0,0),
           _pX_=Base_Backtrace[1],
           _pY_=caml_call2(Core_kernel[366],_lg_,name);
          return caml_call5(Core_kernel[349],0,_lh_,_pY_,backtrace,_pX_);
         case 1:
          var _pZ_=1 - allow_in_update_handler;
          if(_pZ_)
           {var
             backtrace$0=caml_call2(Base_Backtrace[2],0,0),
             _p0_=Base_Backtrace[1],
             _p1_=caml_call2(Core_kernel[366],_li_,name);
            return caml_call5(Core_kernel[349],0,_lj_,_p1_,backtrace$0,_p0_)}
          return _pZ_;
         default:return 0}
      var raised_exn=_pW_[1],backtrace$1=caml_call2(Base_Backtrace[2],0,0);
      function _p2_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t$37(v0),
         v1$0=caml_call1(Base_Backtrace[1],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var _p3_=caml_call2(Core_kernel[366],_lk_,name);
      return caml_call5
              (Core_kernel[349],0,_ll_,_p3_,[0,raised_exn,backtrace$1],_p2_)}
    function set_height$1(t,node,height)
     {return set_height$0(t[6],node,height)}
    function set_max_height_allowed$1(t,height)
     {ensure_not_stabilizing(t,cst_set_max_height_allowed,1);
      set_max_height_allowed$0(t[6],height);
      return set_max_height_allowed(t[5],height)}
    function handle_after_stabilization$1(t,node)
     {var _pV_=1 - node[21];
      return _pV_
              ?(node[21] = 1,caml_call2(Core_kernel_Stack[32],t[14],node))
              :_pV_}
    function remove_children(t,parent)
     {return iteri_children$0
              (parent,
               function(child_index,child)
                {return remove_child(t,child,parent,child_index)})}
    function became_unnecessary(t,node)
     {t[22] = t[22] + 1 | 0;
      if(caml_call2(_g_,node[7],0))handle_after_stabilization$1(t,node);
      node[13] = -1;
      remove_children(t,node);
      var _pT_=node[4];
      if(typeof _pT_ === "number")
       var switch$0=0;
      else
       switch(_pT_[0])
        {case 6:var p=_pT_[1];observability_change(p,0);var switch$0=1;break;
         case 15:var u=_pT_[1];force_full_compute(u);var switch$0=1;break;
         default:var switch$0=0}
      var _pU_=is_in_recompute_heap(node);
      return _pU_?remove(t[5],node):_pU_}
    function check_if_unnecessary(t,node)
     {var _pS_=1 - caml_call1(is_necessary$1,node);
      return _pS_?became_unnecessary(t,node):_pS_}
    function remove_child(t,child,parent,child_index)
     {remove_parent(child,parent,child_index);
      return check_if_unnecessary(t,child)}
    function remove_alarm(t,alarm)
     {var _pR_=caml_call2(Core_kernel_Timing_wheel_ns[26],t[16],alarm);
      return _pR_?caml_call2(Core_kernel_Timing_wheel_ns[27],t[16],alarm):_pR_}
    function invalidate_node(t,node)
     {var _pJ_=caml_call1(is_valid$2,node);
      if(_pJ_)
       {if(caml_call2(_g_,node[7],0))handle_after_stabilization$1(t,node);
        node[3] = none$0;
        node[6] = t[3];
        node[2] = t[3];
        t[25] = t[25] + 1 | 0;
        if(caml_call1(is_necessary$1,node))
         {remove_children(t,node);node[13] = height(node[11]) + 1 | 0}
        var _pK_=node[4];
        if(typeof _pK_ === "number")
         var switch$0=0;
        else
         switch(_pK_[0])
          {case 1:var at=_pK_[1];remove_alarm(t,at[3]);var switch$0=1;break;
           case 2:
            var at_intervals=_pK_[1];
            remove_alarm(t,at_intervals[4]);
            var switch$0=1;
            break;
           case 4:
            var bind=_pK_[1];
            invalidate_nodes_created_on_rhs(t,bind[7]);
            var switch$0=1;
            break;
           case 14:
            var step_function=_pK_[1];
            remove_alarm(t,step_function[4]);
            var switch$0=1;
            break;
           default:var switch$0=0}
        set_kind$0(node,0);
        var _pM_=node[8] - 1 | 0,_pL_=0;
        if(! (_pM_ < 0))
         {var index=_pL_;
          for(;;)
           {var _pP_=get_parent(node,index);
            caml_call2(Core_kernel_Stack[32],t[7],_pP_);
            var _pQ_=index + 1 | 0;
            if(_pM_ !== index){var index=_pQ_;continue}
            break}}
        var _pN_=is_in_recompute_heap(node);
        if(_pN_)return remove(t[5],node);
        var _pO_=_pN_}
      else
       var _pO_=_pJ_;
      return _pO_}
    function invalidate_nodes_created_on_rhs(t,node)
     {var r=[0,node];
      for(;;)
       {if(is_some$0(r[1]))
         {var _pI_=r[1];
          r[1] = _pI_[12];
          _pI_[12] = none$0;
          invalidate_node(t,_pI_);
          continue}
        return 0}}
    function rescope_nodes_created_on_rhs(t,first_node_on_rhs,new_scope)
     {var r=[0,first_node_on_rhs];
      for(;;)
       {if(is_some$0(r[1]))
         {var _pH_=r[1];
          r[1] = _pH_[12];
          _pH_[12] = none$0;
          _pH_[11] = new_scope;
          add_node(new_scope,_pH_);
          continue}
        return 0}}
    function propagate_invalidity$1(t)
     {for(;;)
       {if(caml_call1(Core_kernel_Stack[14],t[7]))return 0;
        var node=caml_call1(Core_kernel_Stack[34],t[7]);
        if(caml_call1(is_valid$2,node))
         if(should_be_invalidated(node))
          invalidate_node(t,node);
         else
          {var _pG_=node[4];
           if(typeof _pG_ === "number")
            var switch$0=0;
           else
            if(6 === _pG_[0])
             {var expert=_pG_[1];incr_invalid_children(expert);var switch$0=1}
            else
             var switch$0=0;
           if(1 - is_in_recompute_heap(node))add$0(t[5],node)}
        continue}}
    function add_parent_without_adjusting_heights(t,child,parent,child_index)
     {var was_necessary=caml_call1(is_necessary$1,child);
      add_parent(child,parent,child_index);
      if(1 - caml_call1(is_valid$2,child))
       caml_call2(Core_kernel_Stack[32],t[7],parent);
      if(1 - was_necessary)_lm_(t,child);
      var _pF_=parent[4];
      if(typeof _pF_ !== "number" && 6 === _pF_[0])
       {var e=_pF_[1];return run_edge_callback(e,child_index)}
      return 0}
    function _lm_(t,node)
     {var
       _py_=caml_call1(is_valid$2,node),
       _pz_=_py_?1 - is_necessary$0(node[11]):_py_;
      if(_pz_)
       {var
         _pA_=function(param){return _ln_},
         _pB_=function(_pE_){return sexp_of_t$28(_pA_,_pE_)};
        caml_call5
         (Core_kernel[349],
          0,
          _lo_,
          cst_Trying_to_make_a_node_necessary_whose_defining_bind_is_not_necessary,
          node,
          _pB_)}
      t[21] = t[21] + 1 | 0;
      if(caml_call2(_g_,node[7],0))handle_after_stabilization$1(t,node);
      set_height$1(t,node,height(node[11]) + 1 | 0);
      iteri_children$0
       (node,
        function(child_index,child)
         {add_parent_without_adjusting_heights(t,child,node,child_index);
          var _pD_=caml_call2(_d_,child[13],node[13]);
          return _pD_?set_height$1(t,node,child[13] + 1 | 0):_pD_});
      if(is_stale(node))add$0(t[5],node);
      var _pC_=node[4];
      if(typeof _pC_ !== "number" && 6 === _pC_[0])
       {var p=_pC_[1];return observability_change(p,1)}
      return 0}
    function became_necessary(t,node)
     {_lm_(t,node);return propagate_invalidity$1(t)}
    function add_parent$0(t,child,parent,child_index)
     {add_parent_without_adjusting_heights(t,child,parent,child_index);
      if(caml_call2(_d_,child[13],parent[13]))
       adjust_heights(t[6],t[5],child,parent);
      propagate_invalidity$1(t);
      var _pv_=1 - is_in_recompute_heap(parent);
      if(_pv_)
       var _pw_=is_none(parent[2]),_px_=_pw_ || edge_is_stale(child,parent);
      else
       var _px_=_pv_;
      return _px_?add$0(t[5],parent):_px_}
    function run_with_scope(t,scope,f)
     {var saved=t[4];
      t[4] = scope;
      try
       {var v=caml_call1(f,0);t[4] = saved;return v}
      catch(exn){exn = caml_wrap_exception(exn);t[4] = saved;throw exn}}
    function within_scope(t,scope,f)
     {if(1 - is_valid$1(scope))
       caml_call5
        (Core_kernel[349],
         0,
         _lp_,
         cst_attempt_to_run_within_an_invalid_scope,
         t,
         sexp_of_t$40);
      return run_with_scope(t,scope,f)}
    function change_child(t,parent,old_child,new_child,child_index)
     {if(is_none$0(old_child))
       return add_parent$0(t,new_child,parent,child_index);
      var _pu_=1 - caml_call2(Core_kernel[359],old_child,new_child);
      return _pu_
              ?(remove_parent(old_child,parent,child_index),
                old_child[25]
                =
                1,
                add_parent$0(t,new_child,parent,child_index),
                old_child[25]
                =
                0,
                check_if_unnecessary(t,old_child))
              :_pu_}
    function maybe_change_value(t,node,new_value)
     {var
       old_value_opt=node[3],
       _pf_=is_none$0(old_value_opt),
       _pg_=_pf_ || 1 - should_cutoff(node[5],old_value_opt,new_value);
      if(_pg_)
       {node[3] = new_value;
        node[6] = t[3];
        t[23] = t[23] + 1 | 0;
        if(caml_call2(_g_,node[7],0))
         {node[19] = old_value_opt;handle_after_stabilization$1(t,node)}
        if(caml_call2(_d_,node[8],1))
         {var _pi_=node[8] - 1 | 0,_ph_=1;
          if(! (_pi_ < 1))
           {var parent_index=_ph_;
            for(;;)
             {var
               _pr_=parent_index - 1 | 0,
               parent$0=value_exn(caml_check_bound(node[9],_pr_)[_pr_ + 1]),
               _ps_=parent$0[4];
              if(typeof _ps_ === "number")
               var switch$0=0;
              else
               switch(_ps_[0])
                {case 6:
                  var
                   expert=_ps_[1],
                   child_index$0=
                    caml_check_bound(node[24],parent_index)[parent_index + 1];
                  run_edge_callback(expert,child_index$0);
                  var switch$0=1;
                  break;
                 case 15:
                  var u$0=_ps_[1];
                  child_changed(u$0,old_value_opt,new_value);
                  var switch$0=1;
                  break;
                 default:var switch$0=0}
              if(1 - is_in_recompute_heap(parent$0))add$0(t[5],parent$0);
              var _pt_=parent_index + 1 | 0;
              if(_pi_ !== parent_index){var parent_index=_pt_;continue}
              break}}
          var parent=value_exn(node[10]),_pj_=parent[4];
          if(typeof _pj_ === "number")
           var switch$1=0;
          else
           switch(_pj_[0])
            {case 6:
              var p=_pj_[1],child_index=caml_check_bound(node[24],0)[1];
              run_edge_callback(p,child_index);
              var switch$1=1;
              break;
             case 15:
              var u=_pj_[1];
              child_changed(u,old_value_opt,new_value);
              var switch$1=1;
              break;
             default:var switch$1=0}
          if(1 - is_in_recompute_heap(parent))
           {var _pk_=parent[4];
            if(typeof _pk_ === "number")
             {if(1 === _pk_)throw [0,Assert_failure,_lt_];var switch$2=0}
            else
             switch(_pk_[0])
              {case 1:throw [0,Assert_failure,_lu_];
               case 2:throw [0,Assert_failure,_lv_];
               case 3:
                var
                 _pm_=height(parent[11]),
                 can_recompute_now=caml_call2(_g_,node[13],_pm_),
                 switch$2=1;
                break;
               case 4:
                var
                 b=_pk_[1],
                 can_recompute_now=caml_call2(_g_,node[13],b[4][13]),
                 switch$2=1;
                break;
               case 7:
                var
                 _pn_=height(parent[11]),
                 can_recompute_now=caml_call2(_g_,node[13],_pn_),
                 switch$2=1;
                break;
               case 8:
                var
                 _po_=height(parent[11]),
                 can_recompute_now=caml_call2(_g_,node[13],_po_),
                 switch$2=1;
                break;
               case 9:
                var
                 i=_pk_[1],
                 can_recompute_now=caml_call2(_g_,node[13],i[3][13]),
                 switch$2=1;
                break;
               case 10:
                var
                 _pp_=height(parent[11]),
                 can_recompute_now=caml_call2(_g_,node[13],_pp_),
                 switch$2=1;
                break;
               case 11:
                var
                 j=_pk_[1],
                 can_recompute_now=caml_call2(_g_,node[13],j[3][13]),
                 switch$2=1;
                break;
               case 12:
                var
                 _pq_=height(parent[11]),
                 can_recompute_now=caml_call2(_g_,node[13],_pq_),
                 switch$2=1;
                break;
               case 5:
               case 13:
               case 14:
               case 16:var switch$2=0;break;
               default:var can_recompute_now=0,switch$2=1}
            if(! switch$2)throw [0,Assert_failure,_ls_];
            if(can_recompute_now)
             {t[27] = t[27] + 1 | 0;recompute(t,parent)}
            else
             {var _pl_=min_height(t[5]);
              if(caml_call2(_e_,parent[13],_pl_))
               {t[28] = t[28] + 1 | 0;recompute(t,parent)}
              else
               add$0(t[5],parent)}}}}
      return debug}
    function copy_child(t,parent,child)
     {return caml_call1(is_valid$2,child)
              ?maybe_change_value(t,parent,value_exn$0(child))
              :(invalidate_node(t,parent),propagate_invalidity$1(t))}
    function recompute(t,node)
     {t[26] = t[26] + 1 | 0;
      node[2] = t[3];
      var _oG_=node[4];
      if(typeof _oG_ === "number")
       {if(0 === _oG_)throw [0,Assert_failure,_lq_];
        throw [0,Assert_failure,_lr_]}
      else
       switch(_oG_[0])
        {case 0:
          var array_fold=_oG_[1];
          return maybe_change_value(t,node,compute$0(array_fold));
         case 1:return maybe_change_value(t,node,0);
         case 2:return maybe_change_value(t,node,0);
         case 3:
          var
           bind=_oG_[1],
           main=bind[1],
           f=bind[2],
           lhs=bind[3],
           old_rhs=bind[5],
           rhs_scope=bind[6],
           old_all_nodes_created_on_rhs=bind[7];
          bind[7] = none$0;
          var
           rhs=
            run_with_scope
             (t,
              rhs_scope,
              function(param){return caml_call1(f,value_exn$0(lhs))});
          bind[5] = rhs;
          node[6] = t[3];
          change_child(t,main,old_rhs,rhs,bind_rhs_child_index);
          if(is_some$0(old_rhs))
           {if(t[2])
             invalidate_nodes_created_on_rhs(t,old_all_nodes_created_on_rhs);
            else
             rescope_nodes_created_on_rhs
              (t,old_all_nodes_created_on_rhs,main[11]);
            propagate_invalidity$1(t)}
          return maybe_change_value(t,node,0);
         case 4:
          var match=_oG_[1],rhs$0=match[5];
          return copy_child(t,node,value_exn(rhs$0));
         case 5:var a=_oG_[1];return maybe_change_value(t,node,a);
         case 6:
          var expert=_oG_[1],match$0=before_main_computation(expert);
          return 144245463 <= match$0
                  ?(invalidate_node(t,node),propagate_invalidity$1(t))
                  :maybe_change_value(t,node,caml_call1(expert[1],0));
         case 7:
          var
           match$1=_oG_[1],
           only_freeze_when=match$1[3],
           child=match$1[2],
           value=value_exn$0(child);
          if(caml_call1(only_freeze_when,value))
           {remove_children(t,node);
            set_kind$0(node,[5,value]);
            if(caml_call1(is_necessary$1,node))
             set_height$1(t,node,0);
            else
             became_unnecessary(t,node)}
          return maybe_change_value(t,node,value);
         case 8:
          var
           if_then_else=_oG_[1],
           test=if_then_else[2],
           main$0=if_then_else[1],
           current_branch=if_then_else[4],
           else$0=if_then_else[6],
           then=if_then_else[5],
           desired_branch=value_exn$0(test)?then:else$0;
          if_then_else[4] = desired_branch;
          node[6] = t[3];
          change_child
           (t,main$0,current_branch,desired_branch,if_branch_child_index);
          return maybe_change_value(t,node,0);
         case 9:
          var match$2=_oG_[1],current_branch$0=match$2[4];
          return copy_child(t,node,value_exn(current_branch$0));
         case 10:
          var
           join=_oG_[1],
           lhs$0=join[2],
           main$1=join[1],
           old_rhs$0=join[4],
           rhs$1=value_exn$0(lhs$0);
          join[4] = rhs$1;
          node[6] = t[3];
          change_child(t,main$1,old_rhs$0,rhs$1,join_rhs_child_index);
          return maybe_change_value(t,node,0);
         case 11:
          var match$3=_oG_[1],rhs$2=match$3[4];
          return copy_child(t,node,value_exn(rhs$2));
         case 12:
          var n1=_oG_[2],f$0=_oG_[1];
          return maybe_change_value(t,node,caml_call1(f$0,value_exn$0(n1)));
         case 13:
          var match$4=_oG_[1],before=match$4[3];
          return maybe_change_value(t,node,before);
         case 14:
          var match$5=_oG_[1],value$0=match$5[2];
          return maybe_change_value(t,node,value$0);
         case 15:var u=_oG_[1];return maybe_change_value(t,node,compute(u));
         case 16:var var$0=_oG_[1];return maybe_change_value(t,node,var$0[1]);
         case 17:
          var n2=_oG_[3],n1$0=_oG_[2],f$1=_oG_[1],_oH_=value_exn$0(n2);
          return maybe_change_value
                  (t,node,caml_call2(f$1,value_exn$0(n1$0),_oH_));
         case 18:
          var
           n3=_oG_[4],
           n2$0=_oG_[3],
           n1$1=_oG_[2],
           f$2=_oG_[1],
           _oI_=value_exn$0(n3),
           _oJ_=value_exn$0(n2$0);
          return maybe_change_value
                  (t,node,caml_call3(f$2,value_exn$0(n1$1),_oJ_,_oI_));
         case 19:
          var
           n4=_oG_[5],
           n3$0=_oG_[4],
           n2$1=_oG_[3],
           n1$2=_oG_[2],
           f$3=_oG_[1],
           _oK_=value_exn$0(n4),
           _oL_=value_exn$0(n3$0),
           _oM_=value_exn$0(n2$1);
          return maybe_change_value
                  (t,node,caml_call4(f$3,value_exn$0(n1$2),_oM_,_oL_,_oK_));
         case 20:
          var
           n5=_oG_[6],
           n4$0=_oG_[5],
           n3$1=_oG_[4],
           n2$2=_oG_[3],
           n1$3=_oG_[2],
           f$4=_oG_[1],
           _oN_=value_exn$0(n5),
           _oO_=value_exn$0(n4$0),
           _oP_=value_exn$0(n3$1),
           _oQ_=value_exn$0(n2$2);
          return maybe_change_value
                  (t,
                   node,
                   caml_call5(f$4,value_exn$0(n1$3),_oQ_,_oP_,_oO_,_oN_));
         case 21:
          var
           n6=_oG_[7],
           n5$0=_oG_[6],
           n4$1=_oG_[5],
           n3$2=_oG_[4],
           n2$3=_oG_[3],
           n1$4=_oG_[2],
           f$5=_oG_[1],
           _oR_=value_exn$0(n6),
           _oS_=value_exn$0(n5$0),
           _oT_=value_exn$0(n4$1),
           _oU_=value_exn$0(n3$2),
           _oV_=value_exn$0(n2$3);
          return maybe_change_value
                  (t,
                   node,
                   caml_call6(f$5,value_exn$0(n1$4),_oV_,_oU_,_oT_,_oS_,_oR_));
         case 22:
          var
           n7=_oG_[8],
           n6$0=_oG_[7],
           n5$1=_oG_[6],
           n4$2=_oG_[5],
           n3$3=_oG_[4],
           n2$4=_oG_[3],
           n1$5=_oG_[2],
           f$6=_oG_[1],
           _oW_=value_exn$0(n7),
           _oX_=value_exn$0(n6$0),
           _oY_=value_exn$0(n5$1),
           _oZ_=value_exn$0(n4$2),
           _o0_=value_exn$0(n3$3),
           _o1_=value_exn$0(n2$4);
          return maybe_change_value
                  (t,
                   node,
                   caml_call7
                    (f$6,value_exn$0(n1$5),_o1_,_o0_,_oZ_,_oY_,_oX_,_oW_));
         case 23:
          var
           n8=_oG_[9],
           n7$0=_oG_[8],
           n6$1=_oG_[7],
           n5$2=_oG_[6],
           n4$3=_oG_[5],
           n3$4=_oG_[4],
           n2$5=_oG_[3],
           n1$6=_oG_[2],
           f$7=_oG_[1],
           _o2_=value_exn$0(n8),
           _o3_=value_exn$0(n7$0),
           _o4_=value_exn$0(n6$1),
           _o5_=value_exn$0(n5$2),
           _o6_=value_exn$0(n4$3),
           _o7_=value_exn$0(n3$4),
           _o8_=value_exn$0(n2$5);
          return maybe_change_value
                  (t,
                   node,
                   caml_call8
                    (f$7,value_exn$0(n1$6),_o8_,_o7_,_o6_,_o5_,_o4_,_o3_,_o2_));
         default:
          var
           n9=_oG_[10],
           n8$0=_oG_[9],
           n7$1=_oG_[8],
           n6$2=_oG_[7],
           n5$3=_oG_[6],
           n4$4=_oG_[5],
           n3$5=_oG_[4],
           n2$6=_oG_[3],
           n1$7=_oG_[2],
           f$8=_oG_[1],
           _o9_=value_exn$0(n9),
           _o__=value_exn$0(n8$0),
           _o$_=value_exn$0(n7$1),
           _pa_=value_exn$0(n6$2),
           _pb_=value_exn$0(n5$3),
           _pc_=value_exn$0(n4$4),
           _pd_=value_exn$0(n3$5),
           _pe_=value_exn$0(n2$6);
          return maybe_change_value
                  (t,
                   node,
                   caml_call9
                    (f$8,
                     value_exn$0(n1$7),
                     _pe_,
                     _pd_,
                     _pc_,
                     _pb_,
                     _pa_,
                     _o$_,
                     _o__,
                     _o9_))}}
    function recompute_everything_that_is_necessary(t)
     {var r=t[5];
      for(;;)
       {if(caml_call2(_g_,r[1],0))
         {var node=remove_min(r);recompute(t,node);continue}
        return debug}}
    function unlink_disallowed_observers(t)
     {for(;;)
       {if(caml_call2(_g_,caml_call1(Core_kernel_Stack[13],t[12]),0))
         {var
           packed=caml_call1(Core_kernel_Stack[34],t[12]),
           internal_observer=packed[1];
          internal_observer[1] = 3;
          var match=value_exn(t[9]),all_observers=match[1];
          if(same$2(internal_observer,all_observers))
           t[9] = internal_observer[5];
          unlink$0(internal_observer);
          check_if_unnecessary(t,internal_observer[2]);
          continue}
        return 0}}
    function disallow_future_use(t,internal_observer)
     {var _oF_=internal_observer[1];
      return 1 === _oF_
              ?(t[8]
                =
                t[8]
                -
                1
                |
                0,
                internal_observer[1]
                =
                2,
                caml_call2(Core_kernel_Stack[32],t[12],[0,internal_observer]))
              :0 === _oF_
                ?(t[8]
                  =
                  t[8]
                  -
                  1
                  |
                  0,
                  internal_observer[1]
                  =
                  3,
                  internal_observer[3]
                  =
                  0,
                  0)
                :0}
    function disallow_finalized_observers(t)
     {for(;;)
       {if
         (caml_call2(_g_,caml_call1(Core_kernel_Thread_safe_queue[4],t[10]),0))
         {var
           match=caml_call1(Core_kernel_Thread_safe_queue[6],t[10]),
           internal_observer=match[1];
          if(caml_call1(Core_kernel_List[18],internal_observer[3]))
           disallow_future_use(t,internal_observer);
          continue}
        return 0}}
    function observer_finalizer(t)
     {function _oE_(observer)
       {var internal_observer=observer[1];
        return caml_call2
                (Core_kernel_Thread_safe_queue[5],t[10],[0,internal_observer])}
      return caml_call1(Core_kernel[367],_oE_)}
    function create_observer(opt,t,observing)
     {if(opt)var sth=opt[1],should_finalize=sth;else var should_finalize=1;
      var internal_observer=[0,0,observing,0,none$0,none$0,none$0,none$0];
      caml_call2(Core_kernel_Stack[32],t[11],[0,internal_observer]);
      var observer=[0,internal_observer];
      if(should_finalize)
       {var _oC_=observer_finalizer(t),_oD_=caml_call1(Core_kernel[368],_oC_);
        caml_call2(Core_kernel_Gc[9][2],observer,_oD_)}
      t[8] = t[8] + 1 | 0;
      return observer}
    function add_new_observers(t)
     {for(;;)
       {if(caml_call2(_g_,caml_call1(Core_kernel_Stack[13],t[11]),0))
         {var
           packed=caml_call1(Core_kernel_Stack[34],t[11]),
           internal_observer=packed[1],
           _oA_=internal_observer[1];
          if(0 === _oA_)
           {internal_observer[1] = 1;
            var old_all_observers=t[9];
            if(is_some$0(old_all_observers))
             {internal_observer[5] = old_all_observers;
              caml_call2(_ji_[4],old_all_observers,packed)}
            t[9] = packed;
            var
             observing=internal_observer[2],
             was_necessary=caml_call1(is_necessary$1,observing),
             _oB_=caml_call1(Core_kernel_List[17],internal_observer[3]);
            observing[7] = observing[7] + _oB_ | 0;
            var old_observers=observing[20];
            if(is_some$0(old_observers))
             {internal_observer[7] = old_observers;
              old_observers[6] = internal_observer}
            observing[20] = internal_observer;
            handle_after_stabilization$1(t,observing);
            if(1 - was_necessary)became_necessary(t,observing)}
          else
           if(! (3 <= _oA_))throw [0,Assert_failure,_lw_];
          continue}
        return 0}}
    function observer_value_exn(t,observer)
     {var _ow_=t[1];
      if(typeof _ow_ === "number")
       {if(0 === _ow_)
         {var
           _ox_=function(param){return _lx_},
           _oy_=function(_oz_){return sexp_of_t$36(_ox_,_oz_)};
          return caml_call5
                  (Core_kernel[349],
                   0,
                   _ly_,
                   cst_Observer_value_exn_called_during_stabilization,
                   observer,
                   _oy_)}
        return value_exn$2(observer)}
      var raised_exn=_ow_[1];
      return caml_call5
              (Core_kernel[349],
               0,
               _lz_,
               cst_Observer_value_exn_called_after_stabilize_previously_raised,
               raised_exn,
               sexp_of_t$37)}
    function observer_value(t,observer)
     {try
       {var _ov_=[0,observer_value_exn(t,observer)];return _ov_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return [1,caml_call2(Core_kernel_Error[19],0,exn)]}}
    function node_on_update(t,node,f)
     {on_update(node,create$2(f,t[3]));
      return handle_after_stabilization$1(t,node)}
    function observer_on_update_exn(t,observer,f)
     {on_update_exn$0(observer,create$2(f,t[3]));
      return handle_after_stabilization$1(t,observing$1(observer))}
    function set_var_while_not_stabilizing(t,var$0,value)
     {t[29] = t[29] + 1 | 0;
      var$0[1] = value;
      var _or_=caml_call2(_h_,caml_call2(___,var$0[3],t[3]),0);
      if(_or_)
       {var$0[3] = t[3];
        var
         watch=var$0[4],
         _os_=caml_call1(is_necessary$1,watch),
         _ot_=_os_?1 - is_in_recompute_heap(watch):_os_;
        if(_ot_)return add$0(t[5],watch);
        var _ou_=_ot_}
      else
       var _ou_=_or_;
      return _ou_}
    function set_var(t,var$0,value)
     {var _oq_=t[1];
      if(typeof _oq_ === "number")
       {if(0 === _oq_)
         {if(is_none$0(var$0[2]))
           caml_call2(Core_kernel_Stack[32],t[13],var$0);
          var$0[2] = value;
          return 0}
        return set_var_while_not_stabilizing(t,var$0,value)}
      var raised_exn=_oq_[1];
      return caml_call5
              (Core_kernel[349],
               0,
               _lA_,
               cst_cannot_set_var_stabilization_previously_raised,
               raised_exn,
               sexp_of_t$37)}
    function stabilize(t)
     {ensure_not_stabilizing(t,cst_stabilize,0);
      try
       {t[1] = 0;
        disallow_finalized_observers(t);
        add_new_observers(t);
        unlink_disallowed_observers(t);
        recompute_everything_that_is_necessary(t);
        t[3] = add1(t[3]);
        for(;;)
         {if(caml_call1(Core_kernel_Stack[14],t[13]))
           for(;;)
            {if(caml_call1(Core_kernel_Stack[14],t[14]))
              {t[1] = 1;
               var now=t[3];
               for(;;)
                {if(caml_call1(Core_kernel_Stack[14],t[15]))
                  {t[1] = 2;return verbose}
                 var
                  match=caml_call1(Core_kernel_Stack[34],t[15]),
                  node_update=match[2],
                  node=match[1];
                 run_on_update_handlers(node,node_update,now);
                 continue}}
             var node$0=caml_call1(Core_kernel_Stack[34],t[14]);
             node$0[21] = 0;
             var old_value=node$0[19];
             node$0[19] = none$0;
             if(caml_call1(is_valid$2,node$0))
              if(caml_call1(is_necessary$1,node$0))
               var
                new_value=value_exn(node$0[3]),
                _op_=
                 is_none$0(old_value)?[0,new_value]:[1,old_value,new_value],
                node_update$0=_op_;
              else
               var node_update$0=1;
             else
              var node_update$0=0;
             caml_call2(Core_kernel_Stack[32],t[15],[0,node$0,node_update$0]);
             continue}
          var
           var$0=caml_call1(Core_kernel_Stack[34],t[13]),
           value=value_exn(var$0[2]);
          var$0[2] = none$0;
          set_var_while_not_stabilizing(t,var$0,value);
          continue}}
      catch(exn)
       {exn = caml_wrap_exception(exn);t[1] = [0,create$10(exn)];throw exn}}
    function create_node_in(t,created_in,kind)
     {t[24] = t[24] + 1 | 0;return create$5(created_in,kind)}
    function create_node(t,kind){return create_node_in(t,t[4],kind)}
    function create_node_top(t,kind){return create_node_in(t,top,kind)}
    function create_var(opt,t,value)
     {if(opt)
       var sth=opt[1],use_current_scope=sth;
      else
       var use_current_scope=0;
      var
       scope=use_current_scope?t[4]:top,
       watch=create_node_in(t,scope,1),
       var$0=[0,value,none$0,t[3],watch];
      set_kind$0(watch,[16,var$0]);
      return var$0}
    function const$0(t,a){return create_node(t,[5,a])}
    function map$4(t,n,f){return create_node(t,[12,f,n])}
    function map2(t,n1,n2,f){return create_node(t,[17,f,n1,n2])}
    function map3(t,n1,n2,n3,f){return create_node(t,[18,f,n1,n2,n3])}
    function map4(t,n1,n2,n3,n4,f){return create_node(t,[19,f,n1,n2,n3,n4])}
    function map5(t,n1,n2,n3,n4,n5,f)
     {return create_node(t,[20,f,n1,n2,n3,n4,n5])}
    function map6(t,n1,n2,n3,n4,n5,n6,f)
     {return create_node(t,[21,f,n1,n2,n3,n4,n5,n6])}
    function map7(t,n1,n2,n3,n4,n5,n6,n7,f)
     {return create_node(t,[22,f,n1,n2,n3,n4,n5,n6,n7])}
    function map8(t,n1,n2,n3,n4,n5,n6,n7,n8,f)
     {return create_node(t,[23,f,n1,n2,n3,n4,n5,n6,n7,n8])}
    function map9(t,n1,n2,n3,n4,n5,n6,n7,n8,n9,f)
     {return create_node(t,[24,f,n1,n2,n3,n4,n5,n6,n7,n8,n9])}
    function preserve_cutoff(input,output)
     {return set_cutoff$0
              (output,
               [1,
                function(param,_oo_)
                 {return caml_call2(_Z_,input[6],output[6])}])}
    function depend_on(t,input,depend_on)
     {var output=map2(t,input,depend_on,function(a,param){return a});
      preserve_cutoff(input,output);
      return output}
    function necessary_if_alive(t,input)
     {var
       observer=create_observer(0,t,input),
       output=
        map$4
         (t,
          input,
          function(a){caml_call1(Core_kernel_Gc[5],observer);return a});
      preserve_cutoff(input,output);
      return output}
    function bind(t,lhs,f)
     {var
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       bind=[0,main,f,lhs,lhs_change,none$0,top,none$0];
      set_cutoff$0(lhs_change,never);
      bind[6] = [0,bind];
      set_kind$0(lhs_change,[3,bind]);
      set_kind$0(main,[4,bind]);
      return main}
    function bind2(t,n1,n2,f)
     {function _on_(param)
       {var v2=param[2],v1=param[1];return caml_call2(f,v1,v2)}
      return bind(t,map2(t,n1,n2,function(v1,v2){return [0,v1,v2]}),_on_)}
    function bind3(t,n1,n2,n3,f)
     {function _om_(param)
       {var v3=param[3],v2=param[2],v1=param[1];return caml_call3(f,v1,v2,v3)}
      return bind
              (t,
               map3(t,n1,n2,n3,function(v1,v2,v3){return [0,v1,v2,v3]}),
               _om_)}
    function bind4(t,n1,n2,n3,n4,f)
     {function _ol_(param)
       {var v4=param[4],v3=param[3],v2=param[2],v1=param[1];
        return caml_call4(f,v1,v2,v3,v4)}
      return bind
              (t,
               map4
                (t,n1,n2,n3,n4,function(v1,v2,v3,v4){return [0,v1,v2,v3,v4]}),
               _ol_)}
    function join(t,lhs)
     {var
       lhs_change=create_node(t,1),
       main=create_node(t,1),
       join=[0,main,lhs,lhs_change,none$0];
      set_cutoff$0(lhs_change,never);
      set_kind$0(lhs_change,[10,join]);
      set_kind$0(main,[11,join]);
      return main}
    function if$0(t,test,then,else$0)
     {var
       test_change=create_node(t,1),
       main=create_node(t,1),
       if_then_else=[0,main,test,test_change,none$0,then,else$0];
      set_cutoff$0(test_change,never);
      set_kind$0(test_change,[8,if_then_else]);
      set_kind$0(main,[9,if_then_else]);
      return main}
    function lazy_from_fun(t,f)
     {var scope=t[4];
      function _ok_(param){return within_scope(t,scope,f)}
      return caml_call1(Core_kernel_Lazy[29],_ok_)}
    var default_hash_table_initial_size=4;
    function memoize_fun_by_key(opt,t,hashable,project_key,f)
     {if(opt)
       var sth=opt[1],initial_size=sth;
      else
       var initial_size=default_hash_table_initial_size;
      var
       scope=t[4],
       table=
        caml_call4(Core_kernel_Hashtbl[77][1],0,[0,initial_size],hashable,0);
      function _oj_(a)
       {var
         key=caml_call1(project_key,a),
         match=caml_call2(Core_kernel_Hashtbl[51],table,key);
        if(match){var b=match[1];return b}
        var b$0=within_scope(t,scope,function(param){return caml_call1(f,a)});
        caml_call3(Core_kernel_Hashtbl[35],table,key,b$0);
        return b$0}
      return caml_call1(Core_kernel[367],_oj_)}
    function array_fold(t,children,init,f)
     {return caml_call2(_f_,caml_call1(Array[17],children),0)
              ?const$0(t,init)
              :create_node(t,[0,[0,init,f,children]])}
    function all(t,ts)
     {function _oi_(ac,a){return [0,a,ac]}
      return array_fold(t,caml_call1(Array[83],ts),0,_oi_)}
    function unordered_array_fold(opt,t,children,init,f,f_inverse)
     {if(opt)
       var sth=opt[1],full_compute_every_n_changes=sth;
      else
       var full_compute_every_n_changes=include[61];
      if(caml_call2(_f_,caml_call1(Array[17],children),0))
       return const$0(t,init);
      if(caml_call2(_e_,full_compute_every_n_changes,0))
       return caml_call5
               (Core_kernel[349],
                0,
                _lB_,
                cst_unordered_array_fold_got_non_positive_full_compute_every_n_changes,
                full_compute_every_n_changes,
                Core_kernel[455]);
      var main=create_node(t,1);
      set_kind$0
       (main,
        [15,
         create$3(init,f,f_inverse,full_compute_every_n_changes,children,main)]);
      return main}
    function opt_unordered_array_fold
     (full_compute_every_n_changes,t,ts,init,f,f_inverse)
     {function f$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x){var x$0=x[1];return [0,caml_call2(f,accum,x$0),num_invalid]}
        return [0,accum,num_invalid + 1 | 0]}
      function f_inverse$0(param,x)
       {var num_invalid=param[2],accum=param[1];
        if(x)
         {var x$0=x[1];return [0,caml_call2(f_inverse,accum,x$0),num_invalid]}
        return [0,accum,num_invalid - 1 | 0]}
      function _oh_(param)
       {var num_invalid=param[2],accum=param[1];
        return caml_call2(_f_,num_invalid,0)?[0,accum]:0}
      return map$4
              (t,
               unordered_array_fold
                (full_compute_every_n_changes,t,ts,[0,init,0],f$0,f_inverse$0),
               _oh_)}
    function at_least_k_of(t,nodes,k)
     {function bool_to_int(b){return b?1:0}
      function _of_(i){return caml_call2(_d_,i,k)}
      function _og_(num_true,b){return num_true - bool_to_int(b) | 0}
      return map$4
              (t,
               unordered_array_fold
                (0,
                 t,
                 nodes,
                 0,
                 function(num_true,b){return num_true + bool_to_int(b) | 0},
                 _og_),
               _of_)}
    function exists$4(t,nodes){return at_least_k_of(t,nodes,1)}
    function for_all$4(t,nodes)
     {return at_least_k_of(t,nodes,caml_call1(Array[17],nodes))}
    function sum$0(full_compute_every_n_changes,t,nodes,zero,add,sub)
     {return unordered_array_fold
              (full_compute_every_n_changes,t,nodes,zero,add,sub)}
    function opt_sum(full_compute_every_n_changes,t,nodes,zero,add,sub)
     {return opt_unordered_array_fold
              (full_compute_every_n_changes,t,nodes,zero,add,sub)}
    function sum_int(t,nodes)
     {function _oa_(_oe_,_od_){return _oe_ - _od_ | 0}
      return sum$0
              (0,t,nodes,0,function(_oc_,_ob_){return _oc_ + _ob_ | 0},_oa_)}
    function sum_float(t,nodes)
     {function _n6_(_n$_,_n__){return _n$_ - _n__}
      function _n7_(_n9_,_n8_){return _n9_ + _n8_}
      return sum$0([0,caml_call1(Array[17],nodes)],t,nodes,0,_n7_,_n6_)}
    function set_freeze(t,node,child,only_freeze_when)
     {var was_necessary=caml_call1(is_necessary$1,node);
      set_kind$0(node,[7,[0,node,child,only_freeze_when]]);
      return was_necessary
              ?add_parent$0(t,child,node,freeze_child_index)
              :became_necessary(t,node)}
    function freeze(t,child,only_freeze_when)
     {var node=create_node_top(t,1);
      set_freeze(t,node,child,only_freeze_when);
      return node}
    function add_alarm(t,at,alarm_value)
     {return caml_call3(Core_kernel_Timing_wheel_ns[24],t[16],at,alarm_value)}
    function at(t,time)
     {if(alarm_would_have_fired(t,time))return const$0(t,1);
      var main=create_node(t,1),at=[0,main,time,null$0];
      set_kind$0(main,[1,at]);
      at[3] = add_alarm(t,time,create$9([0,at]));
      return main}
    function after(t,span)
     {var _n5_=now$1(t);return at(t,caml_call2(Time_ns[28],_n5_,span))}
    function next_interval_alarm(t,base,interval)
     {var
       _n3_=caml_call1(Core_kernel_Timing_wheel_ns[18],t[16]),
       after=caml_call2(Core_kernel_Timing_wheel_ns[19],t[16],_n3_),
       _n4_=now$1(t),
       after$0=caml_call2(Time_ns[22],after,_n4_),
       at=caml_call5(Time_ns[38],_lC_,base,after$0,interval,0);
      return at}
    function at_intervals(t,interval)
     {var _n1_=caml_call1(Core_kernel_Timing_wheel_ns[11],t[16]);
      if(caml_call2(Time_ns[43][17],interval,_n1_))
       caml_call5
        (Core_kernel[349],
         0,
         _lD_,
         cst_at_intervals_got_too_small_interval,
         interval,
         Time_ns[43][96]);
      var
       main=create_node(t,1),
       base=now$1(t),
       at_intervals=[0,main,base,interval,null$0];
      set_kind$0(main,[2,at_intervals]);
      set_cutoff$0(main,never);
      var _n2_=create$9([1,at_intervals]);
      at_intervals[4]
      =
      add_alarm(t,next_interval_alarm(t,base,interval),_n2_);
      return main}
    function snapshot(t,value_at,at,before)
     {var _n0_=now$1(t);
      if(caml_call2(Time_ns[17],at,_n0_))
       return caml_call4
               (Core_kernel_Or_error[43],
                0,
                cst_cannot_take_snapshot_in_the_past,
                at,
                Time_ns[42]);
      var main=create_node_top(t,1),snapshot=[0,main,at,before,value_at];
      set_kind$0(main,[13,snapshot]);
      add_alarm(t,at,create$9([2,snapshot]));
      return [0,main]}
    function advance_step_function(t,node,step_function,alarm_value)
     {advance(step_function,function(at){return alarm_would_have_fired(t,at)});
      var _nZ_=step_function[3];
      if(_nZ_)
       {var match=_nZ_[1],at=match[1];
        step_function[4] = add_alarm(t,at,alarm_value);
        return 0}
      return set_kind$0(node,[5,step_function[2]])}
    function step_function(t,init,steps)
     {function _nV_(param,_nY_)
       {var time=_nY_[1],time$0=param[1];
        return caml_call2(Time_ns[20],time$0,time)}
      if(1 - caml_call2(Core_kernel_List[147],steps,_nV_))
       {var
         _nW_=
          function(param)
           {var v0=param[1],v0$0=caml_call1(Time_ns[42],v0);
            return [1,[0,v0$0,[0,v1,0]]]},
         _nX_=caml_call1(Core_kernel[513],_nW_);
        caml_call5
         (Core_kernel[349],
          0,
          _lE_,
          cst_step_function_got_unsorted_times,
          steps,
          _nX_)}
      var main=create_node(t,1),step_function=[0,main,init,steps,null$0];
      set_kind$0(main,[14,step_function]);
      advance_step_function(t,main,step_function,create$9([3,step_function]));
      return main}
    function change_leaf(t,node)
     {node[2] = none;
      var
       _nT_=needs_to_be_computed(node),
       _nU_=_nT_?1 - is_in_recompute_heap(node):_nT_;
      return _nU_?add$0(t[5],node):_nU_}
    function advance_clock(t,to)
     {ensure_not_stabilizing(t,cst_advance_clock,1);
      set_var_while_not_stabilizing(t,t[17],to);
      caml_call3(Core_kernel_Timing_wheel_ns[21],t[16],to,t[18]);
      for(;;)
       {if(is_some$0(t[19]))
         {var _nR_=t[19];
          t[19] = _nR_[2];
          _nR_[2] = none$0;
          var _nS_=_nR_[1];
          switch(_nS_[0])
           {case 0:
             var match=_nS_[1],main=match[1];
             if(caml_call1(is_valid$2,main))
              {set_kind$0(main,_lF_);change_leaf(t,main)}
             break;
            case 1:
             var
              at_intervals=_nS_[1],
              interval=at_intervals[3],
              base=at_intervals[2],
              main$0=at_intervals[1];
             if(caml_call1(is_valid$2,main$0))
              {at_intervals[4]
               =
               add_alarm(t,next_interval_alarm(t,base,interval),_nR_);
               change_leaf(t,main$0)}
             break;
            case 2:
             var match$0=_nS_[1],value_at=match$0[4],main$1=match$0[1];
             set_freeze(t,main$1,value_at,function(param){return 1});
             change_leaf(t,main$1);
             break;
            default:
             var step_function=_nS_[1],main$2=step_function[1];
             if(caml_call1(is_valid$2,main$2))
              {advance_step_function(t,main$2,step_function,_nR_);
               change_leaf(t,main$2)}}
          continue}
        return debug}}
    function create$14(Config,max_height_allowed)
     {var
       adjust_heights_heap=create$8(max_height_allowed),
       recompute_heap=create$6(max_height_allowed),
       timing_wheel=
        caml_call2(Core_kernel_Timing_wheel_ns[10],Config[3],Config[2]),
       t=[],
       handle_fired=function _nQ_(_nP_){return _nQ_.fun(_nP_)},
       _nH_=caml_call1(Only_in_debug[8],0),
       _nI_=caml_call1(Core_kernel_Stack[30],0),
       _nJ_=caml_call1(Core_kernel_Stack[30],0),
       _nK_=caml_call1(Core_kernel_Stack[30],0),
       _nL_=caml_call1(Core_kernel_Stack[30],0),
       _nM_=caml_call1(Core_kernel_Stack[30],0),
       _nN_=caml_call1(Core_kernel_Thread_safe_queue[3],0),
       _nO_=caml_call1(Core_kernel_Stack[30],0);
      caml_update_dummy
       (t,
        [0,
         2,
         Config[1],
         _T_,
         top,
         recompute_heap,
         adjust_heights_heap,
         _nO_,
         0,
         none$0,
         _nN_,
         _nM_,
         _nL_,
         _nK_,
         _nJ_,
         _nI_,
         timing_wheel,
         0,
         handle_fired,
         none$0,
         _nH_,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0]);
      caml_update_dummy
       (handle_fired,
        function(alarm)
         {var
           alarm_value=
            caml_call2(Core_kernel_Timing_wheel_ns[6][5],t[16],alarm);
          alarm_value[2] = t[19];
          t[19] = alarm_value;
          return 0});
      t[17] = create_var(0,t,Config[2]);
      return t}
    function expert_kind_of_node(node)
     {var _nD_=node[4];
      if(typeof _nD_ === "number")
       {if(0 === _nD_)return none$0}
      else
       if(6 === _nD_[0]){var e=_nD_[1];return e}
      var
       _nE_=0,
       _nF_=[0,sexp_of_t$27(function(param){return _lG_},_nD_),_nE_],
       _nG_=
        [1,
         [0,
          caml_call1
           (Sexplib0_Sexp_conv[7],cst_unexpected_kind_for_expert_node),
          _nF_]];
      return caml_call1(Core_kernel[364],_nG_)}
    function create$15(state,on_observability_change,f)
     {var e=create$4(f,on_observability_change),node=create_node(state,[6,e]);
      return node}
    function currently_running_node_exn(state,name)
     {var _nz_=state[20][1];
      if(_nz_){var current=_nz_[1];return current}
      var
       _nA_=caml_call2(Core_kernel[178],name,cst_during_stabilization),
       _nB_=caml_call2(Core_kernel[178],cst_can_only_call,_nA_),
       _nC_=caml_call1(Core_kernel[557],_nB_);
      return caml_call1(Core_kernel[364],_nC_)}
    function assert_currently_running_node_is_child(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _no_=1 - has_child(node,current);
      if(_no_)
       {var
         _np_=0,
         _nq_=0,
         _nr_=current[4],
         _ns_=
          [0,
           [1,
            [0,_lI_,[0,sexp_of_t$27(function(param){return _lH_},_nr_),_nq_]]],
           _np_],
         _nt_=0,
         _nu_=node[4],
         _nv_=
          [0,
           [1,
            [0,_lK_,[0,sexp_of_t$27(function(param){return _lJ_},_nu_),_nt_]]],
           _ns_],
         _nw_=caml_call2(Core_kernel[178],name,cst_on_parent_nodes),
         _nx_=caml_call2(Core_kernel[178],cst_can_only_call$0,_nw_),
         _ny_=[1,[0,caml_call1(Core_kernel[557],_nx_),_nv_]];
        return caml_call1(Core_kernel[364],_ny_)}
      return _no_}
    function assert_currently_running_node_is_parent(state,node,name)
     {var
       current=currently_running_node_exn(state,name),
       _nd_=1 - has_parent(node,current);
      if(_nd_)
       {var
         _ne_=0,
         _nf_=0,
         _ng_=current[4],
         _nh_=
          [0,
           [1,
            [0,_lM_,[0,sexp_of_t$27(function(param){return _lL_},_ng_),_nf_]]],
           _ne_],
         _ni_=0,
         _nj_=node[4],
         _nk_=
          [0,
           [1,
            [0,_lO_,[0,sexp_of_t$27(function(param){return _lN_},_nj_),_ni_]]],
           _nh_],
         _nl_=caml_call2(Core_kernel[178],name,cst_on_children_nodes),
         _nm_=caml_call2(Core_kernel[178],cst_can_only_call$1,_nl_),
         _nn_=[1,[0,caml_call1(Core_kernel[557],_nm_),_nk_]];
        return caml_call1(Core_kernel[364],_nn_)}
      return _nd_}
    function make_stale$0(state,node)
     {var e=expert_kind_of_node(node),_m$_=is_some$0(e);
      if(_m$_)
       {var match=make_stale(e);
        if(534011858 <= match)return 0;
        var
         _na_=caml_call1(is_necessary$1,node),
         _nb_=_na_?1 - is_in_recompute_heap(node):_na_;
        if(_nb_)return add$0(state[5],node);
        var _nc_=_nb_}
      else
       var _nc_=_m$_;
      return _nc_}
    function invalidate(state,node)
     {invalidate_node(state,node);return propagate_invalidity$1(state)}
    function add_dependency(state,node,dep)
     {var e=expert_kind_of_node(node),_m6_=is_some$0(e);
      if(_m6_)
       {var
         new_child_index=add_child_edge(e,[0,dep]),
         _m7_=caml_call1(is_necessary$1,node);
        if(_m7_)
         {add_parent$0(state,dep[1],node,new_child_index);
          var _m8_=1 - is_in_recompute_heap(node);
          if(_m8_)return add$0(state[5],node);
          var _m9_=_m8_}
        else
         var _m9_=_m7_;
        var _m__=_m9_}
      else
       var _m__=_m6_;
      return _m__}
    function remove_dependency(state,node,edge)
     {var e=expert_kind_of_node(node),_m3_=is_some$0(e);
      if(_m3_)
       {if(! caml_call1(is_necessary$1,node))throw [0,Assert_failure,_lP_];
        var
         edge_index=value_exn(edge[3]),
         match=last_child_edge_exn(e),
         last_edge=match[1],
         last_edge_index=value_exn(last_edge[3]);
        if(caml_call2(_i_,edge_index,last_edge_index))
         {swap_children_except_in_kind
           (node,edge[1],edge_index,last_edge[1],last_edge_index);
          swap_children(e,edge_index,last_edge_index)}
        remove_last_child_edge_exn(e);
        remove_child(state,edge[1],node,last_edge_index);
        if(1 - is_in_recompute_heap(node))add$0(state[5],node);
        var _m4_=1 - caml_call1(is_valid$2,edge[1]);
        if(_m4_)return decr_invalid_children(e);
        var _m5_=_m4_}
      else
       var _m5_=_m3_;
      return _m5_}
    var
     Expert$0=
      [0,
       expert_kind_of_node,
       create$15,
       currently_running_node_exn,
       assert_currently_running_node_is_child,
       assert_currently_running_node_is_parent,
       make_stale$0,
       invalidate,
       add_dependency,
       remove_dependency];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$103);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$6=
      [0,
       sexp_of_status,
       Node_update$0,
       Run_on_update_handlers,
       Only_in_debug,
       num_var_sets,
       set_num_var_sets,
       num_nodes_recomputed_directly_because_min_height,
       set_num_nodes_recomputed_directly_because_min_height,
       num_nodes_recomputed_directly_because_one_child,
       set_num_nodes_recomputed_directly_because_one_child,
       num_nodes_recomputed,
       set_num_nodes_recomputed,
       num_nodes_invalidated,
       set_num_nodes_invalidated,
       num_nodes_created,
       set_num_nodes_created,
       num_nodes_changed,
       set_num_nodes_changed,
       num_nodes_became_unnecessary,
       set_num_nodes_became_unnecessary,
       num_nodes_became_necessary,
       set_num_nodes_became_necessary,
       only_in_debug,
       set_only_in_debug,
       fired_alarm_values,
       set_fired_alarm_values,
       handle_fired,
       set_now,
       timing_wheel,
       run_on_update_handlers$0,
       set_during_stabilization,
       disallowed_observers,
       new_observers,
       finalized_observers,
       all_observers,
       set_all_observers,
       num_active_observers,
       set_num_active_observers,
       adjust_heights_heap,
       recompute_heap,
       current_scope,
       set_current_scope,
       stabilization_num,
       set_stabilization_num,
       bind_lhs_change_should_invalidate_rhs,
       status,
       set_status,
       Fields$0,
       sexp_of_t$40,
       now$1,
       timing_wheel_length,
       num_stabilizes,
       max_height_allowed$1,
       max_height_seen$1,
       alarm_would_have_fired,
       iter_observers,
       directly_observed,
       save_dot$0,
       iter_observer_descendants,
       Stats,
       stats,
       am_stabilizing,
       invariant$30,
       ensure_not_stabilizing,
       set_height$1,
       set_max_height_allowed$1,
       handle_after_stabilization$1,
       remove_children,
       remove_child,
       check_if_unnecessary,
       became_unnecessary,
       remove_alarm,
       invalidate_node,
       invalidate_nodes_created_on_rhs,
       rescope_nodes_created_on_rhs,
       propagate_invalidity$1,
       add_parent_without_adjusting_heights,
       became_necessary,
       add_parent$0,
       run_with_scope,
       within_scope,
       change_child,
       recompute,
       copy_child,
       maybe_change_value,
       recompute_everything_that_is_necessary,
       unlink_disallowed_observers,
       disallow_future_use,
       disallow_finalized_observers,
       observer_finalizer,
       create_observer,
       add_new_observers,
       observer_value_exn,
       observer_value,
       node_on_update,
       observer_on_update_exn,
       set_var_while_not_stabilizing,
       set_var,
       stabilize,
       create_node_in,
       create_node,
       create_node_top,
       create_var,
       const$0,
       map$4,
       map2,
       map3,
       map4,
       map5,
       map6,
       map7,
       map8,
       map9,
       preserve_cutoff,
       depend_on,
       necessary_if_alive,
       bind,
       bind2,
       bind3,
       bind4,
       join,
       if$0,
       lazy_from_fun,
       default_hash_table_initial_size,
       memoize_fun_by_key,
       array_fold,
       all,
       unordered_array_fold,
       opt_unordered_array_fold,
       at_least_k_of,
       exists$4,
       for_all$4,
       sum$0,
       opt_sum,
       sum_int,
       sum_float,
       set_freeze,
       freeze,
       add_alarm,
       at,
       after,
       next_interval_alarm,
       at_intervals,
       snapshot,
       advance_step_function,
       step_function,
       change_leaf,
       advance_clock,
       create$14,
       Expert$0];
    caml_register_global(1267,include$6,"Incremental_kernel__State");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$104);
    caml_call1(Expect_test_collector[4][1],cst_src_balanced_reducer_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$105,cst$34);
    function left_child_index(parent_index)
     {return (parent_index * 2 | 0) + 1 | 0}
    function num_branches(t){return t[2] - 1 | 0}
    function index_is_leaf(t,i){return caml_call2(_d_,i,num_branches(t))}
    function leaf_index(t,i)
     {var
       offset_from_start_of_leaves_in_array=i + t[3] | 0,
       rotated_index=
        caml_call2(_h_,offset_from_start_of_leaves_in_array,t[2])
         ?offset_from_start_of_leaves_in_array
         :offset_from_start_of_leaves_in_array - t[2] | 0;
      return rotated_index + num_branches(t) | 0}
    function sexp_of_t$42(sexp_of_a,t)
     {function _mZ_(i)
       {var _m2_=leaf_index(t,i);
        return caml_call2(Core_kernel_Option_array[16],t[1],_m2_)}
      var
       _m0_=caml_call2(Core_kernel_List[128],t[2],_mZ_),
       _m1_=caml_call1(Core_kernel[542],sexp_of_a);
      return caml_call2(Core_kernel[513],_m1_,_m0_)}
    function invariant$31(invariant_a,t)
     {var
       data=t[1],
       _mU_=caml_call1(Core_kernel_Option_array[15],data) - 1 | 0,
       _mT_=0;
      if(! (_mU_ < 0))
       {var i$0=_mT_;
        for(;;)
         {var match=caml_call2(Core_kernel_Option_array[16],data,i$0);
          if(match){var a=match[1];caml_call1(invariant_a,a)}
          var _mY_=i$0 + 1 | 0;
          if(_mU_ !== i$0){var i$0=_mY_;continue}
          break}}
      var _mW_=num_branches(t) - 1 | 0,_mV_=0;
      if(! (_mW_ < 0))
       {var i=_mV_;
        for(;;)
         {var
           left=left_child_index(i),
           right=left + 1 | 0,
           left_is_none=caml_call2(Core_kernel_Option_array[18],data,left),
           right_is_none=caml_call2(Core_kernel_Option_array[18],data,right);
          if(caml_call2(Core_kernel_Option_array[19],data,i))
           {var switch$0=left_is_none?0:right_is_none?0:1;
            if(! switch$0)throw [0,Assert_failure,_lQ_]}
          else
           if(! index_is_leaf(t,left))
            if(! index_is_leaf(t,right))
             if(! left_is_none)
              if(! right_is_none)throw [0,Assert_failure,_lR_];
          var _mX_=i + 1 | 0;
          if(_mW_ !== i){var i=_mX_;continue}
          break}}
      return 0}
    function create_exn(opt,param,num_leaves,reduce)
     {if(opt)
       var sth=opt[1],sexp_of_a=sth;
      else
       var sexp_of_a=function(param){return _lT_};
      if(caml_call2(_h_,num_leaves,1))
       {var
         _mR_=[0,[1,[0,_lS_,[0,caml_call1(Core_kernel[455],num_leaves),0]]],0],
         _mS_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_non_positive_number_of_leaves_in_balanced_reducer),
            _mR_]];
        caml_call1(Core_kernel[364],_mS_)}
      var
       num_branches=num_leaves - 1 | 0,
       num_leaves_not_in_bottom_level=
        caml_call1(include[67],num_leaves)
        -
        num_leaves
        |
        0,
       data=
        caml_call1(Core_kernel_Option_array[12],num_branches + num_leaves | 0);
      return [0,
              data,
              num_leaves,
              num_leaves_not_in_bottom_level,
              reduce,
              sexp_of_a]}
    function set_exn(t,i,a)
     {if(caml_call2(_h_,i,0))
       {var
         _mM_=[0,[1,[0,_lU_,[0,caml_call1(Core_kernel[455],i),0]]],0],
         _mN_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_set_negative_index_in_balanced_reducer),
            _mM_]];
        caml_call1(Core_kernel[364],_mN_)}
      var length=t[2];
      if(caml_call2(_d_,i,length))
       {var
         _mO_=[0,[1,[0,_lV_,[0,caml_call1(Core_kernel[455],length),0]]],0],
         _mP_=[0,[1,[0,_lW_,[0,caml_call1(Core_kernel[455],i),0]]],_mO_],
         _mQ_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_set_out_of_bounds_index_in_balanced_reducer),
            _mP_]];
        caml_call1(Core_kernel[364],_mQ_)}
      var data=t[1],i$0=[0,leaf_index(t,i)];
      caml_call3(Core_kernel_Option_array[24],data,i$0[1],a);
      for(;;)
       {if(caml_call2(_i_,i$0[1],0))
         {var parent=(i$0[1] - 1 | 0) / 2 | 0;
          if(caml_call2(Core_kernel_Option_array[18],data,parent))
           i$0[1] = 0;
          else
           {caml_call2(Core_kernel_Option_array[29],data,parent);
            i$0[1] = parent}
          continue}
        return 0}}
    function _lX_(t,i)
     {if(caml_call2(Core_kernel_Option_array[19],t[1],i))
       return caml_call2(Core_kernel_Option_array[21],t[1],i);
      var left=left_child_index(i),right=left + 1 | 0;
      if(caml_call2(_d_,left,caml_call1(Core_kernel_Option_array[15],t[1])))
       {var
         sexp_of_a=t[5],
         _mI_=[0,[1,[0,_lY_,[0,sexp_of_t$42(sexp_of_a,t),0]]],0],
         _mJ_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],
              cst_attempt_to_compute_balanced_reducer_with_unset_elements),
            _mI_]];
        caml_call1(Core_kernel[364],_mJ_)}
      var _mK_=_lX_(t,right),_mL_=_lX_(t,left),a=caml_call2(t[4],_mL_,_mK_);
      caml_call3(Core_kernel_Option_array[28],t[1],i,a);
      return a}
    function compute_exn(t){return _lX_(t,0)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$106);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incremental_kernel_Balanced_reducer=
      [0,sexp_of_t$42,invariant$31,create_exn,set_exn,compute_exn];
    caml_register_global
     (1269,
      Incremental_kernel_Balanced_reducer,
      "Incremental_kernel__Balanced_reducer");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$107);
    caml_call1(Expect_test_collector[4][1],cst_src_expert1_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$108,cst$35);
    function create$16(opt,child)
     {if(opt)
       var sth=opt[1],on_change=sth;
      else
       var on_change=function(_mH_){return 0};
      return [0,child,on_change,none$0]}
    function value$3(state,t){return value_exn$0(t[1])}
    var include$7=[0,sexp_of_t$21,create$16,value$3];
    function create$17(state,opt,f)
     {if(opt)
       var sth=opt[1],on_observability_change=sth;
      else
       var on_observability_change=function(param){return 0};
      return caml_call3(Expert$0[2],state,on_observability_change,f)}
    var make_stale$1=Expert$0[6];
    function watch$1(_mG_){return _mG_}
    var
     invalidate$0=Expert$0[7],
     add_dependency$0=Expert$0[8],
     remove_dependency$0=Expert$0[9];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$109);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$8=
      [0,
       sexp_of_t$28,
       create$17,
       watch$1,
       make_stale$1,
       invalidate$0,
       add_dependency$0,
       remove_dependency$0],
     Incremental_kernel_Expert1=[0,include$7,include$8];
    caml_register_global
     (1270,Incremental_kernel_Expert1,"Incremental_kernel__Expert1");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$110);
    caml_call1(Expect_test_collector[4][1],cst_src_reduce_balanced_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$111,cst$36);
    function create$18(state,children,f,reduce)
     {var len=caml_call1(Array[17],children);
      if(caml_call2(_f_,len,0))return 0;
      var reducer=create_exn(0,0,len,reduce);
      function _mz_(param){var a=compute_exn(reducer);return a}
      var node=caml_call3(include$8[2],state,0,_mz_),_mB_=len - 1 | 0,_mA_=0;
      if(! (_mB_ < 0))
       {var i=_mA_;
        for(;;)
         {var
           _mC_=caml_check_bound(children,i)[i + 1],
           _mD_=
            [0,
             function(i)
               {return function(a)
                 {set_exn(reducer,i,caml_call1(f,a));return debug}}
              (i)],
           _mE_=caml_call2(include$7[2],_mD_,_mC_);
          caml_call3(include$8[6],state,node,_mE_);
          var _mF_=i + 1 | 0;
          if(_mB_ !== i){var i=_mF_;continue}
          break}}
      return [0,caml_call1(include$8[3],node)]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$112);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Reduce_balanced=[0,create$18];
    caml_register_global
     (1271,
      Incremental_kernel_Reduce_balanced,
      "Incremental_kernel__Reduce_balanced");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$113);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_intf_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$114,cst$37);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$115);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel_Incremental_intf=[0];
    caml_register_global
     (1272,
      Incremental_kernel_Incremental_intf,
      "Incremental_kernel__Incremental_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$116);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$117,cst$38);
    var Config=0;
    function Make_with_config(_ml_,_mk_)
     {var
       t=create$14(_ml_,128),
       State=
        [0,
         sexp_of_status,
         Node_update$0,
         Run_on_update_handlers,
         Only_in_debug,
         num_var_sets,
         set_num_var_sets,
         num_nodes_recomputed_directly_because_min_height,
         set_num_nodes_recomputed_directly_because_min_height,
         num_nodes_recomputed_directly_because_one_child,
         set_num_nodes_recomputed_directly_because_one_child,
         num_nodes_recomputed,
         set_num_nodes_recomputed,
         num_nodes_invalidated,
         set_num_nodes_invalidated,
         num_nodes_created,
         set_num_nodes_created,
         num_nodes_changed,
         set_num_nodes_changed,
         num_nodes_became_unnecessary,
         set_num_nodes_became_unnecessary,
         num_nodes_became_necessary,
         set_num_nodes_became_necessary,
         only_in_debug,
         set_only_in_debug,
         fired_alarm_values,
         set_fired_alarm_values,
         handle_fired,
         set_now,
         timing_wheel,
         run_on_update_handlers$0,
         set_during_stabilization,
         disallowed_observers,
         new_observers,
         finalized_observers,
         all_observers,
         set_all_observers,
         num_active_observers,
         set_num_active_observers,
         adjust_heights_heap,
         recompute_heap,
         current_scope,
         set_current_scope,
         stabilization_num,
         set_stabilization_num,
         bind_lhs_change_should_invalidate_rhs,
         status,
         set_status,
         Fields$0,
         sexp_of_t$40,
         now$1,
         timing_wheel_length,
         num_stabilizes,
         max_height_allowed$1,
         max_height_seen$1,
         alarm_would_have_fired,
         iter_observers,
         directly_observed,
         save_dot$0,
         iter_observer_descendants,
         Stats,
         stats,
         am_stabilizing,
         invariant$30,
         ensure_not_stabilizing,
         set_height$1,
         set_max_height_allowed$1,
         handle_after_stabilization$1,
         remove_children,
         remove_child,
         check_if_unnecessary,
         became_unnecessary,
         remove_alarm,
         invalidate_node,
         invalidate_nodes_created_on_rhs,
         rescope_nodes_created_on_rhs,
         propagate_invalidity$1,
         add_parent_without_adjusting_heights,
         became_necessary,
         add_parent$0,
         run_with_scope,
         within_scope,
         change_child,
         recompute,
         copy_child,
         maybe_change_value,
         recompute_everything_that_is_necessary,
         unlink_disallowed_observers,
         disallow_future_use,
         disallow_finalized_observers,
         observer_finalizer,
         create_observer,
         add_new_observers,
         observer_value_exn,
         observer_value,
         node_on_update,
         observer_on_update_exn,
         set_var_while_not_stabilizing,
         set_var,
         stabilize,
         create_node_in,
         create_node,
         create_node_top,
         create_var,
         const$0,
         map$4,
         map2,
         map3,
         map4,
         map5,
         map6,
         map7,
         map8,
         map9,
         preserve_cutoff,
         depend_on,
         necessary_if_alive,
         bind,
         bind2,
         bind3,
         bind4,
         join,
         if$0,
         lazy_from_fun,
         default_hash_table_initial_size,
         memoize_fun_by_key,
         array_fold,
         all,
         unordered_array_fold,
         opt_unordered_array_fold,
         at_least_k_of,
         exists$4,
         for_all$4,
         sum$0,
         opt_sum,
         sum_int,
         sum_float,
         set_freeze,
         freeze,
         add_alarm,
         at,
         after,
         next_interval_alarm,
         at_intervals,
         snapshot,
         advance_step_function,
         step_function,
         change_leaf,
         advance_clock,
         create$14,
         Expert$0,
         t],
       state=State[151],
       Before_or_after=0,
       Cutoff=0;
      function current(param){return state[4]}
      function within(t,f){return caml_call3(State[81],state,t,f)}
      var
       Scope=
        [0,
         _dG_,
         invariant$13,
         top,
         is_top,
         height,
         is_valid$1,
         is_necessary$0,
         add_node,
         current,
         within],
       Node_update=0;
      function return$0(a){return caml_call2(State[104],state,a)}
      function observe(should_finalize,t)
       {return caml_call3(State[91],should_finalize,state,t)}
      function map(t1,f){return caml_call3(State[105],state,t1,f)}
      function map2$0(t1,t2,f){return caml_call4(State[106],state,t1,t2,f)}
      function map3$0(t1,t2,t3,f)
       {return caml_call5(State[107],state,t1,t2,t3,f)}
      function map4$0(t1,t2,t3,t4,f)
       {return caml_call6(State[108],state,t1,t2,t3,t4,f)}
      function map5$0(t1,t2,t3,t4,t5,f)
       {return caml_call7(State[109],state,t1,t2,t3,t4,t5,f)}
      function map6$0(t1,t2,t3,t4,t5,t6,f)
       {return caml_call8(State[110],state,t1,t2,t3,t4,t5,t6,f)}
      function map7$0(t1,t2,t3,t4,t5,t6,t7,f)
       {return caml_call9(State[111],state,t1,t2,t3,t4,t5,t6,t7,f)}
      function map8$0(t1,t2,t3,t4,t5,t6,t7,t8,f)
       {return caml_call10(State[112],state,t1,t2,t3,t4,t5,t6,t7,t8,f)}
      function map9$0(t1,t2,t3,t4,t5,t6,t7,t8,t9,f)
       {return caml_call11(State[113],state,t1,t2,t3,t4,t5,t6,t7,t8,t9,f)}
      function bind$0(t,f){return caml_call3(State[117],state,t,f)}
      function bind2$0(t1,t2,f){return caml_call4(State[118],state,t1,t2,f)}
      function bind3$0(t1,t2,t3,f)
       {return caml_call5(State[119],state,t1,t2,t3,f)}
      function bind4$0(t1,t2,t3,t4,f)
       {return caml_call6(State[120],state,t1,t2,t3,t4,f)}
      function _mm_(t,f){return map(t,f)}
      var
       include=[0,_mm_,function(t,f){return bind$0(t,f)}],
       _mn_=include[1],
       _mo_=include[2];
      function join$0(t){return caml_call2(State[121],state,t)}
      function if$1(test,then,else$0)
       {return caml_call4(State[122],state,test,then,else$0)}
      function lazy_from_fun$0(f){return caml_call2(State[123],state,f)}
      var default_hash_table_initial_size$0=State[124];
      function memoize_fun_by_key$0(initial_size,hashable,project_key,f)
       {return caml_call5
                (State[125],initial_size,state,hashable,project_key,f)}
      function memoize_fun(initial_size,hashable,f)
       {return memoize_fun_by_key$0
                (initial_size,hashable,function(_my_){return _my_},f)}
      function array_fold$0(ts,init,f)
       {return caml_call4(State[126],state,ts,init,f)}
      function reduce_balanced(ts,f,reduce)
       {return create$18(state,ts,f,reduce)}
      function unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,f_inverse)
       {return caml_call6
                (State[128],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 init,
                 f,
                 f_inverse)}
      function opt_unordered_array_fold$0
       (full_compute_every_n_changes,ts,init,f,f_inverse)
       {return caml_call6
                (State[129],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 init,
                 f,
                 f_inverse)}
      function all$0(ts){return caml_call2(State[127],state,ts)}
      function exists(ts){return caml_call2(State[131],state,ts)}
      function for_all(ts){return caml_call2(State[132],state,ts)}
      function sum(full_compute_every_n_changes,ts,zero,add,sub)
       {return caml_call6
                (State[133],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 zero,
                 add,
                 sub)}
      function opt_sum$0(full_compute_every_n_changes,ts,zero,add,sub)
       {return caml_call6
                (State[134],
                 full_compute_every_n_changes,
                 state,
                 ts,
                 zero,
                 add,
                 sub)}
      function sum_int$0(ts){return caml_call2(State[135],state,ts)}
      function sum_float$0(ts){return caml_call2(State[136],state,ts)}
      function create(use_current_scope,value)
       {return caml_call3(State[103],use_current_scope,state,value)}
      function set(t,value){return caml_call3(State[98],state,t,value)}
      function value(t){return t[1]}
      function watch(t){return t[4]}
      function sexp_of_t(sexp_of_a,t){return caml_call1(sexp_of_a,t[1])}
      var
       Var=
        [0,
         invariant$4,
         Packed,
         pack$0,
         latest_value,
         create,
         set,
         value,
         watch,
         sexp_of_t];
      function compare(cmp_a,a_001,match)
       {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
        if(typeof a_001 === "number")
         {if(typeof match === "number")
           return 0;
          else
           if(1 === match[0])return 1}
        else
         {if(0 === a_001[0])
           {var _mv_=a_001[1];
            if(typeof match !== "number" && 0 === match[0])
             {var b_004=match[1];return caml_call2(cmp_a,_mv_,b_004)}
            return -1}
          var _mw_=a_001[2],_mx_=a_001[1];
          if(typeof match === "number")
           return -1;
          else
           if(0 !== match[0])
            {var b_008=match[2],b_006=match[1],n=caml_call2(cmp_a,_mx_,b_006);
             return 0 === n?caml_call2(cmp_a,_mw_,b_008):n}}
        return 1}
      function sexp_of_t$0(of_a,param)
       {if(typeof param === "number")
         return _lZ_;
        else
         {if(0 === param[0])
           {var v0=param[1],v0$0=caml_call1(of_a,v0);
            return [1,[0,_l0_,[0,v0$0,0]]]}
          var
           v1=param[2],
           v0$1=param[1],
           v0$2=caml_call1(of_a,v0$1),
           v1$0=caml_call1(of_a,v1);
          return [1,[0,_l1_,[0,v0$2,[0,v1$0,0]]]]}}
      var Update=[0,compare,sexp_of_t$0];
      function on_update_exn(t,f)
       {function _mr_(param)
         {if(typeof param === "number")
           {if(0 === param)return caml_call1(f,0);
            var
             _ms_=function(param){return _l2_},
             _mt_=function(_mu_){return sexp_of_t$36(_ms_,_mu_)};
            return caml_call5
                    (Core_kernel[349],
                     0,
                     _l3_,
                     cst_Incremental_bug_Observer_on_update_exn_got_unexpected_update_Unnecessary,
                     t,
                     _mt_)}
          else
           {if(0 === param[0]){var a=param[1];return caml_call1(f,[0,a])}
            var a2=param[2],a1=param[1];
            return caml_call1(f,[1,a1,a2])}}
        return caml_call3(State[96],state,t,_mr_)}
      function disallow_future_use$0(t)
       {return caml_call2(State[88],state,t[1])}
      function value$0(t){return caml_call2(State[94],state,t)}
      function value_exn(t){return caml_call2(State[93],state,t)}
      function sexp_of_t$1(sexp_of_a,t)
       {var _mq_=value$0(t);
        return caml_call1(caml_call1(Core_kernel_Or_error[12],sexp_of_a),_mq_)}
      var
       Observer=
        [0,
         invariant$27,
         observing$1,
         use_is_allowed$0,
         Update,
         on_update_exn,
         disallow_future_use$0,
         value$0,
         value_exn,
         sexp_of_t$1],
       alarm_precision=caml_call1(Core_kernel_Timing_wheel_ns[11],state[16]);
      function now(param){return caml_call1(State[50],state)}
      function watch_now(param){return state[17][4]}
      function at$0(time){return caml_call2(State[140],state,time)}
      function after$0(span){return caml_call2(State[141],state,span)}
      function at_intervals$0(span){return caml_call2(State[143],state,span)}
      function advance_clock$0(to){return caml_call2(State[148],state,to)}
      function step_function$0(init,steps)
       {return caml_call3(State[146],state,init,steps)}
      function snapshot$0(t,at,before)
       {return caml_call4(State[144],state,t,at,before)}
      function freeze$0(opt,t)
       {if(opt)
         var sth=opt[1],when=sth;
        else
         var when=function(param){return 1};
        return caml_call3(State[138],state,t,when)}
      function depend_on$0(t,depend_on)
       {return caml_call3(State[115],state,t,depend_on)}
      function necessary_if_alive$0(input)
       {return caml_call2(State[116],state,input)}
      var Update$0=0;
      function on_update(t,f){return caml_call3(State[95],state,t,f)}
      function stabilize$0(param){return caml_call1(State[99],state)}
      function am_stabilizing$0(param){return caml_call1(State[62],state)}
      function save_dot(file){return caml_call2(State[58],state,file)}
      function sexp_of_t$2(sexp_of_a,t)
       {return caml_call1(is_valid$2,t)
                ?caml_call1(is_necessary$1,t)
                  ?is_none$0(t[3])
                    ?caml_call1(Core_kernel[557],cst_uncomputed)
                    :caml_call1(sexp_of_a,t[3])
                  :caml_call1(Core_kernel[557],cst_unnecessary)
                :caml_call1(Core_kernel[557],cst_invalid)}
      var sexp_of_t$3=include$7[1],create$0=include$7[2],_mp_=include$7[3];
      function value$1(t){return caml_call2(_mp_,State[151],t)}
      var
       Dependency=[0,sexp_of_t$3,create$0,value$1],
       sexp_of_t$4=include$8[1],
       watch$0=include$8[3];
      function create$1(on_observability_change,f)
       {return caml_call3(include$8[2],State[151],on_observability_change,f)}
      function make_stale(t){return caml_call2(include$8[4],state,t)}
      function invalidate(t){return caml_call2(include$8[5],State[151],t)}
      function add_dependency(t,edge)
       {return caml_call3(include$8[6],State[151],t,edge)}
      function remove_dependency(t,edge)
       {return caml_call3(include$8[7],State[151],t,edge)}
      var
       Node=
        [0,
         sexp_of_t$4,
         watch$0,
         create$1,
         make_stale,
         invalidate,
         add_dependency,
         remove_dependency],
       Expert=[0,Dependency,Node];
      function both(t1,t2)
       {return map2$0(t1,t2,function(x1,x2){return [0,x1,x2]})}
      var
       watch$1=Var[8],
       Open_on_rhs=[0,watch$1],
       Let_syntax=[0,bind$0,map,both,Open_on_rhs],
       Let_syntax$0=[0,return$0,_mn_,_mo_,Let_syntax];
      return [0,
              Before_or_after,
              Cutoff,
              State,
              state,
              Scope,
              Packed$0,
              invariant$19,
              create$5,
              set_kind$0,
              pack$1,
              same$1,
              iteri_children$0,
              get_parent,
              add_parent,
              remove_parent,
              swap_children_except_in_kind,
              is_const,
              is_in_recompute_heap,
              is_necessary$1,
              is_valid$2,
              should_be_invalidated,
              edge_is_stale,
              is_stale,
              needs_to_be_computed,
              value_exn$0,
              unsafe_value$0,
              get_cutoff,
              set_cutoff$0,
              run_on_update_handlers,
              keep_node_creation_backtrace,
              user_info,
              set_user_info,
              has_child,
              has_parent,
              Node_update,
              return$0,
              return$0,
              observe,
              map,
              map2$0,
              map3$0,
              map4$0,
              map5$0,
              map6$0,
              map7$0,
              map8$0,
              map9$0,
              bind$0,
              bind2$0,
              bind3$0,
              bind4$0,
              include,
              _mn_,
              _mo_,
              join$0,
              if$1,
              lazy_from_fun$0,
              default_hash_table_initial_size$0,
              memoize_fun_by_key$0,
              memoize_fun,
              array_fold$0,
              reduce_balanced,
              unordered_array_fold$0,
              opt_unordered_array_fold$0,
              all$0,
              exists,
              for_all,
              sum,
              opt_sum$0,
              sum_int$0,
              sum_float$0,
              Var,
              Observer,
              alarm_precision,
              now,
              watch_now,
              at$0,
              after$0,
              at_intervals$0,
              advance_clock$0,
              step_function$0,
              snapshot$0,
              freeze$0,
              depend_on$0,
              necessary_if_alive$0,
              Update$0,
              on_update,
              stabilize$0,
              am_stabilizing$0,
              save_dot,
              sexp_of_t$2,
              Expert,
              Let_syntax$0]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$118);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    function _l4_(_mc_,_mb_)
     {var
       _md_=Make_with_config(_mc_,_mb_),
       _me_=_md_[3],
       _mf_=_md_[92],
       _mg_=_mf_[2],
       _mh_=_md_[5],
       _mi_=_md_[73],
       _mj_=_md_[72];
      return [0,
              _md_[91],
              _md_[7],
              _md_[17],
              _md_[20],
              _md_[19],
              _md_[36],
              _md_[37],
              _md_[39],
              _md_[53],
              _md_[40],
              _md_[41],
              _md_[42],
              _md_[43],
              _md_[44],
              _md_[45],
              _md_[46],
              _md_[47],
              _md_[48],
              _md_[54],
              _md_[49],
              _md_[50],
              _md_[51],
              _md_[52],
              _md_[55],
              _md_[56],
              _md_[83],
              _md_[84],
              _md_[85],
              _md_[67],
              _md_[66],
              _md_[65],
              _md_[61],
              _md_[62],
              _md_[63],
              _md_[64],
              _md_[68],
              _md_[69],
              _md_[70],
              _md_[71],
              [0,_mj_[9],_mj_[5],_mj_[6],_mj_[8],_mj_[7],_mj_[4]],
              [0,
               _mi_[9],
               _mi_[1],
               _mi_[2],
               _mi_[3],
               _mi_[7],
               _mi_[8],
               _mi_[4],
               _mi_[5],
               _mi_[6]],
              _md_[38],
              Node_update,
              _md_[87],
              _md_[88],
              _md_[89],
              [0,
               sexp_of_t$3,
               invariant$0,
               create$1,
               of_compare,
               always,
               never,
               phys_equal,
               poly_equal,
               should_cutoff,
               equal$2],
              _md_[28],
              _md_[27],
              [0,_mh_[3],_mh_[9],_mh_[10]],
              _md_[57],
              _md_[58],
              _md_[60],
              _md_[59],
              _md_[31],
              _md_[32],
              [0,
               _mf_[1],
               [0,_mg_[1],_mg_[3],_mg_[2],_mg_[4],_mg_[5],_mg_[6],_mg_[7]]],
              [0,
               _me_[49],
               _me_[63],
               _me_[151],
               _me_[53],
               _me_[66],
               _me_[37],
               _me_[54],
               _me_[21],
               _me_[19],
               _me_[17],
               _me_[15],
               _me_[13],
               _me_[11],
               _me_[9],
               _me_[7],
               _me_[52],
               _me_[5],
               _me_[51],
               [0,_me_[60][2]],
               _me_[61]],
              [0,_md_[6][5]],
              _md_[10],
              _md_[90],
              _md_[30],
              _md_[93],
              _md_[74],
              _md_[75],
              _md_[76],
              _md_[80],
              Incremental_kernel_Before_or_after,
              _md_[77],
              _md_[78],
              _md_[79],
              _md_[81],
              _md_[82]]}
    var
     Incremental_kernel_Incremental=
      [0,
       Config,
       function(_l5_)
        {var
          _ma_=Make_with_config(_iA_([0]),[0]),
          _l6_=_ma_[3],
          _l7_=_ma_[92],
          _l8_=_l7_[2],
          _l9_=_ma_[5],
          _l__=_ma_[73],
          _l$_=_ma_[72];
         return [0,
                 _ma_[91],
                 _ma_[7],
                 _ma_[17],
                 _ma_[20],
                 _ma_[19],
                 _ma_[36],
                 _ma_[37],
                 _ma_[39],
                 _ma_[53],
                 _ma_[40],
                 _ma_[41],
                 _ma_[42],
                 _ma_[43],
                 _ma_[44],
                 _ma_[45],
                 _ma_[46],
                 _ma_[47],
                 _ma_[48],
                 _ma_[54],
                 _ma_[49],
                 _ma_[50],
                 _ma_[51],
                 _ma_[52],
                 _ma_[55],
                 _ma_[56],
                 _ma_[83],
                 _ma_[84],
                 _ma_[85],
                 _ma_[67],
                 _ma_[66],
                 _ma_[65],
                 _ma_[61],
                 _ma_[62],
                 _ma_[63],
                 _ma_[64],
                 _ma_[68],
                 _ma_[69],
                 _ma_[70],
                 _ma_[71],
                 [0,_l$_[9],_l$_[5],_l$_[6],_l$_[8],_l$_[7],_l$_[4]],
                 [0,
                  _l__[9],
                  _l__[1],
                  _l__[2],
                  _l__[3],
                  _l__[7],
                  _l__[8],
                  _l__[4],
                  _l__[5],
                  _l__[6]],
                 _ma_[38],
                 Node_update,
                 _ma_[87],
                 _ma_[88],
                 _ma_[89],
                 [0,
                  sexp_of_t$3,
                  invariant$0,
                  create$1,
                  of_compare,
                  always,
                  never,
                  phys_equal,
                  poly_equal,
                  should_cutoff,
                  equal$2],
                 _ma_[28],
                 _ma_[27],
                 [0,_l9_[3],_l9_[9],_l9_[10]],
                 _ma_[57],
                 _ma_[58],
                 _ma_[60],
                 _ma_[59],
                 _ma_[31],
                 _ma_[32],
                 [0,
                  _l7_[1],
                  [0,_l8_[1],_l8_[3],_l8_[2],_l8_[4],_l8_[5],_l8_[6],_l8_[7]]],
                 [0,
                  _l6_[49],
                  _l6_[63],
                  _l6_[151],
                  _l6_[53],
                  _l6_[66],
                  _l6_[37],
                  _l6_[54],
                  _l6_[21],
                  _l6_[19],
                  _l6_[17],
                  _l6_[15],
                  _l6_[13],
                  _l6_[11],
                  _l6_[9],
                  _l6_[7],
                  _l6_[52],
                  _l6_[5],
                  _l6_[51],
                  [0,_l6_[60][2]],
                  _l6_[61]],
                 [0,_ma_[6][5]],
                 _ma_[10],
                 _ma_[90],
                 _ma_[30],
                 _ma_[93],
                 _ma_[74],
                 _ma_[75],
                 _ma_[76],
                 _ma_[80],
                 Incremental_kernel_Before_or_after,
                 _ma_[77],
                 _ma_[78],
                 _ma_[79],
                 _ma_[81],
                 _ma_[82]]},
       _l4_];
    caml_register_global
     (1273,Incremental_kernel_Incremental,"Incremental_kernel__Incremental");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incremental_kernel$119);
    caml_call1(Expect_test_collector[4][1],cst_src_incremental_kernel_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_incremental_kernel$120,cst$39);
    var Private$0=[0,0,0,0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incremental_kernel$121);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incremental_kernel$0=[0,0,0,0,Private$0];
    caml_register_global(1274,Incremental_kernel$0,"Incremental_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyZW1lbnRhbF9rZXJuZWwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
