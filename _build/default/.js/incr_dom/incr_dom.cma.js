(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal;
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_incr_dom=caml_new_string("incr_dom"),
     cst_src_incr_ml=caml_new_string("src/incr.ml"),
     cst=caml_new_string(""),
     cst_incr_dom$0=caml_new_string("incr_dom"),
     cst_incr_dom$1=caml_new_string("incr_dom"),
     cst_incr_dom$2=caml_new_string("incr_dom"),
     cst_src_app_intf_ml=caml_new_string("src/app_intf.ml"),
     cst$0=caml_new_string(""),
     cst_incr_dom$3=caml_new_string("incr_dom"),
     cst_incr_dom$4=caml_new_string("incr_dom"),
     cst_keep_in_view=caml_new_string("keep-in-view"),
     cst_Columns$2=caml_new_string("Columns"),
     cst_Rows$2=caml_new_string("Rows"),
     cst_src_js_misc_ml_rows_or_columns=
      caml_new_string("src/js_misc.ml.rows_or_columns"),
     cst_Columns=caml_new_string("Columns"),
     cst_Rows=caml_new_string("Rows"),
     cst_columns=caml_new_string("columns"),
     cst_rows=caml_new_string("rows"),
     cst_Columns$0=caml_new_string("Columns"),
     cst_Rows$0=caml_new_string("Rows"),
     cst_columns$0=caml_new_string("columns"),
     cst_rows$0=caml_new_string("rows"),
     cst_src_js_misc_ml_Rect_t=caml_new_string("src/js_misc.ml.Rect.t"),
     cst_t$0=caml_new_string("t"),
     cst_bottom=caml_new_string("bottom"),
     cst_left=caml_new_string("left"),
     cst_right=caml_new_string("right"),
     cst_top=caml_new_string("top"),
     cst_right$0=caml_new_string("right"),
     cst_bottom$0=caml_new_string("bottom"),
     cst_left$0=caml_new_string("left"),
     cst_top$0=caml_new_string("top"),
     cst_incr_dom$5=caml_new_string("incr_dom"),
     cst_src_js_misc_ml=caml_new_string("src/js_misc.ml"),
     cst$1=caml_new_string(""),
     cst_incr_dom$6=caml_new_string("incr_dom"),
     tp_loc=caml_new_string("src/js_misc.ml.Rect.t"),
     cst_a=caml_new_string("a"),
     cst_src_js_misc_ml_9_15=caml_new_string("src/js_misc.ml:9:15"),
     cst_right$1=caml_new_string("right"),
     cst_a$0=caml_new_string("a"),
     cst_src_js_misc_ml_8_15=caml_new_string("src/js_misc.ml:8:15"),
     cst_bottom$1=caml_new_string("bottom"),
     cst_a$1=caml_new_string("a"),
     cst_src_js_misc_ml_7_15=caml_new_string("src/js_misc.ml:7:15"),
     cst_left$1=caml_new_string("left"),
     cst_a$2=caml_new_string("a"),
     cst_src_js_misc_ml_6_15=caml_new_string("src/js_misc.ml:6:15"),
     cst_top$1=caml_new_string("top"),
     cst_a$3=caml_new_string("a"),
     cst_t=caml_new_string("t"),
     cst_src_js_misc_ml_5_2=caml_new_string("src/js_misc.ml:5:2"),
     names=
      [0,
       caml_new_string("top"),
       [0,
        caml_new_string("left"),
        [0,caml_new_string("bottom"),[0,caml_new_string("right"),0]]]],
     cst_right$2=caml_new_string("right"),
     cst_bottom$2=caml_new_string("bottom"),
     cst_left$2=caml_new_string("left"),
     cst_top$2=caml_new_string("top"),
     tp_loc$0=caml_new_string("src/js_misc.ml.rows_or_columns"),
     cst_rows_or_columns=caml_new_string("rows_or_columns"),
     cst_src_js_misc_ml_28_0=caml_new_string("src/js_misc.ml:28:0"),
     cst_rows_or_columns$0=caml_new_string("rows_or_columns"),
     cst_Rows$1=caml_new_string("Rows"),
     cst_Columns$1=caml_new_string("Columns"),
     descriptions=
      [0,[0,caml_new_string("Rows"),0],[0,[0,caml_new_string("Columns"),0],0]],
     cst_incr_dom$7=caml_new_string("incr_dom"),
     cst_bug_Action_pipe_closed=caml_new_string("bug: Action pipe closed"),
     cst_total=caml_new_string("total"),
     cst_update_visibility=caml_new_string("update visibility"),
     cst_update_visibility$0=caml_new_string("update visibility"),
     cst_apply_actions=caml_new_string("apply actions"),
     cst_apply_actions$0=caml_new_string("apply actions"),
     cst_stabilize=caml_new_string("stabilize"),
     cst_stabilize$0=caml_new_string("stabilize"),
     cst_diff=caml_new_string("diff"),
     cst_diff$0=caml_new_string("diff"),
     cst_patch=caml_new_string("patch"),
     cst_patch$0=caml_new_string("patch"),
     cst_on_display=caml_new_string("on_display"),
     cst_on_display$0=caml_new_string("on_display"),
     cst_total$0=caml_new_string("total"),
     cst_Action=caml_new_string("Action"),
     cst_scroll=caml_new_string("scroll"),
     cst_resize=caml_new_string("resize"),
     cst_incr_dom$8=caml_new_string("incr_dom"),
     cst_src_start_app_ml=caml_new_string("src/start_app.ml"),
     cst$2=caml_new_string(""),
     cst_incr_dom$9=caml_new_string("incr_dom"),
     cst_incr_dom$10=caml_new_string("incr_dom"),
     cst_incr_dom$11=caml_new_string("incr_dom"),
     cst_src_incr_dom_ml=caml_new_string("src/incr_dom.ml"),
     cst$3=caml_new_string(""),
     cst_incr_dom$12=caml_new_string("incr_dom"),
     cst_incr_dom$13=caml_new_string("incr_dom"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Incremental_kernel_Incremental=
      global_data.Incremental_kernel__Incremental,
     Incr_map=global_data.Incr_map,
     Incr_select=global_data.Incr_select,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Dom_html=global_data.Dom_html,
     Core_kernel=global_data.Core_kernel,
     Base_Binary_searchable=global_data.Base__Binary_searchable,
     Js=global_data.Js,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Common=global_data.Bin_prot__Common,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Bin_shape_lib_Bin_shape=global_data.Bin_shape_lib__Bin_shape,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Async_kernel=global_data.Async_kernel,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Firebug=global_data.Firebug,
     Async_js_Debug=global_data.Async_js__Debug,
     Dom=global_data.Dom,
     Virtual_dom_Vdom=global_data.Virtual_dom__Vdom,
     Async_js=global_data.Async_js,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     include$0=global_data.Virtual_dom,
     Incr_dom=[0,0,0,0,0,0];
    caml_register_global(138,Incr_dom,"Incr_dom__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_dom);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$0,cst);
    var
     include=caml_call1(Incremental_kernel_Incremental[2],[0]),
     _f_=include[6],
     _P_=include[42],
     _S_=include[45],
     _V_=include[48],
     _am_=include[67],
     _a_=include[1],
     _b_=include[2],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[37],
     _L_=include[38],
     _M_=include[39],
     _N_=include[40],
     _O_=include[41],
     _Q_=include[43],
     _R_=include[44],
     _T_=include[46],
     _U_=include[47],
     _W_=include[49],
     _X_=include[50],
     _Y_=include[51],
     _Z_=include[52],
     ___=include[53],
     _$_=include[54],
     _aa_=include[55],
     _ab_=include[56],
     _ac_=include[57],
     _ad_=include[58],
     _ae_=include[59],
     _af_=include[60],
     _ag_=include[61],
     _ah_=include[62],
     _ai_=include[63],
     _aj_=include[64],
     _ak_=include[65],
     _al_=include[66],
     _an_=include[68],
     _ao_=include[69],
     _ap_=include[70],
     _aq_=include[71],
     _ar_=include[72],
     _as_=include[73],
     Map=
      caml_call1
       (Incr_map[1],
        [0,
         include[1],
         include[2],
         include[3],
         include[4],
         include[5],
         include[6],
         include[7],
         include[8],
         include[9],
         include[10],
         include[11],
         include[12],
         include[13],
         include[14],
         include[15],
         include[16],
         include[17],
         include[18],
         include[19],
         include[20],
         include[21],
         include[22],
         include[23],
         include[24],
         include[25],
         include[26],
         include[27],
         include[28],
         include[29],
         include[30],
         include[31],
         include[32],
         include[33],
         include[34],
         include[35],
         include[36],
         include[37],
         include[38],
         include[39],
         include[40],
         include[41],
         include[42],
         include[43],
         include[44],
         include[45],
         include[46],
         include[47],
         include[48],
         include[49],
         include[50],
         include[51],
         include[52],
         include[53],
         include[54],
         include[55],
         include[56],
         include[57],
         include[58],
         include[59],
         include[60],
         include[61],
         include[62],
         include[63]]),
     Select=caml_call1(Incr_select[1],include);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incr_dom_Incr=
      [0,
       include,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
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
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       Map,
       Select];
    caml_register_global(145,Incr_dom_Incr,"Incr_dom__Incr");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_dom$2);
    caml_call1(Expect_test_collector[4][1],cst_src_app_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incr_dom_App_intf=[0];
    caml_register_global(146,Incr_dom_App_intf,"Incr_dom__App_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_dom$5);
    caml_call1(Expect_test_collector[4][1],cst_src_js_misc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$6,cst$1);
    var
     _a3_=
      [0,
       [11,
        caml_new_string("Element "),
        [2,0,[11,caml_new_string(" not found"),0]]],
       caml_new_string("Element %s not found")],
     _a2_=[0,caml_new_string("src/js_misc.ml.rows_or_columns")],
     _aW_=[0,caml_new_string("Columns")],
     _aV_=[0,caml_new_string("Rows")],
     _at_=[0,caml_new_string("right")],
     _au_=[0,caml_new_string("bottom")],
     _av_=[0,caml_new_string("left")],
     _aw_=[0,caml_new_string("top")],
     _aX_=
      [0,[0,caml_new_string("Rows"),0],[0,[0,caml_new_string("Columns"),0],0]],
     _a5_=[0,caml_new_string("action")],
     _a4_=[0,[0,caml_new_string("src/start_app.ml"),147,4913,4945]];
    function t_of_sexp(of_a,sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       top_field=[0,0],
       left_field=[0,0],
       bottom_field=[0,0],
       right_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _cH_=param[1];
          if(1 === _cH_[0])
           {var _cI_=_cH_[1];
            if(_cI_)
             {var _cJ_=_cI_[1];
              if(0 === _cJ_[0])
               {var _cK_=_cI_[2],_cL_=_cJ_[1];
                if(! _cK_)
                 {var tail$0=param[2];
                  if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_cL_,extra[1]];
                  var param=tail$0;
                  continue}
                if(! _cK_[2])
                 {var tail=param[2],field_sexp=_cK_[1];
                  if(caml_string_notequal(_cL_,cst_bottom))
                   if(caml_string_notequal(_cL_,cst_left))
                    if(caml_string_notequal(_cL_,cst_right))
                     if(caml_string_notequal(_cL_,cst_top))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_cL_,extra[1]]}
                     else
                      if(top_field[1])
                       duplicates[1] = [0,_cL_,duplicates[1]];
                      else
                       {var fvalue=caml_call1(of_a,field_sexp);
                        top_field[1] = [0,fvalue]}
                    else
                     if(right_field[1])
                      duplicates[1] = [0,_cL_,duplicates[1]];
                     else
                      {var fvalue$0=caml_call1(of_a,field_sexp);
                       right_field[1] = [0,fvalue$0]}
                   else
                    if(left_field[1])
                     duplicates[1] = [0,_cL_,duplicates[1]];
                    else
                     {var fvalue$1=caml_call1(of_a,field_sexp);
                      left_field[1] = [0,fvalue$1]}
                  else
                   if(bottom_field[1])
                    duplicates[1] = [0,_cL_,duplicates[1]];
                   else
                    {var fvalue$2=caml_call1(of_a,field_sexp);
                     bottom_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_cH_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],sexp);
        var
         _cM_=top_field[1],
         _cN_=left_field[1],
         _cO_=bottom_field[1],
         _cP_=right_field[1];
        if(_cM_)
         if(_cN_)
          if(_cO_)
           if(_cP_)
            {var
              right_value=_cP_[1],
              bottom_value=_cO_[1],
              left_value=_cN_[1],
              top_value=_cM_[1];
             return [0,top_value,left_value,bottom_value,right_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[14],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === top_field[1]?1:0,cst_top$0],
                  [0,
                   [0,0 === left_field[1]?1:0,cst_left$0],
                   [0,
                    [0,0 === bottom_field[1]?1:0,cst_bottom$0],
                    [0,[0,0 === right_field[1]?1:0,cst_right$0],0]]]])}}
    function sexp_of_t(of_a,param)
     {var
       v_right=param[4],
       v_bottom=param[3],
       v_left=param[2],
       v_top=param[1],
       arg=caml_call1(of_a,v_right),
       bnds=[0,[1,[0,_at_,[0,arg,0]]],0],
       arg$0=caml_call1(of_a,v_bottom),
       bnds$0=[0,[1,[0,_au_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(of_a,v_left),
       bnds$1=[0,[1,[0,_av_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(of_a,v_top),
       bnds$2=[0,[1,[0,_aw_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _ax_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a),
     _ay_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_9_15),
     _az_=[0,[0,cst_right$1,caml_call2(Bin_prot_Shape[15],_ay_,_ax_)],0],
     _aA_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$0),
     _aB_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_8_15),
     _aC_=[0,[0,cst_bottom$1,caml_call2(Bin_prot_Shape[15],_aB_,_aA_)],_az_],
     _aD_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$1),
     _aE_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_7_15),
     _aF_=[0,[0,cst_left$1,caml_call2(Bin_prot_Shape[15],_aE_,_aD_)],_aC_],
     _aG_=caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$2),
     _aH_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_6_15),
     _aI_=[0,[0,cst_top$1,caml_call2(Bin_prot_Shape[15],_aH_,_aG_)],_aF_],
     _aJ_=caml_call1(Bin_prot_Shape[8],_aI_),
     _aK_=[0,caml_call1(Bin_shape_lib_Bin_shape[3][1],cst_a$3),0],
     _aL_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t),_aK_,_aJ_],0],
     _aM_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_5_2),
     group=caml_call2(Bin_prot_Shape[6],_aM_,_aL_);
    function bin_shape_t(a)
     {var _cG_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$0);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group,_cG_),[0,a,0])}
    function bin_size_t(size_of_a,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       size=caml_call1(size_of_a,v1) | 0,
       size$0=size + caml_call1(size_of_a,v2) | 0,
       size$1=size$0 + caml_call1(size_of_a,v3) | 0;
      return size$1 + caml_call1(size_of_a,v4) | 0}
    function bin_write_t(write_a,buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(write_a,buf,pos,v1),
       pos$1=caml_call3(write_a,buf,pos$0,v2),
       pos$2=caml_call3(write_a,buf,pos$1,v3);
      return caml_call3(write_a,buf,pos$2,v4)}
    function bin_writer_t(bin_writer_a)
     {function _cC_(v)
       {var _cD_=bin_writer_a[2];
        return function(_cE_,_cF_){return bin_write_t(_cD_,v,_cE_,_cF_)}}
      return [0,function(v){return bin_size_t(bin_writer_a[1],v)},_cC_]}
    function bin_read_t(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_js_misc_ml_Rect_t,pos_ref[1])}
    function bin_read_t$0(of_a,buf,pos_ref)
     {var
       v_top=caml_call2(of_a,buf,pos_ref),
       v_left=caml_call2(of_a,buf,pos_ref),
       v_bottom=caml_call2(of_a,buf,pos_ref),
       v_right=caml_call2(of_a,buf,pos_ref);
      return [0,v_top,v_left,v_bottom,v_right]}
    function bin_reader_t(bin_reader_a)
     {function _cB_(buf,pos_ref,vtag)
       {return bin_read_t(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$0(bin_reader_a[1],buf,pos_ref)},
              _cB_]}
    function bin_t(bin_a)
     {var _cz_=bin_reader_t(bin_a[3]),_cA_=bin_writer_t(bin_a[2]);
      return [0,bin_shape_t(bin_a[1]),_cA_,_cz_]}
    function compare(cmp_a,a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(cmp_a,a_001[1],b_002[1]);
      if(0 === n)
       {var n$0=caml_call2(cmp_a,a_001[2],b_002[2]);
        if(0 === n$0)
         {var n$1=caml_call2(cmp_a,a_001[3],b_002[3]);
          return 0 === n$1?caml_call2(cmp_a,a_001[4],b_002[4]):n$1}
        return n$0}
      return n}
    function right(r){return r[4]}
    function bottom(r){return r[3]}
    function left(r){return r[2]}
    function top(r){return r[1]}
    function _aN_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _aO_=0,
     right$0=[0,[0,function(param){return 0},cst_right$2,_aO_,right,_aN_]];
    function _aP_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _aQ_=0,
     bottom$0=[0,[0,function(param){return 0},cst_bottom$2,_aQ_,bottom,_aP_]];
    function _aR_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _aS_=0,
     left$0=[0,[0,function(param){return 0},cst_left$2,_aS_,left,_aR_]];
    function _aT_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _aU_=0,
     top$0=[0,[0,function(param){return 0},cst_top$2,_aU_,top,_aT_]];
    function make_creator(top_fun,left_fun,bottom_fun,right_fun,compile_acc)
     {var
       match=caml_call2(top_fun,top$0,compile_acc),
       compile_acc$0=match[2],
       top_gen=match[1],
       match$0=caml_call2(left_fun,left$0,compile_acc$0),
       compile_acc$1=match$0[2],
       left_gen=match$0[1],
       match$1=caml_call2(bottom_fun,bottom$0,compile_acc$1),
       compile_acc$2=match$1[2],
       bottom_gen=match$1[1],
       match$2=caml_call2(right_fun,right$0,compile_acc$2),
       compile_acc$3=match$2[2],
       right_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 top=caml_call1(top_gen,acc),
                 left=caml_call1(left_gen,acc),
                 bottom=caml_call1(bottom_gen,acc),
                 right=caml_call1(right_gen,acc);
                return [0,top,left,bottom,right]},
              compile_acc$3]}
    function create(top,left,bottom,right){return [0,top,left,bottom,right]}
    function map(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cw_=caml_call1(right_fun,right$0),
       _cx_=caml_call1(bottom_fun,bottom$0),
       _cy_=caml_call1(left_fun,left$0);
      return [0,caml_call1(top_fun,top$0),_cy_,_cx_,_cw_]}
    function iter(top_fun,left_fun,bottom_fun,right_fun)
     {caml_call1(top_fun,top$0);
      caml_call1(left_fun,left$0);
      caml_call1(bottom_fun,bottom$0);
      return caml_call1(right_fun,right$0)}
    function fold(init,top_fun,left_fun,bottom_fun,right_fun)
     {return caml_call2
              (right_fun,
               caml_call2
                (bottom_fun,
                 caml_call2(left_fun,caml_call2(top_fun,init,top$0),left$0),
                 bottom$0),
               right$0)}
    function map_poly(record)
     {var
       _ct_=[0,caml_call1(record[1],right$0),0],
       _cu_=[0,caml_call1(record[1],bottom$0),_ct_],
       _cv_=[0,caml_call1(record[1],left$0),_cu_];
      return [0,caml_call1(record[1],top$0),_cv_]}
    function for_all(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cq_=caml_call1(top_fun,top$0),
       _cr_=_cq_?caml_call1(left_fun,left$0):_cq_,
       _cs_=_cr_?caml_call1(bottom_fun,bottom$0):_cr_;
      return _cs_?caml_call1(right_fun,right$0):_cs_}
    function exists(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cp_=caml_call1(top_fun,top$0),
       _cn_=_cp_ || caml_call1(left_fun,left$0),
       _co_=_cn_ || caml_call1(bottom_fun,bottom$0);
      return _co_?_co_:caml_call1(right_fun,right$0)}
    function to_list(top_fun,left_fun,bottom_fun,right_fun)
     {var
       _ck_=[0,caml_call1(right_fun,right$0),0],
       _cl_=[0,caml_call1(bottom_fun,bottom$0),_ck_],
       _cm_=[0,caml_call1(left_fun,left$0),_cl_];
      return [0,caml_call1(top_fun,top$0),_cm_]}
    function iter$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {caml_call3(top_fun,top$0,record,record[1]);
      caml_call3(left_fun,left$0,record,record[2]);
      caml_call3(bottom_fun,bottom$0,record,record[3]);
      return caml_call3(right_fun,right$0,record,record[4])}
    function fold$0(record,init,top_fun,left_fun,bottom_fun,right_fun)
     {var _ch_=record[4],_ci_=record[3],_cj_=record[2];
      return caml_call4
              (right_fun,
               caml_call4
                (bottom_fun,
                 caml_call4
                  (left_fun,
                   caml_call4(top_fun,init,top$0,record,record[1]),
                   left$0,
                   record,
                   _cj_),
                 bottom$0,
                 record,
                 _ci_),
               right$0,
               record,
               _ch_)}
    function for_all$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _ce_=caml_call3(top_fun,top$0,record,record[1]),
       _cf_=_ce_?caml_call3(left_fun,left$0,record,record[2]):_ce_,
       _cg_=_cf_?caml_call3(bottom_fun,bottom$0,record,record[3]):_cf_;
      return _cg_?caml_call3(right_fun,right$0,record,record[4]):_cg_}
    function exists$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _cd_=caml_call3(top_fun,top$0,record,record[1]),
       _cb_=_cd_ || caml_call3(left_fun,left$0,record,record[2]),
       _cc_=_cb_ || caml_call3(bottom_fun,bottom$0,record,record[3]);
      return _cc_?_cc_:caml_call3(right_fun,right$0,record,record[4])}
    function to_list$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _b__=[0,caml_call3(right_fun,right$0,record,record[4]),0],
       _b$_=[0,caml_call3(bottom_fun,bottom$0,record,record[3]),_b__],
       _ca_=[0,caml_call3(left_fun,left$0,record,record[2]),_b$_];
      return [0,caml_call3(top_fun,top$0,record,record[1]),_ca_]}
    function map$0(record,top_fun,left_fun,bottom_fun,right_fun)
     {var
       _b7_=caml_call3(right_fun,right$0,record,record[4]),
       _b8_=caml_call3(bottom_fun,bottom$0,record,record[3]),
       _b9_=caml_call3(left_fun,left$0,record,record[2]);
      return [0,caml_call3(top_fun,top$0,record,record[1]),_b9_,_b8_,_b7_]}
    function set_all_mutable_fields(record){return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$0,
       set_all_mutable_fields];
    function map$1(t,f)
     {var
       _b4_=caml_call1(f,t[4]),
       _b5_=caml_call1(f,t[3]),
       _b6_=caml_call1(f,t[2]);
      return [0,caml_call1(f,t[1]),_b6_,_b5_,_b4_]}
    function int_height(t){return t[3] - t[1] | 0}
    function int_width(t){return t[4] - t[2] | 0}
    function float_height(t){return t[3] - t[1]}
    function float_width(t){return t[4] - t[2]}
    function round_float_rect(opt)
     {if(opt)var sth=opt[1],round=sth;else var round=Core_kernel_Float[105];
      return function(_b3_){return map$1(_b3_,round)}}
    function rows_or_columns_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _bZ_=sexp[1];
        if(caml_string_notequal(_bZ_,cst_Columns))
         {if(caml_string_notequal(_bZ_,cst_Rows))
           if(caml_string_notequal(_bZ_,cst_columns))
            if(caml_string_notequal(_bZ_,cst_rows))
             var switch$0=1,switch$1=0;
            else
             var switch$1=1;
           else
            var switch$0=0,switch$1=0;
          else
           var switch$1=1;
          if(switch$1)return 0}
        else
         var switch$0=0;
        if(! switch$0)return 1}
      else
       {var _b0_=sexp[1];
        if(! _b0_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _b1_=_b0_[1];
        if(0 !== _b1_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var _b2_=_b1_[1];
        if(caml_string_notequal(_b2_,cst_Columns$0))
         {if(caml_string_notequal(_b2_,cst_Rows$0))
           if(caml_string_notequal(_b2_,cst_columns$0))
            if(caml_string_notequal(_b2_,cst_rows$0))
             var switch$2=1,switch$3=0;
            else
             var switch$3=1;
           else
            var switch$2=0,switch$3=0;
          else
           var switch$3=1;
          if(switch$3)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
        else
         var switch$2=0;
        if(! switch$2)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_rows_or_columns(param){return 0 === param?_aV_:_aW_}
    var
     _aY_=caml_call1(Bin_prot_Shape[9],_aX_),
     _aZ_=
      [0,
       [0,
        caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_rows_or_columns),
        0,
        _aY_],
       0],
     _a0_=caml_call1(Bin_shape_lib_Bin_shape[4][1],cst_src_js_misc_ml_28_0),
     group$0=caml_call2(Bin_prot_Shape[6],_a0_,_aZ_),
     _a1_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_rows_or_columns$0),
     bin_shape_rows_or_columns=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_a1_),0);
    function bin_size_rows_or_columns(param){return 1}
    function bin_write_rows_or_columns(buf,pos,param)
     {return 0 === param
              ?caml_call3(Bin_prot_Write[30],buf,pos,0)
              :caml_call3(Bin_prot_Write[30],buf,pos,1)}
    var
     bin_writer_rows_or_columns=
      [0,bin_size_rows_or_columns,bin_write_rows_or_columns];
    function bin_read_rows_or_columns(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_js_misc_ml_rows_or_columns,
               pos_ref[1])}
    function bin_read_rows_or_columns$0(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      return 0 === match
              ?0
              :1 === match?1:caml_call2(Bin_prot_Common[18],_a2_,pos_ref[1])}
    var
     bin_reader_rows_or_columns=
      [0,bin_read_rows_or_columns$0,bin_read_rows_or_columns],
     bin_rows_or_columns=
      [0,
       bin_shape_rows_or_columns,
       bin_writer_rows_or_columns,
       bin_reader_rows_or_columns],
     rows$0=[0,cst_Rows$1,0,0],
     columns$0=[0,cst_Columns$1,1,1],
     rows=0,
     columns=1;
    function fold$1(init,rows_fun,columns_fun)
     {return caml_call2
              (columns_fun,caml_call2(rows_fun,init,rows$0),columns$0)}
    function iter$1(rows_fun,columns_fun)
     {caml_call1(rows_fun,rows$0);return caml_call1(columns_fun,columns$0)}
    function map$2(t,rows_fun,columns_fun)
     {return 0 === t
              ?caml_call1(rows_fun,rows$0)
              :caml_call1(columns_fun,columns$0)}
    function to_rank(param){return 0 === param?0:1}
    function to_name(param){return 0 === param?cst_Rows$2:cst_Columns$2}
    var
     Variants_of_rows_or_columns=
      [0,rows$0,columns$0,fold$1,iter$1,map$2,to_rank,to_name,descriptions];
    function compare_rows_or_columns(a_003,b_004)
     {return caml_call2(Ppx_compare_lib[1],a_003,b_004)
              ?0
              :0 === a_003?0 === b_004?0:-1:0 === b_004?1:0}
    function innerHeight(param)
     {function _bW_(_bY_){return _bY_}
      function _bX_(param){return Dom_html[2].documentElement.clientHeight}
      return caml_call3(Js[6][7],Dom_html[8].innerHeight,_bX_,_bW_)}
    function innerWidth(param)
     {function _bT_(_bV_){return _bV_}
      function _bU_(param){return Dom_html[2].documentElement.clientWidth}
      return caml_call3(Js[6][7],Dom_html[8].innerWidth,_bU_,_bT_)}
    function element_is_in_viewport(elt)
     {var
       rect=elt.getBoundingClientRect(),
       _bL_=caml_call2(Core_kernel_Float[36],rect.top,0);
      if(_bL_)
       {var _bM_=caml_call2(Core_kernel_Float[36],rect.left,0);
        if(_bM_)
         {var
           _bN_=innerHeight(0),
           _bO_=caml_call1(Core_kernel_Float[85],_bN_),
           _bP_=caml_call2(Core_kernel_Float[37],rect.bottom,_bO_);
          if(_bP_)
           {var
             _bQ_=innerWidth(0),
             _bR_=caml_call1(Core_kernel_Float[85],_bQ_);
            return caml_call2(Core_kernel_Float[37],rect.right,_bR_)}
          var _bS_=_bP_}
        else
         var _bS_=_bM_}
      else
       var _bS_=_bL_;
      return _bS_}
    function scroll(opt,param)
     {if(opt)var sth=opt[1],id=sth;else var id=cst_keep_in_view;
      var match=caml_call1(Dom_html[3],id);
      if(match)
       {var elt=match[1],_bK_=1 - element_is_in_viewport(elt);
        return _bK_?elt.scrollIntoView(Js[7]):_bK_}
      return 0}
    function viewport_rect_of_element(elt)
     {var rect=elt.getBoundingClientRect();
      return [0,rect.top,rect.left,rect.bottom,rect.right]}
    function viewport_rect(param)
     {var _bJ_=innerWidth(0);return [0,0,0,innerHeight(0),_bJ_]}
    function client_rect_of_element(elt)
     {var
       init=viewport_rect_of_element(elt),
       _bG_=caml_call1(Core_kernel_Float[85],elt.clientWidth),
       _bH_=init[2] + _bG_,
       _bI_=caml_call1(Core_kernel_Float[85],elt.clientHeight);
      return [0,init[1],init[2],init[1] + _bI_,_bH_]}
    function client_rect(param)
     {return [0,
              0,
              0,
              Dom_html[2].documentElement.clientHeight,
              Dom_html[2].documentElement.clientWidth]}
    function find_visible_range(length,nth_element_id,layout)
     {if(0 === length)return 0;
      function element_search(search_by,mode,layout,x)
       {function nth_element(n)
         {var
           id=caml_call1(nth_element_id,n),
           match=caml_call1(Dom_html[3],id);
          if(match){var elt=match[1];return elt}
          return caml_call3(Core_kernel[347],_a3_,id,0)}
        var
         first=viewport_rect_of_element(nth_element(0)),
         last=viewport_rect_of_element(nth_element(length - 1 | 0)),
         _bF_=Core_kernel_Float[43];
        function get(param,n)
         {var
           is_ascending=
            0 === layout
             ?caml_call2(Core_kernel_Float[37],first[1],last[1])
             :caml_call2(Core_kernel_Float[37],first[2],last[2]),
           n$0=is_ascending?n:(length - n | 0) - 1 | 0;
          return caml_call1
                  (search_by,viewport_rect_of_element(nth_element(n$0)))}
        function length$0(param){return length}
        return caml_call6
                (caml_call1(Base_Binary_searchable[1],[0,get,length$0])[1],
                 0,
                 0,
                 0,
                 _bF_,
                 mode,
                 x)}
      var viewport_rect$0=viewport_rect(0);
      if(0 === layout)
       var search_by=bottom,target=viewport_rect$0[1];
      else
       var search_by=right,target=viewport_rect$0[2];
      var
       first=
        element_search
         (search_by,
          -839473056,
          layout,
          caml_call1(Core_kernel_Float[85],target));
      if(0 === layout)
       var search_by$0=top,target$0=viewport_rect$0[3];
      else
       var search_by$0=left,target$0=viewport_rect$0[4];
      var
       last=
        element_search
         (search_by$0,
          200870407,
          layout,
          caml_call1(Core_kernel_Float[85],target$0));
      return caml_call2(Core_kernel_Option[54],first,last)}
    function get_scroll_container_js_expr(element)
     {var
       doc=element.ownerDocument || document,
       win=doc.defaultView || window,
       re=/(auto|scroll)/;
      if(element === doc)return doc;
      var cur=element.parentNode;
      while(cur.parentNode)
       {var style=win.getComputedStyle(cur);
        if(re.test(style.overflow + style.overflowY + style.overflowX))
         return cur;
        cur = cur.parentNode}
      return doc}
    function get_scroll_container(el){return get_scroll_container_js_expr(el)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Incr_dom_Js_misc=
      [0,
       [0,
        t_of_sexp,
        sexp_of_t,
        bin_t,
        bin_read_t$0,
        bin_read_t,
        bin_reader_t,
        bin_size_t,
        bin_write_t,
        bin_writer_t,
        bin_shape_t,
        compare,
        right,
        bottom,
        left,
        top,
        [0,
         names,
         right$0,
         bottom$0,
         left$0,
         top$0,
         fold,
         make_creator,
         create,
         map,
         iter,
         for_all,
         exists,
         to_list,
         map_poly,
         Direct],
        map$1,
        int_height,
        int_width,
        float_height,
        float_width],
       round_float_rect,
       viewport_rect,
       viewport_rect_of_element,
       client_rect,
       client_rect_of_element,
       element_is_in_viewport,
       scroll,
       rows_or_columns_of_sexp,
       sexp_of_rows_or_columns,
       bin_rows_or_columns,
       bin_read_rows_or_columns$0,
       bin_read_rows_or_columns,
       bin_reader_rows_or_columns,
       bin_size_rows_or_columns,
       bin_write_rows_or_columns,
       bin_writer_rows_or_columns,
       bin_shape_rows_or_columns,
       rows,
       columns,
       Variants_of_rows_or_columns,
       compare_rows_or_columns,
       find_visible_range,
       get_scroll_container];
    caml_register_global(161,Incr_dom_Js_misc,"Incr_dom__Js_misc");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_dom$8);
    caml_call1(Expect_test_collector[4][1],cst_src_start_app_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$9,cst$2);
    function timer_start(s,debug)
     {return debug?Firebug[1].time(s.toString()):debug}
    function timer_stop(s,debug)
     {return debug?Firebug[1].timeEnd(s.toString()):debug}
    function request_animation_frame(callback)
     {var
       _bD_=caml_call1(Async_kernel_Scheduler[3],0),
       current_context=caml_call1(Async_kernel_Scheduler[5],_bD_),
       _bE_=
        runtime.caml_js_wrap_callback
         (function(timestamp)
           {caml_call2(Async_kernel_Scheduler[55],current_context,callback);
            return 0});
      Dom_html[8].requestAnimationFrame(_bE_);
      return 0}
    function mark_dirty(t){return caml_call2(Async_kernel_Ivar[15],t[1],0)}
    function is_dirty(t){return caml_call1(Async_kernel_Ivar[17],t[1])}
    function derived(bind_to_element_with_id,opt,_a$_,initial_model,App)
     {if(opt)var sth=opt[1],debug=sth;else var debug=0;
      if(_a$_)
       var sth$0=_a$_[1],stop=sth$0;
      else
       var stop=caml_call1(Async_kernel_Deferred[21],0);
      caml_call1(Async_js[7],0);
      function _ba_(param)
       {var
         model_v=caml_call2(include[40][2],0,initial_model),
         model=caml_call1(include[40][4],model_v);
        function _bd_(old_value,new_value)
         {return caml_call2(App[1][1],old_value,new_value)}
        caml_call2(_V_,model,caml_call1(include[47][3],_bd_));
        var
         derived_model_incr=caml_call1(App[2][1],model),
         match=caml_call1(Async_kernel_Pipe[8],0),
         w=match[2],
         r=match[1];
        function schedule(action)
         {return caml_call2(Async_kernel_Pipe[27],w,action)}
        function handle(action)
         {return caml_call2(Async_kernel_Pipe[27],w,action)}
        var
         Event=caml_call1(Virtual_dom_Vdom[2][6],[0,[0],handle]),
         visibility=[0,caml_call1(Async_kernel_Ivar[13],0)];
        function viewport_changed(param){return mark_dirty(visibility)}
        caml_call1(Virtual_dom_Vdom[2][7],[0,viewport_changed]);
        var
         view=
          caml_call2
           (_P_,0,caml_call3(App[8],model,derived_model_incr,Event[2])),
         derived_model=caml_call2(_P_,0,derived_model_incr);
        function extract_immutable_summary(param)
         {var
           _bB_=caml_call1(include[41][6],derived_model),
           _bC_=caml_call1(include[40][5],model_v);
          return caml_call2(App[3][1],_bC_,_bB_)}
        caml_call1(_S_,0);
        var
         html=caml_call1(include[41][6],view),
         html_dom=caml_call1(Virtual_dom_Node[33],html),
         immutable_summary=extract_immutable_summary(0);
        if(bind_to_element_with_id)
         {var
           id=bind_to_element_with_id[1],
           elem=caml_call1(Dom_html[4],id),
           _be_=caml_call1(Js[5][10],elem.parentNode),
           parent=caml_call4(Core_kernel_Option[52],_a4_,0,0,_be_);
          caml_call3(Dom[3],parent,html_dom,elem)}
        else
         Dom_html[2].body = html_dom;
        function call_viewport_changed_on_event(event_name,where)
         {var _bx_=Js[8];
          function _by_(param){viewport_changed(0);return Js[7]}
          var
           _bz_=caml_call1(Dom[10],_by_),
           _bA_=caml_call1(Dom[14][1],event_name);
          caml_call4(Dom[15],where,_bA_,_bz_,_bx_);
          return 0}
        call_viewport_changed_on_event
         (cst_scroll,get_scroll_container(html_dom));
        call_viewport_changed_on_event(cst_resize,Dom_html[8]);
        function _bf_(state)
         {var
           prev_immutable_summary=[0,immutable_summary],
           prev_html=[0,html],
           prev_elt=[0,html_dom];
          function recompute_derived(model)
           {caml_call2(include[40][3],model_v,model);
            caml_call1(_S_,0);
            return caml_call1(include[41][6],derived_model)}
          function callback(param)
           {if(caml_call1(Async_kernel_Deferred[7],stop))return 0;
            if(! is_dirty(visibility))
             if(caml_call1(Async_kernel_Pipe[24],r))
              {var
                _br_=function(param){return request_animation_frame(callback)},
                _bs_=[0,caml_call1(Async_kernel_Ivar[18],visibility[1]),0],
                _bt_=caml_call1(Async_kernel_Pipe[43],r),
                _bu_=[0,caml_call1(Async_kernel_Deferred[20],_bt_),_bs_],
                _bv_=caml_call1(Async_kernel_Deferred[26],_bu_),
                _bw_=caml_call2(Async_kernel_Deferred[17][4][3],_bv_,_br_);
               return caml_call1(Async_kernel[35],_bw_)}
            timer_start(cst_total,debug);
            timer_start(cst_update_visibility,debug);
            if(is_dirty(visibility))
             {if(is_dirty(visibility))
               visibility[1] = caml_call1(Async_kernel_Ivar[12],0);
              caml_call1(_S_,0);
              var
               _bj_=caml_call1(include[41][6],derived_model),
               _bk_=caml_call1(include[40][5],model_v),
               new_model=caml_call3(App[7],_bk_,_bj_,recompute_derived);
              caml_call2(include[40][3],model_v,new_model)}
            timer_stop(cst_update_visibility$0,debug);
            timer_start(cst_apply_actions,debug);
            for(;;)
             {var match=caml_call2(Async_kernel_Pipe[38],0,r);
              if(typeof match === "number")
               {if(3456156 <= match)
                 caml_call1(Core_kernel[164],cst_bug_Action_pipe_closed);
                timer_stop(cst_apply_actions$0,debug);
                timer_start(cst_stabilize,debug);
                var
                 date=new (Js[22])(),
                 _bn_=date.getTime(),
                 _bo_=caml_call1(Core_kernel_Time_ns[1][44],_bn_),
                 now=caml_call1(Core_kernel_Time_ns[34],_bo_);
                caml_call1(_am_,now);
                caml_call1(_S_,0);
                timer_stop(cst_stabilize$0,debug);
                var
                 immutable_summary=extract_immutable_summary(0),
                 html=caml_call1(include[41][6],view);
                timer_start(cst_diff,debug);
                var
                 patch=
                  caml_call2(Virtual_dom_Node[36][1],prev_html[1],html);
                timer_stop(cst_diff$0,debug);
                if(1 - caml_call1(Virtual_dom_Node[36][3],patch))
                 mark_dirty(visibility);
                timer_start(cst_patch,debug);
                var elt=caml_call2(Virtual_dom_Node[36][2],patch,prev_elt[1]);
                timer_stop(cst_patch$0,debug);
                timer_start(cst_on_display,debug);
                var
                 _bp_=caml_call1(include[41][6],derived_model),
                 _bq_=caml_call1(include[40][5],model_v);
                caml_call4(App[10],prev_immutable_summary[1],_bq_,_bp_,state);
                timer_stop(cst_on_display$0,debug);
                prev_immutable_summary[1] = immutable_summary;
                prev_html[1] = html;
                prev_elt[1] = elt;
                timer_stop(cst_total$0,debug);
                if(debug)Firebug[1].debug("-------");
                return request_animation_frame(callback)}
              var action=match[2];
              if(caml_call1(App[5][2],action))
               {var
                 _bl_=[0,[1,[0,_a5_,[0,caml_call1(App[5][1],action),0]]],0],
                 _bm_=
                  [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_Action),_bl_]];
                caml_call1(Async_js_Debug[1],_bm_)}
              var
               old_model=caml_call1(include[40][5],model_v),
               new_model$0=
                caml_call4(App[6],action,old_model,state,recompute_derived);
              caml_call2(include[40][3],model_v,new_model$0);
              continue}}
          request_animation_frame(callback);
          return caml_call1(Async_kernel_Deferred[21],0)}
        var
         _bg_=caml_call1(include[41][6],derived_model),
         _bh_=caml_call1(include[40][5],model_v),
         _bi_=caml_call3(App[9],schedule,_bh_,_bg_);
        return caml_call2(Async_kernel_Deferred[17][4][2],_bi_,_bf_)}
      var
       _bb_=caml_call1(Async_js[10],0),
       _bc_=caml_call2(Async_kernel_Deferred[17][4][2],_bb_,_ba_);
      return caml_call1(Async_kernel[35],_bc_)}
    function simple(bind_to_element_with_id,debug,stop,initial_model,App)
     {var Model=App[1],State=App[3];
      function create(param){return caml_call1(_f_,0)}
      var Derived_model=[0,create];
      function create$0(model,param){return model}
      var
       Model_summary=[0,create$0],
       include=App[2],
       sexp_of_t=include[1],
       should_log=include[2],
       Action=[0,sexp_of_t,should_log];
      function apply_action(t,model,state,param)
       {return caml_call3(App[4],t,model,state)}
      function update_visibility(model,param,_a__)
       {return caml_call1(App[5],model)}
      function on_startup(schedule,model,param)
       {return caml_call2(App[7],schedule,model)}
      function view(model,param,inject)
       {return caml_call2(App[6],model,inject)}
      function on_display(old,model,param,state)
       {return caml_call3(App[8],old,model,state)}
      return derived
              (bind_to_element_with_id,
               debug,
               stop,
               initial_model,
               [0,
                Model,
                Derived_model,
                Model_summary,
                State,
                Action,
                apply_action,
                update_visibility,
                view,
                on_startup,
                on_display])}
    function imperative(bind_to_element_with_id,debug,stop,initial_model,App)
     {var Model=App[1],State=App[2];
      function create(param){return caml_call1(_f_,0)}
      var Derived_model=[0,create],include=App[3],_a8_=include[1];
      function create$0(model,param){return caml_call1(_a8_,model)}
      var Model_summary=[0,create$0],Action=App[4];
      function apply_action(t,model,state,param)
       {return caml_call3(App[5],t,model,state)}
      function update_visibility(model,param,_a9_)
       {return caml_call1(App[6],model)}
      function on_startup(schedule,model,param)
       {return caml_call2(App[8],schedule,model)}
      function view(model,param,inject)
       {return caml_call2(App[7],model,inject)}
      function on_display(old,model,param,state)
       {return caml_call3(App[9],old,model,state)}
      return derived
              (bind_to_element_with_id,
               debug,
               stop,
               initial_model,
               [0,
                Model,
                Derived_model,
                Model_summary,
                State,
                Action,
                apply_action,
                update_visibility,
                view,
                on_startup,
                on_display])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incr_dom_Start_app=[0,simple,imperative,derived];
    caml_register_global(174,Incr_dom_Start_app,"Incr_dom__Start_app");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_dom$11);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_dom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_dom$12,cst$3);
    var _a6_=include$0[1],_a7_=include$0[2];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_dom$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Incr_dom$0=[0,_a6_,_a7_,0,0,0,0];
    caml_register_global(176,Incr_dom$0,"Incr_dom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX2RvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
