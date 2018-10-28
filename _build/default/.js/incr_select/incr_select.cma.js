(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_incr_select=caml_new_string("incr_select"),
     cst_src_incr_select_ml=caml_new_string("src/incr_select.ml"),
     cst=caml_new_string(""),
     cst_incr_select$0=caml_new_string("incr_select"),
     cst_incr_select$1=caml_new_string("incr_select"),
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_select);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_select_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_select$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_select$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incr_select=
      [0,
       function(Incr)
        {var E=Incr[57],hashtbl_size=10;
         function setup_generator(hashable,compute_output,make_input_node)
          {var
            necessary_dependencies=
             caml_call4
              (Core_kernel_Hashtbl[77][1],0,[0,hashtbl_size],hashable,0);
           function make_key_stale(key)
            {var
              _t_=E[2][4],
              _u_=
               caml_call2(Core_kernel_Hashtbl[51],necessary_dependencies,key),
              _v_=caml_call2(Core_kernel_Option[51],_u_,0);
             return caml_call2(Core_kernel_List[19],_v_,_t_)}
           var input_node=caml_call1(make_input_node,make_key_stale);
           caml_call2(Incr[48],input_node,Incr[47][5]);
           function _k_(key)
            {var input_dep=caml_call2(E[1][2],0,input_node),output_node=[];
             runtime.caml_update_dummy
              (output_node,
               [246,
                function(_l_)
                 {function _m_(param){return caml_call1(compute_output,key)}
                  var
                   _n_=
                    [0,
                     function(is_now_observable)
                      {if(is_now_observable)
                        {var _o_=caml_call1(Core_kernel[350],output_node);
                         return caml_call3
                                 (Core_kernel_Hashtbl[73],necessary_dependencies,key,_o_)}
                       function _p_(param)
                        {if(param)
                          {var
                            l=param[1],
                            _q_=caml_call1(Core_kernel[350],output_node),
                            _r_=caml_call1(Core_kernel[359],_q_),
                            _s_=caml_call1(Core_kernel_Fn[2],_r_),
                            l$0=caml_call2(Core_kernel_List[64],l,_s_);
                           return l$0?[0,l$0]:0}
                         return 0}
                       return caml_call3
                               (Core_kernel_Hashtbl[36],necessary_dependencies,key,_p_)}];
                  return caml_call2(E[2][2],_n_,_m_)}]);
             var output_node$0=caml_call1(Core_kernel[350],output_node);
             caml_call2(E[2][6],output_node$0,input_dep);
             return caml_call1(E[2][3],output_node$0)}
           return caml_call1(Core_kernel[367],_k_)}
         function update_one(input,selected,make_stale)
          {function _j_(inp)
            {caml_call2(Core_kernel_Option[18],inp,make_stale);
             caml_call2(Core_kernel_Option[18],selected[1],make_stale);
             selected[1] = inp;
             return 0}
           return caml_call2(Incr[8],input,_j_)}
         function select_one(H,input)
          {var selected=[0,0];
           function compute_output(key)
            {var _i_=selected[1];
             if(_i_)
              {var key$0=_i_[1];return 0 === caml_call2(H[1],key,key$0)?1:0}
             return 0}
           function make_input_node(make_key_stale)
            {return update_one(input,selected,make_key_stale)}
           return setup_generator(H[4],compute_output,make_input_node)}
         function select_one$0(h,input)
          {return select_one
                   (h,caml_call2(Incr[8],input,Core_kernel_Option[53]))}
         function select_one_value(H,default$0,input)
          {var selected=[0,0];
           function compute_output(key)
            {var _h_=selected[1];
             if(_h_)
              {var match=_h_[1],data=match[2],key$0=match[1];
               return 0 === caml_call2(H[1],key,key$0)?data:default$0}
             return default$0}
           function make_input_node(make_key_stale)
            {return update_one
                     (input,
                      selected,
                      function(param)
                       {var key=param[1];return caml_call1(make_key_stale,key)})}
           return setup_generator(H[4],compute_output,make_input_node)}
         function select_one_value$0(h,default$0,input)
          {return select_one_value
                   (h,
                    default$0,
                    caml_call2(Incr[8],input,Core_kernel_Option[53]))}
         function select_many_values(H,default$0,input)
          {var
            hashable=H[4],
            selected=
             caml_call4
              (Core_kernel_Hashtbl[77][1],0,[0,hashtbl_size],hashable,0);
           function compute_output(key)
            {var _g_=caml_call2(Core_kernel_Hashtbl[51],selected,key);
             return caml_call2(Core_kernel_Option[51],_g_,default$0)}
           function make_input_node(make_key_stale)
            {function _e_(inp)
              {caml_call2(Core_kernel_Hashtbl[20],selected,make_key_stale);
               caml_call1(Core_kernel_Hashtbl[17],selected);
               function _f_(param)
                {var data=param[2],key=param[1];
                 caml_call1(make_key_stale,key);
                 return caml_call3(Core_kernel_Hashtbl[33],selected,key,data)}
               return caml_call2(Core_kernel_List[19],inp,_f_)}
             return caml_call2(Incr[8],input,_e_)}
           return setup_generator(hashable,compute_output,make_input_node)}
         function select_many(H,input)
          {var
            hashable=H[4],
            selected=
             caml_call4
              (Core_kernel_Hash_set[37][1],0,[0,hashtbl_size],hashable,0);
           function compute_output(key)
            {return caml_call2(Core_kernel_Hash_set[20],selected,key)}
           function make_input_node(make_key_stale)
            {function _a_(inp)
              {var old_set=caml_call1(Core_kernel_Hash_set[21],selected);
               caml_call1(Core_kernel_Hash_set[28],selected);
               function _b_(key)
                {if(1 - caml_call2(Core_kernel_Hash_set[20],old_set,key))
                  caml_call1(make_key_stale,key);
                 return caml_call2(Core_kernel_Hash_set[22],selected,key)}
               caml_call2(Core_kernel_List[19],inp,_b_);
               function _c_(key)
                {var
                  _d_=
                   1 - caml_call2(Core_kernel_Hash_set[20],selected,key);
                 return _d_?caml_call1(make_key_stale,key):_d_}
               return caml_call2(Core_kernel_Hash_set[6],old_set,_c_)}
             return caml_call2(Incr[8],input,_a_)}
           return setup_generator(hashable,compute_output,make_input_node)}
         return [0,
                 select_one$0,
                 select_one,
                 select_one_value$0,
                 select_one_value,
                 select_many,
                 select_many_values]}];
    runtime.caml_register_global(14,Incr_select,"Incr_select");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX3NlbGVjdC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
