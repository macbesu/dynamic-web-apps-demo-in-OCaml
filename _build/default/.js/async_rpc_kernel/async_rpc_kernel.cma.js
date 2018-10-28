(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     bigstring_destroy_stub=runtime.bigstring_destroy_stub,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_t=caml_new_string("t"),
     cst_async_rpc_kernel=caml_new_string("async_rpc_kernel"),
     cst_src_nat0_ml=caml_new_string("src/nat0.ml"),
     cst=caml_new_string(""),
     cst_async_rpc_kernel$0=caml_new_string("async_rpc_kernel"),
     cst_899e2f4a_490a_11e6_b68f_bbd62472516c=
      caml_new_string("899e2f4a-490a-11e6-b68f-bbd62472516c"),
     cst_async_rpc_kernel$1=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml$0=
      caml_new_string("src/writer_with_length.ml"),
     cst_for_len_0_to_Int_pow_2_10_do_test_len_done=
      caml_new_string
       (": <<for len = 0 to Int.pow 2 10 do test len done;[...]>>"),
     cst_async_rpc_kernel$2=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml=
      caml_new_string("src/writer_with_length.ml"),
     cst$0=caml_new_string(""),
     cst_async_rpc_kernel$3=caml_new_string("async_rpc_kernel"),
     cst_src_writer_with_length_ml$1=
      caml_new_string("src/writer_with_length.ml"),
     cst$1=caml_new_string(""),
     cst_async_rpc_kernel$4=caml_new_string("async_rpc_kernel"),
     cst_name$0=caml_new_string("name"),
     cst_version$0=caml_new_string("version"),
     cst_version$1=caml_new_string("version"),
     cst_name$1=caml_new_string("name"),
     cst_src_description_ml_Stable_V1_t=
      caml_new_string("src/description.ml.Stable.V1.t"),
     cst_async_rpc_kernel$5=caml_new_string("async_rpc_kernel"),
     cst_src_description_ml=caml_new_string("src/description.ml"),
     cst$2=caml_new_string(""),
     cst_async_rpc_kernel$6=caml_new_string("async_rpc_kernel"),
     cst_version=caml_new_string("version"),
     cst_name=caml_new_string("name"),
     cst_t$0=caml_new_string("t"),
     cst_src_description_ml_5_4=caml_new_string("src/description.ml:5:4"),
     cst_t$1=caml_new_string("t"),
     tp_loc=caml_new_string("src/description.ml.Stable.V1.t"),
     cst_async_rpc_kernel$7=caml_new_string("async_rpc_kernel"),
     cst_src_protocol_ml_Message_needs_length=
      caml_new_string("src/protocol.ml.Message.needs_length"),
     cst_needs_length$8=caml_new_string("needs_length"),
     err$0=
      [1,caml_new_string("src/protocol.ml.Stream_response_data.needs_length")],
     cst_needs_length$6=caml_new_string("needs_length"),
     cst_src_protocol_ml_Stream_initial_message_t=
      caml_new_string("src/protocol.ml.Stream_initial_message.t"),
     cst_t$9=caml_new_string("t"),
     err=[1,caml_new_string("src/protocol.ml.Stream_query.needs_length")],
     cst_needs_length$4=caml_new_string("needs_length"),
     cst_src_protocol_ml_Response_needs_length=
      caml_new_string("src/protocol.ml.Response.needs_length"),
     cst_needs_length$2=caml_new_string("needs_length"),
     cst_src_protocol_ml_Query_needs_length=
      caml_new_string("src/protocol.ml.Query.needs_length"),
     cst_needs_length$0=caml_new_string("needs_length"),
     cst_t$7=caml_new_string("t"),
     cst_Version$0=caml_new_string("Version"),
     cst_Version$1=caml_new_string("Version"),
     cst_bin_io_exn=caml_new_string("bin_io_exn"),
     cst_Bin_io_exn$0=caml_new_string("Bin_io_exn"),
     cst_Connection_closed=caml_new_string("Connection_closed"),
     cst_Uncaught_exn$0=caml_new_string("Uncaught_exn"),
     cst_Unimplemented_rpc$0=caml_new_string("Unimplemented_rpc"),
     cst_Unknown_query_id$0=caml_new_string("Unknown_query_id"),
     cst_Write_error$0=caml_new_string("Write_error"),
     cst_connection_closed=caml_new_string("connection_closed"),
     cst_uncaught_exn=caml_new_string("uncaught_exn"),
     cst_unimplemented_rpc=caml_new_string("unimplemented_rpc"),
     cst_unknown_query_id=caml_new_string("unknown_query_id"),
     cst_write_error=caml_new_string("write_error"),
     cst_bin_io_exn$0=caml_new_string("bin_io_exn"),
     cst_Bin_io_exn$1=caml_new_string("Bin_io_exn"),
     cst_Connection_closed$0=caml_new_string("Connection_closed"),
     cst_Uncaught_exn$1=caml_new_string("Uncaught_exn"),
     cst_Unimplemented_rpc$1=caml_new_string("Unimplemented_rpc"),
     cst_Unknown_query_id$1=caml_new_string("Unknown_query_id"),
     cst_Write_error$1=caml_new_string("Write_error"),
     cst_connection_closed$0=caml_new_string("connection_closed"),
     cst_uncaught_exn$0=caml_new_string("uncaught_exn"),
     cst_unimplemented_rpc$0=caml_new_string("unimplemented_rpc"),
     cst_unknown_query_id$0=caml_new_string("unknown_query_id"),
     cst_write_error$0=caml_new_string("write_error"),
     cst_src_protocol_ml_Rpc_error_t$0=
      caml_new_string("src/protocol.ml.Rpc_error.t"),
     cst_src_protocol_ml_Rpc_error_t=
      caml_new_string("src/protocol.ml.Rpc_error.t"),
     cst_async_rpc_kernel$8=caml_new_string("async_rpc_kernel"),
     cst_src_protocol_ml=caml_new_string("src/protocol.ml"),
     cst$3=caml_new_string(""),
     cst_async_rpc_kernel$9=caml_new_string("async_rpc_kernel"),
     cst_t$2=caml_new_string("t"),
     cst_src_protocol_ml_16_2=caml_new_string("src/protocol.ml:16:2"),
     cst_t$3=caml_new_string("t"),
     cst_Unknown_query_id=caml_new_string("Unknown_query_id"),
     cst_Version=caml_new_string("Version"),
     cst_src_protocol_ml_26_39=caml_new_string("src/protocol.ml:26:39"),
     cst_Unimplemented_rpc=caml_new_string("Unimplemented_rpc"),
     cst_Uncaught_exn=caml_new_string("Uncaught_exn"),
     cst_Write_error=caml_new_string("Write_error"),
     cst_Bin_io_exn=caml_new_string("Bin_io_exn"),
     cst_t$4=caml_new_string("t"),
     cst_src_protocol_ml_21_2=caml_new_string("src/protocol.ml:21:2"),
     cst_t$5=caml_new_string("t"),
     tp_loc$0=caml_new_string("src/protocol.ml.Rpc_error.t"),
     cst_a=caml_new_string("a"),
     cst_src_protocol_ml_32_15=caml_new_string("src/protocol.ml:32:15"),
     cst_a$0=caml_new_string("a"),
     cst_t$6=caml_new_string("t"),
     cst_src_protocol_ml_32_2=caml_new_string("src/protocol.ml:32:2"),
     cst_a$1=caml_new_string("a"),
     cst_src_protocol_ml_42_16=caml_new_string("src/protocol.ml:42:16"),
     cst_data=caml_new_string("data"),
     cst_id=caml_new_string("id"),
     cst_version$2=caml_new_string("version"),
     cst_tag=caml_new_string("tag"),
     cst_a$2=caml_new_string("a"),
     cst_needs_length=caml_new_string("needs_length"),
     cst_src_protocol_ml_38_2=caml_new_string("src/protocol.ml:38:2"),
     cst_a$3=caml_new_string("a"),
     cst_src_protocol_ml_51_13=caml_new_string("src/protocol.ml:51:13"),
     cst_data$0=caml_new_string("data"),
     cst_id$0=caml_new_string("id"),
     cst_a$4=caml_new_string("a"),
     cst_needs_length$1=caml_new_string("needs_length"),
     cst_src_protocol_ml_49_2=caml_new_string("src/protocol.ml:49:2"),
     cst_Abort=caml_new_string("Abort"),
     cst_a$5=caml_new_string("a"),
     cst_src_protocol_ml_58_36=caml_new_string("src/protocol.ml:58:36"),
     cst_Query=caml_new_string("Query"),
     cst_src_protocol_ml_58_25=caml_new_string("src/protocol.ml:58:25"),
     cst_a$6=caml_new_string("a"),
     cst_needs_length$3=caml_new_string("needs_length"),
     cst_src_protocol_ml_58_2=caml_new_string("src/protocol.ml:58:2"),
     cst_error=caml_new_string("error"),
     cst_src_protocol_ml_66_36=caml_new_string("src/protocol.ml:66:36"),
     cst_response=caml_new_string("response"),
     cst_src_protocol_ml_66_25=caml_new_string("src/protocol.ml:66:25"),
     cst_initial=caml_new_string("initial"),
     cst_unused_query_id=caml_new_string("unused_query_id"),
     cst_error$0=caml_new_string("error"),
     cst_response$0=caml_new_string("response"),
     cst_t$8=caml_new_string("t"),
     cst_src_protocol_ml_64_2=caml_new_string("src/protocol.ml:64:2"),
     cst_Eof=caml_new_string("Eof"),
     cst_a$7=caml_new_string("a"),
     cst_src_protocol_ml_72_33=caml_new_string("src/protocol.ml:72:33"),
     cst_Ok=caml_new_string("Ok"),
     cst_src_protocol_ml_72_25=caml_new_string("src/protocol.ml:72:25"),
     cst_a$8=caml_new_string("a"),
     cst_needs_length$5=caml_new_string("needs_length"),
     cst_src_protocol_ml_72_2=caml_new_string("src/protocol.ml:72:2"),
     cst_a$9=caml_new_string("a"),
     cst_src_protocol_ml_81_19=caml_new_string("src/protocol.ml:81:19"),
     cst_Response=caml_new_string("Response"),
     cst_a$10=caml_new_string("a"),
     cst_src_protocol_ml_80_19=caml_new_string("src/protocol.ml:80:19"),
     cst_Query$0=caml_new_string("Query"),
     cst_a$11=caml_new_string("a"),
     cst_needs_length$7=caml_new_string("needs_length"),
     cst_src_protocol_ml_78_2=caml_new_string("src/protocol.ml:78:2"),
     cst_async_rpc_kernel$10=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$11=caml_new_string("async_rpc_kernel"),
     cst_src_transport_intf_ml=caml_new_string("src/transport_intf.ml"),
     cst$4=caml_new_string(""),
     cst_async_rpc_kernel$12=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$13=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$14=caml_new_string("async_rpc_kernel"),
     cst_src_transport_ml=caml_new_string("src/transport.ml"),
     cst$5=caml_new_string(""),
     cst_async_rpc_kernel$15=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$16=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$17=caml_new_string("async_rpc_kernel"),
     cst_src_implementation_types_ml=
      caml_new_string("src/implementation_types.ml"),
     cst$6=caml_new_string(""),
     cst_async_rpc_kernel$18=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$19=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$20=caml_new_string("async_rpc_kernel"),
     cst_src_implementation_ml=caml_new_string("src/implementation.ml"),
     cst$7=caml_new_string(""),
     cst_async_rpc_kernel$21=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$22=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$23=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_error_ml=caml_new_string("src/rpc_error.ml"),
     cst$8=caml_new_string(""),
     cst_async_rpc_kernel$24=caml_new_string("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc_error_Rpc=
      caml_new_string("Async_rpc_kernel__Rpc_error.Rpc"),
     cst_async_rpc_kernel$25=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$26=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_result_ml=caml_new_string("src/rpc_result.ml"),
     cst$9=caml_new_string(""),
     cst_async_rpc_kernel$27=caml_new_string("async_rpc_kernel"),
     cst_a$12=caml_new_string("a"),
     cst_src_rpc_result_ml_4_13=caml_new_string("src/rpc_result.ml:4:13"),
     cst_a$13=caml_new_string("a"),
     cst_t$10=caml_new_string("t"),
     cst_src_rpc_result_ml_4_0=caml_new_string("src/rpc_result.ml:4:0"),
     cst_async_rpc_kernel$28=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$29=caml_new_string("async_rpc_kernel"),
     cst_src_util_ml=caml_new_string("src/util.ml"),
     cst$10=caml_new_string(""),
     cst_async_rpc_kernel$30=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$31=caml_new_string("async_rpc_kernel"),
     cst_server_side_raw_rpc_computation=
      caml_new_string("server-side raw rpc computation"),
     cst_Already_responded=caml_new_string("Already responded"),
     cst_Message_cannot_be_sent=caml_new_string("Message cannot be sent"),
     cst_server_side_pipe_rpc_computation=
      caml_new_string("server-side pipe_rpc computation"),
     cst_Expert_implementation_did_not_reply=
      caml_new_string("Expert implementation did not reply"),
     cst_server_side_rpc_expert_computation=
      caml_new_string("server-side rpc expert computation"),
     cst_server_side_one_way_rpc_message_un_bin_io_ing=
      caml_new_string("server-side one-way rpc message un-bin-io'ing"),
     cst_server_side_one_way_rpc_computation=
      caml_new_string("server-side one-way rpc computation"),
     cst_server_side_one_way_rpc_expert_computation=
      caml_new_string("server-side one-way rpc expert computation"),
     cst_server_side_rpc_query_un_bin_io_ing=
      caml_new_string("server-side rpc query un-bin-io'ing"),
     cst_server_side_rpc_computation=
      caml_new_string("server-side rpc computation"),
     cst_server_side_blocking_rpc_computation=
      caml_new_string("server-side blocking rpc computation"),
     cst_server_side_pipe_rpc_stream_query_un_bin_io_ing=
      caml_new_string("server-side pipe_rpc stream_query un-bin-io'ing"),
     cst_streaming_rpc_server_side_query_un_bin_io_ing=
      caml_new_string("streaming_rpc server-side query un-bin-io'ing"),
     cst_attempted_to_start_writer_which_was_already_started=
      caml_new_string("attempted to start writer which was already started"),
     v=[0,17724,0],
     cst_Failed_to_send_write_error_to_client=
      caml_new_string("Failed to send write error to client"),
     arg=[0,caml_new_string("_")],
     cst_async_rpc_kernel$32=caml_new_string("async_rpc_kernel"),
     cst_src_implementations_ml=caml_new_string("src/implementations.ml"),
     cst$11=caml_new_string(""),
     cst_async_rpc_kernel$33=caml_new_string("async_rpc_kernel"),
     cst_src_implementations_ml$0=caml_new_string("src/implementations.ml"),
     cst_stream_response_constants_are_correct=
      caml_new_string(": stream_response_* constants are correct"),
     cst_Async_rpc_kernel_Implementations_Duplicate_implementations=
      caml_new_string
       ("Async_rpc_kernel__Implementations.Duplicate_implementations"),
     cst_async_rpc_kernel$34=caml_new_string("async_rpc_kernel"),
     cst_Rpc_Connection_close=caml_new_string("Rpc.Connection.close"),
     cst_Rpc_Connection_with_close_finished=
      caml_new_string("Rpc.Connection.with_close finished"),
     cst_RPC_transport_stopped=caml_new_string("RPC transport stopped"),
     cst_created_directly=caml_new_string("<created-directly>"),
     cst_Handshake_timeout=caml_new_string("Handshake timeout"),
     cst_Reader_read_one_message_bin_prot_raised=
      caml_new_string("[Reader.read_one_message_bin_prot] raised"),
     cst_EOF_or_connection_closed=caml_new_string("EOF or connection closed"),
     cst_exn_raised_in_RPC_connection=
      caml_new_string("exn raised in RPC connection "),
     cst_Writer_t=caml_new_string("Writer.t"),
     cst_loop=caml_new_string("loop"),
     cst_No_heartbeats_received_for_sexp_Time_ns_Span_t=
      caml_new_string("No heartbeats received for %{sexp:Time_ns.Span.t}."),
     cst_No_heartbeats_received_for=
      caml_new_string("No heartbeats received for "),
     cst_Connection_on_message_resulted_in_Connection_closed_error_This_is_weird=
      caml_new_string
       ("Connection.on_message resulted in Connection_closed error. This is weird."),
     msg=caml_new_string("Rpc message handling loop stopped"),
     cst_RPC_connection_got_closed_writer=
      caml_new_string("RPC connection got closed writer"),
     cst_Message_cannot_be_sent$0=caml_new_string("Message cannot be sent"),
     cst_src_connection_ml_Heartbeat_config_t=
      caml_new_string("src/connection.ml.Heartbeat_config.t"),
     cst_send_every=caml_new_string("send_every"),
     cst_timeout$1=caml_new_string("timeout"),
     cst_send_every$0=caml_new_string("send_every"),
     cst_timeout$2=caml_new_string("timeout"),
     cst_eof=caml_new_string("eof"),
     cst_Eof$0=caml_new_string("Eof"),
     cst_Negotiated_unexpected_version=
      caml_new_string("Negotiated_unexpected_version"),
     cst_Negotiation_failed=caml_new_string("Negotiation_failed"),
     cst_Reading_header_failed=caml_new_string("Reading_header_failed"),
     cst_Timeout=caml_new_string("Timeout"),
     cst_Transport_closed=caml_new_string("Transport_closed"),
     cst_negotiated_unexpected_version=
      caml_new_string("negotiated_unexpected_version"),
     cst_negotiation_failed=caml_new_string("negotiation_failed"),
     cst_reading_header_failed=caml_new_string("reading_header_failed"),
     cst_timeout=caml_new_string("timeout"),
     cst_transport_closed=caml_new_string("transport_closed"),
     cst_eof$0=caml_new_string("eof"),
     cst_Eof$1=caml_new_string("Eof"),
     cst_Negotiated_unexpected_version$0=
      caml_new_string("Negotiated_unexpected_version"),
     cst_Negotiation_failed$0=caml_new_string("Negotiation_failed"),
     cst_Reading_header_failed$0=caml_new_string("Reading_header_failed"),
     cst_Timeout$0=caml_new_string("Timeout"),
     cst_Transport_closed$0=caml_new_string("Transport_closed"),
     cst_negotiated_unexpected_version$0=
      caml_new_string("negotiated_unexpected_version"),
     cst_negotiation_failed$0=caml_new_string("negotiation_failed"),
     cst_reading_header_failed$0=caml_new_string("reading_header_failed"),
     cst_timeout$0=caml_new_string("timeout"),
     cst_transport_closed$0=caml_new_string("transport_closed"),
     cst_async_rpc_kernel$35=caml_new_string("async_rpc_kernel"),
     cst_src_connection_ml=caml_new_string("src/connection.ml"),
     cst$12=caml_new_string(""),
     cst_async_rpc_kernel$36=caml_new_string("async_rpc_kernel"),
     tp_loc$1=caml_new_string("src/connection.ml.Handshake_error.T.t"),
     cst_Async_rpc_kernel_Connection_Handshake_error_Handshake_error=
      caml_new_string
       ("Async_rpc_kernel__Connection.Handshake_error.Handshake_error"),
     tp_loc$2=caml_new_string("src/connection.ml.Heartbeat_config.t"),
     cst_send_every$1=caml_new_string("send_every"),
     cst_timeout$3=caml_new_string("timeout"),
     cst_t$11=caml_new_string("t"),
     cst_src_connection_ml_42_2=caml_new_string("src/connection.ml:42:2"),
     cst_t$12=caml_new_string("t"),
     cst_async_rpc_kernel$37=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$38=caml_new_string("async_rpc_kernel"),
     cst_src_connection_intf_ml=caml_new_string("src/connection_intf.ml"),
     cst$13=caml_new_string(""),
     cst_async_rpc_kernel$39=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$40=caml_new_string("async_rpc_kernel"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_cannot_add_a_closed_direct_stream_writer=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: cannot add a closed direct stream writer"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_trying_to_add_a_direct_stream_writer_that_is_already_present_in_the_group=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: trying to add a direct stream writer that is already present in the group"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_cannot_add_a_direct_stream_writer_with_a_different_bin_writer=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add: cannot add a direct stream writer with a different bin_writer"),
     cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_Buffer_create_got_negative_buffer_size=
      caml_new_string
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.Buffer.create got negative buffer size"),
     cst_client_side_streaming_rpc_initial_response_un_bin_io_ing=
      caml_new_string
       ("client-side streaming_rpc initial_response un-bin-io'ing"),
     cst_client_side_streaming_rpc_response_un_bin_io_ing=
      caml_new_string("client-side streaming_rpc response un-bin-io'ing"),
     cst_client_side_streaming_rpc_response_un_bin_io_ing$0=
      caml_new_string("client-side streaming_rpc response un-bin-io'ing"),
     cst_Closed_locally$1=caml_new_string("Closed_locally"),
     cst_Closed_remotely$1=caml_new_string("Closed_remotely"),
     cst_Error$3=caml_new_string("Error"),
     cst_closed_locally$1=caml_new_string("closed_locally"),
     cst_closed_remotely$1=caml_new_string("closed_remotely"),
     cst_error$3=caml_new_string("error"),
     cst_Closed_locally$2=caml_new_string("Closed_locally"),
     cst_Closed_remotely$2=caml_new_string("Closed_remotely"),
     cst_Error$4=caml_new_string("Error"),
     cst_closed_locally$2=caml_new_string("closed_locally"),
     cst_closed_remotely$2=caml_new_string("closed_remotely"),
     cst_error$4=caml_new_string("error"),
     cst_src_rpc_ml_Pipe_close_reason_Stable_V1_t=
      caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Closed_locally=caml_new_string("Closed_locally"),
     cst_Closed_remotely=caml_new_string("Closed_remotely"),
     cst_Error$0=caml_new_string("Error"),
     cst_closed_locally=caml_new_string("closed_locally"),
     cst_closed_remotely=caml_new_string("closed_remotely"),
     cst_error$1=caml_new_string("error"),
     cst_Closed_locally$0=caml_new_string("Closed_locally"),
     cst_Closed_remotely$0=caml_new_string("Closed_remotely"),
     cst_Error$1=caml_new_string("Error"),
     cst_closed_locally$0=caml_new_string("closed_locally"),
     cst_closed_remotely$0=caml_new_string("closed_remotely"),
     cst_error$2=caml_new_string("error"),
     cst_src_rpc_ml_Pipe_close_reason_t=
      caml_new_string("src/rpc.ml.Pipe_close_reason.t"),
     cst_client_side_rpc_response_un_bin_io_ing=
      caml_new_string("client-side rpc response un-bin-io'ing"),
     cst_async_rpc_kernel$41=caml_new_string("async_rpc_kernel"),
     cst_src_rpc_ml=caml_new_string("src/rpc.ml"),
     cst$14=caml_new_string(""),
     cst_async_rpc_kernel$42=caml_new_string("async_rpc_kernel"),
     cst_Error=caml_new_string("Error"),
     cst_t$13=caml_new_string("t"),
     cst_src_rpc_ml_258_2=caml_new_string("src/rpc.ml:258:2"),
     cst_t$14=caml_new_string("t"),
     tp_loc$3=caml_new_string("src/rpc.ml.Pipe_close_reason.t"),
     cst_Error$2=caml_new_string("Error"),
     cst_t$15=caml_new_string("t"),
     cst_src_rpc_ml_266_6=caml_new_string("src/rpc.ml:266:6"),
     cst_t$16=caml_new_string("t"),
     tp_loc$4=caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Async_rpc_kernel_Async_rpc_kernel_Rpc_Pipe_rpc_Pipe_rpc_failed=
      caml_new_string
       ("Async_rpc_kernel__.Async_rpc_kernel.Rpc.Pipe_rpc.Pipe_rpc_failed"),
     cst_async_rpc_kernel$43=caml_new_string("async_rpc_kernel"),
     cst_src_versioned_rpc_ml$4=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$3=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$3=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$2=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$2=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$1=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$1=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve$0=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$0=caml_new_string("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versions_Callee_ve=
      caml_new_string
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_Cannot_use_Direct_with_Register_raw=
      caml_new_string("Cannot use Direct with Register_raw"),
     cst_caller_and_callee_share_no_common_versions_for_rpc=
      caml_new_string("caller and callee share no common versions for rpc"),
     cst_cannot_use_direct_interface_with_Register_raw=
      caml_new_string("cannot use direct interface with Register_raw"),
     cst_Rpc_names_don_t_agree=caml_new_string("Rpc names don't agree"),
     cst_Version_already_exists=caml_new_string("Version already exists"),
     cst_unknown_rpc_version=caml_new_string("unknown rpc version"),
     cst_multiple_rpc_registrations=
      caml_new_string("multiple rpc registrations"),
     cst_type_conversion_failure=caml_new_string("type conversion failure"),
     cst_async_rpc_kernel$44=caml_new_string("async_rpc_kernel"),
     cst_src_versioned_rpc_ml=caml_new_string("src/versioned_rpc.ml"),
     cst$15=caml_new_string(""),
     cst_async_rpc_kernel$45=caml_new_string("async_rpc_kernel"),
     name$4=caml_new_string("__Versioned_rpc.Menu"),
     cst_query=caml_new_string("query"),
     cst_src_versioned_rpc_ml_604_6=
      caml_new_string("src/versioned_rpc.ml:604:6"),
     cst_query$0=caml_new_string("query"),
     cst_response$1=caml_new_string("response"),
     cst_src_versioned_rpc_ml_605_6=
      caml_new_string("src/versioned_rpc.ml:605:6"),
     cst_response$2=caml_new_string("response"),
     cst_async_rpc_kernel$46=caml_new_string("async_rpc_kernel"),
     cst_FOOBAR123$0=caml_new_string("FOOBAR123"),
     cst$18=caml_new_string(""),
     cst_src_pipe_transport_ml_Bench_reader=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$9=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chunk=
      caml_new_string("run_test write_1_msg_1_chunk"),
     cst_write_1_msg_1_chunk=caml_new_string("write_1_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$0=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$10=caml_new_string("src/pipe_transport.ml"),
     cst_let_f_write_write_1_msg_1_chunk_write_write_1_msg_1_chunk_write_in_run_test_f=
      caml_new_string
       ("let f write = write_1_msg_1_chunk write; write_1_msg_1_chunk write in\nrun_test f"),
     cst_write_2_msg_1_chunk=caml_new_string("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$1=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$11=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chunk=
      caml_new_string("run_test write_1_msg_3_chunk"),
     cst_write_1_msg_3_chunk=caml_new_string("write_1_msg_3_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$2=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$12=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chunk=
      caml_new_string("run_test write_2_msg_1_chunk"),
     cst_write_2_msg_1_chunk$0=caml_new_string("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Bench_reader$3=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$13=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_byte_at_a_time_34_chunk=
      caml_new_string("run_test write_2_msg_one_byte_at_a_time_34_chunk"),
     cst_write_2_msg_one_byte=caml_new_string("write_2_msg_one_byte"),
     cst_src_pipe_transport_ml_Bench_reader$4=
      caml_new_string("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$14=caml_new_string("src/pipe_transport.ml"),
     cst_let_f_write_write_create_message_write_1_msg_3_chunk_write_write_2_msg_1_chunk_write_write_2_msg_one_byte_at_a_time_34_chunk_write_write_create_message_in_run_test_f=
      caml_new_string
       ("let f write =\n  write (create_message ());\n  write_1_msg_3_chunk write;\n  write_2_msg_1_chunk write;\n  write_2_msg_one_byte_at_a_time_34_chunk write;\n  write (create_message ()) in\nrun_test f"),
     cst_multi=caml_new_string("multi"),
     pos$3=caml_new_string("src/pipe_transport.ml:446:19"),
     pos$2=caml_new_string("src/pipe_transport.ml:431:23"),
     cst$17=caml_new_string(""),
     pos$1=caml_new_string("src/pipe_transport.ml:348:19"),
     pos$0=caml_new_string("src/pipe_transport.ml:347:19"),
     pos=caml_new_string("src/pipe_transport.ml:320:21"),
     cst_FOOBAR123=caml_new_string("FOOBAR123"),
     cst_src_pipe_transport_ml$0=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chunk_verify_1_1=
      caml_new_string(": <<run_test write_1_msg_1_chunk (verify 1 1)>>"),
     cst_src_pipe_transport_ml$1=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_f_verify_2_1=
      caml_new_string(": <<run_test f (verify 2 1)>>"),
     cst_src_pipe_transport_ml$2=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chunk_verify_1_3=
      caml_new_string(": <<run_test write_1_msg_3_chunk (verify 1 3)>>"),
     cst_src_pipe_transport_ml$3=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chunk_verify_2_1=
      caml_new_string(": <<run_test write_2_msg_1_chunk (verify 2 1)>>"),
     cst_src_pipe_transport_ml$4=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_byte_at_a_time_34_ch=
      caml_new_string
       (": <<run_test write_2_msg_one_byte_at_a_time_34_ch[...]>>"),
     cst_src_pipe_transport_ml$5=caml_new_string("src/pipe_transport.ml"),
     cst_run_test_f_verify_7_40=
      caml_new_string(": <<run_test f (verify 7 40)>>"),
     cst_src_pipe_transport_ml$6=caml_new_string("src/pipe_transport.ml"),
     cst_can_call_read_forever_multiple_times=
      caml_new_string(": can call read_forever multiple times"),
     cst_async_rpc_kernel$47=caml_new_string("async_rpc_kernel"),
     cst_src_pipe_transport_ml=caml_new_string("src/pipe_transport.ml"),
     cst$16=caml_new_string(""),
     cst_async_rpc_kernel$48=caml_new_string("async_rpc_kernel"),
     cst_src_pipe_transport_ml$7=caml_new_string("src/pipe_transport.ml"),
     cst_Test_reader_string=caml_new_string(": Test_reader_string"),
     cst_src_pipe_transport_ml$8=caml_new_string("src/pipe_transport.ml"),
     cst_Test_reader_bigstring=caml_new_string(": Test_reader_bigstring"),
     cst_src_pipe_transport_ml$15=caml_new_string("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$16=caml_new_string("src/pipe_transport.ml"),
     cst$19=caml_new_string(""),
     cst_Test_reader_string$0=caml_new_string("Test_reader_string"),
     cst_src_pipe_transport_ml$17=caml_new_string("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$18=caml_new_string("src/pipe_transport.ml"),
     cst$20=caml_new_string(""),
     cst_Test_reader_bigstring$0=caml_new_string("Test_reader_bigstring"),
     cst_async_rpc_kernel$49=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$50=caml_new_string("async_rpc_kernel"),
     cst_src_persistent_connection_ml=
      caml_new_string("src/persistent_connection.ml"),
     cst$21=caml_new_string(""),
     cst_async_rpc_kernel$51=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$52=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$53=caml_new_string("async_rpc_kernel"),
     cst_src_async_rpc_kernel_ml=caml_new_string("src/async_rpc_kernel.ml"),
     cst$22=caml_new_string(""),
     cst_async_rpc_kernel$54=caml_new_string("async_rpc_kernel"),
     cst_async_rpc_kernel$55=caml_new_string("async_rpc_kernel"),
     Bin_prot_Common=global_data.Bin_prot__Common,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Bin_shape_lib_Bin_shape=global_data.Bin_shape_lib__Bin_shape,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Bin_prot_Type_class=global_data.Bin_prot__Type_class,
     Bin_prot_Size=global_data.Bin_prot__Size,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Nat0=global_data.Bin_prot__Nat0,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Bytes=global_data.Core_kernel__Bytes,
     Core_kernel_Bigstring=global_data.Core_kernel__Bigstring,
     Core_kernel=global_data.Core_kernel,
     Bin_prot_Utils=global_data.Bin_prot__Utils,
     Inline_test_config=global_data.Inline_test_config,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Base_Hash=global_data.Base__Hash,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Core_kernel_Comparable=global_data.Core_kernel__Comparable,
     Core_kernel_Hashable=global_data.Core_kernel__Hashable,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Sexplib_Std=global_data.Sexplib__Std,
     Bin_prot_Std=global_data.Bin_prot__Std,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Unique_id=global_data.Core_kernel__Unique_id,
     Async_kernel=global_data.Async_kernel,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Core_kernel_Queue=global_data.Core_kernel__Queue,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     CamlinternalMod=global_data.CamlinternalMod,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Failure=global_data.Failure,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Bag=global_data.Core_kernel__Bag,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Core_kernel_Set_once=global_data.Core_kernel__Set_once,
     Async_kernel_Clock_ns=global_data.Async_kernel__Clock_ns,
     Core_kernel_Time_ns_alternate_sexp=
      global_data.Core_kernel__Time_ns_alternate_sexp,
     Base_Staged=global_data.Base__Staged,
     Async_kernel_Async_stream=global_data.Async_kernel__Async_stream,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     include$2=global_data.Protocol_version_header,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Base_List=global_data.Base__List,
     Core_kernel_Memo=global_data.Core_kernel__Memo,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Async_kernel_Deferred_result=global_data.Async_kernel__Deferred_result,
     Base_Monad=global_data.Base__Monad,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Core_kernel_Bigbuffer=global_data.Core_kernel__Bigbuffer,
     include$5=global_data.Async_kernel__Persistent_connection,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Async_rpc_kernel=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    caml_register_global(641,Async_rpc_kernel,"Async_rpc_kernel__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_nat0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$0,cst);
    var
     _a_=
      caml_call1
       (Bin_shape_lib_Bin_shape[5][1],
        cst_899e2f4a_490a_11e6_b68f_bbd62472516c),
     bin_shape_t=caml_call1(caml_call1(Bin_prot_Shape[16],_a_),0),
     _c_=Bin_prot_Size[11],
     _e_=Bin_prot_Write[7],
     _g_=Bin_prot_Read[7],
     _j_=
      [0,
       [11,caml_new_string("mismatch for length "),[4,0,0,0,0]],
       caml_new_string("mismatch for length %d")],
     _o_=[0,caml_new_string("version")],
     _p_=[0,caml_new_string("name")],
     _bF_=[0,caml_new_string("Heartbeat")],
     _bG_=[0,caml_new_string("Query")],
     _bH_=[0,caml_new_string("Response")],
     _bE_=[0,caml_new_string("src/protocol.ml.Message.needs_length")],
     _bf_=[0,caml_new_string("initial")],
     _bg_=[0,caml_new_string("unused_query_id")],
     _aT_=[0,caml_new_string("data")],
     _aU_=[0,caml_new_string("id")],
     _aH_=[0,caml_new_string("data")],
     _aI_=[0,caml_new_string("id")],
     _aJ_=[0,caml_new_string("version")],
     _aK_=[0,caml_new_string("tag")],
     _al_=[0,caml_new_string("Connection_closed")],
     _am_=[0,caml_new_string("Bin_io_exn")],
     _an_=[0,caml_new_string("Write_error")],
     _ao_=[0,caml_new_string("Uncaught_exn")],
     _ap_=[0,caml_new_string("Version")],
     _aq_=[0,caml_new_string("Unimplemented_rpc")],
     _ar_=[0,caml_new_string("Unknown_query_id")],
     _ak_=[0,caml_new_string("src/protocol.ml.Rpc_error.t")],
     _af_=[0,caml_new_string("Connection_closed"),0],
     _by_=[0,caml_new_string("Heartbeat"),0],
     _bK_=[0,caml_new_string("Closed")],
     _bL_=[0,caml_new_string("Sent")],
     _bM_=[0,caml_new_string("Message_too_big")],
     _bI_=[0,caml_new_string("max_message_size")],
     _bJ_=[0,caml_new_string("size")],
     _bO_=[0,caml_new_string("writer")],
     _bP_=[0,caml_new_string("reader")],
     _bN_=
      [0,
       [11,
        caml_new_string("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_new_string
        ("message length (%d) did not match expected length (%d)")],
     _bS_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _bT_=[0,caml_new_string("src/implementation_types.ml"),80,6],
     _bU_=[0,[0,[0,[0]]]],
     _bV_=[0,caml_new_string("src/implementation_types.ml"),130,6],
     _bW_=[0,[0,[0,[0]],[0,[0]],[1,0],[0,[0]]]],
     _bX_=[0,caml_new_string("src/implementation_types.ml"),179,6],
     _bY_=[0,[0]],
     _bZ_=[0,caml_new_string("src/implementation_types.ml"),187,6],
     _b0_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _b1_=[0,[0,[0,[0]]]],
     _b2_=[0,[0,[0,[0]],[0,[0]],[1,0],[0,[0]]]],
     _b3_=[0,[0]],
     _b4_=[0,caml_new_string("responded")],
     _b5_=[0,caml_new_string("writer")],
     _b6_=[0,caml_new_string("query_id")],
     _ck_=[0,caml_new_string("Connection_closed")],
     _ci_=[0,caml_new_string("src/rpc_error.ml.Rpc")],
     _cj_=[0,caml_new_string("src/rpc_error.ml"),6,10],
     _cu_=[0,caml_new_string("rpc_version")],
     _cv_=[0,caml_new_string("rpc_tag")],
     _cw_=[0,caml_new_string("connection_description")],
     _cx_=[0,caml_new_string("rpc_error")],
     _cs_=[0,caml_new_string("exn")],
     _ct_=[0,caml_new_string("location")],
     _cy_=
      [0,
       [11,
        caml_new_string("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_new_string
        ("message length (%d) did not match expected length (%d)")],
     _de_=[0,[0,caml_new_string("src/implementations.ml"),836,29221,29247]],
     _dc_=[0,caml_new_string("_")],
     _dd_=[0,[0,caml_new_string("src/implementations.ml"),832,29099,29105]],
     _da_=
      [0,caml_new_string("src/implementations.ml.Duplicate_implementations")],
     _db_=[0,caml_new_string("src/implementations.ml"),789,10],
     _c__=[0,10],
     _c8_=[0,10],
     _c9_=[0,10],
     _cE_=[0,caml_new_string("packed_self")],
     _cF_=[0,caml_new_string("last_dispatched_implementation")],
     _cG_=[0,caml_new_string("connection_close_started")],
     _cH_=[0,caml_new_string("connection_description")],
     _cI_=[0,caml_new_string("connection_state")],
     _cJ_=[0,caml_new_string("stopped")],
     _cK_=[0,caml_new_string("open_streaming_responses")],
     _cL_=[0,caml_new_string("writer")],
     _cM_=[0,caml_new_string("implementations")],
     _c6_=[0,caml_new_string("src/implementations.ml"),739,4],
     _c7_=[0,[0,0]],
     _c4_=[0,[0,0]],
     _c5_=[0,[0,0]],
     _c3_=[0,caml_new_string("src/implementations.ml"),668,4],
     _c2_=[0,3456156],
     _c1_=[0,0],
     _c0_=[0,0],
     _cZ_=[0,0],
     _cX_=[0,3903734],
     _cU_=[0,caml_new_string("backtrace")],
     _cV_=[0,caml_new_string("exn")],
     _cW_=[0,caml_new_string("location")],
     _cY_=[0,3903734],
     _cT_=[0,3456156],
     _cS_=[0,caml_new_string("src/implementations.ml"),209,6],
     _cR_=[0,caml_new_string("src/implementations.ml"),210,6],
     _cP_=[0,0],
     _cN_=[0,caml_new_string("reason")],
     _cO_=[0,caml_new_string("error")],
     _cB_=[0,caml_new_string("_")],
     _cC_=[0,caml_new_string("Pipe")],
     _cD_=[0,caml_new_string("Direct")],
     _d3_=[0,10],
     _dZ_=[1,2],
     _d0_=[0,0],
     _d1_=[1,0],
     _d2_=[1,1],
     _dX_=[1,1],
     _dY_=[0,3903734],
     _dV_=[0,caml_new_string("src/connection.ml"),313,9569,9615],
     _dW_=[0,caml_new_string("RPC connection loop")],
     _dT_=[12,46,0],
     _dU_=[0,0],
     _dS_=[0,caml_new_string("src/connection.ml"),180,5412,5475],
     _dP_=[1,-1025106484],
     _dO_=[0,0],
     _dM_=[0,caml_new_string("_")],
     _dK_=[0,[0,caml_new_string("src/connection.ml"),100,2797,2801]],
     _dL_=[0,caml_new_string("connection")],
     _dN_=[0,caml_new_string("reason")],
     _dJ_=[1,-1025106484],
     _dA_=[0,caml_new_string("implementations_instance")],
     _dB_=[0,caml_new_string("close_finished")],
     _dC_=[0,caml_new_string("close_started")],
     _dD_=[0,caml_new_string("open_queries")],
     _dE_=[0,caml_new_string("writer")],
     _dF_=[0,caml_new_string("reader")],
     _dG_=[0,caml_new_string("heartbeat_callbacks")],
     _dH_=[0,caml_new_string("heartbeat_config")],
     _dI_=[0,caml_new_string("description")],
     _dt_=[0,caml_new_string("send_every")],
     _du_=[0,caml_new_string("timeout")],
     _dr_=
      [0,caml_new_string("src/connection.ml.Handshake_error.Handshake_error")],
     _ds_=[0,caml_new_string("src/connection.ml"),36,12],
     _dj_=[0,caml_new_string("Eof")],
     _dk_=[0,caml_new_string("Transport_closed")],
     _dl_=[0,caml_new_string("Timeout")],
     _dm_=[0,caml_new_string("Reading_header_failed")],
     _dn_=[0,caml_new_string("Negotiation_failed")],
     _do_=[0,caml_new_string("Negotiated_unexpected_version")],
     _di_=[0,1,0],
     _ey_=[0,[0,caml_new_string("src/rpc.ml"),616,19096,19108]],
     _ew_=[0,76061764,[0,0]],
     _ex_=[0,76061764,[0,0]],
     _eu_=[1,636790696],
     _ev_=[0,76061764,[0,0]],
     _es_=[0,caml_new_string("Closed_remotely")],
     _er_=[0,caml_new_string("Closed_locally")],
     _et_=[0,caml_new_string("Error")],
     _eq_=[0,caml_new_string("src/rpc.ml.Pipe_close_reason.Stable.V1.t")],
     _ei_=[0,caml_new_string("Closed_remotely")],
     _eh_=[0,caml_new_string("Closed_locally")],
     _ej_=[0,caml_new_string("Error")],
     _eg_=[0,caml_new_string("src/rpc.ml.Pipe_close_reason.t")],
     _d__=[0,76061764,[0,0]],
     _d$_=[0,76061764,[0,0]],
     _d9_=[0,76061764,[0,0]],
     _d7_=[0,0],
     _d8_=[1,0],
     _ea_=[0,caml_new_string("Closed_remotely"),0],
     _eb_=[0,caml_new_string("Closed_locally"),0],
     _ek_=[0,caml_new_string("Closed_remotely"),0],
     _el_=[0,caml_new_string("Closed_locally"),0],
     _fg_=[0,1],
     _ff_=[0,1],
     _fe_=[0,1],
     _fd_=[0,1],
     _fa_=[0,caml_new_string("Rpc")],
     _fb_=[0,caml_new_string("Caller_versions")],
     _fc_=[0,caml_new_string("Callee_versions")],
     _eT_=[0,1],
     _eS_=[0,1],
     _eR_=[0,0],
     _eQ_=[0,1],
     _eP_=[0,1],
     _eN_=[0,caml_new_string("Rpc")],
     _eO_=[0,caml_new_string("Version")],
     _eF_=[0,caml_new_string("Update")],
     _eI_=[0,caml_new_string("State")],
     _eJ_=[0,caml_new_string("Error")],
     _eK_=[0,caml_new_string("Msg")],
     _eL_=[0,caml_new_string("Response")],
     _eM_=[0,caml_new_string("Query")],
     _eG_=[0,caml_new_string("Rpc")],
     _eH_=[0,caml_new_string("Version")],
     _fB_=[0,caml_new_string("src/pipe_transport.ml"),442,6],
     _fC_=[0,caml_new_string("src/pipe_transport.ml"),439,6],
     _fA_=[0,0],
     _fz_=[0,1],
     _fx_=[0,caml_new_string("monitor")],
     _fy_=[0,caml_new_string("pipe")],
     _fu_=[0,caml_new_string("src/pipe_transport.ml"),111,12],
     _fv_=[0,caml_new_string("src/pipe_transport.ml"),104,16],
     _fw_=[1,3456156],
     _fs_=[0,caml_new_string("buffer")],
     _ft_=[0,caml_new_string("pipe")],
     _b_=Bin_prot_Type_class[47],
     _d_=Bin_prot_Type_class[44],
     _f_=Bin_prot_Type_class[45];
    function bin_read_t(buf,pos_ref,vnat0)
     {return caml_call2(Bin_prot_Common[19],cst_t,pos_ref[1])}
    var _h_=Bin_prot_Nat0[1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Nat0=
      [0,_b_,_g_,bin_read_t,_f_,_c_,_e_,_d_,bin_shape_t,_h_];
    caml_register_global(653,Async_rpc_kernel_Nat0,"Async_rpc_kernel__Nat0");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_writer_with_length_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$3,cst$0);
    function of_writer(param)
     {var write=param[2],size=param[1];
      function write$0(buf,pos,a)
       {var
         len=caml_call1(_h_,caml_call1(size,a)),
         pos$0=caml_call3(_e_,buf,pos,len);
        return caml_call3(write,buf,pos$0,a)}
      function size$0(a)
       {var len=caml_call1(_h_,caml_call1(size,a));
        return caml_call1(_c_,len) + len | 0}
      return [0,size$0,write$0]}
    function of_type_class(bin_a){return of_writer(bin_a[2])}
    function _i_(param)
     {function test(len)
       {var
         s=caml_call1(Core_kernel_Bytes[42],len),
         bigstring=caml_call3(Bin_prot_Utils[4],0,Core_kernel_Bytes[7],s),
         bigstring_version=
          caml_call3(Bin_prot_Utils[4],0,Core_kernel_Bigstring[7],bigstring),
         writer_with_length=of_writer(Core_kernel_Bytes[7]),
         with_length_version=
          caml_call3(Bin_prot_Utils[4],0,writer_with_length,s),
         _rJ_=caml_call3(Core_kernel_Bigstring[31],0,0,with_length_version),
         _rK_=
          caml_string_notequal
           (caml_call3(Core_kernel_Bigstring[31],0,0,bigstring_version),_rJ_);
        return _rK_?caml_call3(Core_kernel[347],_j_,len,0):_rK_}
      function _rE_(param)
       {var _rG_=caml_call2(Core_kernel_Int[43],2,10),_rF_=0;
        if(! (_rG_ < 0))
         {var len=_rF_;
          for(;;)
           {test(len);
            var _rI_=len + 1 | 0;
            if(_rG_ !== len){var len=_rI_;continue}
            break}}
        var pow=10;
        for(;;)
         {var x=caml_call2(Core_kernel_Int[43],2,pow);
          test(x - 1 | 0);
          test(x);
          test(x + 1 | 0);
          var _rH_=pow + 1 | 0;
          if(20 !== pow){var pow=_rH_;continue}
          return 0}}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_for_len_0_to_Int_pow_2_10_do_test_len_done,
        0,
        cst_src_writer_with_length_ml$0,
        37,
        2,
        189,
        _rE_);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst$1,
      0,
      cst_src_writer_with_length_ml$1,
      18,
      0,
      846,
      _i_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Writer_with_length=[0,of_writer,of_type_class];
    caml_register_global
     (660,
      Async_rpc_kernel_Writer_with_length,
      "Async_rpc_kernel__Writer_with_length");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_description_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$6,cst$2);
    var
     _k_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_name,Core_kernel[552]],
         [0,[0,cst_version,Core_kernel[450]],0]]),
     _l_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$0),0,_k_],0],
     _m_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_description_ml_5_4),
     group=caml_call2(Bin_prot_Shape[6],_m_,_l_),
     _n_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$1),
     bin_shape_t$0=caml_call1(caml_call2(Bin_prot_Shape[14],group,_n_),0);
    function bin_size_t(param)
     {var v2=param[2],v1=param[1],size=caml_call1(Core_kernel[549],v1) | 0;
      return size + caml_call1(Core_kernel[447],v2) | 0}
    function bin_write_t(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[550],buf,pos,v1);
      return caml_call3(Core_kernel[448],buf,pos$0,v2)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t$0(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_description_ml_Stable_V1_t,
               pos_ref[1])}
    function bin_read_t$1(buf,pos_ref)
     {var
       v_name=caml_call2(Core_kernel[546],buf,pos_ref),
       v_version=caml_call2(Core_kernel[444],buf,pos_ref);
      return [0,v_name,v_version]}
    var
     bin_reader_t=[0,bin_read_t$1,bin_read_t$0],
     bin_t=[0,bin_shape_t$0,bin_writer_t,bin_reader_t];
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Core_kernel[553],a_001[1],b_002[1]);
      return 0 === n?caml_call2(Core_kernel[451],a_001[2],b_002[2]):n}
    function hash_fold_t(hsv,arg)
     {var hsv$0=caml_call2(Core_kernel[554],hsv,arg[1]);
      return caml_call2(Core_kernel[452],hsv$0,arg[2])}
    function hash(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_rD_=hash_fold_t(hsv,x);
      return caml_call1(Base_Hash[9],_rD_)}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       name_field=[0,0],
       version_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _rw_=param[1];
          if(1 === _rw_[0])
           {var _rx_=_rw_[1];
            if(_rx_)
             {var _ry_=_rx_[1];
              if(0 === _ry_[0])
               {var _rz_=_rx_[2],_rA_=_ry_[1];
                if(! _rz_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_rA_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _rz_[2])
                 {var tail=param[2],field_sexp=_rz_[1];
                  if(caml_string_notequal(_rA_,cst_name$0))
                   if(caml_string_notequal(_rA_,cst_version$0))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_rA_,extra[1]]}
                   else
                    if(version_field[1])
                     duplicates[1] = [0,_rA_,duplicates[1]];
                    else
                     {var fvalue=caml_call1(Core_kernel[454],field_sexp);
                      version_field[1] = [0,fvalue]}
                  else
                   if(name_field[1])
                    duplicates[1] = [0,_rA_,duplicates[1]];
                   else
                    {var fvalue$0=caml_call1(Core_kernel[556],field_sexp);
                     name_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_rw_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var _rB_=name_field[1],_rC_=version_field[1];
        if(_rB_)
         if(_rC_)
          {var version_value=_rC_[1],name_value=_rB_[1];
           return [0,name_value,version_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === name_field[1]?1:0,cst_name$1],
                  [0,[0,0 === version_field[1]?1:0,cst_version$1],0]])}}
    function sexp_of_t(param)
     {var
       v_version=param[2],
       v_name=param[1],
       arg=caml_call1(Core_kernel[455],v_version),
       bnds=[0,[1,[0,_o_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[557],v_name),
       bnds$0=[0,[1,[0,_p_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _q_=caml_call1(Core_kernel_Comparable[5],[0,compare,t_of_sexp,sexp_of_t]),
     _x_=_q_[7],
     _r_=_q_[1],
     _s_=_q_[2],
     _t_=_q_[3],
     _u_=_q_[4],
     _v_=_q_[5],
     _w_=_q_[6],
     _y_=_q_[9],
     _z_=_q_[10],
     _A_=_q_[11],
     _B_=_q_[12],
     _C_=_q_[13],
     _D_=_q_[14],
     _E_=_q_[15],
     _F_=_q_[16],
     _G_=_q_[17],
     _H_=_q_[18],
     _I_=_q_[19],
     _J_=_q_[20],
     _K_=_q_[21],
     _L_=_q_[22],
     include=
      caml_call1
       (Core_kernel_Hashable[4],
        [0,hash_fold_t,t_of_sexp,compare,sexp_of_t,hash]),
     _M_=include[1],
     _N_=include[2],
     _O_=include[3],
     _Q_=include[5],
     _R_=include[6],
     _P_=include[4],
     _S_=include[7];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _T_=
      [0,
       [0,
        compare,
        t_of_sexp,
        sexp_of_t,
        bin_t,
        bin_read_t$1,
        bin_read_t$0,
        bin_reader_t,
        bin_size_t,
        bin_write_t,
        bin_writer_t,
        bin_shape_t$0]],
     Async_rpc_kernel_Description=
      [0,
       bin_t,
       bin_read_t$1,
       bin_read_t$0,
       bin_reader_t,
       bin_size_t,
       bin_write_t,
       bin_writer_t,
       bin_shape_t$0,
       sexp_of_t,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_];
    caml_register_global
     (667,Async_rpc_kernel_Description,"Async_rpc_kernel__Description");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_protocol_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$9,cst$3);
    var
     Rpc_tag=
      [0,
       Core_kernel_String[97],
       Core_kernel_String[98],
       Core_kernel_String[99],
       Core_kernel_String[100],
       Core_kernel_String[101],
       Core_kernel_String[102],
       Core_kernel_String[103],
       Core_kernel_String[104],
       Core_kernel_String[105],
       Core_kernel_String[106],
       Core_kernel_String[107],
       Core_kernel_String[108],
       Core_kernel_String[109],
       Core_kernel_String[110],
       Core_kernel_String[111],
       Core_kernel_String[112],
       Core_kernel_String[113],
       Core_kernel_String[114],
       Core_kernel_String[115],
       Core_kernel_String[116],
       Core_kernel_String[117],
       Core_kernel_String[118],
       Core_kernel_String[119],
       Core_kernel_String[120],
       Core_kernel_String[121],
       Core_kernel_String[122],
       Core_kernel_String[123],
       Core_kernel_String[124],
       Core_kernel_String[125],
       Core_kernel_String[126],
       Core_kernel_String[127],
       Core_kernel_String[128],
       Core_kernel_String[129],
       Core_kernel_String[130],
       Core_kernel_String[131],
       Core_kernel_String[132],
       Core_kernel_String[133],
       Core_kernel_String[134],
       Core_kernel_String[135],
       Core_kernel_String[136],
       Core_kernel_String[137]],
     Query_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     _U_=Query_id[8],
     _V_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$2),0,_U_],0],
     _W_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_16_2),
     group$0=caml_call2(Bin_prot_Shape[6],_W_,_V_),
     _X_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$3),
     bin_shape_t$1=caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_X_),0),
     _Y_=Query_id[5],
     _Z_=Query_id[6],
     bin_writer_t$0=[0,_Y_,_Z_],
     ___=Query_id[3],
     _$_=Query_id[2],
     bin_reader_t$0=[0,_$_,___],
     bin_t$0=[0,bin_shape_t$1,bin_writer_t$0,bin_reader_t$0],
     _aa_=Query_id[10],
     t=caml_call1(Query_id[45],0),
     Unused_query_id=
      [0,
       bin_t$0,
       _$_,
       ___,
       bin_reader_t$0,
       _Y_,
       _Z_,
       bin_writer_t$0,
       bin_shape_t$1,
       _aa_,
       t],
     _ab_=[0,[0,cst_Unknown_query_id,[0,Query_id[8],0]],0],
     _ac_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Version,[0,Bin_prot_Std[80]]),0],
     _ad_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_26_39),
     _ae_=[0,caml_call2(Bin_prot_Shape[12],_ad_,_ac_),0],
     _ag_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         [0,cst_Bin_io_exn,[0,Core_kernel_Sexp[8],0]],
         [0,
          _af_,
          [0,
           [0,cst_Write_error,[0,Core_kernel_Sexp[8],0]],
           [0,
            [0,cst_Uncaught_exn,[0,Core_kernel_Sexp[8],0]],
            [0,[0,cst_Unimplemented_rpc,[0,Rpc_tag[8],_ae_]],_ab_]]]]]),
     _ah_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$4),0,_ag_],0],
     _ai_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_21_2),
     group$1=caml_call2(Bin_prot_Shape[6],_ai_,_ah_),
     _aj_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$5),
     bin_shape_t$2=caml_call1(caml_call2(Bin_prot_Shape[14],group$1,_aj_),0);
    function bin_size_t$0(param)
     {if(typeof param === "number")
       return 1;
      else
       switch(param[0])
        {case 0:
          var v1=param[1];return 1 + caml_call1(Core_kernel_Sexp[5],v1) | 0;
         case 1:
          var v1$0=param[1];
          return 1 + caml_call1(Core_kernel_Sexp[5],v1$0) | 0;
         case 2:
          var v1$1=param[1];
          return 1 + caml_call1(Core_kernel_Sexp[5],v1$1) | 0;
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           size=1 + caml_call1(Rpc_tag[5],v1$2) | 0,
           args=v2[2],
           size_args=caml_call1(Bin_prot_Std[6],args);
          return size + (size_args + 4 | 0) | 0;
         default:var v1$3=param[1];return 1 + caml_call1(Query_id[5],v1$3) | 0}}
    function bin_write_t$0(buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,1);
      else
       switch(param[0])
        {case 0:
          var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,0);
          return caml_call3(Core_kernel_Sexp[6],buf,pos$0,v1);
         case 1:
          var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
          return caml_call3(Core_kernel_Sexp[6],buf,pos$1,v1$0);
         case 2:
          var v1$1=param[1],pos$2=caml_call3(Bin_prot_Write[30],buf,pos,3);
          return caml_call3(Core_kernel_Sexp[6],buf,pos$2,v1$1);
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           pos$3=caml_call3(Bin_prot_Write[30],buf,pos,4),
           pos$4=caml_call3(Rpc_tag[6],buf,pos$3,v1$2),
           args=v2[2],
           pos$5=caml_call3(Bin_prot_Write[29],buf,pos$4,-901574920);
          return caml_call3(Bin_prot_Std[82],buf,pos$5,args);
         default:
          var v1$3=param[1],pos$6=caml_call3(Bin_prot_Write[30],buf,pos,5);
          return caml_call3(Query_id[6],buf,pos$6,v1$3)}}
    var bin_writer_t$1=[0,bin_size_t$0,bin_write_t$0];
    function bin_read_t$2(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Rpc_error_t,pos_ref[1])}
    function bin_read_t$3(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(5 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_ak_,pos_ref[1]);
      switch(match)
       {case 0:
         var arg_1=caml_call2(Core_kernel_Sexp[2],buf,pos_ref);
         return [0,arg_1];
        case 1:return 0;
        case 2:
         var arg_1$0=caml_call2(Core_kernel_Sexp[2],buf,pos_ref);
         return [1,arg_1$0];
        case 3:
         var arg_1$1=caml_call2(Core_kernel_Sexp[2],buf,pos_ref);
         return [2,arg_1$1];
        case 4:
         var
          arg_1$2=caml_call2(Rpc_tag[2],buf,pos_ref),
          vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
         try
          {if(-901574920 !== vint)throw Bin_prot_Common[13];
           var
            arg_1$3=caml_call2(Bin_prot_Std[84],buf,pos_ref),
            _ru_=[0,-901574920,arg_1$3],
            arg_2=_ru_}
         catch(_rv_)
          {_rv_ = caml_wrap_exception(_rv_);
           if(_rv_ !== Bin_prot_Common[13])throw _rv_;
           var
            arg_2=
             caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Rpc_error_t$0,
               pos_ref[1])}
         return [3,arg_1$2,arg_2];
        default:
         var arg_1$4=caml_call2(Query_id[2],buf,pos_ref);return [4,arg_1$4]}}
    var
     bin_reader_t$1=[0,bin_read_t$3,bin_read_t$2],
     bin_t$1=[0,bin_shape_t$2,bin_writer_t$1,bin_reader_t$1];
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       {var
         _re_=sexp[1],
         _rf_=caml_string_compare(_re_,cst_bin_io_exn),
         switch$0=
          0 <= _rf_
           ?0 < _rf_
             ?caml_string_notequal(_re_,cst_connection_closed)
               ?caml_string_notequal(_re_,cst_uncaught_exn)
                 ?caml_string_notequal(_re_,cst_unimplemented_rpc)
                   ?caml_string_notequal(_re_,cst_unknown_query_id)
                     ?caml_string_notequal(_re_,cst_write_error)?6:2
                     :5
                   :4
                 :3
               :0
             :1
           :caml_string_notequal(_re_,cst_Bin_io_exn$0)
             ?caml_string_notequal(_re_,cst_Connection_closed)
               ?caml_string_notequal(_re_,cst_Uncaught_exn$0)
                 ?caml_string_notequal(_re_,cst_Unimplemented_rpc$0)
                   ?caml_string_notequal(_re_,cst_Unknown_query_id$0)
                     ?caml_string_notequal(_re_,cst_Write_error$0)?6:2
                     :5
                   :4
                 :3
               :0
             :1;
        switch(switch$0)
         {case 0:return 0;
          case 1:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp)
          }}
      else
       {var _rg_=sexp[1];
        if(! _rg_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _rh_=_rg_[1];
        if(0 !== _rh_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var
         _ri_=_rh_[1],
         _rj_=caml_string_compare(_ri_,cst_bin_io_exn$0),
         switch$1=
          0 <= _rj_
           ?0 < _rj_
             ?caml_string_notequal(_ri_,cst_connection_closed$0)
               ?caml_string_notequal(_ri_,cst_uncaught_exn$0)
                 ?caml_string_notequal(_ri_,cst_unimplemented_rpc$0)
                   ?caml_string_notequal(_ri_,cst_unknown_query_id$0)
                     ?caml_string_notequal(_ri_,cst_write_error$0)?6:1
                     :4
                   :3
                 :2
               :5
             :0
           :caml_string_notequal(_ri_,cst_Bin_io_exn$1)
             ?caml_string_notequal(_ri_,cst_Connection_closed$0)
               ?caml_string_notequal(_ri_,cst_Uncaught_exn$1)
                 ?caml_string_notequal(_ri_,cst_Unimplemented_rpc$1)
                   ?caml_string_notequal(_ri_,cst_Unknown_query_id$1)
                     ?caml_string_notequal(_ri_,cst_Write_error$1)?6:1
                     :4
                   :3
                 :2
               :5
             :0;
        switch(switch$1)
         {case 0:
           var sexp_args$3=_rg_[2];
           if(sexp_args$3)
            if(! sexp_args$3[2])
             {var
               v0$7=sexp_args$3[1],
               v0$8=caml_call1(Core_kernel_Sexp[93],v0$7);
              return [0,v0$8]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_ri_,sexp);
          case 1:
           var sexp_args=_rg_[2];
           if(sexp_args)
            if(! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Sexp[93],v0);
              return [1,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_ri_,sexp);
          case 2:
           var sexp_args$2=_rg_[2];
           if(sexp_args$2)
            if(! sexp_args$2[2])
             {var
               v0$5=sexp_args$2[1],
               v0$6=caml_call1(Core_kernel_Sexp[93],v0$5);
              return [2,v0$6]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_ri_,sexp);
          case 3:
           var sexp_args$1=_rg_[2];
           if(sexp_args$1)
            {var _rk_=sexp_args$1[2];
             if(_rk_)
              if(! _rk_[2])
               {var
                 v1=_rk_[1],
                 v0$3=sexp_args$1[1],
                 v0$4=caml_call1(Rpc_tag[9],v0$3),
                 v1$0=
                  function(sexp)
                    {try
                      {if(0 === sexp[0])
                        var
                         atom=sexp[1],
                         _rl_=
                          caml_string_notequal(atom,cst_Version$0)
                           ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                           :caml_call2(Sexplib0_Sexp_conv_error[22],tp_loc$0,sexp),
                         _rm_=_rl_;
                       else
                        {var _rn_=sexp[1];
                         if(_rn_)
                          {var _ro_=_rn_[1];
                           if(0 === _ro_[0])
                            {var sexp_args=_rn_[2],atom$0=_ro_[1];
                             if(caml_string_notequal(atom$0,cst_Version$1))
                              var _rp_=caml_call1(Sexplib0_Sexp_conv_error[18],0);
                             else
                              {if(sexp_args)
                                if(sexp_args[2])
                                 var switch$0=0;
                                else
                                 var
                                  v0=sexp_args[1],
                                  v0$0=caml_call1(Sexplib_Std[13],v0),
                                  _rs_=[0,-901574920,v0$0],
                                  switch$0=1;
                               else
                                var switch$0=0;
                               if(! switch$0)
                                var
                                 _rs_=
                                  caml_call3
                                   (Sexplib0_Sexp_conv_error[21],tp_loc$0,atom$0,sexp);
                               var _rp_=_rs_}
                             var _rq_=_rp_}
                           else
                            var
                             _rq_=
                              caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$0,sexp);
                           var _rr_=_rq_}
                         else
                          var
                           _rr_=
                            caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$0,sexp);
                         var _rm_=_rr_}
                       return _rm_}
                     catch(_rt_)
                      {_rt_ = caml_wrap_exception(_rt_);
                       if(_rt_ === Sexplib0_Sexp_conv_error[17])
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[19],tp_loc$0,sexp);
                       throw _rt_}}
                   (v1);
                return [3,v0$4,v1$0]}}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_ri_,sexp);
          case 4:
           var sexp_args$0=_rg_[2];
           if(sexp_args$0)
            if(! sexp_args$0[2])
             {var v0$1=sexp_args$0[1],v0$2=caml_call1(Query_id[9],v0$1);
              return [4,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_ri_,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_t$0(param)
     {if(typeof param === "number")
       return _al_;
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Sexp[92],v0);
          return [1,[0,_am_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Sexp[92],v0$1);
          return [1,[0,_an_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel_Sexp[92],v0$3);
          return [1,[0,_ao_,[0,v0$4,0]]];
         case 3:
          var
           v1=param[2],
           v0$5=param[1],
           v0$6=caml_call1(Rpc_tag[10],v0$5),
           v0$7=v1[2],
           v1$0=[1,[0,_ap_,[0,caml_call1(Sexplib_Std[12],v0$7),0]]];
          return [1,[0,_aq_,[0,v0$6,[0,v1$0,0]]]];
         default:
          var v0$8=param[1],v0$9=caml_call1(Query_id[10],v0$8);
          return [1,[0,_ar_,[0,v0$9,0]]]}}
    var
     Rpc_error=
      [0,
       bin_shape_t$2,
       bin_size_t$0,
       bin_write_t$0,
       bin_writer_t$1,
       bin_read_t$2,
       bin_read_t$3,
       bin_reader_t$1,
       bin_t$1,
       t_of_sexp$0,
       sexp_of_t$0],
     _as_=Rpc_error[1],
     _at_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a),
     _au_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_32_15),
     _av_=caml_call2(Bin_prot_Shape[15],_au_,_at_),
     _aw_=caml_call1(caml_call1(Core_kernel_Result[8],_av_),_as_),
     _ax_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$0),0],
     _ay_=
      [0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$6),_ax_,_aw_],0],
     _az_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_32_2),
     group$2=caml_call2(Bin_prot_Shape[6],_az_,_ay_);
    function bin_shape_t$3(a)
     {var _rd_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$7);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$2,_rd_),[0,a,0])}
    function bin_size_t$1(size_of_a,v)
     {return caml_call3(Core_kernel_Result[5],size_of_a,Rpc_error[2],v)}
    function bin_write_t$1(write_a,buf,pos,v)
     {return caml_call3
              (caml_call2(Core_kernel_Result[6],write_a,Rpc_error[3]),
               buf,
               pos,
               v)}
    function bin_writer_t$2(bin_writer_a)
     {function _q$_(v)
       {var _ra_=bin_writer_a[2];
        return function(_rb_,_rc_){return bin_write_t$1(_ra_,v,_rb_,_rc_)}}
      return [0,function(v){return bin_size_t$1(bin_writer_a[1],v)},_q$_]}
    function bin_read_t$4(of_a,buf,pos_ref,vint)
     {return caml_call3
              (caml_call2(Core_kernel_Result[3],of_a,Rpc_error[6]),
               buf,
               pos_ref,
               vint)}
    function bin_read_t$5(of_a,buf,pos_ref)
     {return caml_call2
              (caml_call2(Core_kernel_Result[2],of_a,Rpc_error[6]),
               buf,
               pos_ref)}
    function bin_reader_t$2(bin_reader_a)
     {function _q__(buf,pos_ref,vtag)
       {return bin_read_t$4(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$5(bin_reader_a[1],buf,pos_ref)},
              _q__]}
    function bin_t$2(bin_a)
     {var _q8_=bin_reader_t$2(bin_a[3]),_q9_=bin_writer_t$2(bin_a[2]);
      return [0,bin_shape_t$3(bin_a[1]),_q9_,_q8_]}
    function sexp_of_t$1(of_a,v)
     {return caml_call3(Core_kernel_Result[10],of_a,Rpc_error[10],v)}
    var
     Rpc_result=
      [0,
       bin_shape_t$3,
       bin_size_t$1,
       bin_write_t$1,
       bin_writer_t$2,
       bin_read_t$4,
       bin_read_t$5,
       bin_reader_t$2,
       bin_t$2,
       sexp_of_t$1],
     _aA_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$1),
     _aB_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_42_16),
     _aC_=[0,[0,cst_data,caml_call2(Bin_prot_Shape[15],_aB_,_aA_)],0],
     _aD_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_tag,Rpc_tag[8]],
         [0,
          [0,cst_version$2,Bin_prot_Std[80]],
          [0,[0,cst_id,Query_id[8]],_aC_]]]),
     _aE_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$2),0],
     _aF_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length),
        _aE_,
        _aD_],
       0],
     _aG_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_38_2),
     group$3=caml_call2(Bin_prot_Shape[6],_aG_,_aF_),
     Header=0;
    function bin_shape_needs_length(a)
     {var _q7_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$0);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$3,_q7_),[0,a,0])}
    function bin_size_needs_length(size_of_a,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       size=caml_call1(Rpc_tag[5],v1) | 0,
       size$0=size + caml_call1(Bin_prot_Std[6],v2) | 0,
       size$1=size$0 + caml_call1(Query_id[5],v3) | 0;
      return size$1 + caml_call1(size_of_a,v4) | 0}
    function bin_write_needs_length(write_a,buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Rpc_tag[6],buf,pos,v1),
       pos$1=caml_call3(Bin_prot_Std[82],buf,pos$0,v2),
       pos$2=caml_call3(Query_id[6],buf,pos$1,v3);
      return caml_call3(write_a,buf,pos$2,v4)}
    function bin_writer_needs_length(bin_writer_a)
     {function _q3_(v)
       {var _q4_=bin_writer_a[2];
        return function(_q5_,_q6_)
         {return bin_write_needs_length(_q4_,v,_q5_,_q6_)}}
      return [0,
              function(v){return bin_size_needs_length(bin_writer_a[1],v)},
              _q3_]}
    function bin_read_needs_length(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Query_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$0(of_a,buf,pos_ref)
     {var
       v_tag=caml_call2(Rpc_tag[2],buf,pos_ref),
       v_version=caml_call2(Bin_prot_Std[84],buf,pos_ref),
       v_id=caml_call2(Query_id[2],buf,pos_ref),
       v_data=caml_call2(of_a,buf,pos_ref);
      return [0,v_tag,v_version,v_id,v_data]}
    function bin_reader_needs_length(bin_reader_a)
     {function _q2_(buf,pos_ref,vtag)
       {return bin_read_needs_length(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$0(bin_reader_a[1],buf,pos_ref)},
              _q2_]}
    function bin_needs_length(bin_a)
     {var
       _q0_=bin_reader_needs_length(bin_a[3]),
       _q1_=bin_writer_needs_length(bin_a[2]);
      return [0,bin_shape_needs_length(bin_a[1]),_q1_,_q0_]}
    function sexp_of_needs_length(of_a,param)
     {var
       v_data=param[4],
       v_id=param[3],
       v_version=param[2],
       v_tag=param[1],
       arg=caml_call1(of_a,v_data),
       bnds=[0,[1,[0,_aH_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_aI_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Sexplib_Std[12],v_version),
       bnds$1=[0,[1,[0,_aJ_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Rpc_tag[10],v_tag),
       bnds$2=[0,[1,[0,_aK_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function bin_read_t$6(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length(of_a,buf,pos_ref,vint)}
    function bin_read_t$7(of_a,buf,pos_ref)
     {return bin_read_needs_length$0(of_a,buf,pos_ref)}
    function bin_reader_t$3(bin_reader_a)
     {function _qZ_(buf,pos_ref,vtag)
       {return bin_read_t$6(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$7(bin_reader_a[1],buf,pos_ref)},
              _qZ_]}
    var
     Query=
      [0,
       bin_shape_needs_length,
       bin_size_needs_length,
       bin_write_needs_length,
       bin_writer_needs_length,
       bin_read_needs_length,
       bin_read_needs_length$0,
       bin_reader_needs_length,
       bin_needs_length,
       sexp_of_needs_length,
       bin_read_t$6,
       bin_read_t$7,
       bin_reader_t$3],
     _aL_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$3),
     _aM_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_51_13),
     _aN_=caml_call2(Bin_prot_Shape[15],_aM_,_aL_),
     _aO_=[0,[0,cst_data$0,caml_call1(Rpc_result[1],_aN_)],0],
     _aP_=caml_call1(Bin_prot_Shape[8],[0,[0,cst_id$0,Query_id[8]],_aO_]),
     _aQ_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$4),0],
     _aR_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$1),
        _aQ_,
        _aP_],
       0],
     _aS_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_49_2),
     group$4=caml_call2(Bin_prot_Shape[6],_aS_,_aR_);
    function bin_shape_needs_length$0(a)
     {var _qY_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$2);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$4,_qY_),[0,a,0])}
    function bin_size_needs_length$0(size_of_a,param)
     {var v2=param[2],v1=param[1],size=caml_call1(Query_id[5],v1) | 0;
      return size + caml_call2(Rpc_result[2],size_of_a,v2) | 0}
    function bin_write_needs_length$0(write_a,buf,pos,param)
     {var v2=param[2],v1=param[1],pos$0=caml_call3(Query_id[6],buf,pos,v1);
      return caml_call3(caml_call1(Rpc_result[3],write_a),buf,pos$0,v2)}
    function bin_writer_needs_length$0(bin_writer_a)
     {function _qU_(v)
       {var _qV_=bin_writer_a[2];
        return function(_qW_,_qX_)
         {return bin_write_needs_length$0(_qV_,v,_qW_,_qX_)}}
      return [0,
              function(v){return bin_size_needs_length$0(bin_writer_a[1],v)},
              _qU_]}
    function bin_read_needs_length$1(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Response_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$2(of_a,buf,pos_ref)
     {var
       v_id=caml_call2(Query_id[2],buf,pos_ref),
       v_data=caml_call2(caml_call1(Rpc_result[6],of_a),buf,pos_ref);
      return [0,v_id,v_data]}
    function bin_reader_needs_length$0(bin_reader_a)
     {function _qT_(buf,pos_ref,vtag)
       {return bin_read_needs_length$1(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$2(bin_reader_a[1],buf,pos_ref)},
              _qT_]}
    function bin_needs_length$0(bin_a)
     {var
       _qR_=bin_reader_needs_length$0(bin_a[3]),
       _qS_=bin_writer_needs_length$0(bin_a[2]);
      return [0,bin_shape_needs_length$0(bin_a[1]),_qS_,_qR_]}
    function sexp_of_needs_length$0(of_a,param)
     {var
       v_data=param[2],
       v_id=param[1],
       arg=caml_call2(Rpc_result[9],of_a,v_data),
       bnds=[0,[1,[0,_aT_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_aU_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function bin_read_t$8(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$1(of_a,buf,pos_ref,vint)}
    function bin_read_t$9(of_a,buf,pos_ref)
     {return bin_read_needs_length$2(of_a,buf,pos_ref)}
    function bin_reader_t$4(bin_reader_a)
     {function _qQ_(buf,pos_ref,vtag)
       {return bin_read_t$8(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$9(bin_reader_a[1],buf,pos_ref)},
              _qQ_]}
    var
     Response=
      [0,
       bin_shape_needs_length$0,
       bin_size_needs_length$0,
       bin_write_needs_length$0,
       bin_writer_needs_length$0,
       bin_read_needs_length$1,
       bin_read_needs_length$2,
       bin_reader_needs_length$0,
       bin_needs_length$0,
       sexp_of_needs_length$0,
       bin_read_t$8,
       bin_read_t$9,
       bin_reader_t$4],
     _aV_=[0,caml_call2(Bin_prot_Shape[10],cst_Abort,0),0],
     _aW_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$5),
     _aX_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_58_36),
     _aY_=[0,caml_call2(Bin_prot_Shape[15],_aX_,_aW_)],
     _aZ_=[0,caml_call2(Bin_prot_Shape[10],cst_Query,_aY_),_aV_],
     _a0_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_58_25),
     _a1_=caml_call2(Bin_prot_Shape[12],_a0_,_aZ_),
     _a2_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$6),0],
     _a3_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$3),
        _a2_,
        _a1_],
       0],
     _a4_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_58_2),
     group$5=caml_call2(Bin_prot_Shape[6],_a4_,_a3_);
    function bin_shape_needs_length$1(a)
     {var _qP_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$4);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$5,_qP_),[0,a,0])}
    function bin_size_needs_length$1(size_of_a,param)
     {if(typeof param !== "number")
       if(-250086680 === param[1])
        {var args=param[2],size_args=caml_call1(size_of_a,args);
         return size_args + 4 | 0}
      return 4}
    function bin_write_needs_length$1(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,774323088);
      var
       args=param[2],
       pos$0=caml_call3(Bin_prot_Write[29],buf,pos,-250086680);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$1(bin_writer_a)
     {function _qL_(v)
       {var _qM_=bin_writer_a[2];
        return function(_qN_,_qO_)
         {return bin_write_needs_length$1(_qM_,v,_qN_,_qO_)}}
      return [0,
              function(v){return bin_size_needs_length$1(bin_writer_a[1],v)},
              _qL_]}
    function bin_read_needs_length$3(of_a,buf,pos_ref,vint)
     {if(-250086680 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,-250086680,arg_1]}
      if(774323088 === vint)return 774323088;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$4(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _qG_=
          function(_qI_,_qJ_,_qK_)
            {return bin_read_needs_length$3(of_a,_qI_,_qJ_,_qK_)}
           (buf,pos_ref,vint);
        return _qG_}
      catch(_qH_)
       {_qH_ = caml_wrap_exception(_qH_);
        if(_qH_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err,pos_ref[1]);
        throw _qH_}}
    function bin_reader_needs_length$1(bin_reader_a)
     {function _qF_(buf,pos_ref,vtag)
       {return bin_read_needs_length$3(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$4(bin_reader_a[1],buf,pos_ref)},
              _qF_]}
    function bin_needs_length$1(bin_a)
     {var
       _qD_=bin_reader_needs_length$1(bin_a[3]),
       _qE_=bin_writer_needs_length$1(bin_a[2]);
      return [0,bin_shape_needs_length$1(bin_a[1]),_qE_,_qD_]}
    function bin_read_t$10(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$3(of_a,buf,pos_ref,vint)}
    function bin_read_t$11(of_a,buf,pos_ref)
     {return bin_read_needs_length$4(of_a,buf,pos_ref)}
    function bin_reader_t$5(bin_reader_a)
     {function _qC_(buf,pos_ref,vtag)
       {return bin_read_t$10(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$11(bin_reader_a[1],buf,pos_ref)},
              _qC_]}
    function bin_read_nat0_t(buf,pos_ref,vint)
     {return bin_read_needs_length$3(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$0(buf,pos_ref)
     {return bin_read_needs_length$4(_g_,buf,pos_ref)}
    var bin_reader_nat0_t=[0,bin_read_nat0_t$0,bin_read_nat0_t];
    function bin_size_nat0_t(v){return bin_size_needs_length$1(_c_,v)}
    function bin_write_nat0_t(buf,pos,v)
     {return bin_write_needs_length$1(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t=[0,bin_size_nat0_t,bin_write_nat0_t],
     Stream_query=
      [0,
       bin_shape_needs_length$1,
       bin_size_needs_length$1,
       bin_write_needs_length$1,
       bin_writer_needs_length$1,
       bin_read_needs_length$3,
       bin_read_needs_length$4,
       bin_reader_needs_length$1,
       bin_needs_length$1,
       bin_read_t$10,
       bin_read_t$11,
       bin_reader_t$5,
       bin_read_nat0_t,
       bin_read_nat0_t$0,
       bin_reader_nat0_t,
       bin_size_nat0_t,
       bin_write_nat0_t,
       bin_writer_nat0_t],
     _a5_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_error),
     _a6_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_66_36),
     _a7_=caml_call2(Bin_prot_Shape[15],_a6_,_a5_),
     _a8_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_response),
     _a9_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_66_25),
     _a__=caml_call2(Bin_prot_Shape[15],_a9_,_a8_),
     _a$_=
      [0,
       [0,cst_initial,caml_call1(caml_call1(Core_kernel_Result[8],_a__),_a7_)],
       0],
     _ba_=
      caml_call1
       (Bin_prot_Shape[8],[0,[0,cst_unused_query_id,Unused_query_id[8]],_a$_]),
     _bb_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_error$0),0],
     _bc_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_response$0),_bb_],
     _bd_=
      [0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$8),_bc_,_ba_],0],
     _be_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_64_2),
     group$6=caml_call2(Bin_prot_Shape[6],_be_,_bd_);
    function bin_shape_t$4(response,error)
     {var _qB_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$9);
      return caml_call1
              (caml_call2(Bin_prot_Shape[14],group$6,_qB_),
               [0,response,[0,error,0]])}
    function bin_size_t$2(size_of_response,size_of_error,param)
     {var v2=param[2],v1=param[1],size=caml_call1(Unused_query_id[5],v1) | 0;
      return size
             +
             caml_call3
              (Core_kernel_Result[5],size_of_response,size_of_error,v2)
             |
             0}
    function bin_write_t$2(write_response,write_error,buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Unused_query_id[6],buf,pos,v1);
      return caml_call3
              (caml_call2(Core_kernel_Result[6],write_response,write_error),
               buf,
               pos$0,
               v2)}
    function bin_writer_t$3(bin_writer_response,bin_writer_error)
     {function _qw_(v)
       {var _qx_=bin_writer_error[2],_qy_=bin_writer_response[2];
        return function(_qz_,_qA_)
         {return bin_write_t$2(_qy_,_qx_,v,_qz_,_qA_)}}
      return [0,
              function(v)
               {return bin_size_t$2
                        (bin_writer_response[1],bin_writer_error[1],v)},
              _qw_]}
    function bin_read_t$12(of_response,of_error,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Stream_initial_message_t,
               pos_ref[1])}
    function bin_read_t$13(of_response,of_error,buf,pos_ref)
     {var
       v_unused_query_id=caml_call2(Unused_query_id[2],buf,pos_ref),
       v_initial=
        caml_call2
         (caml_call2(Core_kernel_Result[2],of_response,of_error),buf,pos_ref);
      return [0,v_unused_query_id,v_initial]}
    function bin_reader_t$6(bin_reader_response,bin_reader_error)
     {function _qv_(buf,pos_ref,vtag)
       {return bin_read_t$12
                (bin_reader_response[1],bin_reader_error[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$13
                        (bin_reader_response[1],bin_reader_error[1],buf,pos_ref)},
              _qv_]}
    function bin_t$3(bin_response,bin_error)
     {var
       _qt_=bin_reader_t$6(bin_response[3],bin_error[3]),
       _qu_=bin_writer_t$3(bin_response[2],bin_error[2]);
      return [0,bin_shape_t$4(bin_response[1],bin_error[1]),_qu_,_qt_]}
    function sexp_of_t$2(of_response,of_error,param)
     {var
       v_initial=param[2],
       v_unused_query_id=param[1],
       arg=caml_call3(Core_kernel_Result[10],of_response,of_error,v_initial),
       bnds=[0,[1,[0,_bf_,[0,arg,0]]],0],
       arg$0=caml_call1(Unused_query_id[9],v_unused_query_id),
       bnds$0=[0,[1,[0,_bg_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     Stream_initial_message=
      [0,
       bin_shape_t$4,
       bin_size_t$2,
       bin_write_t$2,
       bin_writer_t$3,
       bin_read_t$12,
       bin_read_t$13,
       bin_reader_t$6,
       bin_t$3,
       sexp_of_t$2],
     _bh_=[0,caml_call2(Bin_prot_Shape[10],cst_Eof,0),0],
     _bi_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$7),
     _bj_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_72_33),
     _bk_=[0,caml_call2(Bin_prot_Shape[15],_bj_,_bi_)],
     _bl_=[0,caml_call2(Bin_prot_Shape[10],cst_Ok,_bk_),_bh_],
     _bm_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_72_25),
     _bn_=caml_call2(Bin_prot_Shape[12],_bm_,_bl_),
     _bo_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$8),0],
     _bp_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$5),
        _bo_,
        _bn_],
       0],
     _bq_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_72_2),
     group$7=caml_call2(Bin_prot_Shape[6],_bq_,_bp_);
    function bin_shape_needs_length$2(a)
     {var _qs_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$6);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$7,_qs_),[0,a,0])}
    function bin_size_needs_length$2(size_of_a,param)
     {if(typeof param !== "number")
       if(17724 === param[1])
        {var args=param[2],size_args=caml_call1(size_of_a,args);
         return size_args + 4 | 0}
      return 4}
    function bin_write_needs_length$2(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,3456156);
      var args=param[2],pos$0=caml_call3(Bin_prot_Write[29],buf,pos,17724);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$2(bin_writer_a)
     {function _qo_(v)
       {var _qp_=bin_writer_a[2];
        return function(_qq_,_qr_)
         {return bin_write_needs_length$2(_qp_,v,_qq_,_qr_)}}
      return [0,
              function(v){return bin_size_needs_length$2(bin_writer_a[1],v)},
              _qo_]}
    function bin_read_needs_length$5(of_a,buf,pos_ref,vint)
     {if(17724 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,17724,arg_1]}
      if(3456156 === vint)return 3456156;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$6(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _qj_=
          function(_ql_,_qm_,_qn_)
            {return bin_read_needs_length$5(of_a,_ql_,_qm_,_qn_)}
           (buf,pos_ref,vint);
        return _qj_}
      catch(_qk_)
       {_qk_ = caml_wrap_exception(_qk_);
        if(_qk_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err$0,pos_ref[1]);
        throw _qk_}}
    function bin_reader_needs_length$2(bin_reader_a)
     {function _qi_(buf,pos_ref,vtag)
       {return bin_read_needs_length$5(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$6(bin_reader_a[1],buf,pos_ref)},
              _qi_]}
    function bin_needs_length$2(bin_a)
     {var
       _qg_=bin_reader_needs_length$2(bin_a[3]),
       _qh_=bin_writer_needs_length$2(bin_a[2]);
      return [0,bin_shape_needs_length$2(bin_a[1]),_qh_,_qg_]}
    function bin_read_t$14(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$5(of_a,buf,pos_ref,vint)}
    function bin_read_t$15(of_a,buf,pos_ref)
     {return bin_read_needs_length$6(of_a,buf,pos_ref)}
    function bin_reader_t$7(bin_reader_a)
     {function _qf_(buf,pos_ref,vtag)
       {return bin_read_t$14(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$15(bin_reader_a[1],buf,pos_ref)},
              _qf_]}
    function bin_read_nat0_t$1(buf,pos_ref,vint)
     {return bin_read_needs_length$5(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$2(buf,pos_ref)
     {return bin_read_needs_length$6(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$0=[0,bin_read_nat0_t$2,bin_read_nat0_t$1];
    function bin_size_nat0_t$0(v){return bin_size_needs_length$2(_c_,v)}
    function bin_write_nat0_t$0(buf,pos,v)
     {return bin_write_needs_length$2(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$0=[0,bin_size_nat0_t$0,bin_write_nat0_t$0],
     Stream_response_data=
      [0,
       bin_shape_needs_length$2,
       bin_size_needs_length$2,
       bin_write_needs_length$2,
       bin_writer_needs_length$2,
       bin_read_needs_length$5,
       bin_read_needs_length$6,
       bin_reader_needs_length$2,
       bin_needs_length$2,
       bin_read_t$14,
       bin_read_t$15,
       bin_reader_t$7,
       bin_read_nat0_t$1,
       bin_read_nat0_t$2,
       bin_reader_nat0_t$0,
       bin_size_nat0_t$0,
       bin_write_nat0_t$0,
       bin_writer_nat0_t$0],
     _br_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$9),
     _bs_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_81_19),
     _bt_=caml_call2(Bin_prot_Shape[15],_bs_,_br_),
     _bu_=[0,[0,cst_Response,[0,caml_call1(Response[1],_bt_),0]],0],
     _bv_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$10),
     _bw_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_80_19),
     _bx_=caml_call2(Bin_prot_Shape[15],_bw_,_bv_),
     _bz_=[0,_by_,[0,[0,cst_Query$0,[0,caml_call1(Query[1],_bx_),0]],_bu_]],
     _bA_=caml_call1(Bin_prot_Shape[9],_bz_),
     _bB_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$11),0],
     _bC_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$7),
        _bB_,
        _bA_],
       0],
     _bD_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_ml_78_2),
     group$8=caml_call2(Bin_prot_Shape[6],_bD_,_bC_);
    function bin_shape_needs_length$3(a)
     {var _qe_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_needs_length$8);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$8,_qe_),[0,a,0])}
    function bin_size_needs_length$3(size_of_a,param)
     {if(typeof param === "number")
       return 1;
      else
       {if(0 === param[0])
         {var v1=param[1];return 1 + caml_call2(Query[2],size_of_a,v1) | 0}
        var v1$0=param[1];
        return 1 + caml_call2(Response[2],size_of_a,v1$0) | 0}}
    function bin_write_needs_length$3(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,0);
      else
       {if(0 === param[0])
         {var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,1);
          return caml_call3(caml_call1(Query[3],write_a),buf,pos$0,v1)}
        var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
        return caml_call3(caml_call1(Response[3],write_a),buf,pos$1,v1$0)}}
    function bin_writer_needs_length$3(bin_writer_a)
     {function _qa_(v)
       {var _qb_=bin_writer_a[2];
        return function(_qc_,_qd_)
         {return bin_write_needs_length$3(_qb_,v,_qc_,_qd_)}}
      return [0,
              function(v){return bin_size_needs_length$3(bin_writer_a[1],v)},
              _qa_]}
    function bin_read_needs_length$7(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Message_needs_length,
               pos_ref[1])}
    function bin_read_needs_length$8(of_a,buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_bE_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:
         var arg_1=caml_call2(caml_call1(Query[6],of_a),buf,pos_ref);
         return [0,arg_1];
        default:
         var arg_1$0=caml_call2(caml_call1(Response[6],of_a),buf,pos_ref);
         return [1,arg_1$0]}}
    function bin_reader_needs_length$3(bin_reader_a)
     {function _p$_(buf,pos_ref,vtag)
       {return bin_read_needs_length$7(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$8(bin_reader_a[1],buf,pos_ref)},
              _p$_]}
    function bin_needs_length$3(bin_a)
     {var
       _p9_=bin_reader_needs_length$3(bin_a[3]),
       _p__=bin_writer_needs_length$3(bin_a[2]);
      return [0,bin_shape_needs_length$3(bin_a[1]),_p__,_p9_]}
    function sexp_of_needs_length$1(of_a,param)
     {if(typeof param === "number")
       return _bF_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call2(Query[9],of_a,v0);
          return [1,[0,_bG_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call2(Response[9],of_a,v0$1);
        return [1,[0,_bH_,[0,v0$2,0]]]}}
    function bin_read_t$16(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$7(of_a,buf,pos_ref,vint)}
    function bin_read_t$17(of_a,buf,pos_ref)
     {return bin_read_needs_length$8(of_a,buf,pos_ref)}
    function bin_reader_t$8(bin_reader_a)
     {function _p8_(buf,pos_ref,vtag)
       {return bin_read_t$16(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$17(bin_reader_a[1],buf,pos_ref)},
              _p8_]}
    function bin_read_nat0_t$3(buf,pos_ref,vint)
     {return bin_read_needs_length$7(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$4(buf,pos_ref)
     {return bin_read_needs_length$8(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$1=[0,bin_read_nat0_t$4,bin_read_nat0_t$3];
    function bin_size_nat0_t$1(v){return bin_size_needs_length$3(_c_,v)}
    function bin_write_nat0_t$1(buf,pos,v)
     {return bin_write_needs_length$3(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$1=[0,bin_size_nat0_t$1,bin_write_nat0_t$1],
     Message=
      [0,
       bin_shape_needs_length$3,
       bin_size_needs_length$3,
       bin_write_needs_length$3,
       bin_writer_needs_length$3,
       bin_read_needs_length$7,
       bin_read_needs_length$8,
       bin_reader_needs_length$3,
       bin_needs_length$3,
       sexp_of_needs_length$1,
       bin_read_t$16,
       bin_read_t$17,
       bin_reader_t$8,
       sexp_of_needs_length$1,
       bin_read_nat0_t$3,
       bin_read_nat0_t$4,
       bin_reader_nat0_t$1,
       bin_size_nat0_t$1,
       bin_write_nat0_t$1,
       bin_writer_nat0_t$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Protocol=
      [0,
       Rpc_tag,
       Query_id,
       Unused_query_id,
       Rpc_error,
       Rpc_result,
       Header,
       Query,
       Response,
       Stream_query,
       Stream_initial_message,
       Stream_response_data,
       Message];
    caml_register_global
     (674,Async_rpc_kernel_Protocol,"Async_rpc_kernel__Protocol");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$12,cst$4);
    var Handler_result=[0];
    function sexp_of_message_too_big(param)
     {var
       v_max_message_size=param[2],
       v_size=param[1],
       arg=caml_call1(Core_kernel[455],v_max_message_size),
       bnds=[0,[1,[0,_bI_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_size),
       bnds$0=[0,[1,[0,_bJ_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function sexp_of_t$3(of_a,param)
     {if(typeof param === "number")
       return _bK_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_bL_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=sexp_of_message_too_big(v0$1);
        return [1,[0,_bM_,[0,v0$2,0]]]}}
    var Send_result=[0,sexp_of_message_too_big,sexp_of_t$3];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Transport_intf=[0,Handler_result,Send_result];
    caml_register_global
     (675,Async_rpc_kernel_Transport_intf,"Async_rpc_kernel__Transport_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$15,cst$5);
    var length=8;
    function unsafe_get_payload_length(buf,pos)
     {return caml_call2(Core_kernel_Bigstring[97],buf,pos)}
    function unsafe_set_payload_length(buf,pos,payload_len)
     {return caml_call3(Core_kernel_Bigstring[101],buf,pos,payload_len)}
    var
     Header$0=[0,length,unsafe_get_payload_length,unsafe_set_payload_length],
     Handler_result$0=0;
    function pack(m,t){return [0,m,t]}
    function sexp_of_t$4(param)
     {var t=param[2],M=param[1];return caml_call1(M[1],t)}
    function close(param){var t=param[2],M=param[1];return caml_call1(M[2],t)}
    function is_closed(param)
     {var t=param[2],M=param[1];return caml_call1(M[3],t)}
    function read_forever(param,on_message,on_end_of_batch)
     {var t=param[2],M=param[1];
      return caml_call3(M[4],t,on_message,on_end_of_batch)}
    function read_one_message_bin_prot(t,bin_reader)
     {function _p6_(_p7_){return 0}
      return read_forever
              (t,
               function(buf,pos,len)
                {var pos_ref=[0,pos],x=caml_call2(bin_reader[1],buf,pos_ref);
                 return pos_ref[1] !== (pos + len | 0)
                         ?caml_call4
                           (Core_kernel[347],_bN_,pos_ref[1] - pos | 0,len,0)
                         :[0,x]},
               _p6_)}
    var Send_result$0=0;
    function pack$0(M,t){return [0,[0,M,t,caml_call1(M[6],t)]]}
    function sexp_of_t$5(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[1],t)}
    function close$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[2],t)}
    function is_closed$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[3],t)}
    function monitor(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[4],t)}
    function bytes_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[5],t)}
    function flushed(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[7],t)}
    function ready_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[8],t)}
    function send_bin_prot(param,bin_writer,x)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call3(M[9],t,bin_writer,x)}
    function send_bin_prot_and_bigstring(param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[10],t,bin_writer,x,buf,pos,len)}
    function send_bin_prot_and_bigstring_non_copying
     (param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[11],t,bin_writer,x,buf,pos,len)}
    function stopped(param)
     {var match=param[1],stopped=match[3];return stopped}
    function can_send(param)
     {var
       match=param[1],
       stopped=match[3],
       t=match[2],
       M=match[1],
       _p4_=caml_call1(M[3],t),
       _p5_=_p4_ || caml_call1(Async_kernel_Deferred[7],stopped);
      return 1 - _p5_}
    function transfer(t,opt,pipe,f)
     {if(opt)
       var sth=opt[1],max_num_values_per_read=sth;
      else
       var max_num_values_per_read=1e3;
      function _pT_(param)
       {function _p2_(param){return 17724}
        var _p3_=flushed(t);
        return caml_call2(Async_kernel[50],_p3_,_p2_)}
      var consumer=caml_call2(Async_kernel_Pipe[22],pipe,_pT_);
      function _pU_(ivar)
       {function iter(param)
         {var _pY_=can_send(t);
          if(_pY_)
           {var
             match=
              caml_call3
               (Async_kernel_Pipe[37],
                [0,consumer],
                [0,max_num_values_per_read],
                pipe);
            if(typeof match === "number")
             {if(3456156 <= match)
               return caml_call2(Async_kernel_Ivar[14],ivar,0);
              var
               _pZ_=function(param){return iter(0)},
               _p0_=caml_call1(Async_kernel_Pipe[43],pipe);
              return caml_call2(Async_kernel[45],_p0_,_pZ_)}
            var q=match[2];
            caml_call2(Core_kernel_Queue[15],q,f);
            caml_call1(Async_kernel_Pipe[21][1],consumer);
            var _p1_=ready_to_write(t);
            return caml_call2(Async_kernel[45],_p1_,iter)}
          return _pY_}
        return iter(0)}
      var end_of_pipe=caml_call1(Async_kernel_Deferred[3],_pU_);
      function _pV_(param){return caml_call1(Async_kernel_Pipe[15],pipe)}
      var
       _pW_=[0,end_of_pipe,[0,stopped(t),0]],
       _pX_=caml_call1(Async_kernel_Deferred[25],_pW_);
      return caml_call2(Async_kernel[50],_pX_,_pV_)}
    function sexp_of_t$6(param)
     {var
       v_writer=param[2],
       v_reader=param[1],
       arg=sexp_of_t$5(v_writer),
       bnds=[0,[1,[0,_bO_,[0,arg,0]]],0],
       arg$0=sexp_of_t$4(v_reader),
       bnds$0=[0,[1,[0,_bP_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function close$1(t)
     {function _pR_(param){return close(t[1])}
      var _pS_=close$0(t[2]);
      return caml_call2(Async_kernel[49],_pS_,_pR_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _bQ_=
      [0,
       sexp_of_t$5,
       close$0,
       is_closed$0,
       monitor,
       bytes_to_write,
       stopped,
       flushed,
       ready_to_write,
       send_bin_prot,
       send_bin_prot_and_bigstring,
       send_bin_prot_and_bigstring_non_copying,
       pack$0,
       can_send,
       transfer],
     _bR_=
      [0,
       sexp_of_t$4,
       close,
       is_closed,
       read_forever,
       pack,
       read_one_message_bin_prot],
     Async_rpc_kernel_Transport=
      [0,
       Header$0,
       Handler_result$0,
       _bR_,
       Send_result$0,
       _bQ_,
       sexp_of_t$6,
       close$1];
    caml_register_global
     (681,Async_rpc_kernel_Transport,"Async_rpc_kernel__Transport");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$18,cst$6);
    var
     Direct_stream_writer_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     Implementation=caml_call2(CamlinternalMod[1],_bT_,_bS_),
     Implementations=caml_call2(CamlinternalMod[1],_bV_,_bU_),
     Direct_stream_writer=caml_call2(CamlinternalMod[1],_bX_,_bW_),
     Cached_stream_writer=caml_call2(CamlinternalMod[1],_bZ_,_bY_);
    caml_call3(CamlinternalMod[2],_b0_,Implementation,Implementation);
    caml_call3(CamlinternalMod[2],_b1_,Implementations,Implementations);
    caml_call3
     (CamlinternalMod[2],_b2_,Direct_stream_writer,Direct_stream_writer);
    caml_call3
     (CamlinternalMod[2],_b3_,Cached_stream_writer,Cached_stream_writer);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Implementation_types=
      [0,
       Direct_stream_writer_id,
       Implementation,
       Implementations,
       Direct_stream_writer,
       Cached_stream_writer];
    caml_register_global
     (683,
      Async_rpc_kernel_Implementation_types,
      "Async_rpc_kernel__Implementation_types");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$21,cst$7);
    function sexp_of_t$7(param)
     {var
       v_writer=param[2],
       v_query_id=param[1],
       v_responded=param[3],
       arg=caml_call1(Core_kernel[410],v_responded),
       bnds=[0,[1,[0,_b4_,[0,arg,0]]],0],
       arg$0=caml_call1(_bQ_[1],v_writer),
       bnds$0=[0,[1,[0,_b5_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Query_id[10],v_query_id),
       bnds$1=[0,[1,[0,_b6_,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create(query_id,writer){return [0,query_id,writer,0]}
    var Responder=[0,sexp_of_t$7,create],Expert=[0,Responder];
    function lift(t,f)
     {switch(t[0])
       {case 0:
         var impl=t[2],bin_msg=t[1];
         return [0,
                 bin_msg,
                 function(state,str)
                  {return caml_call2(impl,caml_call1(f,state),str)}];
        case 1:
         var impl$0=t[1];
         return [1,
                 function(state,buf,pos,len)
                  {return caml_call4(impl$0,caml_call1(f,state),buf,pos,len)}];
        case 2:
         var result_mode=t[4],impl$1=t[3],bin_response=t[2],bin_query=t[1];
         return [2,
                 bin_query,
                 bin_response,
                 function(state,q)
                  {return caml_call2(impl$1,caml_call1(f,state),q)},
                 result_mode];
        case 3:
         var result_mode$0=t[2],impl$2=t[1];
         return [3,
                 function(state,resp,buf,pos,len)
                  {return caml_call5
                           (impl$2,caml_call1(f,state),resp,buf,pos,len)},
                 result_mode$0];
        default:
         var impl$3=t[4],bin_u=t[3],bin_i=t[2],bin_q=t[1];
         if(0 === impl$3[0])
          var
           impl$4=impl$3[1],
           impl$5=
            [0,
             function(state,q)
              {return caml_call2(impl$4,caml_call1(f,state),q)}];
         else
          var
           impl$6=impl$3[1],
           impl$5=
            [1,
             function(state,q,w)
              {return caml_call3(impl$6,caml_call1(f,state),q,w)}];
         return [4,bin_q,bin_i,bin_u,impl$5]}}
    var F=[0,lift];
    function description(t)
     {var _pQ_=t[2];return [0,caml_call1(Rpc_tag[12],t[1]),_pQ_]}
    function lift$0(init,f)
     {var _pP_=caml_call2(F[1],init[3],f);return [0,init[1],init[2],_pP_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Implementation=[0,Expert,F,description,lift$0];
    caml_register_global
     (684,Async_rpc_kernel_Implementation,"Async_rpc_kernel__Implementation");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_error_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$24,cst$8);
    var
     _b7_=Rpc_error[1],
     _ce_=Rpc_error[10],
     _b8_=Rpc_error[2],
     _b9_=Rpc_error[3],
     _b__=Rpc_error[4],
     _b$_=Rpc_error[5],
     _ca_=Rpc_error[6],
     _cb_=Rpc_error[7],
     _cc_=Rpc_error[8],
     _cd_=Rpc_error[9],
     include$0=
      caml_call1(Core_kernel_Sexpable[6],[0,Rpc_error[9],Rpc_error[10]]),
     _cf_=include$0[1],
     _cg_=include$0[2],
     Rpc=[248,cst_Async_rpc_kernel_Rpc_error_Rpc,caml_fresh_oo_id(0)];
    function _ch_(param)
     {if(param[1] === Rpc)
       {var
         v1=param[3],
         v0=param[2],
         v0$0=caml_call1(_ce_,v0),
         v1$0=caml_call1(Core_kernel_Info[5],v1);
        return [1,[0,_ci_,[0,v0$0,[0,v1$0,0]]]]}
      throw [0,Assert_failure,_cj_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Rpc,_ch_);
    function raise(t,connection_description)
     {throw [0,Rpc,t,connection_description]}
    function sexp_of_t$8(t,get_connection_close_reason)
     {if(typeof t === "number")
       {var _pO_=caml_call1(get_connection_close_reason,0);
        return [1,[0,_ck_,[0,caml_call1(Core_kernel_Sexp[92],_pO_),0]]]}
      return caml_call1(_ce_,t)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Rpc_error=
      [0,
       _b7_,
       _b8_,
       _b9_,
       _b__,
       _b$_,
       _ca_,
       _cb_,
       _cc_,
       _cd_,
       sexp_of_t$8,
       _cf_,
       _cg_,
       Rpc,
       raise];
    caml_register_global
     (688,Async_rpc_kernel_Rpc_error,"Async_rpc_kernel__Rpc_error");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_result_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$27,cst$9);
    var
     _cl_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$12),
     _cm_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_rpc_result_ml_4_13),
     _cn_=caml_call2(Bin_prot_Shape[15],_cm_,_cl_),
     _co_=caml_call1(caml_call1(Core_kernel_Result[8],_cn_),_b7_),
     _cp_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$13),0],
     _cq_=
      [0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$10),_cp_,_co_],0],
     _cr_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_rpc_result_ml_4_0);
    caml_call2(Bin_prot_Shape[6],_cr_,_cq_);
    function sexp_of_located_error(param)
     {var
       v_exn=param[2],
       v_location=param[1],
       arg=caml_call1(Base_Exn[1],v_exn),
       bnds=[0,[1,[0,_cs_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[557],v_location),
       bnds$0=[0,[1,[0,_ct_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function uncaught_exn(location,exn)
     {return [1,[2,sexp_of_located_error([0,location,exn])]]}
    function bin_io_exn(location,exn)
     {return [1,[0,sexp_of_located_error([0,location,exn])]]}
    function try_with(run,location,f)
     {var x=caml_call7(Async_kernel_Monitor[17],0,0,0,0,run,0,f);
      function join(param)
       {if(0 === param[0]){var x=param[1];return x}
        var exn=param[1];
        return uncaught_exn(location,exn)}
      var match=caml_call1(Async_kernel_Deferred[5],x);
      if(match)
       {var x$0=match[1],_pN_=join(x$0);
        return caml_call1(Async_kernel[48],_pN_)}
      return caml_call2(Async_kernel[50],x,join)}
    function or_error
     (rpc_tag,
      rpc_version,
      connection_description,
      connection_close_started,
      param)
     {if(0 === param[0]){var x=param[1];return [0,x]}
      var
       rpc_error=param[1],
       rpc_error$0=
        sexp_of_t$8
         (rpc_error,
          function(param)
           {var
             close_reason=
              caml_call1(Async_kernel_Deferred[5],connection_close_started);
            return caml_call2
                    (Core_kernel[542],Core_kernel_Info[5],close_reason)}),
       _pJ_=[0,[1,[0,_cu_,[0,caml_call1(Core_kernel[455],rpc_version),0]]],0],
       _pK_=[0,[1,[0,_cv_,[0,caml_call1(Rpc_tag[10],rpc_tag),0]]],_pJ_],
       _pL_=
        [0,
         [1,
          [0,
           _cw_,
           [0,caml_call1(Core_kernel_Info[5],connection_description),0]]],
         _pK_],
       _pM_=
        [1,
         [0,
          [1,[0,_cx_,[0,caml_call1(Core_kernel_Sexp[92],rpc_error$0),0]]],
          _pL_]];
      return caml_call1(Core_kernel_Or_error[44],_pM_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_rpc_kernel_Rpc_result=
      [0,uncaught_exn,bin_io_exn,try_with,or_error];
    caml_register_global
     (692,Async_rpc_kernel_Rpc_result,"Async_rpc_kernel__Rpc_result");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_util_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$30,cst$10);
    function bin_read_from_bigstring
     (bin_reader_t,add_len,buf,pos_ref,len,location)
     {try
       {var init_pos=pos_ref[1],data=caml_call2(bin_reader_t[1],buf,pos_ref);
        if(add_len)
         var add_len$0=add_len[1],add_len$1=caml_call1(add_len$0,data);
        else
         var add_len$1=0;
        if(((pos_ref[1] - init_pos | 0) + add_len$1 | 0) !== len)
         caml_call4(Core_kernel[347],_cy_,pos_ref[1] - init_pos | 0,len,0);
        var _pI_=[0,data];
        return _pI_}
      catch(e){e = caml_wrap_exception(e);return bin_io_exn(location,e)}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Util=[0,bin_read_from_bigstring];
    caml_register_global(693,Async_rpc_kernel_Util,"Async_rpc_kernel__Util");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_implementations_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$33,cst$11);
    var _cz_=Core_kernel_Result[14];
    function defer_result(err)
     {if(0 === err[0])
       {var d=err[1],match=caml_call1(Async_kernel_Deferred[5],d);
        if(match)
         {var d$0=match[1];return caml_call1(Async_kernel[48],[0,d$0])}
        var _pH_=function(x){return [0,x]};
        return caml_call2(Async_kernel[50],d,_pH_)}
      return caml_call1(Async_kernel[48],err)}
    function _cA_(d,f)
     {var match=caml_call1(Async_kernel_Deferred[5],d);
      if(match)
       {var x=match[1],_pG_=caml_call1(f,x);
        return caml_call1(Async_kernel[48],_pG_)}
      return caml_call2(Async_kernel[50],d,f)}
    function descriptions(t){return caml_call1(Core_kernel_Hashtbl[58],t[1])}
    function sexp_of_streaming_response(param)
     {if(0 === param[0])
       {var
         v0=param[1],
         _pF_=function(param){return _cB_},
         v0$0=caml_call2(Async_kernel_Pipe[4][1],_pF_,v0);
        return [1,[0,_cC_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Sexplib0_Sexp_conv[23],v0$1);
      return [1,[0,_cD_,[0,v0$2,0]]]}
    function sexp_of_t$9(param)
     {var
       t=param[1],
       v_open_streaming_responses=t[3],
       v_writer=t[2],
       v_implementations=t[1],
       v_stopped=t[4],
       v_connection_close_started=t[7],
       v_connection_description=t[6],
       v_last_dispatched_implementation=t[8],
       v_packed_self=t[9],
       arg$1=caml_call1(Sexplib0_Sexp_conv[23],v_packed_self),
       bnds=[0,[1,[0,_cE_,[0,arg$1,0]]],0];
      function _pE_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t(v0),
         v1$0=caml_call1(Sexplib0_Sexp_conv[23],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$2=
        caml_call2(Core_kernel[542],_pE_,v_last_dispatched_implementation),
       bnds$0=[0,[1,[0,_cF_,[0,arg$2,0]]],bnds],
       arg$3=
        caml_call2
         (Async_kernel_Deferred[1],
          Core_kernel_Info[5],
          v_connection_close_started),
       bnds$1=[0,[1,[0,_cG_,[0,arg$3,0]]],bnds$0],
       arg$4=caml_call1(Core_kernel_Info[5],v_connection_description),
       bnds$2=[0,[1,[0,_cH_,[0,arg$4,0]]],bnds$1],
       bnds$3=[0,[1,[0,_cI_,[0,arg,0]]],bnds$2],
       arg$5=caml_call1(Core_kernel[410],v_stopped),
       bnds$4=[0,[1,[0,_cJ_,[0,arg$5,0]]],bnds$3],
       arg$0=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          sexp_of_streaming_response,
          v_open_streaming_responses),
       bnds$5=[0,[1,[0,_cK_,[0,arg$0,0]]],bnds$4],
       arg$6=caml_call1(_bQ_[1],v_writer),
       bnds$6=[0,[1,[0,_cL_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Sexplib0_Sexp_conv[23],v_implementations),
       bnds$7=[0,[1,[0,_cM_,[0,arg$7,0]]],bnds$6];
      return [1,bnds$7]}
    function handle_send_result(t,id,result)
     {if(typeof result === "number")
       return 0;
      else
       {if(0 === result[0])return 0;
        var
         sexp=caml_call1(caml_call1(Send_result[2],Core_kernel[598]),result),
         data=[1,[0,id,[1,[1,sexp]]]],
         r=caml_call3(_bQ_[9],t[2],Message[19],data);
        if(typeof r !== "number" && 1 === r[0])
         {var
           _pB_=
            [0,
             [1,[0,_cN_,[0,caml_call2(Send_result[2],Core_kernel[598],r),0]]],
             0],
           _pC_=
            [0,
             [1,
              [0,
               [1,[0,_cO_,[0,caml_call1(Core_kernel_Sexp[92],sexp),0]]],
               _pB_]],
             0],
           _pD_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Failed_to_send_write_error_to_client),
              _pC_]];
          return caml_call1(Core_kernel[364],_pD_)}
        return 0}}
    function write_message(t,id,bin_writer,x)
     {var _pA_=1 - t[4];
      return _pA_
              ?handle_send_result(t,id,caml_call3(_bQ_[9],t[2],bin_writer,x))
              :_pA_}
    function write_response(t,id,bin_writer_data,data)
     {var
       _pz_=of_writer(bin_writer_data),
       bin_writer=caml_call1(Message[4],_pz_);
      return write_message(t,id,bin_writer,[1,[0,id,data]])}
    function bin_write_void(buf,pos,param){return pos}
    var buf=caml_call2(Core_kernel_Bigstring[27],0,32);
    function create$0(id,bin_writer)
     {var
       v=[1,[0,id,_cP_]],
       len=caml_call3(caml_call1(Message[3],bin_write_void),buf,0,v),
       header_prefix=caml_call3(Core_kernel_Bigstring[43][4],buf,0,len);
      return [0,header_prefix,caml_call1(_h_,0),bin_writer]}
    var stream_response_data_header_as_int32=35449;
    function _cQ_(param)
     {var
       len=
        caml_call3(caml_call1(Stream_response_data[3],bin_write_void),buf,0,v);
      if(len === 4)
       {if
         (runtime.caml_equal
           (caml_call2(Core_kernel_Bigstring[115],buf,0),
            stream_response_data_header_as_int32))
         return 0;
        throw [0,Assert_failure,_cR_]}
      throw [0,Assert_failure,_cS_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_stream_response_constants_are_correct,
      0,
      cst_src_implementations_ml$0,
      204,
      4,
      369,
      _cQ_);
    function bin_write_string_no_length(buf,pos,str)
     {var str_len=caml_ml_string_length(str);
      caml_call1(Bin_prot_Common[3],pos);
      var next=pos + str_len | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      runtime.bin_prot_blit_string_buf_stub(0,str,pos,buf,str_len);
      return next}
    function bin_size_nat0_header(param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       stream_response_data_nat0_len=4 + caml_call1(_c_,data_len) | 0,
       stream_response_data_len=stream_response_data_nat0_len + data_len | 0;
      return (caml_ml_string_length(header_prefix)
              +
              caml_call1(_c_,caml_call1(_h_,stream_response_data_len))
              |
              0)
             +
             stream_response_data_nat0_len
             |
             0}
    function bin_write_nat0_header(buf,pos,param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       pos$0=bin_write_string_no_length(buf,pos,header_prefix),
       stream_response_data_len=
        (4 + caml_call1(_c_,data_len) | 0)
        +
        data_len
        |
        0,
       pos$1=
        caml_call3(_e_,buf,pos$0,caml_call1(_h_,stream_response_data_len)),
       next=pos$1 + 4 | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      caml_call3
       (Core_kernel_Bigstring[117],
        buf,
        pos$1,
        stream_response_data_header_as_int32);
      return caml_call3(_e_,buf,next,data_len)}
    var bin_writer=[0,bin_size_nat0_header,bin_write_nat0_header];
    function bin_size_message(param)
     {var t=param[1],_py_=t[2];return bin_size_nat0_header(t) + _py_ | 0}
    function bin_write_message(buf,pos,param)
     {var data=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return caml_call3(t[3][2],buf,pos$0,data)}
    var bin_writer_message=[0,bin_size_message,bin_write_message];
    function bin_size_message_as_string(param)
     {var t=param[1],_px_=t[2];return bin_size_nat0_header(t) + _px_ | 0}
    function bin_write_message_as_string(buf,pos,param)
     {var str=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return bin_write_string_no_length(buf,pos$0,str)}
    var
     bin_writer_message_as_string=
      [0,bin_size_message_as_string,bin_write_message_as_string];
    function write(t,param,id,data)
     {var instance=param[1];
      t[2] = caml_call1(_h_,caml_call1(t[3][1],data));
      return write_message(instance,id,bin_writer_message,[0,t,data])}
    var Id=0;
    function is_closed$1(t){return caml_call1(Async_kernel_Ivar[17],t[3])}
    function closed(t){return caml_call1(Async_kernel_Ivar[18],t[3])}
    function flushed$0(t)
     {var match=t[4],instance=match[1];return caml_call1(_bQ_[7],instance[2])}
    function bin_writer$0(t){return t[6][3]}
    function write_eof(param)
     {var query_id=param[5],match=param[4],instance=match[1];
      return write_response(instance,query_id,Stream_response_data[17],_cT_)}
    function write_message$0(param,x)
     {var stream_writer=param[6],query_id=param[5],instance=param[4];
      return write(stream_writer,instance,query_id,x)}
    function close_without_removing_from_instance(t)
     {var _pv_=1 - caml_call1(Async_kernel_Ivar[17],t[3]);
      if(_pv_)
       {caml_call2(Async_kernel_Ivar[14],t[3],0);
        var groups=t[7];
        if(1 - caml_call1(Core_kernel_Bag[6],groups))
         {var
           _pw_=
            function(param)
             {var match=caml_call1(Core_kernel_Bag[27],groups);
              if(match)
               {var
                 match$0=match[1],
                 element_in_group=match$0[2],
                 group=match$0[1];
                caml_call2(Core_kernel_Bag[25],group[1],element_in_group);
                caml_call2(Core_kernel_Hashtbl[32],group[2],t[1]);
                return 1}
              return 0};
          caml_call1(Async_kernel_Scheduler[63][2],_pw_)}
        return t[2]?0:write_eof(t)}
      return _pv_}
    function close$2(t)
     {var query_id=t[5],match=t[4],instance=match[1];
      close_without_removing_from_instance(t);
      return caml_call2(Core_kernel_Hashtbl[32],instance[3],query_id)}
    function write_without_pushback(t,x)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _pu_=t[2];
      if(_pu_)
       {var q=_pu_[1];caml_call2(Core_kernel_Queue[40],q,[0,x])}
      else
       write_message$0(t,x);
      return 17724}
    function write$0(t,x)
     {var match=t[4],instance=match[1],match$0=write_without_pushback(t,x);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bQ_[7],instance[2])]
              :-1025106484}
    function write_without_pushback$0(t,buf,pos,len)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _ps_=t[2];
      if(_ps_)
       {var
         q=_ps_[1],
         _pt_=[1,caml_call3(Core_kernel_Bigstring[43][4],buf,pos,len)];
        caml_call2(Core_kernel_Queue[40],q,_pt_)}
      else
       {var
         stream_writer=t[6],
         query_id=t[5],
         instance$0=t[4],
         instance=instance$0[1];
        stream_writer[2] = caml_call1(_h_,len);
        if(1 - instance[4])
         handle_send_result
          (instance,
           query_id,
           caml_call6
            (_bQ_[10],instance[2],bin_writer,stream_writer,buf,pos,len))}
      return 17724}
    function write$1(t,buf,pos,len)
     {var
       match=t[4],
       instance=match[1],
       match$0=write_without_pushback$0(t,buf,pos,len);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bQ_[7],instance[2])]
              :-1025106484}
    function apply_implementation
     (t,implementation,query,read_buffer,read_buffer_pos_ref)
     {var id=query[3];
      switch(implementation[0])
       {case 0:
         var
          f=implementation[2],
          bin_query_reader=implementation[1],
          query_contents=
           bin_read_from_bigstring
            (bin_query_reader,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_one_way_rpc_message_un_bin_io_ing);
         if(0 === query_contents[0])
          {var q=query_contents[1];
           try
            {caml_call2(f,t[5],q);var _oP_=0;return _oP_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             return [0,
                     uncaught_exn(cst_server_side_one_way_rpc_computation,exn)]}}
         return [0,query_contents];
        case 1:
         var f$0=implementation[1];
         try
          {var len=query[4];
           caml_call4(f$0,t[5],read_buffer,read_buffer_pos_ref[1],len);
           read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
           var _oQ_=0;
           return _oQ_}
         catch(exn)
          {exn = caml_wrap_exception(exn);
           return [0,
                   uncaught_exn
                    (cst_server_side_one_way_rpc_expert_computation,exn)]}
        case 2:
         var
          result_mode=implementation[4],
          f$1=implementation[3],
          bin_response_writer=implementation[2],
          bin_query_reader$0=implementation[1],
          query_contents$0=
           bin_read_from_bigstring
            (bin_query_reader$0,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_rpc_query_un_bin_io_ing);
         if(0 === result_mode)
          {try
            {var
              _oT_=caml_call2(_cz_,query_contents$0,caml_call1(f$1,t[5])),
              data=_oT_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             var
              backtrace=caml_call1(Base_Backtrace[6][4],0),
              _oR_=
               [0,
                [1,[0,_cU_,[0,caml_call1(Base_Backtrace[1],backtrace),0]]],
                0],
              _oS_=
               [0,[1,[0,_cV_,[0,caml_call1(Core_kernel[614],exn),0]]],_oR_],
              sexp=
               [1,
                [0,
                 [1,
                  [0,
                   _cW_,
                   [0,
                    caml_call1
                     (Sexplib0_Sexp_conv[7],
                      cst_server_side_blocking_rpc_computation),
                    0]]],
                 _oS_]],
              data=[1,[2,sexp]]}
           write_response(t,id,bin_response_writer,data)}
         else
          {var
            data$0=
             try_with
              (_cX_,
               cst_server_side_rpc_computation,
               function(param)
                {return defer_result
                         (caml_call2(_cz_,query_contents$0,caml_call1(f$1,t[5])))}),
            match=caml_call1(Async_kernel_Deferred[5],data$0);
           if(match)
            {var data$1=match[1];
             write_response(t,id,bin_response_writer,data$1)}
           else
            {var
              _oU_=
               function(_pc_)
                {return write_response(t,id,bin_response_writer,_pc_)};
             caml_call2(Async_kernel[45],data$0,_oU_)}}
         return 0;
        case 3:
         var
          result_mode$0=implementation[2],
          f$2=implementation[1],
          responder=caml_call2(Expert[1][2],query[3],t[2]),
          _oV_=
           function(param)
            {var
              len=query[4],
              result=
               caml_call5
                (f$2,t[5],responder,read_buffer,read_buffer_pos_ref[1],len);
             return 0 === result_mode$0
                     ?caml_call1(Async_kernel_Deferred[12],result)
                     :result},
          d=caml_call7(Async_kernel_Monitor[17],0,0,0,0,_cY_,0,_oV_),
          handle_exn=
           function(exn)
            {var
              result=
               uncaught_exn(cst_server_side_rpc_expert_computation,exn);
             return responder[3]
                     ?result
                     :(write_response(t,id,Core_kernel[592],result),_cZ_)},
          check_responded=
           function(param)
            {return responder[3]
                     ?_c0_
                     :handle_exn
                       ([0,Failure,cst_Expert_implementation_did_not_reply])},
          d$0=
           _cA_
            (d,
             function(param)
              {if(0 === param[0])
                {var result=param[1];
                 if(result)
                  var d=result[1],d$0=d;
                 else
                  var d$0=Async_kernel_Deferred[19];
                 if(caml_call1(Async_kernel_Deferred[7],d$0))
                  return check_responded(0);
                 var
                  _o$_=
                   function(param)
                    {var
                      _pa_=check_responded(0),
                      _pb_=or_error(query[1],query[2],t[6],t[7],_pa_);
                     return caml_call1(Core_kernel[358],_pb_)};
                 caml_call2(Async_kernel[41],d$0,_o$_);
                 return _c1_}
               var exn=param[1];
               return handle_exn(exn)}),
          match$0=caml_call1(Async_kernel_Deferred[5],d$0);
         if(match$0)
          {var result=match$0[1];return 0 === result[0]?0:[0,result]}
         var
          _oW_=
           function(r)
            {var _o__=or_error(query[1],query[2],t[6],t[7],r);
             return caml_call1(Core_kernel[358],_o__)};
         return [1,caml_call2(Async_kernel[50],d$0,_oW_)];
        default:
         var
          impl=implementation[4],
          bin_update_writer=implementation[3],
          bin_init_writer=implementation[2],
          bin_query_reader$1=implementation[1],
          _oX_=query[4],
          _oY_=
           [0,
            function(param)
             {if(typeof param === "number")return 0;
              var len=param[2];
              return len}],
          stream_query=
           bin_read_from_bigstring
            (Stream_query[14],
             _oY_,
             read_buffer,
             read_buffer_pos_ref,
             _oX_,
             cst_server_side_pipe_rpc_stream_query_un_bin_io_ing);
         if(0 === stream_query[0])
          {var _oZ_=stream_query[1];
           if(typeof _oZ_ === "number")
            {var
              _o0_=
               function(param)
                {if(0 === param[0])
                  {var pipe=param[1];
                   return caml_call1(Async_kernel_Pipe[15],pipe)}
                 var w=param[1];
                 return close$2(w)},
              _o1_=caml_call2(Core_kernel_Hashtbl[51],t[3],query[3]);
             caml_call2(Core_kernel_Option[18],_o1_,_o0_)}
           else
            {var
              len$0=_oZ_[2],
              data$2=
               bin_read_from_bigstring
                (bin_query_reader$1,
                 0,
                 read_buffer,
                 read_buffer_pos_ref,
                 len$0,
                 cst_streaming_rpc_server_side_query_un_bin_io_ing),
              stream_writer=create$0(id,bin_update_writer);
             if(0 === impl[0])
              var f$3=impl[1],impl_with_state=[0,892411982,f$3];
             else
              {var
                f$6=impl[1],
                _o6_=caml_call1(Core_kernel_Bag[22],0),
                _o7_=t[9],
                _o8_=caml_call1(Async_kernel_Ivar[12],0),
                _o9_=[0,caml_call2(Core_kernel_Queue[60],0,0)],
                writer$0=
                 [0,
                  caml_call1(Direct_stream_writer_id[45],0),
                  _o9_,
                  _o8_,
                  _o7_,
                  id,
                  stream_writer,
                  _o6_];
               caml_call3(Core_kernel_Hashtbl[33],t[3],query[3],[1,writer$0]);
               var impl_with_state=[0,-251740343,[0,f$6,writer$0]]}
             var
              run_impl=
               function(impl,split_ok,handle_ok)
                {function _pp_(param)
                  {if(0 === param[0])
                    {var _pr_=param[1];
                     if(0 === _pr_[0])
                      {var
                        ok=_pr_[1],
                        match=caml_call1(split_ok,ok),
                        rest=match[2],
                        initial=match[1];
                       write_response(t,id,bin_init_writer,[0,initial]);
                       return caml_call1(handle_ok,rest)}
                     var err=_pr_[1];
                     caml_call2(Core_kernel_Hashtbl[32],t[3],id);
                     return write_response(t,id,bin_init_writer,[0,err])}
                   var err$0=param[1];
                   caml_call2(Core_kernel_Hashtbl[32],t[3],id);
                   return write_response(t,id,bin_init_writer,[1,err$0])}
                 var
                  _pq_=
                   try_with
                    (0,
                     cst_server_side_pipe_rpc_computation,
                     function(param)
                      {return defer_result(caml_call2(_cz_,data$2,impl))});
                 return caml_call2(Async_kernel[45],_pq_,_pp_)};
             if(892411982 <= impl_with_state[1])
              {var
                f$4=impl_with_state[2],
                _o2_=
                 function(pipe_r)
                  {caml_call3(Core_kernel_Hashtbl[33],t[3],id,[0,pipe_r]);
                   var _pe_=t[9];
                   function _pf_(_pl_)
                    {return write(stream_writer,_pe_,id,_pl_)}
                   var _pg_=caml_call4(_bQ_[14],t[2],0,pipe_r,_pf_);
                   caml_call1(Async_kernel[35],_pg_);
                   function _ph_(param)
                    {function _pj_(param)
                      {write_response(t,id,Stream_response_data[17],_c2_);
                       return caml_call2(Core_kernel_Hashtbl[32],t[3],id)}
                     var _pk_=caml_call1(Async_kernel_Pipe[19],pipe_r);
                     return caml_call2(Async_kernel[45],_pk_,_pj_)}
                   var _pi_=caml_call1(Async_kernel_Pipe[17],pipe_r);
                   return caml_call2(Async_kernel[45],_pi_,_ph_)},
                _o3_=function(_pd_){return _pd_};
               run_impl
                (function(data){return caml_call2(f$4,t[5],data)},_o3_,_o2_)}
             else
              {var
                match$1=impl_with_state[2],
                writer=match$1[2],
                f$5=match$1[1],
                _o4_=
                 function(param)
                  {var _pm_=writer[2];
                   if(_pm_)
                    {var q=_pm_[1];
                     writer[2] = 0;
                     var
                      _pn_=
                       function(param)
                        {if(0 === param[0])
                          {var x=param[1];return write_message$0(writer,x)}
                         var
                          x$0=param[1],
                          stream_writer=writer[6],
                          query_id=writer[5],
                          instance$0=writer[4],
                          instance=instance$0[1];
                         stream_writer[2]
                         =
                         caml_call1(_h_,caml_ml_string_length(x$0));
                         return write_message
                                 (instance,
                                  query_id,
                                  bin_writer_message_as_string,
                                  [0,stream_writer,x$0])};
                     caml_call2(Core_kernel_Queue[15],q,_pn_);
                     var _po_=caml_call1(Async_kernel_Ivar[17],writer[3]);
                     return _po_?write_eof(writer):_po_}
                   return caml_call1
                           (Core_kernel[164],
                            cst_attempted_to_start_writer_which_was_already_started)},
                _o5_=function(x){return [0,x,0]};
               run_impl
                (function(data){return caml_call3(f$5,t[5],data,writer)},
                 _o5_,
                 _o4_)}}}
         return 0}}
    function flush(param)
     {var t=param[1];
      if(t[4])throw [0,Assert_failure,_c3_];
      function _oN_(param,data,acc)
       {if(0 === data[0])
         {var pipe=data[1],_oO_=caml_call1(Async_kernel_Pipe[19],pipe);
          return [0,caml_call1(Async_kernel_Deferred[20],_oO_),acc]}
        return acc}
      var producers_flushed=caml_call3(Core_kernel_Hashtbl[19],t[3],0,_oN_);
      return caml_call1(Async_kernel_Deferred[24],producers_flushed)}
    function stop(param)
     {var t=param[1];
      t[4] = 1;
      function _oM_(param)
       {if(0 === param[0])return 0;
        var writer=param[1];
        return close_without_removing_from_instance(writer)}
      caml_call2(Core_kernel_Hashtbl[21],t[3],_oM_);
      return caml_call1(Core_kernel_Hashtbl[17],t[3])}
    function handle_query(param,query,read_buffer,read_buffer_pos_ref)
     {var t=param[1];
      if(t[4])throw [0,Assert_failure,_c6_];
      if(caml_call1(_bQ_[3],t[2]))return _c7_;
      var
       match$0=t[1],
       on_unknown_rpc=match$0[2],
       implementations=match$0[1],
       _oI_=query[2],
       description=[0,caml_call1(Rpc_tag[12],query[1]),_oI_],
       _oJ_=t[8];
      if(_oJ_)
       {var match$1=_oJ_[1],implementation=match$1[2],last_desc=match$1[1];
        if(caml_call2(_x_,last_desc,description))
         return apply_implementation
                 (t,implementation,query,read_buffer,read_buffer_pos_ref)}
      var
       match$2=
        caml_call2(Core_kernel_Hashtbl[51],implementations,description);
      if(match$2)
       {var implementation$0=match$2[1];
        t[8] = [0,[0,description,implementation$0]];
        return apply_implementation
                (t,implementation$0,query,read_buffer,read_buffer_pos_ref)}
      if(typeof on_unknown_rpc !== "number")
       if(! (747848894 <= on_unknown_rpc[1]))
        {var
          impl=on_unknown_rpc[2],
          len=query[4],
          id=query[3],
          version=query[2],
          tag=query[1],
          responder=caml_call2(Expert[1][2],id,t[2]),
          _oK_=read_buffer_pos_ref[1],
          _oL_=caml_call1(Rpc_tag[12],tag),
          d=caml_call7(impl,t[5],_oL_,version,responder,read_buffer,_oK_,len);
         return caml_call1(Async_kernel_Deferred[7],d)?0:[1,d]}
      var error=[3,query[1],[0,-901574920,query[2]]];
      write_response(t,query[3],Message[19],[1,error]);
      if(typeof on_unknown_rpc === "number")
       return -146189108 === on_unknown_rpc
               ?raise(error,t[6])
               :192584839 <= on_unknown_rpc?0:_c4_;
      var
       f=on_unknown_rpc[2],
       _oG_=query[2],
       _oH_=caml_call1(Rpc_tag[12],query[1]),
       match=caml_call3(f,t[5],_oH_,_oG_);
      return 192584839 <= match?0:_c5_}
    function create$1(i_s,on_unknown_rpc)
     {var
       implementations=caml_call3(_Q_[4],0,_c8_,0),
       dups=caml_call3(_R_[2],0,_c9_,0);
      function _oE_(i)
       {var
         _oF_=i[2],
         description=[0,caml_call1(Rpc_tag[12],i[1]),_oF_],
         match=
          caml_call3(Core_kernel_Hashtbl[34],implementations,description,i[3]);
        return 17724 <= match
                ?0
                :caml_call2(Core_kernel_Hash_set[22],dups,description)}
      caml_call2(Core_kernel_List[19],i_s,_oE_);
      return caml_call1(Core_kernel_Hash_set[5],dups)
              ?[0,[0,implementations,on_unknown_rpc]]
              :[1,[0,-965860371,caml_call1(Core_kernel_Hash_set[16],dups)]]}
    function instantiate
     (t,
      connection_description,
      connection_close_started,
      connection_state,
      writer)
     {var unpacked=[];
      runtime.caml_update_dummy
       (unpacked,
        [0,
         t,
         writer,
         caml_call3(Core_kernel_Hashtbl[78][13],0,_c__,0),
         0,
         connection_state,
         connection_description,
         connection_close_started,
         0,
         [0,unpacked]]);
      return unpacked[9]}
    var
     Duplicate_implementations=
      [248,
       cst_Async_rpc_kernel_Implementations_Duplicate_implementations,
       caml_fresh_oo_id(0)];
    function _c$_(param)
     {if(param[1] === Duplicate_implementations)
       {var v0=param[2],v0$0=caml_call2(Core_kernel[513],sexp_of_t,v0);
        return [1,[0,_da_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_db_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Duplicate_implementations,_c$_);
    function create_exn(implementations,on_unknown_rpc)
     {var match=create$1(implementations,on_unknown_rpc);
      if(0 === match[0]){var x=match[1];return x}
      var match$0=match[1],dups=match$0[2];
      throw [0,Duplicate_implementations,dups]}
    function null$0(param){return create_exn(0,-146189108)}
    function add_exn(t,implementation)
     {var
       _oD_=implementation[2],
       desc=[0,caml_call1(Rpc_tag[12],implementation[1]),_oD_],
       implementations=caml_call1(Core_kernel_Hashtbl[18],t[1]),
       match=
        caml_call3
         (Core_kernel_Hashtbl[34],implementations,desc,implementation[3]);
      if(17724 <= match)return [0,implementations,t[2]];
      throw [0,Duplicate_implementations,[0,desc,0]]}
    function add(t,implementation)
     {function _oC_(param){return add_exn(t,implementation)}
      return caml_call2(Core_kernel_Or_error[37],0,_oC_)}
    function lift$1(param,f)
     {var on_unknown_rpc=param[2],implementations=param[1],_oy_=F[1];
      function _oz_(_oB_){return caml_call2(_oy_,_oB_,f)}
      var
       implementations$0=
        caml_call2(Core_kernel_Hashtbl[38],implementations,_oz_);
      if(typeof on_unknown_rpc === "number")
       var on_unknown_rpc$0=on_unknown_rpc;
      else
       {if(747848894 <= on_unknown_rpc[1])
         var
          call=on_unknown_rpc[2],
          _oA_=
           [0,
            747848894,
            function(state){return caml_call1(call,caml_call1(f,state))}];
        else
         var
          expert=on_unknown_rpc[2],
          _oA_=
           [0,
            -116756726,
            function(state){return caml_call1(expert,caml_call1(f,state))}];
        var on_unknown_rpc$0=_oA_}
      return [0,implementations$0,on_unknown_rpc$0]}
    var Responder$0=0;
    function cannot_send(r)
     {function _ow_(param){return _dc_}
      var _ox_=caml_call1(Send_result[2],_ow_);
      return caml_call5
              (Core_kernel[349],0,_dd_,cst_Message_cannot_be_sent,r,_ox_)}
    function mark_responded(t)
     {if(t[3])
       caml_call5
        (Core_kernel[349],0,_de_,cst_Already_responded,t,Expert[1][1]);
      t[3] = 1;
      return 0}
    function schedule(t,buf,pos,len)
     {mark_responded(t);
      var
       _ov_=[0,caml_call1(_h_,len)],
       header=[1,[0,t[1],_ov_]],
       r=caml_call6(_bQ_[11],t[2],Message[19],header,buf,pos,len);
      if(typeof r === "number")
       return 179911373;
      else
       {if(0 === r[0]){var d=r[1];return [0,933108739,d]}
        return cannot_send(r)}}
    function handle_send_result$0(r)
     {if(typeof r !== "number" && 1 === r[0])return cannot_send(r);return 0}
    function write_bigstring(t,buf,pos,len)
     {mark_responded(t);
      var _ou_=[0,caml_call1(_h_,len)],header=[1,[0,t[1],_ou_]];
      return handle_send_result$0
              (caml_call6(_bQ_[10],t[2],Message[19],header,buf,pos,len))}
    function write_error(t,error)
     {mark_responded(t);
      var
       data=
        uncaught_exn
         (cst_server_side_raw_rpc_computation,
          caml_call1(Core_kernel_Error[20],error));
      return handle_send_result$0
              (caml_call3(_bQ_[9],t[2],Message[19],[1,[0,t[1],data]]))}
    function write_bin_prot(t,bin_writer_a,a)
     {mark_responded(t);
      var
       _or_=[1,[0,t[1],[0,a]]],
       _os_=of_writer(bin_writer_a),
       _ot_=caml_call1(Message[4],_os_);
      return handle_send_result$0(caml_call3(_bQ_[9],t[2],_ot_,_or_))}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _df_=
      [0,
       Responder$0,
       [0,schedule,write_bigstring,write_bin_prot,write_error],
       create_exn],
     _dg_=[0,sexp_of_t$9,handle_query,flush,stop],
     include$1=
      [0,
       Id,
       close$2,
       closed,
       is_closed$1,
       write$0,
       write_without_pushback,
       flushed$0,
       bin_writer$0,
       [0,write$1,write_without_pushback$0]],
     Async_rpc_kernel_Implementations=
      [0,
       create$1,
       null$0,
       lift$1,
       include$1,
       _dg_,
       instantiate,
       create_exn,
       add,
       add_exn,
       descriptions,
       _df_];
    caml_register_global
     (703,
      Async_rpc_kernel_Implementations,
      "Async_rpc_kernel__Implementations");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$36,cst$12);
    var
     _dh_=include$2[1],
     negotiate=caml_call1(include$2[12],1),
     v1=caml_call2(include$2[11],2,_di_);
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       {var
         _ol_=sexp[1],
         _om_=caml_string_compare(_ol_,cst_eof),
         switch$0=
          0 <= _om_
           ?0 < _om_
             ?caml_string_notequal(_ol_,cst_negotiated_unexpected_version)
               ?caml_string_notequal(_ol_,cst_negotiation_failed)
                 ?caml_string_notequal(_ol_,cst_reading_header_failed)
                   ?caml_string_notequal(_ol_,cst_timeout)
                     ?caml_string_notequal(_ol_,cst_transport_closed)?6:1
                     :2
                   :3
                 :4
               :5
             :0
           :caml_string_notequal(_ol_,cst_Eof$0)
             ?caml_string_notequal(_ol_,cst_Negotiated_unexpected_version)
               ?caml_string_notequal(_ol_,cst_Negotiation_failed)
                 ?caml_string_notequal(_ol_,cst_Reading_header_failed)
                   ?caml_string_notequal(_ol_,cst_Timeout)
                     ?caml_string_notequal(_ol_,cst_Transport_closed)?6:1
                     :2
                   :3
                 :4
               :5
             :0;
        switch(switch$0)
         {case 0:return 0;
          case 1:return 1;
          case 2:return 2;
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)
          }}
      else
       {var _on_=sexp[1];
        if(! _on_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
        var _oo_=_on_[1];
        if(0 !== _oo_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
        var
         _op_=_oo_[1],
         _oq_=caml_string_compare(_op_,cst_eof$0),
         switch$1=
          0 <= _oq_
           ?0 < _oq_
             ?caml_string_notequal(_op_,cst_negotiated_unexpected_version$0)
               ?caml_string_notequal(_op_,cst_negotiation_failed$0)
                 ?caml_string_notequal(_op_,cst_reading_header_failed$0)
                   ?caml_string_notequal(_op_,cst_timeout$0)
                     ?caml_string_notequal(_op_,cst_transport_closed$0)?6:4
                     :5
                   :0
                 :1
               :2
             :3
           :caml_string_notequal(_op_,cst_Eof$1)
             ?caml_string_notequal(_op_,cst_Negotiated_unexpected_version$0)
               ?caml_string_notequal(_op_,cst_Negotiation_failed$0)
                 ?caml_string_notequal(_op_,cst_Reading_header_failed$0)
                   ?caml_string_notequal(_op_,cst_Timeout$0)
                     ?caml_string_notequal(_op_,cst_Transport_closed$0)?6:4
                     :5
                   :0
                 :1
               :2
             :3;
        switch(switch$1)
         {case 0:
           var sexp_args=_on_[2];
           if(sexp_args)
            if(! sexp_args[2])
             {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[4],v0);
              return [0,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_op_,sexp);
          case 1:
           var sexp_args$0=_on_[2];
           if(sexp_args$0)
            if(! sexp_args$0[2])
             {var
               v0$1=sexp_args$0[1],
               v0$2=caml_call1(Core_kernel_Error[4],v0$1);
              return [1,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_op_,sexp);
          case 2:
           var sexp_args$1=_on_[2];
           if(sexp_args$1)
            if(! sexp_args$1[2])
             {var v0$3=sexp_args$1[1],v0$4=caml_call1(Core_kernel[454],v0$3);
              return [2,v0$4]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_op_,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)}
    function sexp_of_t$10(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _dj_;case 1:return _dk_;default:return _dl_}
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
          return [1,[0,_dm_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[5],v0$1);
          return [1,[0,_dn_,[0,v0$2,0]]];
         default:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel[455],v0$3);
          return [1,[0,_do_,[0,v0$4,0]]]}}
    var T=[0,t_of_sexp$1,sexp_of_t$10],_dp_=T[2];
    caml_call1(Core_kernel_Sexpable[6],T);
    var
     Handshake_error=
      [248,
       cst_Async_rpc_kernel_Connection_Handshake_error_Handshake_error,
       caml_fresh_oo_id(0)];
    function _dq_(param)
     {if(param[1] === Handshake_error)
       {var
         v0=param[2],
         v1=v0[2],
         v0$0=v0[1],
         v0$1=caml_call1(_dp_,v0$0),
         v1$0=caml_call1(Core_kernel_Info[5],v1),
         v0$2=[1,[0,v0$1,[0,v1$0,0]]];
        return [1,[0,_dr_,[0,v0$2,0]]]}
      throw [0,Assert_failure,_ds_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Handshake_error,_dq_);
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$2,sexp);
      var
       field_sexps=sexp[1],
       timeout_field=[0,0],
       send_every_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _oe_=param[1];
          if(1 === _oe_[0])
           {var _of_=_oe_[1];
            if(_of_)
             {var _og_=_of_[1];
              if(0 === _og_[0])
               {var _oh_=_of_[2],_oi_=_og_[1];
                if(! _oh_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_oi_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _oh_[2])
                 {var tail=param[2],field_sexp=_oh_[1];
                  if(caml_string_notequal(_oi_,cst_send_every))
                   if(caml_string_notequal(_oi_,cst_timeout$1))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_oi_,extra[1]]}
                   else
                    if(timeout_field[1])
                     duplicates[1] = [0,_oi_,duplicates[1]];
                    else
                     {var
                       fvalue=
                        caml_call1
                         (Core_kernel_Time_ns_alternate_sexp[44][96],field_sexp);
                      timeout_field[1] = [0,fvalue]}
                  else
                   if(send_every_field[1])
                    duplicates[1] = [0,_oi_,duplicates[1]];
                   else
                    {var
                      fvalue$0=
                       caml_call1
                        (Core_kernel_Time_ns_alternate_sexp[44][96],field_sexp);
                     send_every_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$2,_oe_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc$2,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$2,extra[1],sexp);
        var _oj_=timeout_field[1],_ok_=send_every_field[1];
        if(_oj_)
         if(_ok_)
          {var send_every_value=_ok_[1],timeout_value=_oj_[1];
           return [0,timeout_value,send_every_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc$2,
                 sexp,
                 [0,
                  [0,0 === timeout_field[1]?1:0,cst_timeout$2],
                  [0,[0,0 === send_every_field[1]?1:0,cst_send_every$0],0]])}}
    function sexp_of_t$11(param)
     {var
       v_send_every=param[2],
       v_timeout=param[1],
       arg=caml_call1(Core_kernel_Time_ns_alternate_sexp[44][97],v_send_every),
       bnds=[0,[1,[0,_dt_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Time_ns_alternate_sexp[44][97],v_timeout),
       bnds$0=[0,[1,[0,_du_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _dv_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_timeout$3,Core_kernel_Time_ns_alternate_sexp[44][12]],
         [0,[0,cst_send_every$1,Core_kernel_Time_ns_alternate_sexp[44][12]],0]]),
     _dw_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$11),0,_dv_],0],
     _dx_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_connection_ml_42_2),
     group$9=caml_call2(Bin_prot_Shape[6],_dx_,_dw_),
     _dy_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$12),
     bin_shape_t$5=caml_call1(caml_call2(Bin_prot_Shape[14],group$9,_dy_),0);
    function bin_size_t$3(param)
     {var
       v2=param[2],
       v1=param[1],
       size=caml_call1(Core_kernel_Time_ns_alternate_sexp[44][9],v1) | 0;
      return size
             +
             caml_call1(Core_kernel_Time_ns_alternate_sexp[44][9],v2)
             |
             0}
    function bin_write_t$3(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel_Time_ns_alternate_sexp[44][10],buf,pos,v1);
      return caml_call3
              (Core_kernel_Time_ns_alternate_sexp[44][10],buf,pos$0,v2)}
    var bin_writer_t$4=[0,bin_size_t$3,bin_write_t$3];
    function bin_read_t$18(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_connection_ml_Heartbeat_config_t,
               pos_ref[1])}
    function bin_read_t$19(buf,pos_ref)
     {var
       v_timeout=
        caml_call2(Core_kernel_Time_ns_alternate_sexp[44][6],buf,pos_ref),
       v_send_every=
        caml_call2(Core_kernel_Time_ns_alternate_sexp[44][6],buf,pos_ref);
      return [0,v_timeout,v_send_every]}
    var
     bin_reader_t$9=[0,bin_read_t$19,bin_read_t$18],
     bin_t$4=[0,bin_shape_t$5,bin_writer_t$4,bin_reader_t$9];
    function create$2(timeout,send_every){return [0,timeout,send_every]}
    var
     _dz_=caml_call1(Core_kernel_Time_ns_alternate_sexp[44][45],10),
     default$0=
      [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[44][45],30),_dz_];
    function sexp_of_t$12(param)
     {var
       v_implementations_instance=param[9],
       v_close_finished=param[8],
       v_close_started=param[7],
       v_open_queries=param[6],
       v_writer=param[5],
       v_reader=param[4],
       v_heartbeat_callbacks=param[3],
       v_heartbeat_config=param[2],
       v_description=param[1],
       arg=
        caml_call2(Core_kernel_Set_once[1],_dg_[1],v_implementations_instance),
       bnds=[0,[1,[0,_dA_,[0,arg,0]]],0],
       arg$0=
        caml_call2(Async_kernel_Ivar[9],Core_kernel[598],v_close_finished),
       bnds$0=[0,[1,[0,_dB_,[0,arg$0,0]]],bnds],
       arg$1=
        caml_call2(Async_kernel_Ivar[9],Core_kernel_Info[5],v_close_started),
       bnds$1=[0,[1,[0,_dC_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          Sexplib0_Sexp_conv[23],
          v_open_queries),
       bnds$2=[0,[1,[0,_dD_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(_bQ_[1],v_writer),
       bnds$3=[0,[1,[0,_dE_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(_bR_[1],v_reader),
       bnds$4=[0,[1,[0,_dF_,[0,arg$4,0]]],bnds$3];
      function _oa_(f)
       {function _oc_(_od_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_oc_)}
      var
       _ob_=caml_call1(Core_kernel[513],_oa_),
       arg$5=caml_call2(Core_kernel[583],_ob_,v_heartbeat_callbacks),
       bnds$5=[0,[1,[0,_dG_,[0,arg$5,0]]],bnds$4],
       arg$6=sexp_of_t$11(v_heartbeat_config),
       bnds$6=[0,[1,[0,_dH_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel_Info[5],v_description),
       bnds$7=[0,[1,[0,_dI_,[0,arg$7,0]]],bnds$6];
      return [1,bnds$7]}
    function description$0(t){return t[1]}
    function is_closed$2(t){return caml_call1(Async_kernel_Ivar[17],t[7])}
    function writer(t){return is_closed$2(t)?_dJ_:[0,t[5]]}
    function bytes_to_write$0(t){return caml_call1(_bQ_[5],t[5])}
    function flushed$1(t){return caml_call1(_bQ_[7],t[5])}
    function handle_send_result$1(t,r)
     {if(typeof r === "number")
       return caml_call5
               (Core_kernel[349],
                0,
                _dK_,
                cst_RPC_connection_got_closed_writer,
                t,
                sexp_of_t$12);
      else
       {if(0 === r[0]){var x=r[1];return x}
        var
         _n6_=0,
         _n7_=[0,[1,[0,_dL_,[0,sexp_of_t$12(t),0]]],0],
         _n8_=0,
         _n9_=function(param){return _dM_},
         _n__=
          [0,
           [1,
            [0,[1,[0,_dN_,[0,caml_call2(Send_result[2],_n9_,r),_n8_]]],_n7_]],
           _n6_],
         _n$_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Message_cannot_be_sent$0),
            _n__]];
        return caml_call1(Core_kernel[364],_n$_)}}
    function dispatch(t,response_handler,bin_writer_query,query)
     {var r=writer(t);
      if(0 === r[0])
       {var
         writer$0=r[1],
         _n3_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[33],t[6],query[3],response_handler)};
        caml_call2(Core_kernel_Option[18],response_handler,_n3_);
        var _n4_=of_writer(bin_writer_query),_n5_=caml_call1(Message[4],_n4_);
        handle_send_result$1(t,caml_call3(_bQ_[9],writer$0,_n5_,[0,query]));
        return _dO_}
      return r}
    function make_dispatch_bigstring
     (do_send,t,tag,version,buf,pos,len,response_handler)
     {var match=writer(t);
      if(0 === match[0])
       {var
         writer$0=match[1],
         id=caml_call1(Query_id[45],0),
         header=[0,[0,tag,version,id,caml_call1(_h_,len)]],
         _n2_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[33],t[6],id,response_handler)};
        caml_call2(Core_kernel_Option[18],response_handler,_n2_);
        var
         result=
          handle_send_result$1
           (t,caml_call6(do_send,writer$0,Message[19],header,buf,pos,len));
        return [0,result]}
      return _dP_}
    var _dQ_=_bQ_[10];
    function dispatch_bigstring(_nV_,_nW_,_nX_,_nY_,_nZ_,_n0_,_n1_)
     {return make_dispatch_bigstring(_dQ_,_nV_,_nW_,_nX_,_nY_,_nZ_,_n0_,_n1_)}
    var _dR_=_bQ_[11];
    function schedule_dispatch_bigstring(_nO_,_nP_,_nQ_,_nR_,_nS_,_nT_,_nU_)
     {return make_dispatch_bigstring(_dR_,_nO_,_nP_,_nQ_,_nR_,_nS_,_nT_,_nU_)}
    function close_reason(t,on_close)
     {var reason=caml_call1(Async_kernel_Ivar[18],t[7]);
      if(890972481 <= on_close)return reason;
      function _nM_(param){return reason}
      var _nN_=caml_call1(Async_kernel_Ivar[18],t[8]);
      return caml_call2(Async_kernel[49],_nN_,_nM_)}
    function close_finished(t){return caml_call1(Async_kernel_Ivar[18],t[8])}
    function add_heartbeat_callback(t,f){t[3][1] = [0,f,t[3][1]];return 0}
    function close$3(opt,reason,t)
     {if(opt)
       var sth=opt[1],streaming_responses_flush_timeout=sth;
      else
       var
        streaming_responses_flush_timeout=
         caml_call1(Core_kernel_Time_ns_alternate_sexp[44][59],5);
      if(1 - is_closed$2(t))
       {caml_call2(Async_kernel_Ivar[14],t[7],reason);
        var
         _nD_=
          function(param)
           {function _nI_(param)
             {function _nK_(param)
               {return caml_call2(Async_kernel_Ivar[14],t[8],0)}
              var _nL_=caml_call1(_bR_[2],t[4]);
              return caml_call2(Async_kernel[45],_nL_,_nK_)}
            var _nJ_=caml_call1(_bQ_[2],t[5]);
            return caml_call2(Async_kernel[45],_nJ_,_nI_)},
         match=caml_call1(Core_kernel_Set_once[6],t[9]);
        if(match)
         {var instance=match[1],flushed=caml_call1(_dg_[3],instance);
          if(caml_call1(Async_kernel_Deferred[7],flushed))
           {caml_call1(_dg_[4],instance);var flushed$0=flushed}
          else
           var
            _nE_=function(param){return caml_call1(_dg_[4],instance)},
            _nF_=[0,caml_call1(_bQ_[6],t[5]),0],
            _nG_=
             [0,
              flushed,
              [0,
               caml_call1
                (Async_kernel_Clock_ns[4],streaming_responses_flush_timeout),
               _nF_]],
            _nH_=caml_call1(Async_kernel_Deferred[26],_nG_),
            flushed$0=caml_call2(Async_kernel[50],_nH_,_nE_);
          var flushed$1=flushed$0}
        else
         var flushed$1=Async_kernel_Deferred[19];
        caml_call2(Async_kernel[45],flushed$1,_nD_)}
      return close_finished(t)}
    var
     default_handshake_timeout=
      caml_call1(Core_kernel_Time_ns_alternate_sexp[44][45],30);
    function cleanup(t,reason,exn)
     {var _nz_=close$3(0,reason,t);
      caml_call1(Async_kernel[35],_nz_);
      var _nA_=1 - caml_call1(Core_kernel_Hashtbl[30],t[6]);
      if(_nA_)
       {if(exn[1] === Rpc)
         var error=exn[2],error$0=error;
        else
         var error$0=[2,caml_call1(Base_Exn[1],exn)];
        var
         dummy_buffer=caml_call2(Core_kernel_Bigstring[27],0,1),
         dummy_ref=[0,0],
         _nB_=
          function(query_id,response_handler)
           {caml_call3
             (response_handler,
              [0,query_id,[1,error$0]],
              dummy_buffer,
              dummy_ref);
            return 0};
        caml_call2(Core_kernel_Hashtbl[22],t[6],_nB_);
        caml_call1(Core_kernel_Hashtbl[17],t[6]);
        var _nC_=bigstring_destroy_stub(dummy_buffer)}
      else
       var _nC_=_nA_;
      return _nC_}
    var contains_magic_prefix=caml_call1(include$2[13],2);
    function create$3(implementations,connection_state,opt,_mD_,_mC_,param)
     {var writer=param[2],reader=param[1];
      if(opt)
       var sth=opt[1],handshake_timeout=sth;
      else
       var handshake_timeout=default_handshake_timeout;
      if(_mD_)
       var sth$0=_mD_[1],heartbeat_config=sth$0;
      else
       var heartbeat_config=default$0;
      if(_mC_)
       var sth$1=_mC_[1],description=sth$1;
      else
       var description=caml_call1(Core_kernel_Info[10],cst_created_directly);
      if(implementations)
       var s=implementations[1],implementations$0=s;
      else
       var implementations$0=null$0(0);
      var
       _mE_=caml_call1(Core_kernel_Set_once[3],0),
       _mF_=caml_call1(Async_kernel_Ivar[12],0),
       _mG_=caml_call1(Async_kernel_Ivar[12],0),
       t=
        [0,
         description,
         heartbeat_config,
         [0,0],
         reader,
         writer,
         caml_call3(Core_kernel_Hashtbl[78][13],0,_d3_,0),
         _mG_,
         _mF_,
         _mE_];
      function _mH_(param)
       {var
         _ny_=
          close$3
           (0,caml_call1(Core_kernel_Info[10],cst_RPC_transport_stopped),t);
        return caml_call1(Async_kernel[35],_ny_)}
      var _mI_=caml_call1(_bQ_[6],writer);
      caml_call2(Async_kernel[41],_mI_,_mH_);
      function _mJ_(param)
       {if(0 === param[0])
         {var
           _mQ_=t[5],
           _mR_=caml_call1(connection_state,t),
           _mS_=caml_call1(Async_kernel_Ivar[18],t[7]),
           instance=instantiate(implementations$0,t[1],_mS_,_mR_,_mQ_);
          caml_call3(Core_kernel_Set_once[5],t[9],_dV_,instance);
          var
           monitor=caml_call4(Async_kernel_Monitor[4],0,0,_dW_,0),
           reason=
            function(name,exn)
             {var
               _nw_=
                caml_call2
                 (Core_kernel[178],cst_exn_raised_in_RPC_connection,name),
               _nx_=caml_call2(Core_kernel_Info[19],0,exn);
              return [0,exn,caml_call2(Core_kernel_Info[16],_nx_,_nw_)]},
           _mT_=
            function(param)
             {var reason=param[2],exn=param[1];return cleanup(t,reason,exn)},
           _mU_=0,
           _mV_=function(_nv_){return reason(cst_Writer_t,_nv_)},
           _mW_=caml_call1(_bQ_[4],t[5]),
           _mX_=caml_call1(Async_kernel_Monitor[12],_mW_),
           _mY_=[0,caml_call2(Async_kernel_Async_stream[26],_mX_,_mV_),_mU_],
           _mZ_=function(_nu_){return reason(cst_loop,_nu_)},
           _m0_=caml_call1(Async_kernel_Monitor[12],monitor),
           _m1_=[0,caml_call2(Async_kernel_Async_stream[26],_m0_,_mZ_),_mY_],
           _m2_=caml_call1(Async_kernel_Async_stream[6],_m1_),
           _m3_=caml_call1(Async_kernel_Async_stream[32],_m2_);
          caml_call2(Async_kernel_Async_stream[19],_m3_,_mT_);
          var
           _m4_=
            function(param)
             {var
               last_heartbeat=
                [0,caml_call1(Core_kernel_Time_ns_alternate_sexp[27],0)];
              function _m6_(param)
               {var _np_=1 - caml_call1(Async_kernel_Ivar[17],t[7]);
                if(_np_)
                 {var _nq_=last_heartbeat[1],_nm_=1 - is_closed$2(t);
                  if(_nm_)
                   {var
                     _nn_=caml_call1(Core_kernel_Time_ns_alternate_sexp[27],0),
                     since_last_heartbeat=
                      caml_call2(Core_kernel_Time_ns_alternate_sexp[30],_nn_,_nq_);
                    if
                     (caml_call2
                       (Core_kernel_Time_ns_alternate_sexp[44][16],
                        since_last_heartbeat,
                        t[2][1]))
                     {var
                       reason=
                        function(param)
                         {var
                           _nr_=t[2][1],
                           _ns_=
                            [0,
                             [11,
                              cst_No_heartbeats_received_for,
                              [24,
                               _dU_,
                               function(param,custom_printf_001)
                                {var
                                  _nt_=
                                   caml_call1
                                    (Core_kernel_Time_ns_alternate_sexp[44][97],
                                     custom_printf_001);
                                 return caml_call2(Sexplib0_Sexp[13],0,_nt_)},
                               _dT_]],
                             cst_No_heartbeats_received_for_sexp_Time_ns_Span_t];
                          return caml_call2(Core_kernel[366],_ns_,_nr_)},
                       _no_=close$3(0,caml_call1(Core_kernel_Info[12],reason),t);
                      return caml_call1(Async_kernel[35],_no_)}
                    return handle_send_result$1
                            (t,caml_call3(_bQ_[9],t[5],Message[19],0))}
                  return _nm_}
                return _np_}
              var _m7_=t[2][2],_m8_=0;
              function _m9_(param){return 0}
              var
               _m__=caml_call1(Async_kernel_Ivar[18],t[7]),
               _m$_=[0,caml_call2(Async_kernel[50],_m__,_m9_)];
              caml_call5(Async_kernel[36],0,_m$_,_m8_,_m7_,_m6_);
              function _na_(param)
               {if(0 === param[0])
                 {var reason=param[1];return cleanup(t,reason,[0,Rpc,0,t[1]])}
                var _nl_=[0,Rpc,0,t[1]];
                return cleanup
                        (t,
                         caml_call1
                          (Core_kernel_Info[10],cst_EOF_or_connection_closed),
                         _nl_)}
              function _nb_(param)
               {last_heartbeat[1]
                =
                caml_call1(Core_kernel_Time_ns_alternate_sexp[27],0);
                function _nk_(f){return caml_call1(f,0)}
                return caml_call2(Core_kernel_List[19],t[3][1],_nk_)}
              function f(buf,pos,param)
               {var
                 read_buffer_pos_ref=[0,pos],
                 msg$0=caml_call2(Message[15],buf,read_buffer_pos_ref);
                if(typeof msg$0 === "number")
                 var res=0;
                else
                 if(0 === msg$0[0])
                  var
                   query=msg$0[1],
                   instance=caml_call2(Core_kernel_Set_once[7],t[9],_dS_),
                   res=
                    caml_call4(_dg_[2],instance,query,buf,read_buffer_pos_ref);
                 else
                  {var
                    response=msg$0[1],
                    match=caml_call2(Core_kernel_Hashtbl[51],t[6],response[1]);
                   if(match)
                    {var
                      response_handler=match[1],
                      match$0=
                       caml_call3
                        (response_handler,response,buf,read_buffer_pos_ref);
                     if(typeof match$0 === "number")
                      var _nf_=0;
                     else
                      {var _ne_=match$0[1];
                       if(-286555464 === _ne_)
                        {var wait=match$0[2];
                         caml_call2(Core_kernel_Hashtbl[32],t[6],response[1]);
                         var _nf_=[1,wait]}
                       else
                        if(76061764 <= _ne_)
                         {var removal_circumstances=match$0[2];
                          caml_call2(Core_kernel_Hashtbl[32],t[6],response[1]);
                          if(0 === removal_circumstances[0])
                           var _nf_=0;
                          else
                           {var e=removal_circumstances[1];
                            if(typeof e === "number")
                             var switch$0=0;
                            else
                             if(3 === e[0])var _nf_=0,switch$0=1;else var switch$0=0;
                            if(! switch$0)var _nf_=[0,[1,e]]}}
                        else
                         var wait$0=match$0[2],_nf_=[1,wait$0]}}
                   else
                    var _nf_=[0,[1,[4,response[1]]]];
                   var res=_nf_}
                if(typeof res === "number")
                 return 0;
                else
                 {if(0 === res[0])
                   {var result=res[1];
                    if(0 === result[0])
                     var reason=caml_call1(Core_kernel_Info[10],msg);
                    else
                     var
                      e$0=result[1],
                      _nh_=
                       function(param)
                        {return caml_call1
                                 (Sexplib0_Sexp_conv[7],
                                  cst_Connection_on_message_resulted_in_Connection_closed_error_This_is_weird)},
                      _ni_=function(_nj_){return sexp_of_t$8(_nj_,_nh_)},
                      reason=caml_call5(Core_kernel_Info[13],0,0,msg,e$0,_ni_);
                    var _ng_=close$3(0,reason,t);
                    caml_call1(Async_kernel[35],_ng_);
                    return [0,reason]}
                  return res}}
              var
               _m5_=caml_call1(Base_Staged[1],f),
               _nc_=caml_call1(Base_Staged[2],_m5_),
               _nd_=caml_call3(_bR_[4],t[4],_nc_,_nb_);
              return caml_call2(Async_kernel[45],_nd_,_na_)};
          caml_call3(Async_kernel[43],[0,monitor],0,_m4_);
          return [0,t]}
        var error=param[1];
        return [1,[0,Handshake_error,[0,error,description]]]}
      if(caml_call1(_bQ_[3],t[5]))
       var _mK_=caml_call1(Async_kernel[48],_dX_);
      else
       {handle_send_result$1(t,caml_call3(_bQ_[9],t[5],_dh_[2],v1));
        var
         _mz_=function(param){return caml_call2(_bR_[6],t[4],_dh_[3])},
         result=caml_call7(Async_kernel_Monitor[17],0,0,0,0,_dY_,0,_mz_),
         _mA_=
          function(param)
           {if(typeof param === "number")
             {var
               _mL_=
                close$3
                 (0,caml_call1(Core_kernel_Info[10],cst_Handshake_timeout),t);
              caml_call1(Async_kernel[35],_mL_);
              return _dZ_}
            var _mM_=param[2];
            if(0 === _mM_[0])
             {var _mN_=_mM_[1];
              if(0 === _mN_[0])
               {var peer=_mN_[1],match=caml_call2(negotiate,v1,peer);
                if(0 === match[0])
                 {var _mO_=match[1];return 1 === _mO_?_d0_:[1,[2,_mO_]]}
                var e=match[1];
                return [1,[1,e]]}
              return 3456156 <= _mN_[1]?_d1_:_d2_}
            var
             exn=_mM_[1],
             reason=
              caml_call1
               (Core_kernel_Info[10],
                cst_Reader_read_one_message_bin_prot_raised),
             _mP_=close$3(0,reason,t);
            caml_call1(Async_kernel[35],_mP_);
            return [1,[0,caml_call2(Core_kernel_Error[19],0,exn)]]},
         _mB_=caml_call2(Async_kernel_Clock_ns[5],handshake_timeout,result),
         _mK_=caml_call2(Async_kernel[50],_mB_,_mA_)}
      return caml_call2(Async_kernel[50],_mK_,_mJ_)}
    function with_close
     (implementations,
      handshake_timeout,
      heartbeat_config,
      connection_state,
      transport,
      dispatch_queries,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var handle_handshake_error=function(_my_){throw _my_};
      else
       var f=on_handshake_error[2],handle_handshake_error=f;
      function _mo_(t)
       {if(0 === t[0])
         {var
           t$0=t[1],
           _mq_=
            function(param)
             {return close$3
                      (0,
                       caml_call1
                        (Core_kernel_Info[10],
                         cst_Rpc_Connection_with_close_finished),
                       t$0)},
           _mr_=
            function(param)
             {function _mu_(result)
               {function _mw_(param){return result}
                var
                 _mx_=
                  implementations
                   ?close_finished(t$0)
                   :Async_kernel_Deferred[19];
                return caml_call2(Async_kernel[50],_mx_,_mw_)}
              var _mv_=caml_call1(dispatch_queries,t$0);
              return caml_call2(Async_kernel[49],_mv_,_mu_)};
          return caml_call5(Async_kernel_Monitor[24],0,0,0,_mr_,_mq_)}
        var e=t[1];
        function _ms_(param){return caml_call1(handle_handshake_error,e)}
        var _mt_=close$1(transport);
        return caml_call2(Async_kernel[49],_mt_,_ms_)}
      var
       _mp_=
        create$3
         (implementations,
          connection_state,
          handshake_timeout,
          heartbeat_config,
          0,
          transport);
      return caml_call2(Async_kernel[49],_mp_,_mo_)}
    function server_with_close
     (handshake_timeout,
      heartbeat_config,
      transport,
      implementations,
      connection_state,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var
        on_handshake_error$0=
         -146189108 <= on_handshake_error
          ?-146189108
          :[0,747848894,function(param){return Async_kernel_Deferred[19]}];
      else
       var f=on_handshake_error[2],on_handshake_error$0=[0,747848894,f];
      return with_close
              ([0,implementations],
               handshake_timeout,
               heartbeat_config,
               connection_state,
               transport,
               function(param){return Async_kernel_Deferred[19]},
               on_handshake_error$0)}
    function close$4(streaming_responses_flush_timeout,opt,t)
     {if(opt)
       var sth=opt[1],reason=sth;
      else
       var reason=caml_call1(Core_kernel_Info[10],cst_Rpc_Connection_close);
      return close$3(streaming_responses_flush_timeout,reason,t)}
    function null$1(param)
     {var _mn_=null$0(0);return [0,function(param){return 0},_mn_]}
    var Client_implementations=[0,null$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _d4_=
      [0,
       t_of_sexp$2,
       sexp_of_t$11,
       bin_t$4,
       bin_read_t$19,
       bin_read_t$18,
       bin_reader_t$9,
       bin_size_t$3,
       bin_write_t$3,
       bin_writer_t$4,
       bin_shape_t$5,
       create$2],
     Async_rpc_kernel_Connection=
      [0,
       sexp_of_t$12,
       _d4_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close,
       dispatch,
       dispatch_bigstring,
       schedule_dispatch_bigstring,
       default_handshake_timeout];
    caml_register_global
     (711,Async_rpc_kernel_Connection,"Async_rpc_kernel__Connection");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$39,cst$13);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Connection_intf=[0];
    caml_register_global
     (712,
      Async_rpc_kernel_Connection_intf,
      "Async_rpc_kernel__Connection_intf");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$42,cst$14);
    var _d6_=Core_kernel_Result[14],Transport=0,_d5_=Core_kernel_Result[13];
    function dispatch_raw
     (conn,tag,version,bin_writer_query,query,query_id,response_handler)
     {var
       query$0=[0,tag,version,query_id,query],
       match=dispatch(conn,response_handler,bin_writer_query,query$0);
      return 0 === match[0]?_d7_:_d8_}
    function dispatch_raw$0
     (conn,tag,version,bin_writer_query,query,query_id,f)
     {var
       response_ivar=caml_call1(Async_kernel_Ivar[12],0),
       e=
        dispatch_raw
         (conn,
          tag,
          version,
          bin_writer_query,
          query,
          query_id,
          [0,caml_call1(f,response_ivar)]);
      if(0 !== e[0])caml_call2(Async_kernel_Ivar[14],response_ivar,e);
      return caml_call1(Async_kernel_Ivar[18],response_ivar)}
    function create$4(name,version,bin_query,bin_response)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_query,bin_response]}
    function name(t){return caml_call1(Rpc_tag[12],t[1])}
    function version(t){return t[2]}
    function description$1(t){var _mm_=t[2];return [0,name(t),_mm_]}
    function bin_query(t){return t[3]}
    function bin_response(t){return t[4]}
    function implement(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,1]]}
    function implement$0(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,0]]}
    function dispatch$0(t,conn,query)
     {function response_handler(ivar,response,read_buffer,read_buffer_pos_ref)
       {function _ml_(len)
         {return bin_read_from_bigstring
                  (t[4][3],
                   0,
                   read_buffer,
                   read_buffer_pos_ref,
                   len,
                   cst_client_side_rpc_response_un_bin_io_ing)}
        var response$0=caml_call2(_d5_,response[2],_ml_);
        caml_call2(Async_kernel_Ivar[14],ivar,response$0);
        return _d9_}
      var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw$0
              (conn,t[1],t[2],t[3][2],query,query_id,response_handler)}
    function rpc_result_to_or_error(t,conn,result)
     {var _mk_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_mk_,result)}
    function dispatch$1(t,conn,query)
     {function _mi_(result){return rpc_result_to_or_error(t,conn,result)}
      var _mj_=dispatch$0(t,conn,query);
      return caml_call2(Async_kernel[50],_mj_,_mi_)}
    function dispatch_exn(t,conn,query)
     {var _mg_=Core_kernel_Or_error[40],_mh_=dispatch$1(t,conn,query);
      return caml_call2(Async_kernel[50],_mh_,_mg_)}
    function make_dispatch
     (do_dispatch,
      conn,
      rpc_tag,
      version,
      buf,
      pos,
      len,
      handle_response,
      handle_error)
     {function response_handler(response,read_buffer,read_buffer_pos_ref)
       {var _mc_=response[2];
        if(0 === _mc_[0])
         {var
           len=_mc_[1],
           d=
            caml_call3(handle_response,read_buffer,read_buffer_pos_ref[1],len);
          read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
          return caml_call1(Async_kernel_Deferred[7],d)?_d__:[0,-286555464,d]}
        var
         e=_mc_[1],
         _md_=
          sexp_of_t$8
           (e,
            function(param)
             {var
               _me_=close_reason(conn,890972481),
               _mf_=caml_call1(Async_kernel_Deferred[5],_me_);
              return caml_call2(Core_kernel[542],Core_kernel_Info[5],_mf_)});
        caml_call1(handle_error,caml_call1(Core_kernel_Error[4],_md_));
        return _d$_}
      return caml_call7
              (do_dispatch,
               conn,
               caml_call1(Rpc_tag[11],rpc_tag),
               version,
               buf,
               pos,
               len,
               [0,response_handler])}
    function dispatch$2
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (schedule_dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      if(0 === match[0]){var d=match[1];return [0,933108739,d]}
      return 179911373}
    function implement$1(t,f){return [0,t[1],t[2],[3,f,1]]}
    function implement$2(t,f){return [0,t[1],t[2],[3,f,0]]}
    function bin_msg(r){return r[3]}
    function version$0(r){return r[2]}
    function name$0(t){return caml_call1(Rpc_tag[12],t[1])}
    function create$5(name,version,bin_msg)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_msg]}
    function description$2(t){var _mb_=t[2];return [0,name$0(t),_mb_]}
    function implement$3(t,f){return [0,t[1],t[2],[0,t[3][3],f]]}
    function dispatch$3(t,conn,query)
     {var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw(conn,t[1],t[2],t[3][2],query,query_id,0)}
    function rpc_result_to_or_error$0(t,conn,result)
     {var _ma_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_ma_,result)}
    function dispatch$4(t,conn,query)
     {var result=dispatch$3(t,conn,query);
      return rpc_result_to_or_error$0(t,conn,result)}
    function dispatch_exn$0(t,conn,query)
     {var _l$_=dispatch$4(t,conn,query);
      return caml_call1(Core_kernel_Or_error[40],_l$_)}
    function implement$4(t,f){return [0,t[1],t[2],[1,f]]}
    function dispatch$5(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch$0(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=schedule_dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      if(0 === match[0]){var flushed=match[1];return [0,933108739,flushed]}
      return 179911373}
    var
     Expert$0=[0,implement$4,dispatch$5,schedule_dispatch$0],
     _ec_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,_eb_,[0,_ea_,[0,[0,cst_Error,[0,Core_kernel_Error[34],0]],0]]]),
     _ed_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$13),0,_ec_],0],
     _ee_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_rpc_ml_258_2),
     group$10=caml_call2(Bin_prot_Shape[6],_ee_,_ed_),
     _ef_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$14),
     bin_shape_t$6=caml_call1(caml_call2(Bin_prot_Shape[14],group$10,_ef_),0);
    function bin_size_t$4(param)
     {if(typeof param === "number")return 1;
      var v1=param[1];
      return 1 + caml_call1(Core_kernel_Error[31],v1) | 0}
    function bin_write_t$4(buf,pos,param)
     {if(typeof param === "number")
       return 0 === param
               ?caml_call3(Bin_prot_Write[30],buf,pos,0)
               :caml_call3(Bin_prot_Write[30],buf,pos,1);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[32],buf,pos$0,v1)}
    var bin_writer_t$5=[0,bin_size_t$4,bin_write_t$4];
    function bin_read_t$20(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_rpc_ml_Pipe_close_reason_t,
               pos_ref[1])}
    function bin_read_t$21(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eg_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[28],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$10=[0,bin_read_t$21,bin_read_t$20],
     bin_t$5=[0,bin_shape_t$6,bin_writer_t$5,bin_reader_t$10];
    function compare$0(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {if(typeof match === "number")if(0 === match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(0 !== match)return 0}
      else
       {var _l__=a_001[1];
        if(typeof match !== "number")
         {var b_004=match[1];
          return caml_call2(Core_kernel_Error[1],_l__,b_004)}
        if(0 !== match)return 1}
      return 1}
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var _l6_=sexp[1];
        if(caml_string_notequal(_l6_,cst_Closed_locally))
         {if(caml_string_notequal(_l6_,cst_Closed_remotely))
           {if(caml_string_notequal(_l6_,cst_Error$0))
             if(caml_string_notequal(_l6_,cst_closed_locally))
              if(caml_string_notequal(_l6_,cst_closed_remotely))
               if(caml_string_notequal(_l6_,cst_error$1))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$3,sexp)}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _l7_=sexp[1];
        if(! _l7_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _l8_=_l7_[1];
        if(0 !== _l8_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _l9_=_l8_[1];
        if(caml_string_notequal(_l9_,cst_Closed_locally$0))
         {if(caml_string_notequal(_l9_,cst_Closed_remotely$0))
           {if(caml_string_notequal(_l9_,cst_Error$1))
             if(caml_string_notequal(_l9_,cst_closed_locally$0))
              if(caml_string_notequal(_l9_,cst_closed_remotely$0))
               if(caml_string_notequal(_l9_,cst_error$2))
                var switch$3=1,switch$4=0,switch$5=0;
               else
                var switch$5=1;
              else
               var switch$4=1,switch$5=0;
             else
              var switch$3=0,switch$4=0,switch$5=0;
            else
             var switch$5=1;
            if(switch$5)
             {var sexp_args=_l7_[2];
              if(sexp_args)
               if(! sexp_args[2])
                {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[4],v0);
                 return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$3,_l9_,sexp)}}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$13(param)
     {if(typeof param === "number")return 0 === param?_eh_:_ei_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
      return [1,[0,_ej_,[0,v0$0,0]]]}
    var
     _em_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         _el_,
         [0,_ek_,[0,[0,cst_Error$2,[0,Core_kernel_Error[35][2][8],0]],0]]]),
     _en_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$15),0,_em_],0],
     _eo_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_rpc_ml_266_6),
     group$11=caml_call2(Bin_prot_Shape[6],_eo_,_en_),
     _ep_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$16),
     bin_shape_t$7=caml_call1(caml_call2(Bin_prot_Shape[14],group$11,_ep_),0);
    function bin_size_t$5(param)
     {if(typeof param === "number")return 1;
      var v1=param[1];
      return 1 + caml_call1(Core_kernel_Error[35][2][5],v1) | 0}
    function bin_write_t$5(buf,pos,param)
     {if(typeof param === "number")
       return 0 === param
               ?caml_call3(Bin_prot_Write[30],buf,pos,0)
               :caml_call3(Bin_prot_Write[30],buf,pos,1);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[35][2][6],buf,pos$0,v1)}
    var bin_writer_t$6=[0,bin_size_t$5,bin_write_t$5];
    function bin_read_t$22(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_rpc_ml_Pipe_close_reason_Stable_V1_t,
               pos_ref[1])}
    function bin_read_t$23(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eq_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[35][2][2],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$11=[0,bin_read_t$23,bin_read_t$22],
     bin_t$6=[0,bin_shape_t$7,bin_writer_t$6,bin_reader_t$11];
    function compare$1(a_005,match)
     {if(caml_call2(Ppx_compare_lib[1],a_005,match))return 0;
      if(typeof a_005 === "number")
       {if(0 === a_005)
         {if(typeof match === "number")if(0 === match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(0 !== match)return 0}
      else
       {var _l5_=a_005[1];
        if(typeof match !== "number")
         {var b_008=match[1];
          return caml_call2(Core_kernel_Error[35][2][9],_l5_,b_008)}
        if(0 !== match)return 1}
      return 1}
    function t_of_sexp$4(sexp)
     {if(0 === sexp[0])
       {var _l1_=sexp[1];
        if(caml_string_notequal(_l1_,cst_Closed_locally$1))
         {if(caml_string_notequal(_l1_,cst_Closed_remotely$1))
           {if(caml_string_notequal(_l1_,cst_Error$3))
             if(caml_string_notequal(_l1_,cst_closed_locally$1))
              if(caml_string_notequal(_l1_,cst_closed_remotely$1))
               if(caml_string_notequal(_l1_,cst_error$3))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$4,sexp)}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _l2_=sexp[1];
        if(! _l2_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$4,sexp);
        var _l3_=_l2_[1];
        if(0 !== _l3_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$4,sexp);
        var _l4_=_l3_[1];
        if(caml_string_notequal(_l4_,cst_Closed_locally$2))
         {if(caml_string_notequal(_l4_,cst_Closed_remotely$2))
           {if(caml_string_notequal(_l4_,cst_Error$4))
             if(caml_string_notequal(_l4_,cst_closed_locally$2))
              if(caml_string_notequal(_l4_,cst_closed_remotely$2))
               if(caml_string_notequal(_l4_,cst_error$4))
                var switch$3=1,switch$4=0,switch$5=0;
               else
                var switch$5=1;
              else
               var switch$4=1,switch$5=0;
             else
              var switch$3=0,switch$4=0,switch$5=0;
            else
             var switch$5=1;
            if(switch$5)
             {var sexp_args=_l2_[2];
              if(sexp_args)
               if(! sexp_args[2])
                {var
                  v0=sexp_args[1],
                  v0$0=caml_call1(Core_kernel_Error[35][2][10],v0);
                 return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$4,_l4_,sexp)}}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$4,sexp)}
    function sexp_of_t$14(param)
     {if(typeof param === "number")return 0 === param?_er_:_es_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[35][2][11],v0);
      return [1,[0,_et_,[0,v0$0,0]]]}
    function create$6
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_initial_response,
      bin_update_response,
      bin_error,
      param)
     {var client_pushes_back$0=client_pushes_back?1:0;
      return [0,
              caml_call1(Rpc_tag[11],name),
              version,
              bin_query,
              bin_initial_response,
              bin_update_response,
              bin_error,
              client_pushes_back$0]}
    function make_initial_message(x){return [0,Unused_query_id[10],x]}
    function implement_gen(t,impl)
     {var
       bin_init_writer=
        caml_call2(Stream_initial_message[4],t[4][2],t[6][2]);
      return [0,t[1],t[2],[4,t[3][3],bin_init_writer,t[5][2],impl]]}
    function implement$5(t,f)
     {function f$0(c,query)
       {function _lZ_(param)
         {if(0 === param[0])
           {var match=param[1],pipe=match[2],initial=match[1];
            return [0,[0,make_initial_message([0,initial]),pipe]]}
          var err=param[1];
          return [1,make_initial_message([1,err])]}
        var _l0_=caml_call2(f,c,query);
        return caml_call2(Async_kernel[50],_l0_,_lZ_)}
      return implement_gen(t,[0,f$0])}
    function abort(t,conn,id)
     {var query=[0,t[1],t[2],id,774323088];
      dispatch(conn,0,Stream_query[17],query);
      return 0}
    var Pipe_message=[0],Pipe_response=[0];
    function id(t){return t[1]}
    function close_reason$0(t){return t[2]}
    function read_error(get_connection_close_reason,handler,err)
     {var
       _lY_=sexp_of_t$8(err,get_connection_close_reason),
       core_err=caml_call1(Core_kernel_Error[4],_lY_);
      caml_call1(handler,[1,[0,106380200,core_err]]);
      return [0,76061764,[1,err]]}
    function dispatch_gen(t,conn,query,make_update_handler)
     {var
       _lH_=of_type_class(t[3]),
       bin_writer_query=caml_call1(Stream_query[4],_lH_),
       query$0=[0,-250086680,query],
       query_id=caml_call1(Query_id[45],0),
       _lI_=close_reason(conn,890972481),
       _lJ_=conn[1],
       _lK_=t[2],
       _lL_=t[1];
      function _lM_(_lX_){return or_error(_lL_,_lK_,_lJ_,_lI_,_lX_)}
      function _lN_(ivar)
       {var initial_state=[0,t,query_id,make_update_handler,ivar,conn];
        function get_connection_close_reason(param)
         {var
           _lV_=close_reason(conn,890972481),
           _lW_=caml_call1(Async_kernel_Deferred[5],_lV_);
          return caml_call2(Core_kernel[542],Core_kernel_Info[5],_lW_)}
        var state=[0,[0,initial_state]];
        return function(response,read_buffer,read_buffer_pos_ref)
         {var _lP_=state[1];
          if(0 === _lP_[0])
           {var
             initial_handler=_lP_[1],
             error=
              function(err)
               {caml_call2(Async_kernel_Ivar[14],initial_handler[4],[1,err]);
                return _ew_},
             _lQ_=response[2];
            if(0 === _lQ_[0])
             {var
               len=_lQ_[1],
               initial=
                bin_read_from_bigstring
                 (caml_call2
                   (Stream_initial_message[7],
                    initial_handler[1][4][3],
                    initial_handler[1][6][3]),
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len,
                  cst_client_side_streaming_rpc_initial_response_un_bin_io_ing);
              if(0 === initial[0])
               {var initial_msg=initial[1],_lR_=initial_msg[2];
                if(0 === _lR_[0])
                 {var
                   initial$0=_lR_[1],
                   match=caml_call1(initial_handler[3],0),
                   handler=match[2],
                   extra=match[1];
                  caml_call2
                   (Async_kernel_Ivar[14],
                    initial_handler[4],
                    [0,[0,[0,initial_handler[2],initial$0,extra]]]);
                  state[1] = [1,initial_handler[1][5][3],handler];
                  return -955854715}
                var err=_lR_[1];
                caml_call2
                 (Async_kernel_Ivar[14],initial_handler[4],[0,[1,err]]);
                return _ex_}
              var err$0=initial[1];
              return error(err$0)}
            var err$1=_lQ_[1];
            return error(err$1)}
          var handler$0=_lP_[2],bin_reader_update=_lP_[1],_lS_=response[2];
          if(0 === _lS_[0])
           {var
             len$0=_lS_[1],
             _lT_=
              [0,
               function(param)
                {if(typeof param === "number")return 0;
                 var len=param[2];
                 return len}],
             data=
              bin_read_from_bigstring
               (Stream_response_data[14],
                _lT_,
                read_buffer,
                read_buffer_pos_ref,
                len$0,
                cst_client_side_streaming_rpc_response_un_bin_io_ing);
            if(0 === data[0])
             {var _lU_=data[1];
              if(typeof _lU_ === "number")
               {caml_call1(handler$0,_eu_);return _ev_}
              var
               len$1=_lU_[2],
               data$0=
                bin_read_from_bigstring
                 (bin_reader_update,
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len$1,
                  cst_client_side_streaming_rpc_response_un_bin_io_ing$0);
              if(0 === data$0[0])
               {var data$1=data$0[1],match$0=caml_call1(handler$0,[0,data$1]);
                if(match$0){var d=match$0[1];return [0,-822977931,d]}
                return -955854715}
              var err$2=data$0[1];
              return read_error(get_connection_close_reason,handler$0,err$2)}
            var err$3=data[1];
            return read_error(get_connection_close_reason,handler$0,err$3)}
          var err$4=_lS_[1];
          return read_error(get_connection_close_reason,handler$0,err$4)}}
      var
       _lO_=
        dispatch_raw$0(conn,t[1],t[2],bin_writer_query,query$0,query_id,_lN_);
      return caml_call2(Async_kernel[50],_lO_,_lM_)}
    function dispatch$6(t,conn,query)
     {function _lw_(e)
       {if(0 === e[0])
         {var _lC_=e[1];
          if(0 === _lC_[0])
           {var
             _lD_=_lC_[1],
             match=_lD_[3],
             close_reason=match[2],
             pipe_r=match[1],
             init=_lD_[2],
             id=_lD_[1],
             _lE_=
              function(param)
               {var _lG_=1 - caml_call1(Async_kernel_Ivar[17],close_reason);
                return _lG_
                        ?(abort(t,conn,id),
                          caml_call2(Async_kernel_Ivar[14],close_reason,0))
                        :_lG_},
             _lF_=caml_call1(Async_kernel_Pipe[17],pipe_r);
            caml_call2(Async_kernel[41],_lF_,_lE_);
            var
             pipe_metadata=
              [0,id,caml_call1(Async_kernel_Ivar[18],close_reason)];
            return [0,[0,[0,pipe_metadata,init,pipe_r]]]}}
        return e}
      var
       _lx_=
        dispatch_gen
         (t,
          conn,
          query,
          function(param)
           {var
             match=caml_call1(Async_kernel_Pipe[8],0),
             pipe_w=match[2],
             pipe_r=match[1];
            caml_call2(Async_kernel_Pipe[77],pipe_w,100);
            var close_reason=caml_call1(Async_kernel_Ivar[12],0);
            function f(param)
             {if(0 === param[0])
               {var data=param[1];
                if(caml_call1(Async_kernel_Pipe[16],pipe_w))return 0;
                caml_call2(Async_kernel_Pipe[27],pipe_w,data);
                if(t[7])
                 {var _ly_=caml_call1(Async_kernel_Pipe[76],pipe_w);
                  if(caml_call1(Async_kernel_Pipe[23],pipe_w) === _ly_)
                   {var
                     _lz_=function(param){return 0},
                     _lA_=caml_call1(Async_kernel_Pipe[20],pipe_w);
                    return [0,caml_call2(Async_kernel[50],_lA_,_lz_)]}}
                return 0}
              var reason=param[1];
              if(typeof reason === "number")
               var _lB_=1;
              else
               var err=reason[2],_lB_=[0,err];
              caml_call2(Async_kernel_Ivar[15],close_reason,_lB_);
              caml_call1(Async_kernel_Pipe[14],pipe_w);
              return 0}
            return [0,[0,pipe_r,close_reason],f]});
      return caml_call2(Async_kernel[50],_lx_,_lw_)}
    function create$7
     (client_pushes_back,name,version,bin_query,bin_response,bin_error,param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               Core_kernel_Unit[5],
               bin_response,
               bin_error,
               0)}
    function bin_query$0(t){return t[3]}
    function bin_response$0(t){return t[5]}
    function bin_error(t){return t[6]}
    function client_pushes_back(t){return t[7]}
    function implement$6(t,f)
     {return implement$5
              (t,
               function(a,query)
                {function _lu_(x)
                  {return caml_call2(_d6_,x,function(x){return [0,0,x]})}
                 var _lv_=caml_call2(f,a,query);
                 return caml_call2(Async_kernel[50],_lv_,_lu_)})}
    var
     close$5=include$1[2],
     closed$0=include$1[3],
     is_closed$3=include$1[4],
     write$2=include$1[5],
     write_without_pushback$1=include$1[6],
     flushed$2=include$1[7],
     bin_writer$1=include$1[8],
     Expert$1=include$1[9];
    function create$8(opt,param)
     {if(opt)var sth=opt[1],initial_size=sth;else var initial_size=4096;
      if(initial_size < 0)
       caml_call5
        (Core_kernel[349],
         0,
         _ey_,
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_Buffer_create_got_negative_buffer_size,
         initial_size,
         Core_kernel_Int[96]);
      return [0,caml_call2(Core_kernel_Bigstring[27],0,initial_size)]}
    var Buffer=[0,create$8];
    function create$9(buffer,param)
     {if(buffer)
       var b=buffer[1],buffer$0=b;
      else
       var buffer$0=caml_call2(Buffer[1],0,0);
      var _lt_=caml_call3(Direct_stream_writer_id[38][4],0,0,0);
      return [0,caml_call1(Core_kernel_Bag[22],0),_lt_,buffer$0]}
    function length$0(t){return caml_call1(Core_kernel_Bag[5],t[1])}
    function add_exn$0(t,writer)
     {if(caml_call1(is_closed$3,writer))
       caml_call1
        (Core_kernel[164],
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_cannot_add_a_closed_direct_stream_writer);
      if(caml_call2(Core_kernel_Hashtbl[31],t[2],writer[1]))
       caml_call1
        (Core_kernel[164],
         cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_exn_trying_to_add_a_direct_stream_writer_that_is_already_present_in_the_group);
      var match=caml_call1(Core_kernel_Bag[26],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         _lr_=caml_call1(bin_writer$1,writer),
         _ls_=caml_call1(bin_writer$1,one$0);
        if(1 - caml_call2(Core_kernel[359],_ls_,_lr_))
         caml_call1
          (Core_kernel[164],
           cst_Rpc_Pipe_rpc_Direct_stream_writer_Group_add_cannot_add_a_direct_stream_writer_with_a_different_bin_writer)}
      var
       writer_element_in_group=caml_call2(Core_kernel_Bag[23],t[1],writer),
       group_element_in_writer=
        caml_call2
         (Core_kernel_Bag[23],writer[7],[0,t,writer_element_in_group]);
      return caml_call3
              (Core_kernel_Hashtbl[35],
               t[2],
               writer[1],
               [0,writer_element_in_group,group_element_in_writer])}
    function remove(t,writer)
     {var match=caml_call2(Core_kernel_Hashtbl[55],t[2],writer[1]);
      if(match)
       {var
         match$0=match[1],
         group_element_in_writer=match$0[2],
         writer_element_in_group=match$0[1];
        caml_call2(Core_kernel_Bag[25],t[1],writer_element_in_group);
        return caml_call2
                (Core_kernel_Bag[25],writer[7],group_element_in_writer)}
      return 0}
    function to_list(t){return caml_call1(Core_kernel_Bag[17],t[1])}
    function flushed$3(t)
     {var
       _lp_=to_list(t),
       _lq_=caml_call2(Core_kernel_List[84],_lp_,flushed$2);
      return caml_call1(Async_kernel_Deferred[24],_lq_)}
    function write_without_pushback$2(t,buf,pos,len)
     {function _lo_(direct_stream_writer)
       {caml_call4(include$1[9][2],direct_stream_writer,buf,pos,len);return 0}
      return caml_call2(Core_kernel_Bag[7],t[1],_lo_)}
    function write$3(t,buf,pos,len)
     {write_without_pushback$2(t,buf,pos,len);return flushed$3(t)}
    function write_without_pushback$3(t,x)
     {var match=caml_call1(Core_kernel_Bag[26],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         match$0=caml_call1(bin_writer$1,one$0),
         write=match$0[2],
         size=match$0[1],
         buffer=t[3][1];
        try
         {var len$1=caml_call3(write,buffer,0,x)}
        catch(_ln_)
         {_ln_ = caml_wrap_exception(_ln_);
          if(_ln_ === Bin_prot_Common[12])
           {var len=caml_call1(size,x);
            bigstring_destroy_stub(buffer);
            var
             _lm_=caml_call1(Core_kernel_Int[67],len),
             buffer$0=caml_call2(Core_kernel_Bigstring[27],0,_lm_);
            t[3][1] = buffer$0;
            var len$0=caml_call3(write,buffer$0,0,x);
            return write_without_pushback$2(t,buffer$0,0,len$0)}
          throw _ln_}
        return write_without_pushback$2(t,buffer,0,len$1)}
      return 0}
    function write$4(t,x){write_without_pushback$3(t,x);return flushed$3(t)}
    function implement_direct(t,f$0)
     {function f(c,query,writer)
       {function _lk_(x)
         {return 0 === x[0]
                  ?[0,make_initial_message(x)]
                  :[1,make_initial_message(x)]}
        var _ll_=caml_call3(f$0,c,query,writer);
        return caml_call2(Async_kernel[50],_ll_,_lk_)}
      return implement_gen(t,[1,f])}
    function dispatch$7(t,conn,query)
     {function _li_(response)
       {return caml_call2
                (_d6_,
                 response,
                 function(x)
                  {return caml_call2
                           (_d6_,
                            x,
                            function(param)
                             {var pipe_r=param[3],metadata=param[1];
                              return [0,pipe_r,metadata]})})}
      var _lj_=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[50],_lj_,_li_)}
    var
     Pipe_rpc_failed=
      [248,
       cst_Async_rpc_kernel_Async_rpc_kernel_Rpc_Pipe_rpc_Pipe_rpc_failed,
       caml_fresh_oo_id(0)];
    function dispatch_exn$1(t,conn,query)
     {function _lf_(result)
       {if(0 === result[0])
         {var _lh_=result[1];
          if(0 === _lh_[0]){var pipe_and_id=_lh_[1];return pipe_and_id}
          throw Pipe_rpc_failed}
        var rpc_error=result[1];
        throw caml_call1(Core_kernel_Error[20],rpc_error)}
      var _lg_=dispatch$7(t,conn,query);
      return caml_call2(Async_kernel[50],_lg_,_lf_)}
    function dispatch_iter(t,conn,query,f)
     {function _ld_(response)
       {return caml_call2
                (_d6_,
                 response,
                 function(x)
                  {return caml_call2
                           (_d6_,x,function(param){var id=param[1];return id})})}
      function _la_(e)
       {if(0 === e[0])
         {var _le_=e[1];
          if(0 === _le_[0])
           {var match=_le_[1],init=match[2],id=match[1];
            return [0,[0,[0,id,init]]]}}
        return e}
      var
       _lb_=dispatch_gen(t,conn,query,function(param){return [0,0,f]}),
       _lc_=caml_call2(Async_kernel[50],_lb_,_la_);
      return caml_call2(Async_kernel[50],_lc_,_ld_)}
    function name$1(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$1(t){return t[2]}
    function description$3(t){var _k$_=t[2];return [0,name$1(t),_k$_]}
    function create$10
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_state,
      bin_update,
      bin_error,
      param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               bin_state,
               bin_update,
               bin_error,
               0)}
    function bin_query$1(t){return t[3]}
    function bin_state(t){return t[4]}
    function bin_update(t){return t[5]}
    function bin_error$0(t){return t[6]}
    function dispatch$8(t,conn,query)
     {function _k9_(response)
       {return caml_call2
                (_d6_,
                 response,
                 function(x)
                  {return caml_call2
                           (_d6_,
                            x,
                            function(param)
                             {var update_r=param[3],state=param[2],metadata=param[1];
                              return [0,state,update_r,metadata]})})}
      var _k__=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[50],_k__,_k9_)}
    function name$2(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$2(t){return t[2]}
    function description$4(t){var _k8_=t[2];return [0,name$2(t),_k8_]}
    var Any=[0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _ez_=
      [0,
       create$5,
       name$0,
       version$0,
       description$2,
       bin_msg,
       implement$3,
       dispatch$3,
       rpc_result_to_or_error$0,
       dispatch$4,
       dispatch_exn$0,
       Expert$0],
     _eA_=
      [0,
       [0],
       [0,id],
       create$10,
       bin_query$1,
       bin_state,
       bin_update,
       bin_error$0,
       implement$5,
       dispatch$8,
       abort,
       close_reason$0,
       name$2,
       version$2,
       description$4],
     _eB_=
      [0,
       [0],
       [0,id],
       create$7,
       bin_query$0,
       bin_response$0,
       bin_error,
       implement$6,
       [0,
        write$2,
        write_without_pushback$1,
        close$5,
        closed$0,
        is_closed$3,
        Expert$1,
        [0,
         Buffer,
         create$9,
         flushed$3,
         add_exn$0,
         remove,
         write$4,
         write_without_pushback$3,
         to_list,
         length$0,
         [0,write$3,write_without_pushback$2]]],
       implement_direct,
       dispatch$7,
       dispatch_exn$1,
       Pipe_message,
       Pipe_response,
       dispatch_iter,
       abort,
       close_reason$0,
       client_pushes_back,
       name$1,
       version$1,
       description$3],
     _eC_=
      [0,
       create$4,
       name,
       version,
       description$1,
       bin_query,
       bin_response,
       implement,
       implement$0,
       dispatch$0,
       rpc_result_to_or_error,
       dispatch$1,
       dispatch_exn,
       [0,_df_[2],schedule_dispatch,dispatch$2,implement$1,implement$2]],
     _eD_=
      [0,
       sexp_of_t$12,
       _d4_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close],
     _eE_=[0,description,lift$0],
     Async_rpc_kernel_Rpc=
      [0,
       [0,_M_,_N_,_O_,sexp_of_t,_T_],
       _eE_,
       [0,
        null$0,
        lift$1,
        create$1,
        create_exn,
        add,
        add_exn,
        descriptions,
        [0,[0],_df_[3]]],
       Transport,
       _eD_,
       _eC_,
       [0,
        bin_t$5,
        bin_read_t$21,
        bin_read_t$20,
        bin_reader_t$10,
        bin_size_t$4,
        bin_write_t$4,
        bin_writer_t$5,
        bin_shape_t$6,
        compare$0,
        t_of_sexp$3,
        sexp_of_t$13,
        [0,
         [0,
          bin_t$6,
          bin_read_t$23,
          bin_read_t$22,
          bin_reader_t$11,
          bin_size_t$5,
          bin_write_t$5,
          bin_writer_t$6,
          bin_shape_t$7,
          compare$1,
          t_of_sexp$4,
          sexp_of_t$14]]],
       _eB_,
       _eA_,
       _ez_,
       Any];
    caml_register_global(714,Async_rpc_kernel_Rpc,"Async_rpc_kernel__Rpc");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$44);
    caml_call1(Expect_test_collector[4][1],cst_src_versioned_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$45,cst$15);
    function write$5(param,input)
     {var writer=param[2],convert=param[1],_k7_=caml_call1(convert,input);
      return caml_call2(_eB_[8][1],writer,_k7_)}
    function write_without_pushback$4(param,input)
     {var writer=param[2],convert=param[1],_k6_=caml_call1(convert,input);
      return caml_call2(_eB_[8][2],writer,_k6_)}
    function close$6(param)
     {var writer=param[2];return caml_call1(_eB_[8][3],writer)}
    function is_closed$4(param)
     {var writer=param[2];return caml_call1(_eB_[8][5],writer)}
    function closed$1(param)
     {var writer=param[2];return caml_call1(_eB_[8][4],writer)}
    function failed_conversion(x)
     {function _k4_(param)
       {var
         v3=param[4],
         v2=param[3],
         v1=param[2],
         v0=param[1],
         _k5_=
          3854881 <= v0
           ?389604849 <= v0
             ?999946793 <= v0?_eF_:_eI_
             :106380200 <= v0?_eJ_:_eK_
           :-71406943 <= v0?_eL_:_eM_,
         v0$0=v1[2],
         v1$0=[1,[0,_eG_,[0,caml_call1(Core_kernel[557],v0$0),0]]],
         v0$1=v2[2],
         v2$0=[1,[0,_eH_,[0,caml_call1(Core_kernel[455],v0$1),0]]],
         v3$0=caml_call1(Core_kernel[614],v3);
        return [1,[0,_k5_,[0,v1$0,[0,v2$0,[0,v3$0,0]]]]]}
      return caml_call5
              (Core_kernel_Error[13],0,0,cst_type_conversion_failure,x,_k4_)}
    function multiple_registrations(x)
     {function _k3_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=v0[2],
         v0$1=[1,[0,_eN_,[0,caml_call1(Core_kernel[557],v0$0),0]]],
         v0$2=v1[2],
         v1$0=[1,[0,_eO_,[0,caml_call1(Core_kernel[455],v0$2),0]]];
        return [1,[0,v0$1,[0,v1$0,0]]]}
      return caml_call5
              (Core_kernel_Error[13],
               0,
               0,
               cst_multiple_rpc_registrations,
               x,
               _k3_)}
    function name$3(r){return r[1]}
    function create$11(name){return [0,name,Core_kernel_Int[120][4]]}
    function add$0(param,rpc,adapter)
     {var adapters=param[2],name=param[1],_kZ_=caml_call1(_eC_[2],rpc);
      if(caml_call2(Core_kernel_String[115],name,_kZ_))
       {var
         _k0_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[557],v0),
             v1$0=caml_call1(Core_kernel[557],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]},
         _k1_=[0,name,caml_call1(_eC_[2],rpc)];
        return caml_call4
                (Core_kernel_Or_error[43],
                 0,
                 cst_Rpc_names_don_t_agree,
                 _k1_,
                 _k0_)}
      var
       version=caml_call1(_eC_[3],rpc),
       match=caml_call2(Core_kernel_Map[30],adapters,version);
      if(match)
       {var
         _k2_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[557],v0),
             v1$0=caml_call1(Core_kernel[455],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]};
        return caml_call4
                (Core_kernel_Or_error[43],
                 0,
                 cst_Version_already_exists,
                 [0,name,version],
                 _k2_)}
      var adapters$0=caml_call3(Core_kernel_Map[24],adapters,version,adapter);
      return [0,[0,name,adapters$0]]}
    function add_rpc_version(t,old_rpc,upgrade,downgrade)
     {function adapt(fn)
       {function adapted(state,old_query)
         {function _kX_(result){return caml_call1(downgrade,result)}
          var _kY_=caml_call2(fn,state,caml_call1(upgrade,old_query));
          return caml_call2(Async_kernel[50],_kY_,_kX_)}
        return caml_call2(_eC_[7],old_rpc,adapted)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_rpc_version_with_failure
     (t,old_rpc,upgrade_or_error,downgrade_or_error)
     {function adapt(fn)
       {function _kO_(state,old_query)
         {function _kP_(param)
           {if(0 === param[0]){var value=param[1];return [0,value]}
            var error=param[1];
            return [1,caml_call1(Core_kernel_Error[7],error)]}
          function _kQ_(query)
           {function _kU_(response)
             {var _kW_=caml_call1(downgrade_or_error,response);
              return caml_call1(Async_kernel[48],_kW_)}
            var _kV_=caml_call2(fn,state,query);
            return caml_call2(Async_kernel_Deferred_result[4][1],_kV_,_kU_)}
          var
           _kR_=caml_call1(upgrade_or_error,old_query),
           _kS_=caml_call1(Async_kernel[48],_kR_),
           _kT_=caml_call2(Async_kernel_Deferred_result[4][1],_kS_,_kQ_);
          return caml_call2(Async_kernel[50],_kT_,_kP_)}
        return caml_call2(_eC_[7],old_rpc,_kO_)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_version(t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_eC_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version(t,rpc,upgrade,downgrade)}
    function add_version_with_failure
     (t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_eC_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version_with_failure(t,rpc,upgrade,downgrade)}
    function implement$7(t,fn)
     {function _kM_(param){var adapt=param[1];return caml_call1(adapt,fn)}
      var _kN_=caml_call1(Core_kernel_Map[57],t[2]);
      return caml_call2(Core_kernel_List[84],_kN_,_kM_)}
    function Make(_kv_)
     {var _kw_=_kv_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_eP_,0);
      function implement_multi(log_not_previously_seen_version,f)
       {if(log_not_previously_seen_version)
         var
          f$0=log_not_previously_seen_version[1],
          _kI_=caml_call1(f$0,_kw_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_kI_);
        else
         var log_version=function(_kL_){return 0};
        function _kJ_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _kK_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_kK_,_kJ_)}
      function rpcs(param)
       {function _kG_(param){var rpc=param[2];return rpc}
        var _kH_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_kH_,_kG_)}
      function versions(param)
       {var _kF_=caml_call1(Core_kernel_Hashtbl[58],registry);
        return caml_call1(Core_kernel_Int[121][57],_kF_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_eC_[1],_kw_,Version_i[17],Version_i[1],Version_i[9]);
        function implement(log_version,f)
         {function _ky_(s,q)
           {caml_call1(log_version,Version_i[17]);
            function _kz_(param){return caml_call1(Version_i[18],q)}
            var match=caml_call1(Core_kernel_Result[43],_kz_);
            if(0 === match[0])
             {var
               q$0=match[1],
               _kA_=
                function(r)
                 {function _kD_(param){return caml_call1(Version_i[19],r)}
                  var match=caml_call1(Core_kernel_Result[43],_kD_);
                  if(0 === match[0]){var r$0=match[1];return r$0}
                  var
                   exn=match[1],
                   _kE_=
                    failed_conversion
                     ([0,
                       -71406943,
                       [0,4102853,_kw_],
                       [0,-901574920,Version_i[17]],
                       exn]);
                  return caml_call1(Core_kernel_Error[23],_kE_)},
               _kB_=caml_call3(f,s,Version_i[17],q$0);
              return caml_call2(Async_kernel[50],_kB_,_kA_)}
            var
             exn=match[1],
             _kC_=
              failed_conversion
               ([0,
                 -250086680,
                 [0,4102853,_kw_],
                 [0,-901574920,Version_i[17]],
                 exn]);
            return caml_call1(Core_kernel_Error[23],_kC_)}
          return caml_call2(_eC_[7],rpc,_ky_)}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[17]);
        if(match)
         {var
           _kx_=
            multiple_registrations
             ([0,[0,4102853,_kw_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[23],_kx_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],
           registry,
           Version_i[17],
           [0,[0,implement],[0,rpc]]);
        return [0,rpc]}
      return [0,_kw_,registry,implement_multi,rpcs,versions,Register]}
    function Make$0(_j3_)
     {var _j4_=_j3_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_eQ_,0);
      function implement_multi_gen(log_not_previously_seen_version,impl)
       {if(log_not_previously_seen_version)
         var
          f=log_not_previously_seen_version[1],
          _kr_=caml_call1(f,_j4_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_kr_);
        else
         var log_version=function(_ku_){return 0};
        function _ks_(param)
         {var i=param[1];return caml_call2(i[1],log_version,impl)}
        var _kt_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_kt_,_ks_)}
      function implement_multi(log_not_previously_seen_version,f)
       {return implement_multi_gen(log_not_previously_seen_version,[0,f])}
      function implement_direct_multi(log_not_previously_seen_version,f)
       {return implement_multi_gen(log_not_previously_seen_version,[1,f])}
      function rpcs(param)
       {function _kp_(param){var rpc=param[2];return rpc}
        var _kq_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_kq_,_kp_)}
      function versions(param)
       {var _ko_=caml_call1(Core_kernel_Int[125][57],registry);
        return caml_call1(Core_kernel_Int[121][57],_ko_)}
      function Make_shared(Version_i,Convert)
       {var
         _j5_=Version_i[17],
         _j6_=Version_i[9],
         _j7_=Version_i[1],
         _j8_=Version_i[25],
         _j9_=caml_call2(Core_kernel_Option[56],Version_i[28],0),
         rpc=caml_call7(_eB_[3],_j9_,_j4_,_j8_,_j7_,_j6_,_j5_,0);
        function wrapped_model_of_query(q)
         {try
           {var q$0=caml_call1(Version_i[26],q);return q$0}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _kn_=
              failed_conversion
               ([0,
                 -71406943,
                 [0,4102853,_j4_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[23],_kn_)}}
        function wrapped_error_of_model(error)
         {try
           {var error$0=caml_call1(Version_i[27],error)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _km_=
              failed_conversion
               ([0,
                 106380200,
                 [0,4102853,_j4_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[23],_km_)}
          return [1,error$0]}
        function implement(log_version,impl)
         {if(0 === impl[0])
           {var
             f=impl[1],
             _j$_=
              function(s,q)
               {caml_call1(log_version,Version_i[25]);
                function _ke_(param)
                 {if(0 === param[0])
                   {var
                     pipe=param[1],
                     _kh_=
                      function(exn)
                       {var
                         _kl_=
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_j4_],
                             [0,-901574920,Version_i[25]],
                             exn]);
                        return caml_call1(Core_kernel_Error[23],_kl_)},
                     _ki_=
                      function(param)
                       {var _kk_=[0,caml_call1(Convert[2],pipe)];
                        return caml_call1(Async_kernel[48],_kk_)};
                    return caml_call5(Async_kernel_Monitor[20],0,0,0,_ki_,_kh_)}
                  var error=param[1],_kj_=wrapped_error_of_model(error);
                  return caml_call1(Async_kernel[48],_kj_)}
                var
                 _kf_=wrapped_model_of_query(q),
                 _kg_=caml_call3(f,s,Version_i[25],_kf_);
                return caml_call2(Async_kernel[49],_kg_,_ke_)};
            return caml_call2(_eB_[7],rpc,_j$_)}
          var
           f$0=impl[1],
           convert_elt=caml_call1(Core_kernel_Or_error[40],Convert[1]);
          function _ka_(s,q,dsw)
           {var writer=[0,convert_elt,dsw];
            function _kb_(param)
             {if(0 === param[0])return _eR_;
              var error=param[1];
              return wrapped_error_of_model(error)}
            var
             _kc_=wrapped_model_of_query(q),
             _kd_=caml_call4(f$0,s,Version_i[25],_kc_,writer);
            return caml_call2(Async_kernel[50],_kd_,_kb_)}
          return caml_call2(_eB_[9],rpc,_ka_)}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[25]);
        if(match)
         {var
           _j__=
            multiple_registrations
             ([0,[0,4102853,_j4_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[23],_j__)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],
           registry,
           Version_i[25],
           [0,[0,implement],[1,rpc]]);
        return [0,rpc,wrapped_model_of_query,wrapped_error_of_model,implement]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1
           (Core_kernel_Or_error[45],
            cst_cannot_use_direct_interface_with_Register_raw),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(pipe)
         {return caml_call2(Async_kernel_Pipe[56],pipe,Version_i[29])}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _j4_,
              registry,
              implement_multi_gen,
              implement_multi,
              implement_direct_multi,
              rpcs,
              versions,
              Make_shared,
              Register_raw,
              Register]}
    function Make$1(_jQ_)
     {var _jR_=_jQ_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_eT_,0);
      function implement_multi(log_not_previously_seen_version,f)
       {if(log_not_previously_seen_version)
         var
          f$0=log_not_previously_seen_version[1],
          _jZ_=caml_call1(f$0,_jR_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_jZ_);
        else
         var log_version=function(_j2_){return 0};
        function _j0_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _j1_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_j1_,_j0_)}
      function rpcs(param)
       {function _jX_(param){var rpc=param[2];return rpc}
        var _jY_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_jY_,_jX_)}
      function versions(param)
       {var _jW_=caml_call1(Core_kernel_Hashtbl[58],registry);
        return caml_call1(Core_kernel_Int[121][57],_jW_)}
      function Register(Version_i)
       {var rpc=caml_call3(_ez_[1],_jR_,Version_i[9],Version_i[1]);
        function implement(log_version,f)
         {function _jT_(s,q)
           {caml_call1(log_version,Version_i[9]);
            function _jU_(param){return caml_call1(Version_i[10],q)}
            var match=caml_call1(Core_kernel_Result[43],_jU_);
            if(0 === match[0])
             {var q$0=match[1];return caml_call3(f,s,Version_i[9],q$0)}
            var
             exn=match[1],
             _jV_=
              failed_conversion
               ([0,3854881,[0,4102853,_jR_],[0,-901574920,Version_i[9]],exn]);
            return caml_call1(Core_kernel_Error[23],_jV_)}
          return caml_call2(_ez_[6],rpc,_jT_)}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[9]);
        if(match)
         {var
           _jS_=
            multiple_registrations
             ([0,[0,4102853,_jR_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[23],_jS_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],
           registry,
           Version_i[9],
           [0,[0,implement],[3,rpc]]);
        return [0,rpc]}
      return [0,_jR_,registry,implement_multi,rpcs,versions,Register]}
    var
     Model=[0,name$4],
     include$3=Make(Model),
     _eU_=include$3[3],
     _eV_=include$3[6],
     _eW_=Model[1],
     _eX_=Core_kernel[593],
     _eY_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_query),0,_eX_],0],
     _eZ_=
      caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_versioned_rpc_ml_604_6),
     group$12=caml_call2(Bin_prot_Shape[6],_eZ_,_eY_),
     _e0_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_query$0),
     bin_shape_query=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$12,_e0_),0),
     _e1_=Core_kernel[590],
     _e2_=Core_kernel[591],
     bin_writer_query=[0,_e1_,_e2_],
     _e3_=Core_kernel[588],
     _e4_=Core_kernel[587],
     bin_reader_query=[0,_e4_,_e3_],
     bin_query$2=[0,bin_shape_query,bin_writer_query,bin_reader_query],
     _e5_=
      caml_call1
       (Bin_prot_Shape[7],[0,Core_kernel[552],[0,Core_kernel[450],0]]),
     _e6_=caml_call1(Core_kernel[509],_e5_),
     _e7_=
      [0,
       [0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_response$1),0,_e6_],
       0],
     _e8_=
      caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_versioned_rpc_ml_605_6),
     group$13=caml_call2(Bin_prot_Shape[6],_e8_,_e7_),
     _e9_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_response$2),
     bin_shape_response=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$13,_e9_),0),
     version$3=1;
    function bin_size_response(v)
     {function _jP_(param)
       {var v2=param[2],v1=param[1],size=caml_call1(Core_kernel[549],v1) | 0;
        return size + caml_call1(Core_kernel[447],v2) | 0}
      return caml_call2(Core_kernel[506],_jP_,v)}
    function bin_write_response(buf,pos,v)
     {function _jO_(buf,pos,param)
       {var
         v2=param[2],
         v1=param[1],
         pos$0=caml_call3(Core_kernel[550],buf,pos,v1);
        return caml_call3(Core_kernel[448],buf,pos$0,v2)}
      return caml_call3(caml_call1(Core_kernel[507],_jO_),buf,pos,v)}
    var bin_writer_response=[0,bin_size_response,bin_write_response];
    function bin_read_response(buf,pos_ref,vint)
     {function _jN_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[546],buf,pos_ref),
         v2=caml_call2(Core_kernel[444],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call3(caml_call1(Core_kernel[504],_jN_),buf,pos_ref,vint)}
    function bin_read_response$0(buf,pos_ref)
     {function _jM_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[546],buf,pos_ref),
         v2=caml_call2(Core_kernel[444],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call2(caml_call1(Core_kernel[503],_jM_),buf,pos_ref)}
    var
     bin_reader_response=[0,bin_read_response$0,bin_read_response],
     bin_response$1=
      [0,bin_shape_response,bin_writer_response,bin_reader_response];
    function model_of_query(q){return q}
    var _e__=Core_kernel_List[84];
    function _e$_(param)
     {var version=param[2],name=param[1];return [0,name,version]}
    function response_of_model(_jL_){return caml_call2(_e__,_jL_,_e$_)}
    var
     include$4=
      caml_call1
       (_eV_,
        [0,
         bin_query$2,
         _e4_,
         _e3_,
         bin_reader_query,
         _e1_,
         _e2_,
         bin_writer_query,
         bin_shape_query,
         bin_response$1,
         bin_read_response$0,
         bin_read_response,
         bin_reader_response,
         bin_size_response,
         bin_write_response,
         bin_writer_response,
         bin_shape_response,
         version$3,
         model_of_query,
         response_of_model]),
     rpc=include$4[1];
    function add$1(impls)
     {var
       menu=caml_call2(Core_kernel_List[84],impls,_eE_[1]),
       menu_impls=
        caml_call2
         (_eU_,
          0,
          function(param,_jK_,_jJ_){return caml_call1(Async_kernel[48],menu)});
      return caml_call2(Core_kernel[269],impls,menu_impls)}
    function supported_rpcs(t)
     {function _jF_(param)
       {var versions=param[2],name=param[1];
        function _jH_(version){return [0,name,version]}
        var _jI_=caml_call1(Core_kernel_Int[121][15],versions);
        return caml_call2(Base_List[23][2],_jI_,_jH_)}
      var _jG_=caml_call1(Core_kernel_String[135][68],t);
      return caml_call2(Base_List[23][1],_jG_,_jF_)}
    function supported_versions(t,rpc_name)
     {var
       _jD_=Core_kernel_Int[121][54],
       _jE_=caml_call2(Core_kernel_Hashtbl[51],t,rpc_name);
      return caml_call2(Core_kernel_Option[51],_jE_,_jD_)}
    function of_entries(entries)
     {var
       _jB_=Core_kernel_Int[121][57],
       _jC_=caml_call3(Core_kernel_String[135][9],0,0,entries);
      return caml_call2(Core_kernel_Hashtbl[38],_jC_,_jB_)}
    function request(conn)
     {function _jz_(result)
       {return caml_call2(Core_kernel_Result[36],result,of_entries)}
      var _jA_=caml_call3(_eC_[11],rpc,conn,0);
      return caml_call2(Async_kernel[50],_jA_,_jz_)}
    function create$12(descriptions)
     {function _jy_(param)
       {var version=param[2],name=param[1];return [0,name,version]}
      return of_entries(caml_call2(Core_kernel_List[84],descriptions,_jy_))}
    function menu(r){return r[2]}
    function connection(r){return r[1]}
    function create$13(connection)
     {function _jw_(menu){return [0,connection,menu]}
      var _jx_=request(connection);
      return caml_call2(Async_kernel_Deferred_or_error[12][2],_jx_,_jw_)}
    function create_directly(connection,menu){return [0,connection,menu]}
    function Make$2(M)
     {function with_specific_version
       (version,connection,name,query,dispatcher,registry)
       {var match=caml_call2(Core_kernel_Hashtbl[51],registry,version);
        if(match)
         {var match$0=match[1],dispatch=match$0[1];
          return caml_call3(dispatcher,dispatch,connection,query)}
        var x=[0,name,version];
        function _ju_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[557],v0),
           v1$0=caml_call1(Core_kernel[455],v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        var
         _jv_=
          [1,
           caml_call5
            (Core_kernel_Error[13],0,0,cst_unknown_rpc_version,x,_ju_)];
        return caml_call1(M[5],_jv_)}
      function with_version_menu
       (param,query,name,versions,registry,dispatcher)
       {var
         menu=param[2],
         connection=param[1],
         callee_versions=supported_versions(menu,name),
         caller_versions=caml_call1(versions,0),
         _js_=caml_call2(Core_kernel_Set[15],callee_versions,caller_versions),
         match=caml_call1(Core_kernel_Set[59],_js_);
        if(match)
         var version=match[1],match$0=[0,version];
        else
         var
          _jt_=
           function(param)
            {var
              v2=param[3],
              v1=param[2],
              v0=param[1],
              v0$0=v0[2],
              v0$1=[1,[0,_fa_,[0,caml_call1(Core_kernel[557],v0$0),0]]],
              v0$2=v1[2],
              v1$0=
               [1,[0,_fb_,[0,caml_call1(Core_kernel_Int[121][74],v0$2),0]]],
              v0$3=v2[2],
              v2$0=
               [1,[0,_fc_,[0,caml_call1(Core_kernel_Int[121][74],v0$3),0]]];
             return [1,[0,v0$1,[0,v1$0,[0,v2$0,0]]]]},
          match$0=
           caml_call4
            (Core_kernel_Or_error[43],
             0,
             cst_caller_and_callee_share_no_common_versions_for_rpc,
             [0,
              [0,4102853,name],
              [0,45518767,caller_versions],
              [0,1055816028,callee_versions]],
             _jt_);
        if(0 === match$0[0])
         {var version$0=match$0[1];
          return with_specific_version
                  (version$0,connection,name,query,dispatcher,registry)}
        var e=match$0[1];
        return caml_call1(M[5],[1,e])}
      return [0,with_specific_version,with_version_menu]}
    var
     Async=
      Make$2
       ([0,
         Async_kernel_Deferred[8],
         Async_kernel_Deferred[9],
         Async_kernel_Deferred[10],
         Async_kernel_Deferred[11],
         Async_kernel_Deferred[12],
         Async_kernel_Deferred[13],
         Async_kernel_Deferred[14],
         Async_kernel_Deferred[15],
         Async_kernel_Deferred[23],
         Async_kernel_Deferred[24],
         Async_kernel_Deferred[16],
         Async_kernel_Deferred[17]]),
     Direct=Make$2(Base_Monad[5]);
    function Make$3(_je_)
     {var _jf_=_je_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fd_,0);
      function rpcs(param)
       {function _jq_(param){var rpc=param[2];return rpc}
        var _jr_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_jr_,_jq_)}
      function versions(param)
       {var _jp_=caml_call1(Core_kernel_Int[125][57],registry);
        return caml_call1(Core_kernel_Int[121][57],_jp_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jn_(_jo_){return _jo_}
        return caml_call6
                (Async[2],conn_with_menu,query,_jf_,versions,registry,_jn_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_eC_[1],_jf_,Version_i[17],Version_i[1],Version_i[9]);
        function dispatch(conn,q)
         {function _jh_(param){return caml_call1(Version_i[18],q)}
          var match=caml_call1(Core_kernel_Result[43],_jh_);
          if(0 === match[0])
           {var
             q$0=match[1],
             _ji_=
              function(result)
               {function _jl_(r)
                 {function _jm_(param){return caml_call1(Version_i[19],r)}
                  var match=caml_call1(Core_kernel_Result[43],_jm_);
                  if(0 === match[0]){var r$0=match[1];return [0,r$0]}
                  var exn=match[1];
                  return [1,
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_jf_],
                             [0,-901574920,Version_i[17]],
                             exn])]}
                return caml_call2(Core_kernel_Result[17],result,_jl_)},
             _jj_=caml_call3(_eC_[11],rpc,conn,q$0);
            return caml_call2(Async_kernel[50],_jj_,_ji_)}
          var
           exn=match[1],
           _jk_=
            [1,
             failed_conversion
              ([0,
                -250086680,
                [0,4102853,_jf_],
                [0,-901574920,Version_i[17]],
                exn])];
          return caml_call1(Async_kernel[48],_jk_)}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[17]);
        if(match)
         {var
           _jg_=
            multiple_registrations
             ([0,[0,4102853,_jf_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[23],_jg_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],
           registry,
           Version_i[17],
           [0,dispatch,[0,rpc]]);
        return [0,rpc]}
      return [0,_jf_,registry,rpcs,versions,dispatch_multi,Register]}
    function Make$4(_iP_)
     {var _iQ_=_iP_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fe_,0);
      function rpcs(param)
       {function _jc_(param){var rpc=param[2];return rpc}
        var _jd_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_jd_,_jc_)}
      function versions(param)
       {var _jb_=caml_call1(Core_kernel_Int[125][57],registry);
        return caml_call1(Core_kernel_Int[121][57],_jb_)}
      function dispatch_iter_multi(conn_with_menu,query,f)
       {function _ja_(param,conn,query)
         {var dispatch_iter=param[2];
          return caml_call3(dispatch_iter,conn,query,f)}
        return caml_call6
                (Async[2],conn_with_menu,query,_iQ_,versions,registry,_ja_)}
      function dispatch_multi(conn_with_menu,query)
       {function _i$_(param,conn,query)
         {var dispatch=param[1];return caml_call2(dispatch,conn,query)}
        return caml_call6
                (Async[2],conn_with_menu,query,_iQ_,versions,registry,_i$_)}
      function Make_shared(Version_i,Convert)
       {var
         _iS_=Version_i[17],
         _iT_=Version_i[9],
         _iU_=Version_i[1],
         _iV_=Version_i[25],
         _iW_=caml_call2(Core_kernel_Option[56],Version_i[28],0),
         rpc=caml_call7(_eB_[3],_iW_,_iQ_,_iV_,_iU_,_iT_,_iS_,0);
        function wrapped_query_of_model(q)
         {try
           {var q$0=caml_call1(Version_i[26],q)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _i__=
              [1,
               failed_conversion
                ([0,
                  -250086680,
                  [0,4102853,_iQ_],
                  [0,-901574920,Version_i[25]],
                  exn])];
            return caml_call1(Async_kernel[48],_i__)}
          return caml_call1(Async_kernel[48],[0,q$0])}
        function convert_result(result,convert_ok)
         {if(0 === result[0])
           {var _i9_=result[1];
            if(0 === _i9_[0])
             {var ok=_i9_[1];return [0,[0,caml_call1(convert_ok,ok)]]}
            var e=_i9_[1];
            try
             {var e$0=caml_call1(Version_i[27],e)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         106380200,
                         [0,4102853,_iQ_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,[1,e$0]]}
          return result}
        function dispatch(conn,q)
         {function _i5_(q)
           {function _i7_(result)
             {return convert_result
                      (result,
                       function(param)
                        {var id=param[2],pipe=param[1];
                         return [0,caml_call1(Convert[2],pipe),id]})}
            var _i8_=caml_call3(_eB_[10],rpc,conn,q);
            return caml_call2(Async_kernel[50],_i8_,_i7_)}
          var _i6_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[46],_i6_,_i5_)}
        function dispatch_iter(conn,q,f)
         {var convert_elt=caml_call1(Core_kernel_Or_error[40],Convert[1]);
          function _iY_(q)
           {function _i0_(result)
             {return convert_result(result,function(_i4_){return _i4_})}
            function _i1_(message)
             {if(0 === message[0])
               var u=message[1],_i3_=[0,caml_call1(convert_elt,u)];
              else
               var _i3_=message;
              return caml_call1(f,_i3_)}
            var _i2_=caml_call4(_eB_[14],rpc,conn,q,_i1_);
            return caml_call2(Async_kernel[50],_i2_,_i0_)}
          var _iZ_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[46],_iZ_,_iY_)}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[25]);
        if(match)
         {var
           _iX_=
            multiple_registrations
             ([0,[0,4102853,_iQ_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[23],_iX_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],
           registry,
           Version_i[25],
           [0,[0,dispatch,dispatch_iter],[1,rpc]]);
        return [0,
                rpc,
                wrapped_query_of_model,
                convert_result,
                dispatch,
                dispatch_iter]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1
           (Core_kernel_Or_error[45],cst_Cannot_use_Direct_with_Register_raw),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(rs)
         {function _iR_(r)
           {try
             {var r$0=caml_call1(Version_i[29],r)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         -71406943,
                         [0,4102853,_iQ_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,r$0]}
          return caml_call2(Async_kernel_Pipe[56],rs,_iR_)}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _iQ_,
              registry,
              rpcs,
              versions,
              dispatch_iter_multi,
              dispatch_multi,
              Make_shared,
              Register_raw,
              Register]}
    function Make$5(_iG_)
     {var _iH_=_iG_[1],registry=caml_call3(Core_kernel_Int[125][4],0,_fg_,0);
      function rpcs(param)
       {function _iN_(param){var rpc=param[2];return rpc}
        var _iO_=caml_call1(Core_kernel_Hashtbl[59],registry);
        return caml_call2(Core_kernel_List[84],_iO_,_iN_)}
      function versions(param)
       {var _iM_=caml_call1(Core_kernel_Int[125][57],registry);
        return caml_call1(Core_kernel_Int[121][57],_iM_)}
      function dispatch_multi(conn_with_menu,msg)
       {function _iK_(_iL_){return _iL_}
        return caml_call6
                (Direct[2],conn_with_menu,msg,_iH_,versions,registry,_iK_)}
      function Register(Version_i)
       {var rpc=caml_call3(_ez_[1],_iH_,Version_i[9],Version_i[1]);
        function dispatch(conn,q)
         {function _iJ_(param){return caml_call1(Version_i[10],q)}
          var match=caml_call1(Core_kernel_Result[43],_iJ_);
          if(0 === match[0])
           {var q$0=match[1];return caml_call3(_ez_[9],rpc,conn,q$0)}
          var exn=match[1];
          return [1,
                  failed_conversion
                   ([0,
                     3854881,
                     [0,4102853,_iH_],
                     [0,-901574920,Version_i[9]],
                     exn])]}
        var match=caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[9]);
        if(match)
         {var
           _iI_=
            multiple_registrations
             ([0,[0,4102853,_iH_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[23],_iI_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[33],registry,Version_i[9],[0,dispatch,[3,rpc]]);
        return [0,rpc]}
      return [0,_iH_,registry,rpcs,versions,dispatch_multi,Register]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _fh_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$5([0,name]),Callee=Make$1([0,name]);
         function _iz_(param)
          {var _iE_=caml_call1(Callee[5],0),_iF_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[121][26],_iF_,_iE_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versions_Callee_ve$2,
           0,
           cst_src_versioned_rpc_ml$3,
           1333,
           6,
           74,
           _iz_);
         function Register(Version)
          {var
            version=Version[1],
            bin_msg=Version[2],
            bin_read_msg=Version[3],
            bin_read_msg$0=Version[4],
            bin_reader_msg=Version[5],
            bin_size_msg=Version[6],
            bin_write_msg=Version[7],
            bin_writer_msg=Version[8],
            bin_shape_msg=Version[9],
            callee_model_of_msg=Version[11];
           caml_call1
            (Callee[6],
             [0,
              bin_msg,
              bin_read_msg,
              bin_read_msg$0,
              bin_reader_msg,
              bin_size_msg,
              bin_write_msg,
              bin_writer_msg,
              bin_shape_msg,
              version,
              callee_model_of_msg]);
           var
            version$0=Version[1],
            bin_msg$0=Version[2],
            bin_read_msg$1=Version[3],
            bin_read_msg$2=Version[4],
            bin_reader_msg$0=Version[5],
            bin_size_msg$0=Version[6],
            bin_write_msg$0=Version[7],
            bin_writer_msg$0=Version[8],
            bin_shape_msg$0=Version[9],
            msg_of_caller_model=Version[10],
            include=
             caml_call1
              (Caller[6],
               [0,
                bin_msg$0,
                bin_read_msg$1,
                bin_read_msg$2,
                bin_reader_msg$0,
                bin_size_msg$0,
                bin_write_msg$0,
                bin_writer_msg$0,
                bin_shape_msg$0,
                version$0,
                msg_of_caller_model]),
            _iA_=include[1];
           function _iB_(param)
            {var _iC_=caml_call1(Callee[5],0),_iD_=caml_call1(Caller[4],0);
             return caml_call2(Core_kernel_Int[121][26],_iD_,_iC_)}
           caml_call8
            (Ppx_inline_test_lib_Runtime[4],
             Inline_test_config,
             cst_Int_Set_equal_Caller_versions_Callee_ve$3,
             0,
             cst_src_versioned_rpc_ml$4,
             1350,
             8,
             76,
             _iB_);
           return [0,_iA_]}
         var dispatch_multi=Caller[5],implement_multi=Callee[3];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         return [0,Register,dispatch_multi,implement_multi,rpcs,versions,name]}],
     _fi_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$4([0,name]),Callee=Make$0([0,name]);
         function _iv_(param)
          {var _ix_=caml_call1(Callee[7],0),_iy_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[121][26],_iy_,_ix_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versions_Callee_ve$1,
           0,
           cst_src_versioned_rpc_ml$2,
           1232,
           6,
           74,
           _iv_);
         var
          dispatch_multi=Caller[6],
          dispatch_iter_multi=Caller[5],
          implement_multi=Callee[4],
          implement_direct_multi=Callee[5];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         function _iw_(Version_i)
          {var
            version=Version_i[1],
            bin_query=Version_i[2],
            bin_read_query=Version_i[3],
            bin_read_query$0=Version_i[4],
            bin_reader_query=Version_i[5],
            bin_size_query=Version_i[6],
            bin_write_query=Version_i[7],
            bin_writer_query=Version_i[8],
            bin_shape_query=Version_i[9],
            bin_response=Version_i[10],
            bin_read_response=Version_i[11],
            bin_read_response$0=Version_i[12],
            bin_reader_response=Version_i[13],
            bin_size_response=Version_i[14],
            bin_write_response=Version_i[15],
            bin_writer_response=Version_i[16],
            bin_shape_response=Version_i[17],
            bin_error=Version_i[18],
            bin_read_error=Version_i[19],
            bin_read_error$0=Version_i[20],
            bin_reader_error=Version_i[21],
            bin_size_error=Version_i[22],
            bin_write_error=Version_i[23],
            bin_writer_error=Version_i[24],
            bin_shape_error=Version_i[25],
            callee_model_of_query=Version_i[27],
            error_of_callee_model=Version_i[28],
            client_pushes_back=Version_i[30],
            response_of_callee_model=Version_i[31];
           caml_call1
            (Callee[9],
             [0,
              bin_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_shape_query,
              bin_response,
              bin_read_response,
              bin_read_response$0,
              bin_reader_response,
              bin_size_response,
              bin_write_response,
              bin_writer_response,
              bin_shape_response,
              bin_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_shape_error,
              version,
              callee_model_of_query,
              error_of_callee_model,
              client_pushes_back,
              response_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_query$0=Version_i[2],
            bin_read_query$1=Version_i[3],
            bin_read_query$2=Version_i[4],
            bin_reader_query$0=Version_i[5],
            bin_size_query$0=Version_i[6],
            bin_write_query$0=Version_i[7],
            bin_writer_query$0=Version_i[8],
            bin_shape_query$0=Version_i[9],
            bin_response$0=Version_i[10],
            bin_read_response$1=Version_i[11],
            bin_read_response$2=Version_i[12],
            bin_reader_response$0=Version_i[13],
            bin_size_response$0=Version_i[14],
            bin_write_response$0=Version_i[15],
            bin_writer_response$0=Version_i[16],
            bin_shape_response$0=Version_i[17],
            bin_error$0=Version_i[18],
            bin_read_error$1=Version_i[19],
            bin_read_error$2=Version_i[20],
            bin_reader_error$0=Version_i[21],
            bin_size_error$0=Version_i[22],
            bin_write_error$0=Version_i[23],
            bin_writer_error$0=Version_i[24],
            bin_shape_error$0=Version_i[25],
            query_of_caller_model=Version_i[26],
            caller_model_of_error=Version_i[29],
            client_pushes_back$0=Version_i[30],
            caller_model_of_response=Version_i[32],
            include=
             caml_call1
              (Caller[8],
               [0,
                bin_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_shape_query$0,
                bin_response$0,
                bin_read_response$1,
                bin_read_response$2,
                bin_reader_response$0,
                bin_size_response$0,
                bin_write_response$0,
                bin_writer_response$0,
                bin_shape_response$0,
                bin_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_shape_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_response]),
            rpc=include[1];
           return [0,rpc]}
         return [0,
                 function(Version_i)
                  {var
                    version=Version_i[1],
                    bin_query=Version_i[2],
                    bin_read_query=Version_i[3],
                    bin_read_query$0=Version_i[4],
                    bin_reader_query=Version_i[5],
                    bin_size_query=Version_i[6],
                    bin_write_query=Version_i[7],
                    bin_writer_query=Version_i[8],
                    bin_shape_query=Version_i[9],
                    bin_response=Version_i[10],
                    bin_read_response=Version_i[11],
                    bin_read_response$0=Version_i[12],
                    bin_reader_response=Version_i[13],
                    bin_size_response=Version_i[14],
                    bin_write_response=Version_i[15],
                    bin_writer_response=Version_i[16],
                    bin_shape_response=Version_i[17],
                    bin_error=Version_i[18],
                    bin_read_error=Version_i[19],
                    bin_read_error$0=Version_i[20],
                    bin_reader_error=Version_i[21],
                    bin_size_error=Version_i[22],
                    bin_write_error=Version_i[23],
                    bin_writer_error=Version_i[24],
                    bin_shape_error=Version_i[25],
                    callee_model_of_query=Version_i[27],
                    error_of_callee_model=Version_i[28],
                    client_pushes_back=Version_i[30],
                    response_of_callee_model=Version_i[31];
                   caml_call1
                    (Callee[10],
                     [0,
                      bin_query,
                      bin_read_query,
                      bin_read_query$0,
                      bin_reader_query,
                      bin_size_query,
                      bin_write_query,
                      bin_writer_query,
                      bin_shape_query,
                      bin_response,
                      bin_read_response,
                      bin_read_response$0,
                      bin_reader_response,
                      bin_size_response,
                      bin_write_response,
                      bin_writer_response,
                      bin_shape_response,
                      bin_error,
                      bin_read_error,
                      bin_read_error$0,
                      bin_reader_error,
                      bin_size_error,
                      bin_write_error,
                      bin_writer_error,
                      bin_shape_error,
                      version,
                      callee_model_of_query,
                      error_of_callee_model,
                      client_pushes_back,
                      response_of_callee_model]);
                   var
                    version$0=Version_i[1],
                    bin_query$0=Version_i[2],
                    bin_read_query$1=Version_i[3],
                    bin_read_query$2=Version_i[4],
                    bin_reader_query$0=Version_i[5],
                    bin_size_query$0=Version_i[6],
                    bin_write_query$0=Version_i[7],
                    bin_writer_query$0=Version_i[8],
                    bin_shape_query$0=Version_i[9],
                    bin_response$0=Version_i[10],
                    bin_read_response$1=Version_i[11],
                    bin_read_response$2=Version_i[12],
                    bin_reader_response$0=Version_i[13],
                    bin_size_response$0=Version_i[14],
                    bin_write_response$0=Version_i[15],
                    bin_writer_response$0=Version_i[16],
                    bin_shape_response$0=Version_i[17],
                    bin_error$0=Version_i[18],
                    bin_read_error$1=Version_i[19],
                    bin_read_error$2=Version_i[20],
                    bin_reader_error$0=Version_i[21],
                    bin_size_error$0=Version_i[22],
                    bin_write_error$0=Version_i[23],
                    bin_writer_error$0=Version_i[24],
                    bin_shape_error$0=Version_i[25],
                    query_of_caller_model=Version_i[26],
                    caller_model_of_error=Version_i[29],
                    client_pushes_back$0=Version_i[30],
                    caller_model_of_response=Version_i[32],
                    include=
                     caml_call1
                      (Caller[9],
                       [0,
                        bin_query$0,
                        bin_read_query$1,
                        bin_read_query$2,
                        bin_reader_query$0,
                        bin_size_query$0,
                        bin_write_query$0,
                        bin_writer_query$0,
                        bin_shape_query$0,
                        bin_response$0,
                        bin_read_response$1,
                        bin_read_response$2,
                        bin_reader_response$0,
                        bin_size_response$0,
                        bin_write_response$0,
                        bin_writer_response$0,
                        bin_shape_response$0,
                        bin_error$0,
                        bin_read_error$1,
                        bin_read_error$2,
                        bin_reader_error$0,
                        bin_size_error$0,
                        bin_write_error$0,
                        bin_writer_error$0,
                        bin_shape_error$0,
                        version$0,
                        query_of_caller_model,
                        caller_model_of_error,
                        client_pushes_back$0,
                        caller_model_of_response]),
                    rpc=include[1];
                   return [0,rpc]},
                 _iw_,
                 dispatch_multi,
                 dispatch_iter_multi,
                 implement_multi,
                 implement_direct_multi,
                 rpcs,
                 versions,
                 name]}],
     _fj_=
      [0,
       [0,
        function(Model)
         {var name=Model[1],Caller=Make$3([0,name]),Callee=Make([0,name]);
          function _io_(param)
           {var _it_=caml_call1(Callee[5],0),_iu_=caml_call1(Caller[4],0);
            return caml_call2(Core_kernel_Int[121][26],_iu_,_it_)}
          caml_call8
           (Ppx_inline_test_lib_Runtime[4],
            Inline_test_config,
            cst_Int_Set_equal_Caller_versions_Callee_ve,
            0,
            cst_src_versioned_rpc_ml$0,
            1139,
            6,
            74,
            _io_);
          function Register(Version)
           {var
             version=Version[1],
             bin_query=Version[2],
             bin_read_query=Version[3],
             bin_read_query$0=Version[4],
             bin_reader_query=Version[5],
             bin_size_query=Version[6],
             bin_write_query=Version[7],
             bin_writer_query=Version[8],
             bin_shape_query=Version[9],
             bin_response=Version[10],
             bin_read_response=Version[11],
             bin_read_response$0=Version[12],
             bin_reader_response=Version[13],
             bin_size_response=Version[14],
             bin_write_response=Version[15],
             bin_writer_response=Version[16],
             bin_shape_response=Version[17],
             callee_model_of_query=Version[19],
             response_of_callee_model=Version[20];
            caml_call1
             (Callee[6],
              [0,
               bin_query,
               bin_read_query,
               bin_read_query$0,
               bin_reader_query,
               bin_size_query,
               bin_write_query,
               bin_writer_query,
               bin_shape_query,
               bin_response,
               bin_read_response,
               bin_read_response$0,
               bin_reader_response,
               bin_size_response,
               bin_write_response,
               bin_writer_response,
               bin_shape_response,
               version,
               callee_model_of_query,
               response_of_callee_model]);
            var
             version$0=Version[1],
             bin_query$0=Version[2],
             bin_read_query$1=Version[3],
             bin_read_query$2=Version[4],
             bin_reader_query$0=Version[5],
             bin_size_query$0=Version[6],
             bin_write_query$0=Version[7],
             bin_writer_query$0=Version[8],
             bin_shape_query$0=Version[9],
             bin_response$0=Version[10],
             bin_read_response$1=Version[11],
             bin_read_response$2=Version[12],
             bin_reader_response$0=Version[13],
             bin_size_response$0=Version[14],
             bin_write_response$0=Version[15],
             bin_writer_response$0=Version[16],
             bin_shape_response$0=Version[17],
             query_of_caller_model=Version[18],
             caller_model_of_response=Version[21],
             include=
              caml_call1
               (Caller[6],
                [0,
                 bin_query$0,
                 bin_read_query$1,
                 bin_read_query$2,
                 bin_reader_query$0,
                 bin_size_query$0,
                 bin_write_query$0,
                 bin_writer_query$0,
                 bin_shape_query$0,
                 bin_response$0,
                 bin_read_response$1,
                 bin_read_response$2,
                 bin_reader_response$0,
                 bin_size_response$0,
                 bin_write_response$0,
                 bin_writer_response$0,
                 bin_shape_response$0,
                 version$0,
                 query_of_caller_model,
                 caller_model_of_response]),
             _ip_=include[1];
            function _iq_(param)
             {var _ir_=caml_call1(Callee[5],0),_is_=caml_call1(Caller[4],0);
              return caml_call2(Core_kernel_Int[121][26],_is_,_ir_)}
            caml_call8
             (Ppx_inline_test_lib_Runtime[4],
              Inline_test_config,
              cst_Int_Set_equal_Caller_versions_Callee_ve$0,
              0,
              cst_src_versioned_rpc_ml$1,
              1161,
              8,
              76,
              _iq_);
            return [0,_ip_]}
          var dispatch_multi=Caller[5],implement_multi=Callee[3];
          function versions(param){return caml_call1(Caller[4],0)}
          function rpcs(param){return caml_call1(Caller[3],0)}
          return [0,
                  Register,
                  dispatch_multi,
                  implement_multi,
                  rpcs,
                  versions,
                  name]}],
       _fi_,
       _fh_],
     _fk_=
      [0,
       function(_ig_)
        {var
          _ih_=Make$1(_ig_),
          _ii_=_ih_[1],
          _ij_=_ih_[5],
          _ik_=_ih_[4],
          _il_=_ih_[3],
          _im_=_ih_[6];
         return [0,
                 function(_in_)
                  {return caml_call1
                           (_im_,
                            [0,
                             _in_[2],
                             _in_[3],
                             _in_[4],
                             _in_[5],
                             _in_[6],
                             _in_[7],
                             _in_[8],
                             _in_[9],
                             _in_[1],
                             _in_[10]])},
                 _il_,
                 _ik_,
                 _ij_,
                 _ii_]}],
     _fl_=
      [0,
       function(_hR_)
        {var
          _hQ_=_hR_[1],
          registry=caml_call3(Core_kernel_Int[125][4],0,_eS_,0);
         function implement_multi(log_not_previously_seen_version,f)
          {if(log_not_previously_seen_version)
            var
             f$0=log_not_previously_seen_version[1],
             _ic_=caml_call1(f$0,_hQ_),
             log_version=caml_call3(Core_kernel_Memo[1],0,0,_ic_);
           else
            var log_version=function(_if_){return 0};
           function _id_(param)
            {var i=param[1];return caml_call2(i[1],log_version,f)}
           var _ie_=caml_call1(Core_kernel_Hashtbl[59],registry);
           return caml_call2(Core_kernel_List[84],_ie_,_id_)}
         function rpcs(param)
          {function _ia_(param){var rpc=param[2];return rpc}
           var _ib_=caml_call1(Core_kernel_Hashtbl[59],registry);
           return caml_call2(Core_kernel_List[84],_ib_,_ia_)}
         function versions(param)
          {var _h$_=caml_call1(Core_kernel_Int[125][57],registry);
           return caml_call1(Core_kernel_Int[121][57],_h$_)}
         function Register_raw(Version_i)
          {var
            _hT_=Version_i[25],
            _hU_=Version_i[17],
            _hV_=Version_i[9],
            _hW_=Version_i[1],
            _hX_=Version_i[33],
            _hY_=caml_call2(Core_kernel_Option[56],Version_i[37],0),
            rpc=caml_call8(_eA_[3],_hY_,_hQ_,_hX_,_hW_,_hV_,_hU_,_hT_,0);
           function implement(log_version,f)
            {function _h0_(s,q)
              {caml_call1(log_version,Version_i[33]);
               try
                {var q$0=caml_call1(Version_i[34],q)}
               catch(exn)
                {exn = caml_wrap_exception(exn);
                 var
                  _h1_=
                   failed_conversion
                    ([0,
                      -71406943,
                      [0,4102853,_hQ_],
                      [0,-901574920,Version_i[33]],
                      exn]);
                 return caml_call1(Core_kernel_Error[23],_h1_)}
               function _h2_(param)
                {if(0 === param[0])
                  {var match=param[1],pipe=match[2],model_state=match[1];
                   try
                    {var
                      state$0=caml_call1(Version_i[35],model_state),
                      state=state$0}
                   catch(exn)
                    {exn = caml_wrap_exception(exn);
                     var
                      _h4_=
                       failed_conversion
                        ([0,
                          389604849,
                          [0,4102853,_hQ_],
                          [0,-901574920,Version_i[33]],
                          exn]),
                      state=caml_call1(Core_kernel_Error[23],_h4_)}
                   var
                    _h5_=
                     function(exn)
                      {var
                        _h__=
                         failed_conversion
                          ([0,
                            999946793,
                            [0,4102853,_hQ_],
                            [0,-901574920,Version_i[33]],
                            exn]);
                       return caml_call1(Core_kernel_Error[23],_h__)},
                    _h6_=
                     function(param)
                      {var
                        _h9_=
                         [0,[0,state,caml_call2(Version_i[38],model_state,pipe)]];
                       return caml_call1(Async_kernel[48],_h9_)};
                   return caml_call5(Async_kernel_Monitor[20],0,0,0,_h6_,_h5_)}
                 var error=param[1];
                 try
                  {var error$0=caml_call1(Version_i[36],error),switch$0=0}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   var
                    _h7_=
                     failed_conversion
                      ([0,
                        106380200,
                        [0,4102853,_hQ_],
                        [0,-901574920,Version_i[33]],
                        exn]),
                    _h8_=caml_call1(Core_kernel_Error[23],_h7_),
                    switch$0=1}
                 if(! switch$0)var _h8_=[1,error$0];
                 return caml_call1(Async_kernel[48],_h8_)}
               var _h3_=caml_call3(f,s,Version_i[33],q$0);
               return caml_call2(Async_kernel[49],_h3_,_h2_)}
             return caml_call2(_eA_[8],rpc,_h0_)}
           var
            match=
             caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[33]);
           if(match)
            {var
              _hZ_=
               multiple_registrations
                ([0,[0,4102853,_hQ_],[0,-901574920,Version_i[33]]]);
             caml_call1(Core_kernel_Error[23],_hZ_)}
           else
            caml_call3
             (Core_kernel_Hashtbl[33],
              registry,
              Version_i[33],
              [0,[0,implement],[2,rpc]]);
           return [0,rpc]}
         function Register(Version_i)
          {var
            bin_query=Version_i[1],
            bin_read_query=Version_i[2],
            bin_read_query$0=Version_i[3],
            bin_reader_query=Version_i[4],
            bin_size_query=Version_i[5],
            bin_write_query=Version_i[6],
            bin_writer_query=Version_i[7],
            bin_shape_query=Version_i[8],
            bin_state=Version_i[9],
            bin_read_state=Version_i[10],
            bin_read_state$0=Version_i[11],
            bin_reader_state=Version_i[12],
            bin_size_state=Version_i[13],
            bin_write_state=Version_i[14],
            bin_writer_state=Version_i[15],
            bin_shape_state=Version_i[16],
            bin_update=Version_i[17],
            bin_read_update=Version_i[18],
            bin_read_update$0=Version_i[19],
            bin_reader_update=Version_i[20],
            bin_size_update=Version_i[21],
            bin_write_update=Version_i[22],
            bin_writer_update=Version_i[23],
            bin_shape_update=Version_i[24],
            bin_error=Version_i[25],
            bin_read_error=Version_i[26],
            bin_read_error$0=Version_i[27],
            bin_reader_error=Version_i[28],
            bin_size_error=Version_i[29],
            bin_write_error=Version_i[30],
            bin_writer_error=Version_i[31],
            bin_shape_error=Version_i[32],
            version=Version_i[33],
            model_of_query=Version_i[34],
            state_of_model=Version_i[35],
            error_of_model=Version_i[36],
            client_pushes_back=Version_i[37],
            _hS_=Version_i[38];
           function update_of_model(state,pipe)
            {return caml_call2(Async_kernel_Pipe[56],pipe,_hS_)}
           var
            include=
             Register_raw
              ([0,
                bin_query,
                bin_read_query,
                bin_read_query$0,
                bin_reader_query,
                bin_size_query,
                bin_write_query,
                bin_writer_query,
                bin_shape_query,
                bin_state,
                bin_read_state,
                bin_read_state$0,
                bin_reader_state,
                bin_size_state,
                bin_write_state,
                bin_writer_state,
                bin_shape_state,
                bin_update,
                bin_read_update,
                bin_read_update$0,
                bin_reader_update,
                bin_size_update,
                bin_write_update,
                bin_writer_update,
                bin_shape_update,
                bin_error,
                bin_read_error,
                bin_read_error$0,
                bin_reader_error,
                bin_size_error,
                bin_write_error,
                bin_writer_error,
                bin_shape_error,
                version,
                model_of_query,
                state_of_model,
                error_of_model,
                client_pushes_back,
                update_of_model]),
            rpc=include[1];
           return [0,rpc]}
         return [0,Register,Register_raw,implement_multi,rpcs,versions,_hQ_]}],
     _fm_=
      [0,
       function(_hE_)
        {var
          _hF_=Make$0(_hE_),
          _hG_=_hF_[1],
          _hH_=_hF_[7],
          _hI_=_hF_[6],
          _hJ_=_hF_[5],
          _hK_=_hF_[4],
          _hL_=_hF_[9];
         function _hM_(_hP_){return [0,caml_call1(_hL_,_hP_)[1]]}
         var _hN_=_hF_[10];
         return [0,
                 function(_hO_){return [0,caml_call1(_hN_,_hO_)[1]]},
                 _hM_,
                 _hK_,
                 _hJ_,
                 _hI_,
                 _hH_,
                 _hG_]}],
     _fn_=
      [0,
       [0,
        [0,
         create$11,
         name$3,
         add_version,
         add_version_with_failure,
         add_rpc_version,
         add_rpc_version_with_failure,
         implement$7],
        function(_hw_)
         {var
           _hx_=Make(_hw_),
           _hy_=_hx_[1],
           _hz_=_hx_[5],
           _hA_=_hx_[4],
           _hB_=_hx_[3],
           _hC_=_hx_[6];
          return [0,
                  function(_hD_)
                   {return caml_call1
                            (_hC_,
                             [0,
                              _hD_[2],
                              _hD_[3],
                              _hD_[4],
                              _hD_[5],
                              _hD_[6],
                              _hD_[7],
                              _hD_[8],
                              _hD_[9],
                              _hD_[10],
                              _hD_[11],
                              _hD_[12],
                              _hD_[13],
                              _hD_[14],
                              _hD_[15],
                              _hD_[16],
                              _hD_[17],
                              _hD_[1],
                              _hD_[18],
                              _hD_[19]])},
                  _hB_,
                  _hA_,
                  _hz_,
                  _hy_]}],
       _fm_,
       _fl_,
       _fk_],
     _fo_=
      [0,
       function(_ho_)
        {var
          _hp_=Make$5(_ho_),
          _hq_=_hp_[1],
          _hr_=_hp_[4],
          _hs_=_hp_[3],
          _ht_=_hp_[5],
          _hu_=_hp_[6];
         return [0,
                 function(_hv_)
                  {return caml_call1
                           (_hu_,
                            [0,
                             _hv_[2],
                             _hv_[3],
                             _hv_[4],
                             _hv_[5],
                             _hv_[6],
                             _hv_[7],
                             _hv_[8],
                             _hv_[9],
                             _hv_[1],
                             _hv_[10]])},
                 _ht_,
                 _hs_,
                 _hr_,
                 _hq_]}],
     _fp_=
      [0,
       function(_g8_)
        {var
          _g7_=_g8_[1],
          registry=caml_call3(Core_kernel_Int[125][4],0,_ff_,0);
         function rpcs(param)
          {function _hm_(param){var rpc=param[2];return rpc}
           var _hn_=caml_call1(Core_kernel_Hashtbl[59],registry);
           return caml_call2(Core_kernel_List[84],_hn_,_hm_)}
         function versions(param)
          {var _hl_=caml_call1(Core_kernel_Int[125][57],registry);
           return caml_call1(Core_kernel_Int[121][57],_hl_)}
         function dispatch_multi(conn_with_menu,query)
          {function _hj_(_hk_){return _hk_}
           return caml_call6
                   (Async[2],conn_with_menu,query,_g7_,versions,registry,_hj_)}
         function Register_raw(Version_i)
          {var
            _g__=Version_i[25],
            _g$_=Version_i[17],
            _ha_=Version_i[9],
            _hb_=Version_i[1],
            _hc_=Version_i[33],
            _hd_=caml_call2(Core_kernel_Option[56],Version_i[37],0),
            rpc=caml_call8(_eA_[3],_hd_,_g7_,_hc_,_hb_,_ha_,_g$_,_g__,0);
           function dispatch(conn,q)
            {try
              {var q$0=caml_call1(Version_i[34],q)}
             catch(exn)
              {exn = caml_wrap_exception(exn);
               var
                _hf_=
                 [1,
                  failed_conversion
                   ([0,
                     -250086680,
                     [0,4102853,_g7_],
                     [0,-901574920,Version_i[33]],
                     exn])];
               return caml_call1(Async_kernel[48],_hf_)}
             function _hg_(result)
              {if(0 === result[0])
                {var _hi_=result[1];
                 if(0 === _hi_[0])
                  {var match=_hi_[1],id=match[3],pipe=match[2],state=match[1];
                   try
                    {var state$0=caml_call1(Version_i[35],state)}
                   catch(exn)
                    {exn = caml_wrap_exception(exn);
                     return [1,
                             failed_conversion
                              ([0,
                                389604849,
                                [0,4102853,_g7_],
                                [0,-901574920,Version_i[33]],
                                exn])]}
                   return [0,[0,[0,state$0,caml_call1(Version_i[38],pipe),id]]]}
                 var e=_hi_[1];
                 try
                  {var e$0=caml_call1(Version_i[36],e)}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   return [1,
                           failed_conversion
                            ([0,
                              106380200,
                              [0,4102853,_g7_],
                              [0,-901574920,Version_i[33]],
                              exn])]}
                 return [0,[1,e$0]]}
               var exn=result[1];
               return [1,exn]}
             var _hh_=caml_call3(_eA_[9],rpc,conn,q$0);
             return caml_call2(Async_kernel[50],_hh_,_hg_)}
           var
            match=
             caml_call2(Core_kernel_Hashtbl[51],registry,Version_i[33]);
           if(match)
            {var
              _he_=
               multiple_registrations
                ([0,[0,4102853,_g7_],[0,-901574920,Version_i[33]]]);
             caml_call1(Core_kernel_Error[23],_he_)}
           else
            caml_call3
             (Core_kernel_Hashtbl[33],
              registry,
              Version_i[33],
              [0,dispatch,[2,rpc]]);
           return [0,rpc]}
         function Register(Version_i)
          {var
            bin_query=Version_i[1],
            bin_read_query=Version_i[2],
            bin_read_query$0=Version_i[3],
            bin_reader_query=Version_i[4],
            bin_size_query=Version_i[5],
            bin_write_query=Version_i[6],
            bin_writer_query=Version_i[7],
            bin_shape_query=Version_i[8],
            bin_state=Version_i[9],
            bin_read_state=Version_i[10],
            bin_read_state$0=Version_i[11],
            bin_reader_state=Version_i[12],
            bin_size_state=Version_i[13],
            bin_write_state=Version_i[14],
            bin_writer_state=Version_i[15],
            bin_shape_state=Version_i[16],
            bin_update=Version_i[17],
            bin_read_update=Version_i[18],
            bin_read_update$0=Version_i[19],
            bin_reader_update=Version_i[20],
            bin_size_update=Version_i[21],
            bin_write_update=Version_i[22],
            bin_writer_update=Version_i[23],
            bin_shape_update=Version_i[24],
            bin_error=Version_i[25],
            bin_read_error=Version_i[26],
            bin_read_error$0=Version_i[27],
            bin_reader_error=Version_i[28],
            bin_size_error=Version_i[29],
            bin_write_error=Version_i[30],
            bin_writer_error=Version_i[31],
            bin_shape_error=Version_i[32],
            version=Version_i[33],
            query_of_model=Version_i[34],
            model_of_state=Version_i[35],
            model_of_error=Version_i[36],
            client_pushes_back=Version_i[37];
           function model_of_update(rs)
            {function _g9_(r)
              {try
                {var r$0=caml_call1(Version_i[38],r)}
               catch(exn)
                {exn = caml_wrap_exception(exn);
                 return [1,
                         failed_conversion
                          ([0,999946793,[0,4102853,_g7_],[0,-901574920,version],exn])]}
               return [0,r$0]}
             return caml_call2(Async_kernel_Pipe[56],rs,_g9_)}
           var
            include=
             Register_raw
              ([0,
                bin_query,
                bin_read_query,
                bin_read_query$0,
                bin_reader_query,
                bin_size_query,
                bin_write_query,
                bin_writer_query,
                bin_shape_query,
                bin_state,
                bin_read_state,
                bin_read_state$0,
                bin_reader_state,
                bin_size_state,
                bin_write_state,
                bin_writer_state,
                bin_shape_state,
                bin_update,
                bin_read_update,
                bin_read_update$0,
                bin_reader_update,
                bin_size_update,
                bin_write_update,
                bin_writer_update,
                bin_shape_update,
                bin_error,
                bin_read_error,
                bin_read_error$0,
                bin_reader_error,
                bin_size_error,
                bin_write_error,
                bin_writer_error,
                bin_shape_error,
                version,
                query_of_model,
                model_of_state,
                model_of_error,
                client_pushes_back,
                model_of_update]),
            rpc=include[1];
           return [0,rpc]}
         return [0,Register,Register_raw,dispatch_multi,rpcs,versions,_g7_]}],
     _fq_=
      [0,
       function(_gV_)
        {var
          _gW_=Make$4(_gV_),
          _gX_=_gW_[1],
          _gY_=_gW_[4],
          _gZ_=_gW_[3],
          _g0_=_gW_[5],
          _g1_=_gW_[6],
          _g2_=_gW_[8];
         function _g3_(_g6_){return [0,caml_call1(_g2_,_g6_)[1]]}
         var _g4_=_gW_[9];
         return [0,
                 function(_g5_){return [0,caml_call1(_g4_,_g5_)[1]]},
                 _g3_,
                 _g1_,
                 _g0_,
                 _gZ_,
                 _gY_,
                 _gX_]}],
     _fr_=[0,create$13,create_directly,connection,menu],
     Async_rpc_kernel_Versioned_rpc=
      [0,
       [0,add$1,_eU_,request,supported_rpcs,supported_versions,create$12,_eW_],
       _fr_,
       [0,write$5,write_without_pushback$4,close$6,closed$1,is_closed$4],
       [0,
        [0,
         function(_gN_)
          {var
            _gO_=Make$3(_gN_),
            _gP_=_gO_[1],
            _gQ_=_gO_[4],
            _gR_=_gO_[3],
            _gS_=_gO_[5],
            _gT_=_gO_[6];
           return [0,
                   function(_gU_)
                    {return caml_call1
                             (_gT_,
                              [0,
                               _gU_[2],
                               _gU_[3],
                               _gU_[4],
                               _gU_[5],
                               _gU_[6],
                               _gU_[7],
                               _gU_[8],
                               _gU_[9],
                               _gU_[10],
                               _gU_[11],
                               _gU_[12],
                               _gU_[13],
                               _gU_[14],
                               _gU_[15],
                               _gU_[16],
                               _gU_[17],
                               _gU_[1],
                               _gU_[18],
                               _gU_[19]])},
                   _gS_,
                   _gR_,
                   _gQ_,
                   _gP_]}],
        _fq_,
        _fp_,
        _fo_],
       _fn_,
       _fj_];
    caml_register_global
     (722,Async_rpc_kernel_Versioned_rpc,"Async_rpc_kernel__Versioned_rpc");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_pipe_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$48,cst$16);
    function pipe_read(t,f)
     {function _gL_(param)
       {if(3456156 <= param)return caml_call1(f,3456156);
        var res=caml_call3(Async_kernel_Pipe[37],0,0,t);
        if(typeof res === "number")
         if(! (3456156 <= res))return pipe_read(t,f);
        return caml_call1(f,res)}
      var _gM_=caml_call1(Async_kernel_Pipe[43],t);
      return caml_call2(Async_kernel[49],_gM_,_gL_)}
    function create$14(pipe)
     {return [0,pipe,caml_call1(Core_kernel_Bigbuffer[2],Header$0[1])]}
    function Pipe_reader(Data)
     {function sexp_of_t(v)
       {var
         v_buffer=v[2],
         v_pipe=v[1],
         _gK_=Data[1],
         arg=caml_call1(Core_kernel_Bigbuffer[1],v_buffer),
         bnds=[0,[1,[0,_fs_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[4][1],_gK_,v_pipe),
         bnds$0=[0,[1,[0,_ft_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[15],t[1]);
        return Async_kernel_Deferred[19]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function read_forever(t,on_message,on_end_of_batch)
       {var buffer=t[2];
        function process_queue$0(counter,need,queue)
         {for(;;)
           {var match=caml_call1(Core_kernel_Queue[42],queue);
            if(match)
             {var
               data=match[1],
               buff_len=caml_call1(Core_kernel_Bigbuffer[11],buffer),
               data_len=caml_call1(Data[2],data);
              if(caml_call2(Core_kernel_Int[118][3],buff_len,0))
               if(caml_call2(Core_kernel_Int[118][1],data_len,need))
                {var _gG_=caml_call1(Data[4],data),_gH_=0;
                 if(counter < 50)
                  {var counter$0=counter + 1 | 0;
                   return process_data$0(counter$0,_gH_,_gG_,data_len,queue)}
                 return caml_trampoline_return
                         (process_data$0,[0,_gH_,_gG_,data_len,queue])}
              caml_call2(Data[3],buffer,data);
              var _gI_=caml_call1(Core_kernel_Bigbuffer[11],buffer);
              if(caml_call2(Core_kernel_Int[118][1],_gI_,need))
               {var
                 data$0=caml_call1(Core_kernel_Bigbuffer[21],buffer),
                 length=caml_call1(Core_kernel_Bigbuffer[11],buffer),
                 _gJ_=0;
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return process_data$0(counter$1,_gJ_,data$0,length,queue)}
                return caml_trampoline_return
                        (process_data$0,[0,_gJ_,data$0,length,queue])}
              continue}
            return caml_call1(Async_kernel[48],[1,need])}}
        function process_data$0(counter,pos,data,length,queue)
         {if(caml_call2(Core_kernel_Int[118][1],length,Header$0[1]))
           {var
             payload_len=caml_call2(Header$0[2],data,pos),
             total_len=Header$0[1] + payload_len | 0;
            if(caml_call2(Core_kernel_Int[118][1],length,total_len))
             {var
               continue_or_wait=
                caml_call3(on_message,data,pos + Header$0[1] | 0,payload_len);
              if
               (typeof continue_or_wait
                !==
                "number"
                &&
                0
                ===
                continue_or_wait[0])
               {var
                 x=continue_or_wait[1],
                 pos$0=pos + total_len | 0,
                 length$0=length - total_len | 0;
                set_buffer(pos$0,length$0,data);
                var
                 _gE_=
                  function(data){return caml_call2(Data[3],buffer,data)};
                caml_call2(Core_kernel_Queue[15],queue,_gE_);
                return caml_call1(Async_kernel[48],[0,x])}
              var
               _gC_=
                function(param)
                 {var
                   pos$0=pos + total_len | 0,
                   length$0=length - total_len | 0;
                  if(caml_call2(Core_kernel_Int[118][1],length$0,0))
                   return caml_call2(Core_kernel_Int[118][4],length$0,0)
                           ?process_data(pos$0,data,length$0,queue)
                           :set_buffer_and_process_queue
                             (Header$0[1],pos$0,0,queue,data);
                  throw [0,Assert_failure,_fu_]};
              if(typeof continue_or_wait === "number")
               var _gD_=Async_kernel_Deferred[19];
              else
               {if(0 === continue_or_wait[0])throw [0,Assert_failure,_fv_];
                var d=continue_or_wait[1],_gD_=d}
              return caml_call2(Async_kernel[49],_gD_,_gC_)}
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return set_buffer_and_process_queue$0
                      (counter$0,total_len,pos,length,queue,data)}
            return caml_trampoline_return
                    (set_buffer_and_process_queue$0,
                     [0,total_len,pos,length,queue,data])}
          var _gF_=Header$0[1];
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return set_buffer_and_process_queue$0
                    (counter$1,_gF_,pos,length,queue,data)}
          return caml_trampoline_return
                  (set_buffer_and_process_queue$0,
                   [0,_gF_,pos,length,queue,data])}
        function set_buffer_and_process_queue$0
         (counter,need,pos,length,queue,data)
         {set_buffer(pos,length,data);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return process_queue$0(counter$0,need,queue)}
          return caml_trampoline_return(process_queue$0,[0,need,queue])}
        function process_queue(need,queue)
         {return caml_trampoline(process_queue$0(0,need,queue))}
        function process_data(pos,data,length,queue)
         {return caml_trampoline(process_data$0(0,pos,data,length,queue))}
        function set_buffer_and_process_queue(need,pos,length,queue,data)
         {return caml_trampoline
                  (set_buffer_and_process_queue$0
                    (0,need,pos,length,queue,data))}
        function set_buffer(pos,length,data)
         {if(caml_call2(Core_kernel_Int[118][3],length,0))
           return caml_call1(Core_kernel_Bigbuffer[12],buffer);
          var data$0=caml_call3(Core_kernel_Bigstring[41],data,pos,length);
          caml_call1(Core_kernel_Bigbuffer[12],buffer);
          return caml_call2(Core_kernel_Bigbuffer[22],buffer,data$0)}
        function wait_for_read(need)
         {function _gA_(param)
           {if(typeof param === "number")
             return caml_call1(Async_kernel[48],_fw_);
            var queue=param[2],_gB_=process_queue(need,queue);
            return caml_call2(Async_kernel[49],_gB_,end_of_batch_and_continue)}
          return pipe_read(t[1],_gA_)}
        function end_of_batch_and_continue(next)
         {caml_call1(on_end_of_batch,0);
          if(0 === next[0])
           {var result=next[1];return caml_call1(Async_kernel[48],[0,result])}
          var need=next[1];
          return wait_for_read(need)}
        var
         need=Header$0[1],
         length=caml_call1(Core_kernel_Bigbuffer[11],buffer);
        if(caml_call2(Core_kernel_Int[104],length,need))
         return wait_for_read(need);
        var
         data=caml_call1(Core_kernel_Bigbuffer[21],buffer),
         _gz_=
          process_data(0,data,length,caml_call2(Core_kernel_Queue[60],0,0));
        return caml_call2(Async_kernel[49],_gz_,end_of_batch_and_continue)}
      var of_bigstring=Data[5],For_testing=[0,of_bigstring];
      return [0,sexp_of_t,close,is_closed,read_forever,For_testing]}
    function Pipe_writer(Data)
     {function sexp_of_t(v)
       {var
         v_monitor=v[2],
         v_pipe=v[1],
         _gy_=Data[1],
         arg=caml_call1(Async_kernel_Monitor[2],v_monitor),
         bnds=[0,[1,[0,_fx_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[3][1],_gy_,v_pipe),
         bnds$0=[0,[1,[0,_fy_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[14],t[1]);
        return Async_kernel_Deferred[19]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function monitor(t){return t[2]}
      function bytes_to_write(param){return 0}
      function stopped(t){return caml_call1(Async_kernel_Pipe[17],t[1])}
      function flushed(param){return Async_kernel_Deferred[19]}
      function sent_result(x){return [0,x]}
      function check_closed(t,f)
       {return caml_call1(Async_kernel_Pipe[16],t[1])?0:caml_call1(f,0)}
      function send_bin_prot(t,writer,x)
       {return check_closed
                (t,
                 function(param)
                  {var
                    buf=caml_call3(Bin_prot_Utils[4],_fz_,writer,x),
                    _gx_=caml_call1(Data[5],buf);
                   caml_call2(Async_kernel_Pipe[27],t[1],_gx_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring(t,writer,x,buf,pos,payload_size)
       {return check_closed
                (t,
                 function(param)
                  {var
                    data_size=caml_call1(writer[1],x),
                    data=
                     caml_call2
                      (Core_kernel_Bigstring[27],
                       0,
                       (data_size + Header$0[1] | 0) + payload_size | 0);
                   caml_call3(Header$0[3],data,0,data_size + payload_size | 0);
                   var dst_pos=caml_call3(writer[2],data,Header$0[1],x);
                   caml_call5
                    (Core_kernel_Bigstring[38],
                     buf,
                     pos,
                     data,
                     dst_pos,
                     payload_size);
                   var _gw_=caml_call1(Data[5],data);
                   caml_call2(Async_kernel_Pipe[27],t[1],_gw_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring_non_copying(t,writer,x,buf,pos,len)
       {var r=send_bin_prot_and_bigstring(t,writer,x,buf,pos,len);
        if(typeof r !== "number" && 0 === r[0])
         return [0,Async_kernel_Deferred[19]];
        return r}
      return [0,
              sexp_of_t,
              close,
              is_closed,
              monitor,
              bytes_to_write,
              stopped,
              flushed,
              flushed,
              sent_result,
              check_closed,
              send_bin_prot,
              send_bin_prot_and_bigstring,
              send_bin_prot_and_bigstring_non_copying]}
    var
     sexp_of_t$15=Core_kernel_Bigstring[11],
     length$1=Core_kernel_Bigstring[36],
     add_to_bigbuffer=Core_kernel_Bigbuffer[22];
    function to_bigstring(x){return x}
    function of_bigstring(x){return x}
    var
     Bigstring_data=
      [0,sexp_of_t$15,length$1,add_to_bigbuffer,to_bigstring,of_bigstring],
     sexp_of_t$16=Core_kernel_String[106],
     length$2=caml_ml_string_length,
     add_to_bigbuffer$0=Core_kernel_Bigbuffer[15];
    function to_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[29],0,0,x)}
    function of_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[31],0,0,x)}
    var
     String_data=
      [0,
       sexp_of_t$16,
       length$2,
       add_to_bigbuffer$0,
       to_bigstring$0,
       of_bigstring$0],
     Bigstring_pipe_reader=Pipe_reader(Bigstring_data),
     Bigstring_pipe_writer=Pipe_writer(Bigstring_data),
     String_pipe_reader=Pipe_reader(String_data),
     String_pipe_writer=Pipe_writer(String_data),
     Kind=[0,0,1];
    function create$15(kind,reader$0,writer$0)
     {var
       writer=[0,writer$0,caml_call4(Async_kernel_Monitor[4],0,0,0,0)],
       _gu_=
        0 === kind
         ?caml_call2
           (_bQ_[12],
            [0,
             String_pipe_writer[1],
             String_pipe_writer[2],
             String_pipe_writer[3],
             String_pipe_writer[4],
             String_pipe_writer[5],
             String_pipe_writer[6],
             String_pipe_writer[7],
             String_pipe_writer[8],
             String_pipe_writer[11],
             String_pipe_writer[12],
             String_pipe_writer[13]],
            writer)
         :caml_call2
           (_bQ_[12],
            [0,
             Bigstring_pipe_writer[1],
             Bigstring_pipe_writer[2],
             Bigstring_pipe_writer[3],
             Bigstring_pipe_writer[4],
             Bigstring_pipe_writer[5],
             Bigstring_pipe_writer[6],
             Bigstring_pipe_writer[7],
             Bigstring_pipe_writer[8],
             Bigstring_pipe_writer[11],
             Bigstring_pipe_writer[12],
             Bigstring_pipe_writer[13]],
            writer),
       reader=create$14(reader$0),
       _gv_=
        0 === kind
         ?caml_call2
           (_bR_[5],
            [0,
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]],
            reader)
         :caml_call2
           (_bR_[5],
            [0,
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]],
            reader);
      return [0,_gv_,_gu_]}
    function Test_reader(Transport_reader)
     {var expect=caml_call3(Core_kernel_Bigstring[29],0,0,cst_FOOBAR123);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[36],message),
         buf=
          caml_call2
           (Core_kernel_Bigstring[27],0,Header$0[1] + message_len | 0);
        caml_call3(Header$0[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[38],message,0,buf,Header$0[1],message_len);
        return buf}
      function create_message(param){return create_message_buf(expect)}
      function on_message(opt,on_message_count,buffer,pos$0,len)
       {if(opt)var sth=opt[1],message=sth;else var message=expect;
        on_message_count[1] = on_message_count[1] + 1 | 0;
        var
         got=caml_call3(Core_kernel_Bigstring[41],buffer,pos$0,len),
         sexpifier=Core_kernel_Bigstring[11],
         comparator=Core_kernel_Bigstring[9];
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos,
          sexpifier,
          comparator,
          0,
          0,
          0,
          message,
          got);
        return 0}
      function on_end_of_batch(on_end_of_batch_count,param)
       {on_end_of_batch_count[1]++;return 0}
      function wait(param){return caml_call1(Async_kernel_Scheduler[15],0)}
      function run_test(run,verify)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader),
         on_message_count=[0,0],
         on_end_of_batch_count=[0,0],
         _go_=0;
        function on_message$0(_gr_,_gs_,_gt_)
         {return on_message(_go_,on_message_count,_gr_,_gs_,_gt_)}
        function on_end_of_batch$0(_gq_)
         {return on_end_of_batch(on_end_of_batch_count,_gq_)}
        caml_call3
         (Transport_reader[5],reader$0,on_message$0,on_end_of_batch$0);
        wait(0);
        caml_call1
         (run,
          function(x)
           {var _gp_=caml_call1(Transport_reader[1][1],x);
            return caml_call2(Async_kernel_Pipe[27],writer,_gp_)});
        wait(0);
        return caml_call2(verify,on_message_count,on_end_of_batch_count)}
      function verify
       (on_message_count,on_end_of_batch_count,message_count,expect)
       {var sexpifier=Core_kernel[455],comparator=Core_kernel[451];
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos$0,
          sexpifier,
          comparator,
          0,
          0,
          0,
          message_count,
          on_message_count[1]);
        var sexpifier$0=Core_kernel[455],comparator$0=Core_kernel[451];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$1,
                 sexpifier$0,
                 comparator$0,
                 0,
                 0,
                 0,
                 expect,
                 on_end_of_batch_count[1])}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,create_message(0))}
      function write_1_msg_3_chunk(write)
       {var
         buf=
          create_message_buf(caml_call3(Core_kernel_Bigstring[29],0,0,cst$17)),
         _gn_=caml_call1(Core_kernel_Bigstring[36],expect);
        caml_call3(Header$0[3],buf,0,_gn_);
        caml_call1(write,buf);
        wait(0);
        var
         msg_len=caml_call1(Core_kernel_Bigstring[36],expect),
         split_at=msg_len / 2 | 0,
         part1=caml_call3(Core_kernel_Bigstring[41],expect,0,split_at),
         part2=
          caml_call3
           (Core_kernel_Bigstring[41],expect,split_at,msg_len - split_at | 0);
        caml_call1(write,part1);
        wait(0);
        return caml_call1(write,part2)}
      function write_2_msg_1_chunk(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[33],0,[0,one_msg,[0,one_msg,0]]);
        return caml_call1(write,two_msg)}
      function write_2_msg_one_byte_at_a_time_34_chunk(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[33],0,[0,one_msg,[0,one_msg,0]]),
         _gl_=caml_call1(Core_kernel_Bigstring[36],two_msg) - 1 | 0,
         _gk_=0;
        if(! (_gl_ < 0))
         {var i=_gk_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[41],two_msg,i,1));
            wait(0);
            var _gm_=i + 1 | 0;
            if(_gl_ !== i){var i=_gm_;continue}
            break}}
        return 0}
      function _fX_(param)
       {return run_test
                (write_1_msg_1_chunk,
                 function(_gi_)
                  {return function(_gj_){return verify(_gi_,_gj_,1,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_1_chunk_verify_1_1,
        0,
        cst_src_pipe_transport_ml$0,
        385,
        2,
        61,
        _fX_);
      function _fY_(param)
       {function f(write)
         {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
        return run_test
                (f,
                 function(_gg_)
                  {return function(_gh_){return verify(_gg_,_gh_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_2_1,
        0,
        cst_src_pipe_transport_ml$1,
        387,
        2,
        137,
        _fY_);
      function _fZ_(param)
       {return run_test
                (write_1_msg_3_chunk,
                 function(_ge_)
                  {return function(_gf_){return verify(_ge_,_gf_,1,3)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_3_chunk_verify_1_3,
        0,
        cst_src_pipe_transport_ml$2,
        394,
        2,
        65,
        _fZ_);
      function _f0_(param)
       {return run_test
                (write_2_msg_1_chunk,
                 function(_gc_)
                  {return function(_gd_){return verify(_gc_,_gd_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_1_chunk_verify_2_1,
        0,
        cst_src_pipe_transport_ml$3,
        397,
        2,
        65,
        _f0_);
      function _f1_(param)
       {return run_test
                (write_2_msg_one_byte_at_a_time_34_chunk,
                 function(_ga_)
                  {return function(_gb_){return verify(_ga_,_gb_,2,34)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_one_byte_at_a_time_34_ch,
        0,
        cst_src_pipe_transport_ml$4,
        400,
        2,
        86,
        _f1_);
      function _f2_(param)
       {function f(write)
         {caml_call1(write,create_message(0));
          wait(0);
          write_1_msg_3_chunk(write);
          wait(0);
          write_2_msg_1_chunk(write);
          wait(0);
          write_2_msg_one_byte_at_a_time_34_chunk(write);
          wait(0);
          return caml_call1(write,create_message(0))}
        return run_test
                (f,
                 function(_f__)
                  {return function(_f$_){return verify(_f__,_f$_,7,40)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_7_40,
        0,
        cst_src_pipe_transport_ml$5,
        403,
        2,
        322,
        _f2_);
      function _f3_(param)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        function on_end_of_batch(param){return 0}
        function write(x)
         {var _f9_=caml_call1(Transport_reader[1][1],x);
          return caml_call2(Async_kernel_Pipe[27],writer,_f9_)}
        var num=[0,0];
        function stop_after_on_message(buffer,pos,len)
         {num[1]++;
          var
           got=caml_call3(Core_kernel_Bigstring[41],buffer,pos,len),
           sexpifier=Core_kernel_Bigstring[11],
           comparator=Core_kernel_Bigstring[9];
          caml_call8
           (Ppx_assert_lib_Runtime[3],
            pos$2,
            sexpifier,
            comparator,
            0,
            0,
            0,
            expect,
            got);
          return _fA_}
        write_2_msg_1_chunk(write);
        caml_call1(Async_kernel_Pipe[14],writer);
        function _f4_(x)
         {if(caml_call1(Core_kernel_Result[27],x))
           {var
             _f7_=
              function(x)
               {if(caml_call1(Core_kernel_Result[27],x))
                 return Async_kernel_Deferred[19];
                throw [0,Assert_failure,_fB_]},
             _f8_=
              caml_call3
               (Transport_reader[5],
                reader$0,
                stop_after_on_message,
                on_end_of_batch);
            return caml_call2(Async_kernel[49],_f8_,_f7_)}
          throw [0,Assert_failure,_fC_]}
        var
         _f5_=
          caml_call3
           (Transport_reader[5],
            reader$0,
            stop_after_on_message,
            on_end_of_batch),
         _f6_=caml_call2(Async_kernel[49],_f5_,_f4_);
        caml_call1(Async_kernel[35],_f6_);
        wait(0);
        var sexpifier=Core_kernel_Int[96],comparator=Core_kernel_Int[107];
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$3,
                 sexpifier,
                 comparator,
                 0,
                 0,
                 0,
                 2,
                 num[1])}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_can_call_read_forever_multiple_times,
        0,
        cst_src_pipe_transport_ml$6,
        422,
        2,
        936,
        _f3_);
      return [0,
              expect,
              create_message_buf,
              create_message,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              verify,
              write_1_msg_1_chunk,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time_34_chunk]}
    function _fD_(param)
     {Test_reader
       ([0,
         String_pipe_reader[5],
         String_pipe_reader[1],
         String_pipe_reader[2],
         String_pipe_reader[3],
         String_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_string,
      0,
      cst_src_pipe_transport_ml$7,
      451,
      0,
      81,
      _fD_);
    function _fE_(param)
     {Test_reader
       ([0,
         Bigstring_pipe_reader[5],
         Bigstring_pipe_reader[1],
         Bigstring_pipe_reader[2],
         Bigstring_pipe_reader[3],
         Bigstring_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_bigstring,
      0,
      cst_src_pipe_transport_ml$8,
      453,
      0,
      84,
      _fE_);
    function Bench_reader(Transport_reader)
     {var
       default_message=
        caml_call3(Core_kernel_Bigstring[29],0,0,cst_FOOBAR123$0);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[36],message),
         buf=
          caml_call2
           (Core_kernel_Bigstring[27],0,Header$0[1] + message_len | 0);
        caml_call3(Header$0[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[38],message,0,buf,Header$0[1],message_len);
        return buf}
      function create_message(param)
       {return create_message_buf(default_message)}
      var
       one_message=create_message(0),
       two_messages=
        caml_call2
         (Core_kernel_Bigstring[33],0,[0,one_message,[0,one_message,0]]),
       msg_len=caml_call1(Core_kernel_Bigstring[36],one_message),
       split_at=msg_len / 2 | 0,
       one_message_p1=
        caml_call3(Core_kernel_Bigstring[41],one_message,0,split_at),
       one_message_p2=
        caml_call3
         (Core_kernel_Bigstring[41],
          one_message,
          split_at,
          msg_len - split_at | 0);
      function on_message(buffer,param,_fW_){return 0}
      function on_end_of_batch(param){return 0}
      function wait(param){return caml_call1(Async_kernel_Scheduler[15],0)}
      function run_test(run)
       {var
         match=caml_call1(Async_kernel_Pipe[8],0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        caml_call3(Transport_reader[5],reader$0,on_message,on_end_of_batch);
        wait(0);
        var for$0=0;
        for(;;)
         {caml_call1
           (run,
            function(x)
             {var _fV_=caml_call1(Transport_reader[1][1],x);
              return caml_call2(Async_kernel_Pipe[27],writer,_fV_)});
          var _fU_=for$0 + 1 | 0;
          if(100 !== for$0){var for$0=_fU_;continue}
          return wait(0)}}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,one_message)}
      var
       buf=
        create_message_buf(caml_call3(Core_kernel_Bigstring[29],0,0,cst$18));
      function write_1_msg_3_chunk(write)
       {var _fT_=caml_call1(Core_kernel_Bigstring[36],one_message);
        caml_call3(Header$0[3],buf,0,_fT_);
        caml_call1(write,buf);
        caml_call1(write,one_message_p1);
        return caml_call1(write,one_message_p2)}
      function write_2_msg_1_chunk(write)
       {return caml_call1(write,two_messages)}
      function write_2_msg_one_byte_at_a_time_34_chunk(write)
       {var
         _fR_=caml_call1(Core_kernel_Bigstring[36],two_messages) - 1 | 0,
         _fQ_=0;
        if(! (_fR_ < 0))
         {var i=_fQ_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[41],two_messages,i,1));
            var _fS_=i + 1 | 0;
            if(_fR_ !== i){var i=_fS_;continue}
            break}}
        return 0}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f=function(param,_fP_){return run_test(write_1_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_1_msg_1_chunk,
          cst_run_test_write_1_msg_1_chunk,
          cst_src_pipe_transport_ml$9,
          cst_src_pipe_transport_ml_Bench_reader,
          525,
          2,
          64,
          [0,f])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$0=
          function(param,_fO_)
           {function f(write)
             {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_1_chunk,
          cst_let_f_write_write_1_msg_1_chunk_write_write_1_msg_1_chunk_write_in_run_test_f,
          cst_src_pipe_transport_ml$10,
          cst_src_pipe_transport_ml_Bench_reader$0,
          527,
          2,
          140,
          [0,f$0])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f$1=function(param,_fN_){return run_test(write_1_msg_3_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_1_msg_3_chunk,
          cst_run_test_write_1_msg_3_chunk,
          cst_src_pipe_transport_ml$11,
          cst_src_pipe_transport_ml_Bench_reader$1,
          534,
          2,
          68,
          [0,f$1])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var f$2=function(param,_fM_){return run_test(write_2_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_1_chunk$0,
          cst_run_test_write_2_msg_1_chunk,
          cst_src_pipe_transport_ml$12,
          cst_src_pipe_transport_ml_Bench_reader$2,
          537,
          2,
          68,
          [0,f$2])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$3=
          function(param,_fL_)
           {return run_test(write_2_msg_one_byte_at_a_time_34_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_write_2_msg_one_byte,
          cst_run_test_write_2_msg_one_byte_at_a_time_34_chunk,
          cst_src_pipe_transport_ml$13,
          cst_src_pipe_transport_ml_Bench_reader$3,
          540,
          2,
          89,
          [0,f$3])}
      if(Ppx_bench_lib_Benchmark_accumulator[3])
       {var
         f$4=
          function(param,_fK_)
           {function f(write)
             {caml_call1(write,create_message(0));
              write_1_msg_3_chunk(write);
              write_2_msg_1_chunk(write);
              write_2_msg_one_byte_at_a_time_34_chunk(write);
              return caml_call1(write,create_message(0))}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumulator[5],
          cst_multi,
          cst_let_f_write_write_create_message_write_1_msg_3_chunk_write_write_2_msg_1_chunk_write_write_2_msg_one_byte_at_a_time_34_chunk_write_write_create_message_in_run_test_f,
          cst_src_pipe_transport_ml$14,
          cst_src_pipe_transport_ml_Bench_reader$4,
          543,
          2,
          246,
          [0,f$4])}
      return [0,
              default_message,
              create_message_buf,
              create_message,
              one_message,
              two_messages,
              one_message_p1,
              one_message_p2,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              write_1_msg_1_chunk,
              buf,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time_34_chunk]}
    if(Ppx_bench_lib_Benchmark_accumulator[3])
     {var
       _fF_=
        function(param)
         {Bench_reader
           ([0,
             String_pipe_reader[5],
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumulator[6],
        cst_Test_reader_string$0,
        cst$19,
        cst_src_pipe_transport_ml$16,
        cst_src_pipe_transport_ml$15,
        554,
        0,
        83,
        _fF_)}
    if(Ppx_bench_lib_Benchmark_accumulator[3])
     {var
       _fG_=
        function(param)
         {Bench_reader
           ([0,
             Bigstring_pipe_reader[5],
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumulator[6],
        cst_Test_reader_bigstring$0,
        cst$20,
        cst_src_pipe_transport_ml$18,
        cst_src_pipe_transport_ml$17,
        556,
        0,
        86,
        _fG_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Pipe_transport=[0,Kind,create$15];
    caml_register_global
     (725,Async_rpc_kernel_Pipe_transport,"Async_rpc_kernel__Pipe_transport");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$51,cst$21);
    var Make$6=include$5[1],rpc_connection=_fr_[3];
    function close$7(t)
     {var _fJ_=caml_call1(rpc_connection,t);
      return caml_call3(_eD_[8],0,0,_fJ_)}
    function is_closed$5(t)
     {var _fI_=caml_call1(rpc_connection,t);return caml_call1(_eD_[11],_fI_)}
    function close_finished$0(t)
     {var _fH_=caml_call1(rpc_connection,t);return caml_call1(_eD_[9],_fH_)}
    var
     Versioned_rpc=
      caml_call1
       (include$5[1],
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$7,
         is_closed$5,
         close_finished$0]);
    function close$8(t){return caml_call3(_eD_[8],0,0,t)}
    function is_closed$6(t){return caml_call1(_eD_[11],t)}
    function close_finished$1(t){return caml_call1(_eD_[9],t)}
    var
     Rpc$0=
      caml_call1
       (include$5[1],
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$8,
         is_closed$6,
         close_finished$1]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel_Persistent_connection=[0,Make$6,Rpc$0,Versioned_rpc];
    caml_register_global
     (728,
      Async_rpc_kernel_Persistent_connection,
      "Async_rpc_kernel__Persistent_connection");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_rpc_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_async_rpc_kernel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$54,cst$22);
    var Async_rpc_kernel_private=[0,0,default_handshake_timeout];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_rpc_kernel$0=[0,0,0,0,0,0,0,Async_rpc_kernel_private];
    caml_register_global(729,Async_rpc_kernel$0,"Async_rpc_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19ycGNfa2VybmVsLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
