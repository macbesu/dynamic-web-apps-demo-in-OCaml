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
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     int64$0=[255,1,0,0],
     cst_float_bounds_are_not_finite_numbers=
      caml_new_string("float: bounds are not finite numbers"),
     cst_float_bounds_are_crossed=caml_new_string("float: bounds are crossed"),
     cst_int64_crossed_bounds=caml_new_string("int64: crossed bounds"),
     pos=caml_new_string("src/splittable_random.ml:138:19"),
     pos$0=caml_new_string("src/splittable_random.ml:132:19"),
     draw_maximum=[255,104,0,0],
     remainder_maximum=[255,9,0,0],
     cst_gamma_value_is_not_odd=caml_new_string("gamma value is not odd"),
     cst_splittable_random=caml_new_string("splittable_random"),
     cst_src_splittable_random_ml=caml_new_string("src/splittable_random.ml"),
     cst=caml_new_string(""),
     cst_splittable_random$0=caml_new_string("splittable_random"),
     golden_gamma=[255,4881429,7977343,40503],
     cst_src_splittable_random_ml$0=
      caml_new_string("src/splittable_random.ml"),
     cst_odd_gamma=caml_new_string(": odd gamma"),
     cst_src_splittable_random_ml$1=
      caml_new_string("src/splittable_random.ml"),
     cst_remainder_is_unbiased=caml_new_string(": remainder_is_unbiased"),
     cst_src_splittable_random_ml$2=
      caml_new_string("src/splittable_random.ml"),
     cst_double_ulp=caml_new_string(": double_ulp"),
     cst_src_splittable_random_ml$3=
      caml_new_string("src/splittable_random.ml"),
     cst_unit_float_from_int64=caml_new_string(": unit_float_from_int64"),
     cst_src_splittable_random_ml$4=
      caml_new_string("src/splittable_random.ml"),
     cst_src_splittable_random_ml$5=
      caml_new_string("src/splittable_random.ml"),
     cst_let_int64_1L_in_fun_unit_float_from_int64_int64=
      caml_new_string
       ("let int64 = 1L in fun () -> unit_float_from_int64 int64"),
     cst_unit_float_from_int64$0=caml_new_string("unit_float_from_int64"),
     cst_splittable_random$1=caml_new_string("splittable_random"),
     Base=global_data.Base,
     Base_Float=global_data.Base__Float,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Base_Int64=global_data.Base__Int64,
     Base_Word_size=global_data.Base__Word_size,
     Base_Int63=global_data.Base__Int63,
     Base_Error=global_data.Base__Error,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Base_Int=global_data.Base__Int,
     Base_Random=global_data.Base__Random,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Popcount=global_data.Base__Popcount,
     Inline_test_config=global_data.Inline_test_config;
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_splittable_random);
    caml_call1(Expect_test_collector[4][1],cst_src_splittable_random_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_splittable_random$0,cst);
    var
     _B_=[0,caml_new_string("hi")],
     _C_=[0,caml_new_string("lo")],
     _D_=[0,caml_new_string("hi")],
     _E_=[0,caml_new_string("lo")],
     _v_=[255,0,0,0],
     _A_=[0,caml_new_string("src/splittable_random.ml"),220,2],
     _w_=[255,16777215,16777215,65535],
     _z_=[0,caml_new_string("src/splittable_random.ml"),221,2],
     _x_=[255,16777215,16777215,65535],
     _y_=[0,caml_new_string("src/splittable_random.ml"),222,2],
     _t_=[0,caml_new_string("src/splittable_random.ml"),207,4],
     _s_=[0,caml_new_string("src/splittable_random.ml"),208,4],
     _r_=[0,caml_new_string("src/splittable_random.ml"),212,4],
     _q_=[0,caml_new_string("src/splittable_random.ml"),213,4],
     _m_=[0,caml_new_string("hi")],
     _n_=[0,caml_new_string("lo")],
     _o_=[255,0,0,0],
     _j_=[0,caml_new_string("output")],
     _k_=[0,caml_new_string("input")],
     _g_=[255,1,0,0],
     _h_=[255,11184810,11184810,43690],
     _e_=[255,15001017,4680988,48984],
     _f_=[255,3215851,4832019,38096],
     _c_=[255,5606605,11524077,65361],
     _d_=[255,8776787,12189210,50382],
     _a_=[255,1,0,0];
    function is_odd(x)
     {var _aE_=caml_call2(Base_Int64[92][20],x,_a_);
      return caml_call2(Base_Int64[92][9],_aE_,x)}
    var _b_=Base_Popcount[3];
    function of_int(seed)
     {return [0,caml_call1(Base_Int64[93],seed),golden_gamma]}
    function copy(param)
     {var seed=param[1],odd_gamma=param[2];return [0,seed,odd_gamma]}
    function mix_bits(z,n)
     {var _aD_=caml_call2(Base_Int64[92][25],z,n);
      return caml_call2(Base_Int64[92][21],z,_aD_)}
    function mix64(z)
     {var
       _aB_=mix_bits(z,33),
       z$0=caml_call2(Base_Int64[92][3],_aB_,_c_),
       _aC_=mix_bits(z$0,33),
       z$1=caml_call2(Base_Int64[92][3],_aC_,_d_);
      return mix_bits(z$1,33)}
    function mix_odd_gamma(z$1)
     {var
       _ax_=mix_bits(z$1,30),
       z=caml_call2(Base_Int64[92][3],_ax_,_e_),
       _ay_=mix_bits(z,27),
       z$0=caml_call2(Base_Int64[92][3],_ay_,_f_),
       _az_=mix_bits(z$0,31),
       z$2=caml_call2(Base_Int64[92][20],_az_,_g_),
       _aA_=caml_call2(Base_Int64[92][25],z$2,1),
       n=caml_call1(_b_,caml_call2(Base_Int64[92][21],z$2,_aA_));
      return caml_call2(Base_Int[11],n,24)
              ?caml_call2(Base_Int64[92][21],z$2,_h_)
              :z$2}
    function _i_(param)
     {var input=-1e6;
      for(;;)
       {var output=mix_odd_gamma(caml_call1(Base_Int64[93],input));
        if(1 - is_odd(output))
         {var
           _at_=[0,[1,[0,_j_,[0,caml_call1(Base[228],output),0]]],0],
           _au_=[0,[1,[0,_k_,[0,caml_call1(Base[218],input),0]]],_at_],
           _av_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_gamma_value_is_not_odd),
              _au_]];
          caml_call1(Base_Error[24],_av_)}
        var _aw_=input + 1 | 0;
        if(1e6 !== input){var input=_aw_;continue}
        return 0}}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_odd_gamma,
      0,
      cst_src_splittable_random_ml$0,
      66,
      2,
      296,
      _i_);
    function next_seed(t)
     {var next=caml_call2(Base_Int64[92][1],t[1],t[2]);
      t[1] = next;
      return next}
    function of_seed_and_gamma(seed,gamma)
     {var seed$0=mix64(seed),odd_gamma=mix_odd_gamma(gamma);
      return [0,seed$0,odd_gamma]}
    function random_int64(random_state)
     {return caml_call3
              (Base_Random[16][14],random_state,Base_Int64[89],Base_Int64[88])}
    function create(random_state)
     {var seed=random_int64(random_state),gamma=random_int64(random_state);
      return of_seed_and_gamma(seed,gamma)}
    function split(t)
     {var seed=next_seed(t),gamma=next_seed(t);
      return of_seed_and_gamma(seed,gamma)}
    function next_int64(t){return mix64(next_seed(t))}
    function perturb(t,salt)
     {var
       _as_=mix64(caml_call1(Base_Int64[93],salt)),
       next=caml_call2(Base_Int64[92][1],t[1],_as_);
      t[1] = next;
      return 0}
    function bool(state){return is_odd(next_int64(state))}
    function remainder_is_unbiased
     (draw,remainder,draw_maximum,remainder_maximum)
     {var
       _aq_=caml_call2(Base_Int64[92][2],draw_maximum,remainder_maximum),
       _ar_=caml_call2(Base_Int64[92][2],draw,remainder);
      return caml_call2(Base_Int64[92][8],_ar_,_aq_)}
    function _l_(param)
     {function is_unbiased(draw)
       {var
         _ap_=caml_call1(Base_Int64[62],remainder_maximum),
         remainder=caml_call2(Base_Int64[54],draw,_ap_);
        return remainder_is_unbiased
                (draw,remainder,draw_maximum,remainder_maximum)}
      var i$0=0;
      for(;;)
       {var
         got$0=is_unbiased(caml_call1(Base_Int64[93],i$0)),
         message$0=[0,caml_call1(Base_Int[10],i$0)],
         sexpifier$0=Base[202],
         comparator$0=Base[198];
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos$0,
          sexpifier$0,
          comparator$0,
          0,
          message$0,
          0,
          1,
          got$0);
        var _ao_=i$0 + 1 | 0;
        if(99 !== i$0){var i$0=_ao_;continue}
        var i=100;
        for(;;)
         {var
           got=is_unbiased(caml_call1(Base_Int64[93],i)),
           message=[0,caml_call1(Base_Int[10],i)],
           sexpifier=Base[202],
           comparator=Base[198];
          caml_call8
           (Ppx_assert_lib_Runtime[3],
            pos,
            sexpifier,
            comparator,
            0,
            message,
            0,
            0,
            got);
          var _an_=i + 1 | 0;
          if(104 !== i){var i=_an_;continue}
          return 0}}}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_remainder_is_unbiased,
      0,
      cst_src_splittable_random_ml$1,
      123,
      0,
      633,
      _l_);
    function int64(state,lo,hi)
     {if(caml_call2(Base_Int64[92][10],lo,hi))
       {var
         _ah_=[0,[1,[0,_m_,[0,caml_call1(Base[228],hi),0]]],0],
         _ai_=[0,[1,[0,_n_,[0,caml_call1(Base[228],lo),0]]],_ah_],
         _aj_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_int64_crossed_bounds),_ai_]];
        caml_call1(Base_Error[24],_aj_)}
      var maximum=caml_call2(Base_Int64[92][2],hi,lo);
      if(caml_call2(Base_Int64[92][9],maximum,Base_Int64[88]))
       {var
         _ak_=Base_Int64[88],
         _al_=next_int64(state),
         _am_=caml_call2(Base_Int64[92][19],_al_,_ak_);
        return caml_call2(Base_Int64[92][1],_am_,lo)}
      if(caml_call2(Base_Int64[92][7],maximum,_o_))
       for(;;)
        {var
          _ae_=Base_Int64[88],
          _af_=next_int64(state),
          draw$0=caml_call2(Base_Int64[92][19],_af_,_ae_),
          _ag_=caml_call1(Base_Int64[62],maximum),
          remainder=caml_call2(Base_Int64[54],draw$0,_ag_);
         if(remainder_is_unbiased(draw$0,remainder,Base_Int64[88],maximum))
          return caml_call2(Base_Int64[92][1],remainder,lo);
         continue}
      for(;;)
       {var draw=next_int64(state);
        if(caml_call2(Base_Int64[92][8],lo,draw))
         if(caml_call2(Base_Int64[92][8],draw,hi))return draw;
        continue}}
    function int$0(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[93],lo),
       hi$0=caml_call1(Base_Int64[93],hi),
       _ad_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[100],_ad_)}
    function int32(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[95],lo),
       hi$0=caml_call1(Base_Int64[95],hi),
       _ac_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[101],_ac_)}
    function nativeint(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[97],lo),
       hi$0=caml_call1(Base_Int64[97],hi),
       _ab_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[102],_ab_)}
    function int63(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int63[83],lo),
       hi$0=caml_call1(Base_Int63[83],hi),
       _aa_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int63[103],_aa_)}
    var double_ulp=caml_call2(Base[294],2,-53);
    function _p_(param)
     {if(0 === Base_Word_size[3])
       {var _W_=caml_call2(Base[291],1,double_ulp);
        if(caml_call2(Base_Float[103][11],_W_,1))
         {var
           _X_=caml_call2(Base[293],double_ulp,2),
           _Y_=caml_call2(Base[291],1,_X_);
          if(caml_call2(Base_Float[103][8],_Y_,1))return 0;
          throw [0,Assert_failure,_q_]}
        throw [0,Assert_failure,_r_]}
      var _Z_=caml_call2(Base[291],1,double_ulp);
      if(caml_call2(Base_Float[103][11],_Z_,1))
       {var
         ___=caml_call2(Base[293],double_ulp,2),
         _$_=caml_call2(Base[291],1,___);
        if(caml_call2(Base_Float[103][9],_$_,1))return 0;
        throw [0,Assert_failure,_s_]}
      throw [0,Assert_failure,_t_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_double_ulp,
      0,
      cst_src_splittable_random_ml$2,
      203,
      0,
      457,
      _p_);
    function unit_float_from_int64(int64)
     {var
       _U_=caml_call2(Base_Int64[92][25],int64,11),
       _V_=caml_call1(Base_Int64[2],_U_);
      return caml_call2(Base[292],_V_,double_ulp)}
    function _u_(param)
     {var _Q_=unit_float_from_int64(_v_);
      if(caml_call2(Base_Float[103][9],_Q_,0))
       {var _R_=unit_float_from_int64(_w_);
        if(caml_call2(Base_Float[103][11],_R_,1))
         {var
           _S_=caml_call2(Base[291],1,double_ulp),
           _T_=unit_float_from_int64(_x_);
          if(caml_call2(Base_Float[103][9],_T_,_S_))return 0;
          throw [0,Assert_failure,_y_]}
        throw [0,Assert_failure,_z_]}
      throw [0,Assert_failure,_A_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_unit_float_from_int64,
      0,
      cst_src_splittable_random_ml$3,
      218,
      0,
      275,
      _u_);
    function unit_float(state)
     {return unit_float_from_int64(next_int64(state))}
    function float$0(state,lo$1,hi$0)
     {var
       _I_=caml_call1(Base_Float[113],lo$1),
       _J_=_I_?caml_call1(Base_Float[113],hi$0):_I_;
      if(1 - _J_)
       {var
         _K_=[0,[1,[0,_B_,[0,caml_call1(Base[213],hi$0),0]]],0],
         _L_=[0,[1,[0,_C_,[0,caml_call1(Base[213],lo$1),0]]],_K_],
         _M_=
          [1,
           [0,
            caml_call1
             (Sexplib0_Sexp_conv[7],cst_float_bounds_are_not_finite_numbers),
            _L_]];
        caml_call1(Base[301],_M_)}
      if(caml_call2(Base_Float[11],lo$1,hi$0))
       {var
         _N_=[0,[1,[0,_D_,[0,caml_call1(Base[213],hi$0),0]]],0],
         _O_=[0,[1,[0,_E_,[0,caml_call1(Base[213],lo$1),0]]],_N_],
         _P_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_float_bounds_are_crossed),
            _O_]];
        caml_call1(Base[301],_P_)}
      var lo=lo$1,hi=hi$0;
      for(;;)
       {var range=caml_call2(Base[291],hi,lo);
        if(caml_call1(Base_Float[113],range))
         {var _F_=unit_float(state),_G_=caml_call2(Base[292],_F_,range);
          return caml_call2(Base[290],lo,_G_)}
        var _H_=caml_call2(Base[290],hi,lo),lo$0=caml_call2(Base[293],_H_,2);
        if(bool(state)){var hi=lo$0;continue}
        var lo=lo$0;
        continue}}
    if(Ppx_bench_lib_Benchmark_accumulator[3])
     {var
       f=
        function(param)
         {return function(param){return unit_float_from_int64(int64$0)}};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumulator[5],
        cst_unit_float_from_int64$0,
        cst_let_int64_1L_in_fun_unit_float_from_int64_int64,
        cst_src_splittable_random_ml$5,
        cst_src_splittable_random_ml$4,
        272,
        0,
        99,
        [0,f])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_splittable_random$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Splittable_random=
      [0,
       [0,create,of_int,perturb,copy,split],
       bool,
       int$0,
       int32,
       int63,
       int64,
       nativeint,
       float$0,
       unit_float];
    runtime.caml_register_global(85,Splittable_random,"Splittable_random");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzcGxpdHRhYmxlX3JhbmRvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
