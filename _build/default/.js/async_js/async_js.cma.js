(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_object=runtime.caml_js_object,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal;
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
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_async_js=caml_new_string("async_js"),
     cst_src_import_ml=caml_new_string("src/import.ml"),
     cst=caml_new_string(""),
     cst_async_js$0=caml_new_string("async_js"),
     cst_async_js$1=caml_new_string("async_js"),
     cst_async_js$2=caml_new_string("async_js"),
     cst_src_ocaml_uri_ml=caml_new_string("src/ocaml_uri.ml"),
     cst$0=caml_new_string(""),
     cst_async_js$3=caml_new_string("async_js"),
     cst_async_js$4=caml_new_string("async_js"),
     cst_https=caml_new_string("https:"),
     cst_wss=caml_new_string("wss"),
     cst_ws=caml_new_string("ws"),
     cst_https$0=caml_new_string("https:"),
     cst_via_WS=caml_new_string("via WS"),
     cst_Client_connected_via_WS=caml_new_string("Client connected via WS"),
     cst$2=caml_new_string(""),
     cst_unknown_reason=caml_new_string("unknown reason"),
     cst_cleanly=caml_new_string(" cleanly"),
     cst$3=caml_new_string(""),
     cst_Client_closed_writer_pipe=
      caml_new_string("Client closed writer pipe"),
     cst_Client_closed_reader_pipe=
      caml_new_string("Client closed reader pipe"),
     cst_CLOSE_NORMAL=caml_new_string("CLOSE_NORMAL"),
     cst_CLOSE_GOING_AWAY=caml_new_string("CLOSE_GOING_AWAY"),
     cst_CLOSE_PROTOCOL_ERROR=caml_new_string("CLOSE_PROTOCOL_ERROR"),
     cst_CLOSE_UNSUPPORTED=caml_new_string("CLOSE_UNSUPPORTED"),
     cst_CLOSE_NO_STATUS=caml_new_string("CLOSE_NO_STATUS"),
     cst_CLOSE_ABNORMAL=caml_new_string("CLOSE_ABNORMAL"),
     cst_Unsupported_Data=caml_new_string("Unsupported Data"),
     cst_Policy_Violation=caml_new_string("Policy Violation"),
     cst_CLOSE_TOO_LARGE=caml_new_string("CLOSE_TOO_LARGE"),
     cst_Missing_Extension=caml_new_string("Missing Extension"),
     cst_Internal_Error=caml_new_string("Internal Error"),
     cst_Service_Restart=caml_new_string("Service Restart"),
     cst_Try_Again_Later=caml_new_string("Try Again Later"),
     cst_TLS_Handshake=caml_new_string("TLS Handshake"),
     cst_async_js$5=caml_new_string("async_js"),
     cst_src_rpc_ml=caml_new_string("src/rpc.ml"),
     cst$1=caml_new_string(""),
     cst_async_js$6=caml_new_string("async_js"),
     cst_async_js$7=caml_new_string("async_js"),
     cst_async_js$8=caml_new_string("async_js"),
     cst_src_persistent_connection_ml=
      caml_new_string("src/persistent_connection.ml"),
     cst$4=caml_new_string(""),
     cst_async_js$9=caml_new_string("async_js"),
     cst_async_js$10=caml_new_string("async_js"),
     cst_Request_failed=caml_new_string("Request failed"),
     cst_Timeout=caml_new_string("Timeout"),
     cst_Network_error=caml_new_string("Network error"),
     cst_GET=caml_new_string("GET"),
     cst$6=caml_new_string("&"),
     cst$7=caml_new_string("?"),
     cst_POST=caml_new_string("POST"),
     cst_async_js$11=caml_new_string("async_js"),
     cst_src_http_ml=caml_new_string("src/http.ml"),
     cst$5=caml_new_string(""),
     cst_async_js$12=caml_new_string("async_js"),
     cst_async_js$13=caml_new_string("async_js"),
     cst_src_debug_ml$0=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$1=caml_new_string("src/debug.ml"),
     cst$9=caml_new_string(""),
     cst_async_js$14=caml_new_string("async_js"),
     cst_src_debug_ml=caml_new_string("src/debug.ml"),
     cst$8=caml_new_string(""),
     cst_async_js$15=caml_new_string("async_js"),
     cst_src_debug_ml$2=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$3=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$4=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$5=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$6=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$7=caml_new_string("src/debug.ml"),
     cst_545c5aface5cd2b08cdfba6639a698c8=
      caml_new_string("545c5aface5cd2b08cdfba6639a698c8"),
     cst_async_js$16=caml_new_string("async_js"),
     cst_Async_kernel_Monitor_try_with=
      caml_new_string("Async_kernel: Monitor.try_with"),
     cst_Async_kernel_Unhandled_exception=
      caml_new_string("Async_kernel: Unhandled exception"),
     cst_async_js$17=caml_new_string("async_js"),
     cst_src_async_js0_ml=caml_new_string("src/async_js0.ml"),
     cst$10=caml_new_string(""),
     cst_async_js$18=caml_new_string("async_js"),
     s=caml_new_string("readystatechange"),
     cst_async_js$19=caml_new_string("async_js"),
     cst_async_js$20=caml_new_string("async_js"),
     cst_src_async_js_ml=caml_new_string("src/async_js.ml"),
     cst$11=caml_new_string(""),
     cst_async_js$21=caml_new_string("async_js"),
     cst_async_js$22=caml_new_string("async_js"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel=global_data.Async_kernel,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Async_rpc_kernel_Transport=global_data.Async_rpc_kernel__Transport,
     Url=global_data.Url,
     Uri=global_data.Uri,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Async_rpc_kernel_Pipe_transport=
      global_data.Async_rpc_kernel__Pipe_transport,
     Async_rpc_kernel_Rpc=global_data.Async_rpc_kernel__Rpc,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Typed_array=global_data.Typed_array,
     Js=global_data.Js,
     Dom=global_data.Dom,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     WebSockets=global_data.WebSockets,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Async_kernel_Persistent_connection=
      global_data.Async_kernel__Persistent_connection,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Core_kernel_Option=global_data.Core_kernel__Option,
     File=global_data.File,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     XmlHttpRequest=global_data.XmlHttpRequest,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Firebug=global_data.Firebug,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Dom_html=global_data.Dom_html,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Async_kernel_Clock_ns=global_data.Async_kernel__Clock_ns,
     Async_js=[0,0,0,0,0,0,0,0,0];
    caml_register_global(192,Async_js,"Async_js__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Import=[0,0];
    caml_register_global(196,Async_js_Import,"Async_js__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$2);
    caml_call1(Expect_test_collector[4][1],cst_src_ocaml_uri_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Ocaml_uri=[0,0,0];
    caml_register_global(197,Async_js_Ocaml_uri,"Async_js__Ocaml_uri");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$5);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$6,cst$1);
    var
     include=Async_rpc_kernel_Rpc[5],
     sexp_of_t=include[1],
     Heartbeat_config=include[2],
     Client_implementations=include[3],
     create=include[4],
     contains_magic_prefix=include[5],
     description=include[6],
     add_heartbeat_callback=include[7],
     close=include[8],
     close_finished=include[9],
     close_reason=include[10],
     is_closed=include[11],
     bytes_to_write=include[12],
     flushed=include[13],
     with_close=include[14],
     server_with_close=include[15],
     _c_=
      [0,
       [11,caml_new_string("Connection close with error"),0],
       caml_new_string("Connection close with error")],
     _b_=
      [0,
       [11,
        caml_new_string("Connection closed"),
        [2,
         0,
         [11,
          caml_new_string(": "),
          [2,0,[11,caml_new_string(" ("),[2,0,[12,41,0]]]]]]],
       caml_new_string("Connection closed%s: %s (%s)")],
     _a_=
      [0,
       [11,caml_new_string("Unknown CloseEvent code: "),[4,0,0,0,0]],
       caml_new_string("Unknown CloseEvent code: %d")],
     _e_=[0,caml_new_string("status_text")],
     _f_=[0,caml_new_string("response_text")],
     _g_=[0,caml_new_string("code")],
     _j_=[0,caml_new_string("field2")],
     _k_=[0,caml_new_string("field1")],
     _l_=[0,caml_new_string("Bar")],
     _m_=[0,caml_new_string("Foo")],
     _i_=[0,caml_new_string("some_name")],
     _n_=[0,[0,caml_new_string("debug")],[0,caml_new_string("other string")]],
     _p_=[1,caml_new_string(' "Foo" ')],
     _q_=[0,caml_new_string("")],
     _t_=
      [1,
       caml_new_string
        (' {"Bar":null,"field1":{"some_name":"debug"},"field2":["other string"]} ')],
     _u_=[0,caml_new_string("")],
     _w_=[0,caml_new_string("js-only"),0],
     Any=0,
     Description=0,
     Implementation=0,
     Implementations=0,
     One_way=0,
     Pipe_rpc=0,
     Rpc=0,
     State_rpc=0,
     Pipe_close_reason=0;
    function client(uri,heartbeat_config,description,implementations,param)
     {if(uri)
       var uri$0=uri[1],uri$1=uri$0;
      else
       {var
         scheme=caml_string_equal(Url[10][3],cst_https)?cst_wss:cst_ws,
         _aW_=Url[10][2];
        if(_aW_)
         var port=_aW_[1],port$0=port;
        else
         var port$0=caml_string_equal(Url[10][3],cst_https$0)?Url[4]:Url[3];
        var
         host=Url[10][1],
         uri$1=caml_call8(Uri[15],[0,scheme],0,[0,host],[0,port$0],0,0,0,0)}
      var
       url=caml_call1(Uri[12],uri$1),
       ws=new (WebSockets[1])(url.toString()),
       match=caml_call1(Async_kernel_Pipe[8],0),
       reader_w=match[2],
       pipe_reader=match[1],
       match$0=caml_call1(Async_kernel_Pipe[8],0),
       pipe_writer=match$0[2],
       writer_r=match$0[1],
       fatal_error=[0,0];
      function close(param)
       {caml_call1(Async_kernel_Pipe[14],pipe_writer);
        caml_call1(Async_kernel_Pipe[14],reader_w);
        caml_call1(Async_kernel_Pipe[15],pipe_reader);
        caml_call1(Async_kernel_Pipe[15],writer_r);
        fatal_error[1] = 1;
        return 0}
      var monitor=caml_call1(Async_kernel_Monitor[8],0);
      function onclose(this$0,close_event)
       {var
         _a6_=close_event.wasClean | 0,
         _a7_=_a6_?1e3 === close_event.code?1:0:_a6_;
        if(1 - _a7_)
         {var
           reason=caml_js_to_string(close_event.reason),
           reason$0=caml_string_equal(reason,cst$2)?cst_unknown_reason:reason,
           cleanly=close_event.wasClean | 0?cst_cleanly:cst$3,
           code=close_event.code,
           switcher=code - 1e3 | 0;
          if(15 < switcher >>> 0)
           var switch$0=0;
          else
           switch(switcher)
            {case 0:var _a8_=cst_CLOSE_NORMAL,switch$0=1;break;
             case 1:var _a8_=cst_CLOSE_GOING_AWAY,switch$0=1;break;
             case 2:var _a8_=cst_CLOSE_PROTOCOL_ERROR,switch$0=1;break;
             case 3:var _a8_=cst_CLOSE_UNSUPPORTED,switch$0=1;break;
             case 5:var _a8_=cst_CLOSE_NO_STATUS,switch$0=1;break;
             case 6:var _a8_=cst_CLOSE_ABNORMAL,switch$0=1;break;
             case 7:var _a8_=cst_Unsupported_Data,switch$0=1;break;
             case 8:var _a8_=cst_Policy_Violation,switch$0=1;break;
             case 9:var _a8_=cst_CLOSE_TOO_LARGE,switch$0=1;break;
             case 10:var _a8_=cst_Missing_Extension,switch$0=1;break;
             case 11:var _a8_=cst_Internal_Error,switch$0=1;break;
             case 12:var _a8_=cst_Service_Restart,switch$0=1;break;
             case 13:var _a8_=cst_Try_Again_Later,switch$0=1;break;
             case 15:var _a8_=cst_TLS_Handshake,switch$0=1;break;
             default:var switch$0=0}
          if(! switch$0)var _a8_=caml_call2(Core_kernel[366],_a_,code);
          var
           _a9_=caml_call4(Core_kernel_Error[15],_b_,cleanly,reason$0,_a8_),
           _a__=caml_call1(Core_kernel_Error[20],_a9_);
          caml_call3(Async_kernel_Monitor[16],monitor,0,_a__)}
        close(0);
        return Js[8]}
      function onerror(this$0,event)
       {var
         _a4_=caml_call1(Core_kernel_Error[15],_c_),
         _a5_=caml_call1(Core_kernel_Error[20],_a4_);
        caml_call3(Async_kernel_Monitor[16],monitor,0,_a5_);
        close(0);
        return Js[8]}
      function onopen(ws,event)
       {function _a1_(param,event)
         {if(fatal_error[1])return Js[8];
          var data=caml_call1(Typed_array[47][2],event.data);
          caml_call2(Async_kernel_Pipe[27],reader_w,data);
          return Js[7]}
        ws.onmessage = caml_call1(Dom[11],_a1_);
        function _a2_(data)
         {var match=ws.readyState;
          if(2 <= match)return 0;
          if(fatal_error[1])return 0;
          var buffer=caml_call1(Typed_array[47][1],data);
          return ws.send(buffer)}
        var _a3_=caml_call5(Async_kernel_Pipe[51],0,0,0,writer_r,_a2_);
        caml_call1(Async_kernel[35],_a3_);
        return Js[7]}
      ws.binaryType = "arraybuffer";
      ws.onopen = caml_call1(Dom[11],onopen);
      ws.onerror = caml_call1(Dom[11],onerror);
      ws.onclose = caml_call1(Dom[11],onclose);
      function close_because(pipe,reason)
       {function _aZ_(param)
         {var match=ws.readyState;
          return 2 <= match?0:ws.close(1e3,reason.toString())}
        var _a0_=caml_call1(Async_kernel_Pipe[17],pipe);
        return caml_call2(Async_kernel[50],_a0_,_aZ_)}
      var _aS_=close_because(pipe_writer,cst_Client_closed_writer_pipe);
      caml_call1(Async_kernel[35],_aS_);
      var _aT_=close_because(pipe_reader,cst_Client_closed_reader_pipe);
      caml_call1(Async_kernel[35],_aT_);
      if(description)
       var
        desc=description[1],
        description$0=
         caml_call4(Core_kernel_Info[17],desc,cst_via_WS,uri$1,Uri[2]);
      else
       var
        description$0=
         caml_call5
          (Core_kernel_Info[13],0,0,cst_Client_connected_via_WS,uri$1,Uri[2]);
      var
       transport=
        caml_call3
         (Async_rpc_kernel_Pipe_transport[2],
          Async_rpc_kernel_Pipe_transport[1][2],
          pipe_reader,
          pipe_writer);
      function _aU_(param)
       {if(0 === param[0])
         {var connection=param[1];
          return caml_call1(Async_kernel[48],[0,connection])}
        var exn=param[1];
        function _aX_(param)
         {return [1,caml_call2(Core_kernel_Error[19],0,exn)]}
        var _aY_=caml_call1(Async_rpc_kernel_Transport[7],transport);
        return caml_call2(Async_kernel[50],_aY_,_aX_)}
      if(implementations)
       var
        match$1=implementations[1],
        implementations$0=match$1[2],
        connection_state=match$1[1],
        _aV_=
         caml_call6
          (create,
           [0,implementations$0],
           connection_state,
           0,
           heartbeat_config,
           [0,description$0],
           transport);
      else
       var
        match$2=caml_call1(Async_rpc_kernel_Rpc[5][3][1],0),
        implementations$1=match$2[2],
        connection_state$0=match$2[1],
        _aV_=
         caml_call6
          (create,
           [0,implementations$1],
           connection_state$0,
           0,
           heartbeat_config,
           [0,description$0],
           transport);
      return caml_call2(Async_kernel[49],_aV_,_aU_)}
    function client_exn
     (uri,heartbeat_config,description,implementations,param)
     {var
       _aQ_=Core_kernel_Or_error[40],
       _aR_=client(uri,heartbeat_config,description,implementations,0);
      return caml_call2(Async_kernel[50],_aR_,_aQ_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _d_=
      [0,
       sexp_of_t,
       Heartbeat_config,
       Client_implementations,
       create,
       contains_magic_prefix,
       description,
       add_heartbeat_callback,
       close,
       close_finished,
       close_reason,
       is_closed,
       bytes_to_write,
       flushed,
       with_close,
       server_with_close,
       client,
       client_exn],
     Async_js_Rpc=
      [0,
       Any,
       Description,
       Implementation,
       Implementations,
       One_way,
       Pipe_rpc,
       Rpc,
       State_rpc,
       Pipe_close_reason,
       _d_];
    caml_register_global(214,Async_js_Rpc,"Async_js__Rpc");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$8);
    caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$9,cst$4);
    function close$0(t){return caml_call3(_d_[8],0,0,t)}
    function is_closed$0(t){return caml_call1(_d_[11],t)}
    function close_finished$0(t){return caml_call1(_d_[9],t)}
    var
     Rpc$0=
      caml_call1
       (Async_kernel_Persistent_connection[1],
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$0,
         is_closed$0,
         close_finished$0]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Persistent_connection=[0,Rpc$0];
    caml_register_global
     (217,Async_js_Persistent_connection,"Async_js__Persistent_connection");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$11);
    caml_call1(Expect_test_collector[4][1],cst_src_http_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$12,cst$5);
    var Response_type=[0],Response=[0],Post_body=[0],Method_with_args=[0];
    function request
     (opt,on_progress,on_upload_progress,url,response_type,method_with_args)
     {if(opt)var sth=opt[1],headers=sth;else var headers=0;
      if(0 === method_with_args[0])
       var
        args=method_with_args[1],
        _aw_=caml_call1(Url[6],args),
        _av_=caml_call2(Core_kernel_String[38],url,63),
        _ax_=caml_call1(Core_kernel_Option[47],_av_)?cst$6:cst$7,
        _ay_=caml_call2(Core_kernel[178],_ax_,_aw_),
        match=[0,caml_call2(Core_kernel[178],url,_ay_),cst_GET];
      else
       var match=[0,url,cst_POST];
      var
       method_string=match[2],
       url$0=match[1],
       req=caml_call1(XmlHttpRequest[1],0);
      req.open(method_string.toString(),url$0.toString(),Js[7]);
      switch(response_type)
       {case 0:req.responseType = "arraybuffer";break;
        case 1:req.responseType = "blob";break;
        case 2:req.responseType = "document";break;
        case 3:req.responseType = "json";break;
        case 4:req.responseType = "text";break;
        default:req.responseType = ""}
      function _az_(param)
       {var value=param[2],name=param[1];
        return req.setRequestHeader(name.toString(),value.toString())}
      caml_call2(Core_kernel_List[19],headers,_az_);
      var response=caml_call1(Async_kernel_Ivar[12],0);
      function _aA_(param)
       {var _aP_=caml_call1(Core_kernel_Or_error[45],cst_Network_error);
        caml_call2(Async_kernel_Ivar[15],response,_aP_);
        return Js[7]}
      req.onerror = caml_call1(Dom[10],_aA_);
      function _aB_(param)
       {var _aO_=caml_call1(Core_kernel_Or_error[45],cst_Timeout);
        caml_call2(Async_kernel_Ivar[15],response,_aO_);
        return Js[7]}
      req.ontimeout = caml_call1(Dom[10],_aB_);
      req.onreadystatechange
      =
      runtime.caml_js_wrap_callback
       (function(param)
         {var match=req.readyState;
          if(4 <= match)
           {if(200 <= req.status)
             if(300 <= req.status)
              var switch$0=0;
             else
              {switch(response_type)
                {case 0:var content=caml_call1(File[3][5],req.response);break;
                 case 1:var content=caml_call1(File[3][2],req.response);break;
                 case 2:var content=caml_call1(File[3][1],req.response);break;
                 case 3:var content=caml_call1(File[3][3],req.response);break;
                 case 4:var content=req.responseText;break;
                 default:var content=caml_js_to_string(req.responseText)}
               var
                get_header=
                 function(s)
                  {function _aL_(v){return [0,caml_js_to_string(v)]}
                   function _aM_(param){return 0}
                   var
                    _aN_=
                     req.getResponseHeader(runtime.caml_jsbytes_of_string(s));
                   return caml_call3(Js[5][7],_aN_,_aM_,_aL_)},
                res=[0,[0,req.status,get_header,content]],
                switch$0=1}
            else
             var switch$0=0;
            if(! switch$0)
             var
              _aH_=
               [0,
                [1,
                 [0,
                  _e_,
                  [0,
                   caml_call1
                    (Core_kernel[557],caml_js_to_string(req.statusText)),
                   0]]],
                0],
              _aI_=
               [0,
                [1,
                 [0,
                  _f_,
                  [0,
                   caml_call1
                    (Core_kernel[557],caml_js_to_string(req.responseText)),
                   0]]],
                _aH_],
              _aJ_=
               [0,
                [1,
                 [0,
                  [1,[0,_g_,[0,caml_call1(Core_kernel[455],req.status),0]]],
                  _aI_]],
                0],
              _aK_=
               [1,
                [0,caml_call1(Sexplib0_Sexp_conv[7],cst_Request_failed),_aJ_]],
              res=caml_call1(Core_kernel_Or_error[44],_aK_);
            return caml_call2(Async_kernel_Ivar[15],response,res)}
          return 0});
      function _aC_(on_progress)
       {function _aG_(e)
         {caml_call2(on_progress,e.loaded,e.total);return Js[7]}
        return req.onprogress = caml_call1(Dom[10],_aG_)}
      caml_call2(Core_kernel_Option[18],on_progress,_aC_);
      function _aD_(upload)
       {function _aE_(on_upload_progress)
         {function _aF_(e)
           {caml_call2(on_upload_progress,e.loaded,e.total);return Js[7]}
          return upload.onprogress = caml_call1(Dom[10],_aF_)}
        return caml_call2(Core_kernel_Option[18],on_upload_progress,_aE_)}
      caml_call2(Js[6][6],req.upload,_aD_);
      if(0 === method_with_args[0])
       req.send(Js[1]);
      else
       {var body=method_with_args[1];
        if(body)
         {var body$0=body[1];
          switch(body$0[0])
           {case 0:var b=body$0[1];req.send(b);break;
            case 1:var d=body$0[1];req.send(d);break;
            case 2:
             var s=body$0[1];req.send(caml_call1(Js[2],s.toString()));break;
            default:var fd=body$0[1];req.send(fd)}}
        else
         req.send(Js[1])}
      return caml_call1(Async_kernel_Ivar[18],response)}
    function get(opt,url)
     {if(opt)var sth=opt[1],arguments$0=sth;else var arguments$0=0;
      function _at_(resp){return resp[3]}
      var _au_=request(0,0,0,url,5,[0,arguments$0]);
      return caml_call2(Async_kernel_Deferred_or_error[15],_au_,_at_)}
    function post(body,url)
     {function _ar_(resp){return resp[3]}
      var _as_=request(0,0,0,url,5,[1,body]);
      return caml_call2(Async_kernel_Deferred_or_error[15],_as_,_ar_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_js_Http=
      [0,Response_type,Post_body,Method_with_args,Response,request,get,post];
    caml_register_global(226,Async_js_Http,"Async_js__Http");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$14);
    caml_call1(Expect_test_collector[4][1],cst_src_debug_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$15,cst$8);
    function is_valid_id(s)
     {if(caml_string_equal(s,cst$9))return 0;
      var match=runtime.caml_string_get(s,0),switcher=match - 48 | 0;
      if(9 < switcher >>> 0)
       {var
         _aq_=
          function(param)
           {var
             switch$0=
              91 <= param
               ?97 <= param?123 <= param?0:1:95 === param?1:0
               :58 <= param?65 <= param?1:0:48 <= param?1:0;
            return switch$0?1:0};
        return caml_call2(Core_kernel_String[15],s,_aq_)}
      return 0}
    function any_of_sexp(param$0)
     {if(0 === param$0[0]){var s=param$0[1];return s.toString()}
      var _ah_=param$0[1];
      if(_ah_)
       {var _ai_=_ah_[1];
        if(0 === _ai_[0])
         {var _aj_=_ah_[2];
          if(_aj_)
           if(! _aj_[2])
            {var v$0=_aj_[1],name$1=_ai_[1];
             return caml_js_object([0,[0,name$1,any_of_sexp(v$0)]])}}}
      var rev_acc=0,param=_ah_;
      for(;;)
       {if(param)
         {var _ad_=param[1];
          if(0 === _ad_[0])
           {var rest=param[2],name=_ad_[1];
            if(is_valid_id(name))
             {var
               rev_acc$0=[0,[0,name,0],rev_acc],
               rev_acc=rev_acc$0,
               param=rest;
              continue}}
          else
           {var _ae_=_ad_[1];
            if(_ae_)
             {var _af_=_ae_[1];
              if(0 === _af_[0])
               {var _ag_=_ae_[2];
                if(_ag_)
                 if(! _ag_[2])
                  {var rest$0=param[2],v=_ag_[1],name$0=_af_[1];
                   if(is_valid_id(name$0))
                    {var
                      rev_acc$1=[0,[0,name$0,[0,v]],rev_acc],
                      rev_acc=rev_acc$1,
                      param=rest$0;
                     continue}}}}}
          var match=0}
        else
         var match=[0,caml_call1(Core_kernel_List[47],rev_acc)];
        if(match)
         {var _ak_=match[1];
          if(_ak_)
           {var
             _al_=
              function(param)
               {var _ao_=param[2],_ap_=param[1];
                if(_ao_){var v=_ao_[1];return [0,_ap_,any_of_sexp(v)]}
                return [0,_ap_,Js[1]]},
             _am_=caml_call2(Core_kernel_List[84],_ak_,_al_);
            return caml_js_object(caml_call1(Core_kernel_Array[47],_am_))}
          return caml_js_from_array([0])}
        var _an_=caml_call2(Core_kernel_List[84],_ah_,any_of_sexp);
        return caml_js_from_array(caml_call1(Core_kernel_Array[47],_an_))}}
    function log_s(sexp)
     {var _ac_=any_of_sexp(sexp);return Firebug[1].log(_ac_)}
    var
     Expect_test_collector$0=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6]]);
    function _h_(ppx_expect_instance_001)
     {function sexp_of_t(param)
       {if(param)
         {var
           v_field2=param[2],
           v_field1=param[1],
           arg$1=caml_call2(Core_kernel[542],Core_kernel[557],v_field2),
           bnds$0=[0,[1,[0,_j_,[0,arg$1,0]]],0],
           v_some_name=v_field1[1],
           arg=caml_call1(Core_kernel[557],v_some_name),
           bnds=[0,[1,[0,_i_,[0,arg,0]]],0],
           arg$0=[1,bnds],
           bnds$1=[0,[1,[0,_k_,[0,arg$0,0]]],bnds$0];
          return [1,[0,_l_,bnds$1]]}
        return _m_}
      function to_string(any){return caml_js_to_string(Js[36].stringify(any))}
      var ___=to_string(any_of_sexp(sexp_of_t(0)));
      caml_call1(Core_kernel[192],___);
      var
       _$_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$0),
         63,
         1724,
         1728,
         1734];
      caml_call2(Expect_test_collector$0[1][1],ppx_expect_instance_001,_$_);
      var _aa_=to_string(any_of_sexp(sexp_of_t(_n_)));
      caml_call1(Core_kernel[192],_aa_);
      var
       _ab_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$1),
         68,
         1892,
         1896,
         1902];
      return caml_call2
              (Expect_test_collector$0[1][1],ppx_expect_instance_001,_ab_)}
    var
     _o_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$2),
       63,
       1724,
       1735,
       1746],
     _r_=
      [0,
       [0,
        _q_,
        _p_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$3),
         63,
         1724,
         1728,
         1734],
        _o_],
       0],
     _s_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$4),
       68,
       1892,
       1903,
       1978],
     _v_=
      [0,
       [0,
        _u_,
        _t_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$5),
         68,
         1892,
         1896,
         1902],
        _s_],
       _r_],
     _x_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$7),
       49,
       1287,
       1287,
       1980],
     _y_=
      caml_call1
       (Expect_test_common_File[4][3],cst_545c5aface5cd2b08cdfba6639a698c8);
    caml_call8
     (Expect_test_collector$0[2],
      _y_,
      _x_,
      cst_src_debug_ml$6,
      0,
      _w_,
      _v_,
      Inline_test_config,
      _h_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Debug=[0,log_s,any_of_sexp];
    caml_register_global(233,Async_js_Debug,"Async_js__Debug");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$17);
    caml_call1(Expect_test_collector[4][1],cst_src_async_js0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$18,cst$10);
    function sleep(d)
     {var _Z_=caml_call1(Core_kernel_Time_ns[1][45],d);
      return caml_call1(Async_kernel_Clock_ns[4],_Z_)}
    function yield$0(param)
     {var _Y_=caml_call1(Async_kernel_Scheduler[3],0);
      return caml_call1(Async_kernel_Scheduler[60],_Y_)}
    var
     extract_js_error=[0,function(param){return 0}],
     state=[0,0],
     timeouts=caml_call1(Core_kernel_Stack[30],0);
    function run_after(f,ms){caml_call2(Dom_html[115],f,ms);return 0}
    function loop(param)
     {var
       t=caml_call1(Async_kernel_Scheduler[3],0),
       _P_=state[1],
       match=caml_call1(Async_kernel_Scheduler[20],t);
      if(! match)
       if(1 !== _P_)
        {state[1] = 1;
         caml_call1(Async_kernel_Scheduler[14],t);
         if(caml_call1(Async_kernel_Scheduler[35],t))
          var next_wakeup=1;
         else
          {var match$0=caml_call1(Async_kernel_Scheduler[17],t);
           if(match$0)
            var
             next=match$0[1],
             now=caml_call1(Core_kernel_Time_ns[28],0),
             d=caml_call2(Core_kernel_Time_ns[31],next,now),
             d_ms$0=caml_call1(Core_kernel_Time_ns[1][51],d),
             _V_=caml_call2(Core_kernel_Float[37],d_ms$0,0)?1:[0,next,d_ms$0],
             _W_=_V_;
           else
            var _W_=0;
           var next_wakeup=_W_}
         var
          _Q_=
           function(param)
            {var exn=param[1],exn$0=caml_call1(Async_kernel_Monitor[14],exn);
             if(exn$0[1] === Js[35])
              {var err=exn$0[2];return caml_call1(Js[34],err)}
             var match=caml_call1(extract_js_error[1],exn$0);
             if(match)
              {var
                err$0=match[1],
                _X_=caml_call1(Base_Exn[9],exn$0).toString();
               Firebug[1].error(_X_);
               return caml_call1(Js[34],err$0)}
             throw exn$0},
          _R_=caml_call1(Async_kernel_Scheduler[21],t);
         caml_call2(Core_kernel_Option[18],_R_,_Q_);
         if(typeof next_wakeup === "number")
          return 0 === next_wakeup
                  ?(state[1] = 0,0)
                  :(state[1] = 2,run_after(loop,0));
         var d_ms=next_wakeup[2],at=next_wakeup[1];
         state[1] = 0;
         var _S_=caml_call1(Core_kernel_Stack[14],timeouts);
         if(_S_)
          var _T_=_S_;
         else
          var
           _U_=caml_call1(Core_kernel_Stack[36],timeouts),
           _T_=caml_call2(Core_kernel_Time_ns[18],at,_U_);
         return _T_
                 ?(caml_call2(Core_kernel_Stack[32],timeouts,at),
                   run_after(run_timeout,d_ms))
                 :_T_}
      return 0}
    function run_timeout(param)
     {caml_call1(Core_kernel_Stack[34],timeouts);return loop(0)}
    function run(param)
     {return 0 === state[1]?(run_after(loop,0),state[1] = 2,0):0}
    function log(name,exn)
     {var exn$0=caml_call1(Async_kernel_Monitor[14],exn);
      if(exn$0[1] === Js[35])
       var err=exn$0[2],exn$1=[0,16617,err];
      else
       {var match$0=caml_call1(extract_js_error[1],exn$0);
        if(match$0)
         var err$2=match$0[1],_O_=[0,566177629,[0,exn$0,err$2]];
        else
         var _O_=[0,3458171,exn$0];
        var exn$1=_O_}
      var _L_=exn$1[1];
      if(3458171 === _L_)
       {var exn$2=exn$1[2],_M_=caml_call1(Base_Exn[9],exn$2).toString();
        return Firebug[1].error(name.toString(),_M_)}
      if(566177629 <= _L_)
       {var
         match=exn$1[2],
         err$0=match[2],
         exn$3=match[1],
         _N_=caml_call1(Base_Exn[9],exn$3).toString();
        return Firebug[1].error(name.toString(),_N_,err$0)}
      var err$1=exn$1[2];
      return Firebug[1].error(name.toString(),err$1)}
    var
     initialized_ref=[0,0],
     initialization=
      [246,
       function(_E_)
        {var t=caml_call1(Async_kernel_Scheduler[3],0);
         initialized_ref[1] = 1;
         function _F_(param){return run(0)}
         caml_call2(Async_kernel_Scheduler[42],t,_F_);
         function _G_(param){return run(0)}
         caml_call2(Async_kernel_Scheduler[43],t,_G_);
         caml_call2(Async_kernel_Scheduler[41],t,run);
         function _H_(_K_){return log(cst_Async_kernel_Monitor_try_with,_K_)}
         Async_kernel_Monitor[26][1][1] = _H_;
         function _I_(_J_)
          {return log(cst_Async_kernel_Unhandled_exception,_J_)}
         caml_call2(Async_kernel_Monitor[10],Async_kernel_Monitor[25],_I_);
         return run(0)}];
    function init(param){return caml_call1(Core_kernel[350],initialization)}
    function initialized(param){return initialized_ref[1]}
    function set_extract_js_error(f){extract_js_error[1] = f;return 0}
    var
     complete="complete",
     readystatechange_ev=caml_call1(Dom[14][1],s),
     readystatechange="readystatechange";
    function add_event(target,evt,handler)
     {caml_call4(Dom_html[16],target,evt,handler,Js[8]);return 0}
    function document_loaded(param)
     {if(caml_equal(Dom_html[2].readyState,complete))
       return Async_kernel_Deferred[19];
      var loaded=caml_call1(Async_kernel_Ivar[12],0);
      function handler(evt)
       {var
         _C_=runtime.caml_notequal(evt.type,readystatechange),
         _D_=_C_ || caml_equal(Dom_html[2].readyState,complete);
        if(_D_)caml_call2(Async_kernel_Ivar[15],loaded,0);
        return Js[7]}
      var _z_=caml_call1(Dom[10],handler);
      add_event(Dom_html[2],Dom_html[15][50],_z_);
      var _A_=caml_call1(Dom[10],handler);
      add_event(Dom_html[2],readystatechange_ev,_A_);
      var _B_=caml_call1(Dom[10],handler);
      add_event(Dom_html[8],Dom_html[15][32],_B_);
      return caml_call1(Async_kernel_Ivar[18],loaded)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$0=
      [0,sleep,yield$0,init,initialized,set_extract_js_error,document_loaded];
    caml_register_global(242,include$0,"Async_js__Async_js0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$20);
    caml_call1(Expect_test_collector[4][1],cst_src_async_js_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$21,cst$11);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_js$0=
      [0,
       0,
       0,
       0,
       0,
       sleep,
       yield$0,
       init,
       initialized,
       set_extract_js_error,
       document_loaded,
       log_s];
    caml_register_global(243,Async_js$0,"Async_js");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19qcy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
