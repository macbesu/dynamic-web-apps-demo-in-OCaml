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
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_KRB2=caml_new_string("KRB2"),
     cst_KBT=caml_new_string("KBT"),
     cst_RPC=caml_new_string("RPC"),
     cst_Krb=caml_new_string("Krb"),
     cst_Krb_test_mode=caml_new_string("Krb_test_mode"),
     cst_Rpc=caml_new_string("Rpc"),
     cst_krb=caml_new_string("krb"),
     cst_krb_test_mode=caml_new_string("krb_test_mode"),
     cst_rpc=caml_new_string("rpc"),
     cst_Krb$0=caml_new_string("Krb"),
     cst_Krb_test_mode$0=caml_new_string("Krb_test_mode"),
     cst_Rpc$0=caml_new_string("Rpc"),
     cst_krb$0=caml_new_string("krb"),
     cst_krb_test_mode$0=caml_new_string("krb_test_mode"),
     cst_rpc$0=caml_new_string("rpc"),
     cst_protocol_version_header=caml_new_string("protocol_version_header"),
     cst_src_known_protocol_ml=caml_new_string("src/known_protocol.ml"),
     cst=caml_new_string(""),
     cst_protocol_version_header$0=caml_new_string("protocol_version_header"),
     all=[0,0,[0,1,[0,2,0]]],
     tp_loc=caml_new_string("src/known_protocol.ml.t"),
     retired_krb_word=caml_new_string("KRB"),
     cst_src_known_protocol_ml$0=caml_new_string("src/known_protocol.ml"),
     cst_validate_magic_words=caml_new_string(": validate magic words"),
     cst_src_known_protocol_ml$1=caml_new_string("src/known_protocol.ml"),
     cst_magic_numbers=caml_new_string(": magic numbers"),
     cst_protocol_version_header$1=caml_new_string("protocol_version_header"),
     cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers=
      caml_new_string
       ("[Protocol_version_header.negotiate]: conflicting magic protocol numbers"),
     cst_Protocol_version_header_negotiate_no_shared_version_numbers=
      caml_new_string
       ("[Protocol_version_header.negotiate]: no shared version numbers"),
     cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers$0=
      caml_new_string
       ("[Protocol_version_header.negotiate]: conflicting magic protocol numbers"),
     cst_No_magic_numbers_seen=caml_new_string("No magic numbers seen"),
     cst_Protocol_version_header_negotiate_multiple_magic_numbers_seen=
      caml_new_string
       ("[Protocol_version_header.negotiate]: multiple magic numbers seen."),
     cst_protocol_version_header$2=caml_new_string("protocol_version_header"),
     cst_src_protocol_version_header_ml=
      caml_new_string("src/protocol_version_header.ml"),
     cst$0=caml_new_string(""),
     cst_protocol_version_header$3=caml_new_string("protocol_version_header"),
     cst_t=caml_new_string("t"),
     cst_src_protocol_version_header_ml_3_0=
      caml_new_string("src/protocol_version_header.ml:3:0"),
     cst_t$0=caml_new_string("t"),
     cst_protocol_version_header$4=caml_new_string("protocol_version_header"),
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Char=global_data.Core_kernel__Char,
     Core_kernel_String=global_data.Core_kernel__String,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Inline_test_config=global_data.Inline_test_config,
     Bin_prot_Type_class=global_data.Bin_prot__Type_class,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Base_Or_error=global_data.Base__Or_error,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Bin_shape_lib_Bin_shape=global_data.Bin_shape_lib__Bin_shape,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Protocol_version_header=[0,0,0];
    caml_register_global
     (64,Protocol_version_header,"Protocol_version_header__");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header);
    caml_call1(Expect_test_collector[4][1],cst_src_known_protocol_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$0,cst);
    var
     _m_=[0,caml_new_string("src/known_protocol.ml"),44,2],
     _l_=[0,caml_new_string("src/known_protocol.ml"),45,2],
     _k_=[0,caml_new_string("src/known_protocol.ml"),46,2],
     _j_=[0,caml_new_string("src/known_protocol.ml"),47,2],
     _h_=[0,caml_new_string("src/known_protocol.ml"),37,2],
     _g_=[0,caml_new_string("src/known_protocol.ml"),39,2],
     _a_=[0,caml_new_string("Krb")],
     _b_=[0,caml_new_string("Krb_test_mode")],
     _c_=[0,caml_new_string("Rpc")],
     _y_=[0,caml_new_string("Unknown")],
     _w_=[0,caml_new_string("peer_protocol")],
     _x_=[0,caml_new_string("us_protocol")],
     _t_=[0,caml_new_string("protocol")],
     _u_=[0,caml_new_string("peer_versions")],
     _v_=[0,caml_new_string("us_versions")],
     _z_=[0,caml_new_string("peer_protocol")],
     _A_=[0,caml_new_string("us_protocol")],
     _B_=[0,caml_new_string("us_versions")],
     _r_=[0,caml_new_string("versions")],
     _s_=[0,caml_new_string("protocols")];
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      switch(a_001)
       {case 0:return 0 === b_002?0:-1;
        case 1:switch(b_002){case 1:return 0;case 2:return -1}break;
        default:switch(b_002){case 1:return 1;case 2:return 0}}
      return 1}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _ag_=sexp[1];
        if(caml_string_notequal(_ag_,cst_Krb))
         {if(caml_string_notequal(_ag_,cst_Krb_test_mode))
           {if(caml_string_notequal(_ag_,cst_Rpc))
             if(caml_string_notequal(_ag_,cst_krb))
              if(caml_string_notequal(_ag_,cst_krb_test_mode))
               if(caml_string_notequal(_ag_,cst_rpc))
                var switch$0=1,switch$1=0,switch$2=0;
               else
                var switch$2=1;
              else
               var switch$1=1,switch$2=0;
             else
              var switch$0=0,switch$1=0,switch$2=0;
            else
             var switch$2=1;
            if(switch$2)return 2}
          else
           var switch$1=1;
          if(switch$1)return 1}
        else
         var switch$0=0;
        if(! switch$0)return 0}
      else
       {var _ah_=sexp[1];
        if(! _ah_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _ai_=_ah_[1];
        if(0 !== _ai_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _aj_=_ai_[1];
        if(caml_string_notequal(_aj_,cst_Krb$0))
         {if(caml_string_notequal(_aj_,cst_Krb_test_mode$0))
           {if(caml_string_notequal(_aj_,cst_Rpc$0))
             if(caml_string_notequal(_aj_,cst_krb$0))
              if(caml_string_notequal(_aj_,cst_krb_test_mode$0))
               if(caml_string_notequal(_aj_,cst_rpc$0))
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
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
          else
           var switch$4=1;
          if(switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
        else
         var switch$3=0;
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t(param)
     {switch(param){case 0:return _a_;case 1:return _b_;default:return _c_}}
    function magic_word(param)
     {switch(param)
       {case 0:return cst_KRB2;case 1:return cst_KBT;default:return cst_RPC}}
    function gen_magic_number(word)
     {function _ae_(acc,c)
       {return (acc * 256 | 0) + caml_call1(Core_kernel_Char[5],c) | 0}
      var _af_=caml_call1(Core_kernel_String[54],word);
      return caml_call3(Core_kernel_List[20],_af_,0,_ae_)}
    function magic_number(t){return gen_magic_number(magic_word(t))}
    function _d_(p){return [0,magic_number(p),p]}
    var
     _e_=caml_call2(Core_kernel_List[84],all,_d_),
     by_magic_number=caml_call1(Core_kernel_Int[120][8],_e_);
    function _f_(param)
     {var
       magic_words=
        [0,retired_krb_word,caml_call2(Core_kernel_List[84],all,magic_word)],
       magic_numbers=
        caml_call2(Core_kernel_List[84],magic_words,gen_magic_number);
      function _ad_(n)
       {return n <= caml_call1(Core_kernel_Int[1],1073741823)?1:0}
      if(caml_call2(Core_kernel_List[24],magic_numbers,_ad_))
       {if
         (caml_call2(Core_kernel_List[122],Core_kernel_Int[107],magic_numbers))
         throw [0,Assert_failure,_g_];
        return 0}
      throw [0,Assert_failure,_h_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_validate_magic_words,
      0,
      cst_src_known_protocol_ml$0,
      30,
      0,
      459,
      _f_);
    function _i_(param)
     {if(4346443 === gen_magic_number(retired_krb_word))
       {if(843207243 === magic_number(0))
         {if(5521995 === magic_number(1))
           {if(4411474 === magic_number(2))return 0;
            throw [0,Assert_failure,_j_]}
          throw [0,Assert_failure,_k_]}
        throw [0,Assert_failure,_l_]}
      throw [0,Assert_failure,_m_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_magic_numbers,
      0,
      cst_src_known_protocol_ml$1,
      43,
      0,
      270,
      _i_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Protocol_version_header_Known_protocol=
      [0,compare,all,t_of_sexp,sexp_of_t,magic_number,by_magic_number];
    caml_register_global
     (76,
      Protocol_version_header_Known_protocol,
      "Protocol_version_header__Known_protocol");
    caml_call1
     (Ppx_bench_lib_Benchmark_accumulator[1][1],cst_protocol_version_header$2);
    caml_call1(Expect_test_collector[4][1],cst_src_protocol_version_header_ml);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_protocol_version_header$3,cst$0);
    var
     _n_=caml_call1(Core_kernel[509],Core_kernel[450]),
     _o_=[0,[0,caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t),0,_n_],0],
     _p_=
      caml_call1
       (Bin_shape_lib_Bin_shape[4][1],cst_src_protocol_version_header_ml_3_0),
     group=caml_call2(Bin_prot_Shape[6],_p_,_o_),
     _q_=caml_call1(Bin_shape_lib_Bin_shape[2][1],cst_t$0),
     bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_q_),0);
    function bin_size_t(v)
     {return caml_call2(Core_kernel[506],Core_kernel[447],v)}
    function bin_write_t(buf,pos,v)
     {return caml_call3
              (caml_call1(Core_kernel[507],Core_kernel[448]),buf,pos,v)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t(buf,pos_ref,vint)
     {return caml_call3
              (caml_call1(Core_kernel[504],Core_kernel[444]),buf,pos_ref,vint)}
    function bin_read_t$0(buf,pos_ref)
     {return caml_call2
              (caml_call1(Core_kernel[503],Core_kernel[444]),buf,pos_ref)}
    var
     bin_reader_t=[0,bin_read_t$0,bin_read_t],
     bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
    function t_of_sexp$0(t)
     {return caml_call2(Core_kernel[512],Core_kernel[454],t)}
    function sexp_of_t$0(v)
     {return caml_call2(Core_kernel[513],Core_kernel[455],v)}
    function create(protocol,supported_versions)
     {return [0,magic_number(protocol),supported_versions]}
    function get_protocol(t)
     {function _$_(v)
       {var match=caml_call2(Core_kernel_Map[30],by_magic_number,v);
        if(match){var p=match[1];return [0,3506791,p]}
        return [0,4152137,v]}
      var
       match=caml_call2(Core_kernel_List[67],t,_$_),
       versions=match[2],
       protocols=match[1];
      if(protocols)
       {if(protocols[2])
         {var
           _aa_=
            [0,
             [1,
              [0,
               _r_,
               [0,caml_call2(Core_kernel[513],Core_kernel[455],versions),0]]],
             0],
           _ab_=
            [0,
             [1,
              [0,_s_,[0,caml_call2(Core_kernel[513],sexp_of_t,protocols),0]]],
             _aa_],
           _ac_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],
                cst_Protocol_version_header_negotiate_multiple_magic_numbers_seen),
              _ab_]];
          return caml_call1(Core_kernel_Or_error[44],_ac_)}
        var p=protocols[1];
        return [0,[0,[0,p],caml_call1(Core_kernel_Int[121][57],versions)]]}
      return [0,[0,0,caml_call1(Core_kernel_Int[121][57],versions)]]}
    function negotiate(allow_legacy_peer,us,peer)
     {function _G_(param)
       {var us_versions=param[2],us_protocol=param[1];
        function _I_(param)
         {var peer_versions=param[2],peer_protocol=param[1];
          function _K_(us_protocol)
           {function _O_(peer_protocol)
             {var
               match=compare(us_protocol,peer_protocol),
               _S_=0 === match?1:0;
              if(_S_)
               {var
                 _T_=caml_call2(Core_kernel_Set[15],us_versions,peer_versions),
                 match$0=caml_call1(Core_kernel_Set[59],_T_);
                if(match$0){var version=match$0[1];return [0,version]}
                var
                 _U_=[0,[1,[0,_t_,[0,sexp_of_t(us_protocol),0]]],0],
                 _V_=
                  [0,
                   [1,
                    [0,
                     _u_,
                     [0,caml_call1(Core_kernel_Int[121][74],peer_versions),0]]],
                   _U_],
                 _W_=
                  [0,
                   [1,
                    [0,
                     _v_,
                     [0,caml_call1(Core_kernel_Int[121][74],us_versions),0]]],
                   _V_],
                 _X_=
                  [1,
                   [0,
                    caml_call1
                     (Sexplib0_Sexp_conv[7],
                      cst_Protocol_version_header_negotiate_no_shared_version_numbers),
                    _W_]];
                return caml_call1(Core_kernel_Or_error[44],_X_)}
              var
               _Y_=[0,[1,[0,_w_,[0,sexp_of_t(peer_protocol),0]]],0],
               _Z_=[0,[1,[0,_x_,[0,sexp_of_t(us_protocol),0]]],_Y_],
               ___=
                [1,
                 [0,
                  caml_call1
                   (Sexplib0_Sexp_conv[7],
                    cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers),
                  _Z_]];
              return caml_call1(Core_kernel_Or_error[44],___)}
            if(peer_protocol)
             var x=peer_protocol[1],_P_=caml_call1(Base_Or_error[24][1],x);
            else
             if(allow_legacy_peer)
              var _P_=caml_call1(Base_Or_error[24][1],us_protocol);
             else
              var
               _Q_=
                [0,
                 [1,[0,_A_,[0,sexp_of_t(us_protocol),0]]],
                 [0,[1,[0,_z_,[0,_y_,0]]],0]],
               _R_=
                [1,
                 [0,
                  caml_call1
                   (Sexplib0_Sexp_conv[7],
                    cst_Protocol_version_header_negotiate_conflicting_magic_protocol_numbers$0),
                  _Q_]],
               _P_=caml_call1(Core_kernel_Or_error[44],_R_);
            return caml_call2(Base_Or_error[24][4][2],_P_,_O_)}
          if(us_protocol)
           var x=us_protocol[1],_L_=caml_call1(Base_Or_error[24][1],x);
          else
           var
            _M_=
             [0,
              [1,
               [0,_B_,[0,caml_call1(Core_kernel_Int[121][74],us_versions),0]]],
              0],
            _N_=
             [1,
              [0,
               caml_call1(Sexplib0_Sexp_conv[7],cst_No_magic_numbers_seen),
               _M_]],
            _L_=caml_call1(Core_kernel[346],_N_);
          return caml_call2(Base_Or_error[24][4][2],_L_,_K_)}
        var _J_=get_protocol(peer);
        return caml_call2(Base_Or_error[24][4][2],_J_,_I_)}
      var _H_=get_protocol(us);
      return caml_call2(Base_Or_error[24][4][2],_H_,_G_)}
    function matches_magic_prefix(t,protocol)
     {var magic_number$0=magic_number(protocol);
      return caml_call3
              (Core_kernel_List[16],t,magic_number$0,Core_kernel_Int[106])}
    function contains_magic_prefix(protocol)
     {var _D_=bin_t[3];
      function _E_(_F_){return matches_magic_prefix(_F_,protocol)}
      return caml_call2(Bin_prot_Type_class[155],_E_,_D_)}
    function f(t)
     {function _C_(protocol){return matches_magic_prefix(t,protocol)}
      return caml_call2(Core_kernel_List[26],all,_C_)}
    var any_magic_prefix=caml_call2(Bin_prot_Type_class[155],f,bin_t[3]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_protocol_version_header$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Protocol_version_header$0=
      [0,
       bin_t,
       bin_read_t$0,
       bin_read_t,
       bin_reader_t,
       bin_size_t,
       bin_write_t,
       bin_writer_t,
       bin_shape_t,
       t_of_sexp$0,
       sexp_of_t$0,
       create,
       negotiate,
       contains_magic_prefix,
       any_magic_prefix];
    caml_register_global
     (86,Protocol_version_header$0,"Protocol_version_header");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcm90b2NvbF92ZXJzaW9uX2hlYWRlci5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
