(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_new_string("[:/?#\\[\\]@]"),
     cst$0=caml_new_string("[!$&'()*+,;=]"),
     cst$1=caml_new_string("//"),
     cst_A_Za_z0_9=caml_new_string("[A-Za-z0-9-._~]"),
     cst_0_9A_Fa_f=caml_new_string("[0-9A-Fa-f]"),
     cst_25_0_5_2_0_4_0_9_01_0_9_0_9=
      caml_new_string("25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?"),
     cst_25=caml_new_string("%25"),
     cst_0_9=caml_new_string("[0-9]*"),
     cst_A_Za_z_A_Za_z0_9=caml_new_string("[A-Za-z][A-Za-z0-9+\\\\-\\.]*"),
     cst$2=
      caml_new_string
       ("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
     cst$40=caml_new_string(""),
     cst$39=caml_new_string(""),
     cst$37=caml_new_string(""),
     cst$38=caml_new_string("/"),
     cst$36=caml_new_string(""),
     cst$35=caml_new_string(","),
     cst$33=caml_new_string("/"),
     cst$34=caml_new_string("/"),
     cst$32=caml_new_string(""),
     cst$30=caml_new_string(""),
     cst$31=caml_new_string(""),
     cst$29=caml_new_string(""),
     cst_localhost$0=caml_new_string("localhost"),
     cst$25=caml_new_string("//"),
     cst$26=caml_new_string("/"),
     cst$27=caml_new_string(":"),
     cst$28=caml_new_string("./"),
     cst$23=caml_new_string("/"),
     cst$24=caml_new_string("/"),
     cst_fragment=caml_new_string("fragment"),
     cst_host=caml_new_string("host"),
     cst_path=caml_new_string("path"),
     cst_port=caml_new_string("port"),
     cst_query=caml_new_string("query"),
     cst_scheme=caml_new_string("scheme"),
     cst_userinfo=caml_new_string("userinfo"),
     cst_query$0=caml_new_string("query"),
     cst_path$0=caml_new_string("path"),
     cst$22=caml_new_string(","),
     cst$21=caml_new_string("&"),
     cst$20=caml_new_string("/"),
     cst$17=caml_new_string("/"),
     cst$18=caml_new_string("/"),
     cst$19=caml_new_string("/"),
     cst$16=caml_new_string("/"),
     cst$15=caml_new_string(""),
     cst$3=caml_new_string("."),
     cst$4=caml_new_string(".."),
     cst$5=caml_new_string("/"),
     cst$9=caml_new_string("."),
     cst$10=caml_new_string(".."),
     cst$11=caml_new_string("/"),
     cst$12=caml_new_string("/"),
     cst$13=caml_new_string("/"),
     cst$14=caml_new_string("/"),
     cst$6=caml_new_string(".."),
     e=caml_new_string("/"),
     cst$7=caml_new_string("/"),
     cst$8=caml_new_string("/"),
     cst_int_of_hex_char=caml_new_string("int_of_hex_char"),
     cst_int_of_hex_char$0=caml_new_string("int_of_hex_char"),
     cst_file=caml_new_string("file"),
     cst_http=caml_new_string("http"),
     cst_https=caml_new_string("https"),
     cst_urn=caml_new_string("urn"),
     cst_localhost=caml_new_string("localhost"),
     subd=caml_new_string("!$&'()*+,;="),
     cst_Authority=caml_new_string("Authority"),
     cst_Fragment=caml_new_string("Fragment"),
     cst_Host=caml_new_string("Host"),
     cst_Path=caml_new_string("Path"),
     cst_Query=caml_new_string("Query"),
     cst_Query_key=caml_new_string("Query_key"),
     cst_Query_value=caml_new_string("Query_value"),
     cst_Scheme=caml_new_string("Scheme"),
     cst_Userinfo=caml_new_string("Userinfo"),
     cst_Authority$0=caml_new_string("Authority"),
     cst_Fragment$0=caml_new_string("Fragment"),
     cst_Host$0=caml_new_string("Host"),
     cst_Path$0=caml_new_string("Path"),
     cst_Query$0=caml_new_string("Query"),
     cst_Query_key$0=caml_new_string("Query_key"),
     cst_Query_value$0=caml_new_string("Query_value"),
     cst_Scheme$0=caml_new_string("Scheme"),
     cst_Userinfo$0=caml_new_string("Userinfo"),
     tp_loc=caml_new_string("lib/uri.ml.component"),
     tp_loc$0=caml_new_string("lib/uri.ml.component"),
     always_safe=
      caml_new_string
       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-~"),
     tp_loc$1=caml_new_string("lib/uri.ml.Userinfo.t"),
     tp_loc$2=caml_new_string("lib/uri.ml.Query.kv"),
     tp_loc$3=caml_new_string("lib/uri.ml.t"),
     Re=global_data.Re,
     Re_Posix=global_data.Re__Posix,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Stringext=global_data.Stringext,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Not_found=global_data.Not_found,
     Sexplib_Std=global_data.Sexplib__Std,
     Sexplib_Conv=global_data.Sexplib__Conv,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_char=global_data.Stdlib__char,
     _c_=[0,3],
     _g_=[0,4],
     _aM_=[0,[2,0,0],caml_new_string("%s")],
     _aL_=[0,[11,caml_new_string("/?"),[2,0,0]],caml_new_string("/?%s")],
     _aK_=[0,[2,0,[12,63,[2,0,0]]],caml_new_string("%s?%s")],
     _aH_=[0,-178940859],
     _aI_=[0,803994504],
     _aJ_=[0,127343600],
     _aG_=[0,caml_new_string("")],
     _aF_=[0,0],
     _ax_=[0,caml_new_string("fragment")],
     _ay_=[0,caml_new_string("query")],
     _az_=[0,caml_new_string("path")],
     _aA_=[0,caml_new_string("port")],
     _aB_=[0,caml_new_string("host")],
     _aC_=[0,caml_new_string("userinfo")],
     _aD_=[0,caml_new_string("scheme")],
     _aw_=[0,795008922],
     _av_=[0,-911188600],
     _ar_=[0,caml_new_string(""),0],
     _as_=[0,caml_new_string(""),0],
     _at_=[0,2],
     _au_=[0,[0,caml_new_string(""),0],0],
     _aq_=[0,892015045],
     _an_=[0,-145160103],
     _ao_=[0,-145160103],
     _al_=[0,2],
     _am_=[0,caml_new_string(""),0],
     _ak_=[0,[12,37,[4,8,[0,2,2],0,0]],caml_new_string("%%%02X")],
     _aj_=[0,caml_new_string("")],
     _ai_=[0,caml_new_string("/"),0],
     _aa_=[0,caml_new_string("Path")],
     _ab_=[0,caml_new_string("Host")],
     _ac_=[0,caml_new_string("Query_value")],
     _ad_=[0,caml_new_string("Userinfo")],
     _$_=[0,caml_new_string("Fragment")],
     _ae_=[0,caml_new_string("Scheme")],
     _af_=[0,caml_new_string("Query")],
     _ag_=[0,caml_new_string("Authority")],
     _ah_=[0,caml_new_string("Query_key")];
    function _a_(a,b){return caml_call1(Re[25],[0,a,[0,b,0]])}
    function _b_(a,b){return caml_call1(Re[24],[0,a,[0,b,0]])}
    var
     gen_delims=caml_call2(Re_Posix[3],0,cst),
     sub_delims=caml_call2(Re_Posix[3],0,cst$0),
     c_at=caml_call1(Re[23],64),
     c_colon=caml_call1(Re[23],58),
     c_slash=caml_call1(Re[23],47),
     c_slash2=caml_call2(Re_Posix[3],0,cst$1),
     c_dot=caml_call1(Re[23],46),
     c_question=caml_call1(Re[23],63),
     c_hash=caml_call1(Re[23],35);
    _b_(gen_delims,sub_delims);
    var
     unreserved=caml_call2(Re_Posix[3],0,cst_A_Za_z0_9),
     hexdig=caml_call2(Re_Posix[3],0,cst_0_9A_Fa_f),
     pct_encoded=_a_(_a_(caml_call1(Re[23],37),hexdig),hexdig),
     dec_octet=caml_call2(Re_Posix[3],0,cst_25_0_5_2_0_4_0_9_01_0_9_0_9),
     _d_=_a_(dec_octet,c_dot),
     ipv4_address=_a_(caml_call3(Re[30],_d_,3,_c_),dec_octet),
     zone_id=_b_(unreserved,pct_encoded);
    function _e_(n,a){return caml_call3(Re[30],a,n,[0,n])}
    function _f_(n,a){return caml_call3(Re[30],a,0,[0,n])}
    var
     h16=caml_call3(Re[30],hexdig,1,_g_),
     h16c=_a_(h16,c_colon),
     cc=_a_(c_colon,c_colon),
     ls32=_b_(_a_(h16c,h16),ipv4_address),
     _h_=caml_call1(Re[23],93),
     _i_=caml_call1(Re[29],zone_id),
     _j_=_a_(caml_call2(Re_Posix[3],0,cst_25),_i_),
     _k_=caml_call1(Re[31],_j_),
     _l_=_a_(_f_(1,_a_(_f_(6,h16c),h16)),cc),
     _m_=_a_(_a_(_f_(1,_a_(_f_(5,h16c),h16)),cc),h16),
     _n_=_a_(_a_(_f_(1,_a_(_f_(4,h16c),h16)),cc),ls32),
     _o_=_a_(_a_(_a_(_f_(1,_a_(_f_(3,h16c),h16)),cc),h16c),ls32),
     _p_=_e_(2,h16c),
     _q_=_a_(_a_(_a_(_f_(1,_a_(_f_(2,h16c),h16)),cc),_p_),ls32),
     _r_=_e_(3,h16c),
     _s_=_a_(_a_(_a_(_f_(1,_a_(_f_(1,h16c),h16)),cc),_r_),ls32),
     _t_=_e_(4,h16c),
     _u_=_a_(_a_(_a_(_f_(1,h16),cc),_t_),ls32),
     _v_=_a_(_a_(cc,_e_(5,h16c)),ls32),
     _w_=
      _b_
       (_b_
         (_b_
           (_b_(_b_(_b_(_b_(_b_(_a_(_e_(6,h16c),ls32),_v_),_u_),_s_),_q_),_o_),
            _n_),
          _m_),
        _l_),
     ipv6_address=_a_(_a_(_a_(caml_call1(Re[23],91),_w_),_k_),_h_),
     _x_=_b_(_b_(unreserved,pct_encoded),sub_delims),
     reg_name=caml_call1(Re[28],_x_),
     host=_b_(_b_(ipv6_address,ipv4_address),reg_name),
     _y_=_b_(_b_(_b_(unreserved,pct_encoded),sub_delims),c_colon),
     userinfo=caml_call1(Re[28],_y_),
     port=caml_call2(Re_Posix[3],0,cst_0_9),
     _z_=_a_(c_colon,caml_call1(Re[49],port)),
     _A_=caml_call1(Re[31],_z_),
     _B_=caml_call1(Re[49],host),
     _C_=_a_(caml_call1(Re[49],userinfo),c_at),
     authority=_a_(_a_(caml_call1(Re[31],_C_),_B_),_A_),
     _D_=caml_call1(Re[49],Re[26]),
     _E_=caml_call1(Re[49],Re[26]);
    _a_(_a_(caml_call1(Re[49],Re[26]),_E_),_D_);
    var
     pchar=_b_(_b_(_b_(_b_(unreserved,pct_encoded),sub_delims),c_colon),c_at),
     segment=caml_call1(Re[28],pchar),
     segment_nz=caml_call1(Re[29],pchar),
     _F_=_b_(_b_(_b_(unreserved,pct_encoded),sub_delims),c_at),
     segment_nz_nc=caml_call3(Re[30],_F_,1,0),
     _G_=_a_(c_slash,segment),
     path_abempty=caml_call1(Re[28],_G_),
     _H_=_a_(c_slash,segment),
     _I_=_a_(segment_nz,caml_call1(Re[28],_H_)),
     path_absolute=_a_(c_slash,caml_call1(Re[31],_I_)),
     _J_=_a_(c_slash,segment),
     path_noscheme=_a_(segment_nz_nc,caml_call1(Re[28],_J_)),
     _K_=_a_(c_slash,segment),
     path_rootless=_a_(segment_nz,caml_call1(Re[28],_K_)),
     _L_=Re[26];
    _b_
     (_b_(_b_(_b_(path_abempty,path_absolute),path_noscheme),path_rootless),
      _L_);
    var
     _M_=_b_(_b_(path_absolute,path_rootless),_L_),
     hier_part=_b_(_a_(_a_(c_slash2,authority),path_abempty),_M_),
     scheme=caml_call2(Re_Posix[3],0,cst_A_Za_z_A_Za_z0_9),
     _N_=_b_(_b_(pchar,c_slash),c_question),
     _O_=caml_call1(Re[28],_N_),
     query=caml_call1(Re[49],_O_),
     _P_=_b_(_b_(pchar,c_slash),c_question),
     _Q_=caml_call1(Re[28],_P_),
     fragment=caml_call1(Re[49],_Q_),
     _R_=_a_(c_question,query),
     _S_=caml_call1(Re[31],_R_);
    _a_(_a_(_a_(scheme,c_colon),hier_part),_S_);
    var
     _T_=_a_(c_hash,fragment),
     _U_=caml_call1(Re[31],_T_),
     _V_=_a_(c_question,query),
     _W_=caml_call1(Re[31],_V_);
    _a_(_a_(_a_(_a_(scheme,c_colon),hier_part),_W_),_U_);
    var
     _X_=_b_(_b_(path_absolute,path_noscheme),_L_),
     relative_part=_b_(_a_(_a_(c_slash2,authority),path_abempty),_X_),
     _Y_=_a_(c_hash,fragment),
     _Z_=caml_call1(Re[31],_Y_),
     ___=_a_(c_question,query);
    _a_(_a_(relative_part,caml_call1(Re[31],___)),_Z_);
    var
     uri_reference=caml_call2(Re_Posix[3],0,cst$2),
     ipv4_address$0=caml_call1(Re_Posix[4],ipv4_address),
     ipv6_address$0=caml_call1(Re_Posix[4],ipv6_address),
     uri_reference$0=caml_call1(Re_Posix[4],uri_reference),
     authority$0=caml_call1(Re_Posix[4],authority),
     host$0=caml_call1(Re_Posix[4],host),
     Uri_re=
      [0,ipv4_address$0,ipv6_address$0,uri_reference$0,authority$0,host$0];
    caml_register_global(135,Uri_re,"Uri_re");
    function component_of_sexp(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        return caml_string_notequal(atom,cst_Authority)
                ?caml_string_notequal(atom,cst_Fragment)
                  ?caml_string_notequal(atom,cst_Host)
                    ?caml_string_notequal(atom,cst_Path)
                      ?caml_string_notequal(atom,cst_Query)
                        ?caml_string_notequal(atom,cst_Query_key)
                          ?caml_string_notequal(atom,cst_Query_value)
                            ?caml_string_notequal(atom,cst_Scheme)
                              ?caml_string_notequal(atom,cst_Userinfo)
                                ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                                :-145160103
                              :-178940859
                            :795008922
                          :-911188600
                        :-250086680
                      :892015045
                    :803994504
                  :127343600
                :-715788189}
      var _dM_=sexp[1];
      if(_dM_)
       {var _dN_=_dM_[1];
        if(0 === _dN_[0])
         {var atom$0=_dN_[1];
          return caml_string_notequal(atom$0,cst_Authority$0)
                  ?caml_string_notequal(atom$0,cst_Fragment$0)
                    ?caml_string_notequal(atom$0,cst_Host$0)
                      ?caml_string_notequal(atom$0,cst_Path$0)
                        ?caml_string_notequal(atom$0,cst_Query$0)
                          ?caml_string_notequal(atom$0,cst_Query_key$0)
                            ?caml_string_notequal(atom$0,cst_Query_value$0)
                              ?caml_string_notequal(atom$0,cst_Scheme$0)
                                ?caml_string_notequal(atom$0,cst_Userinfo$0)
                                  ?caml_call1(Sexplib0_Sexp_conv_error[18],0)
                                  :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                                :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                              :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                            :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                          :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                        :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                      :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                    :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)
                  :caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc,sexp)}
    function component_of_sexp$0(sexp)
     {try
       {var _dK_=component_of_sexp(sexp);return _dK_}
      catch(_dL_)
       {_dL_ = caml_wrap_exception(_dL_);
        if(_dL_ === Sexplib0_Sexp_conv_error[17])
         return caml_call2(Sexplib0_Sexp_conv_error[19],tp_loc$0,sexp);
        throw _dL_}}
    function sexp_of_component(param)
     {return -145160103 <= param
              ?127343600 === param
                ?_$_
                :803994504 <= param
                  ?892015045 <= param?_aa_:_ab_
                  :795008922 <= param?_ac_:_ad_
              :-250086680 <= param
                ?-178940859 <= param?_ae_:_af_
                :-715788189 <= param?_ag_:_ah_}
    function iter_concat(fn,sep,buf,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var _dI_=param$0[2],_dJ_=param$0[1];
          if(_dI_)
           {caml_call2(fn,buf,_dJ_);
            caml_call2(Stdlib_buffer[14],buf,sep);
            var param$0=_dI_;
            continue}
          return caml_call2(fn,buf,_dJ_)}
        return 0}}
    function compare_opt(c,t$0,t)
     {if(t$0)
       {var _dH_=t$0[1];if(t){var b=t[1];return caml_call2(c,_dH_,b)}return 1}
      return t?-1:0}
    function compare_list(f,t$0,t)
     {var t$2=t$0,t$1=t;
      for(;;)
       {if(t$2)
         {var _dF_=t$2[2],_dG_=t$2[1];
          if(t$1)
           {var ys=t$1[2],y=t$1[1],c=caml_call2(f,_dG_,y);
            if(0 === c){var t$2=_dF_,t$1=ys;continue}
            return c}
          return 1}
        return t$1?-1:0}}
    function sub_delims$0(a)
     {var i=0;
      for(;;)
       {var c=caml_string_get(subd,i);
        caml_check_bound(a,c)[c + 1] = 1;
        var _dE_=i + 1 | 0;
        if(10 !== i){var i=_dE_;continue}
        return a}}
    var a=caml_make_vect(256,0),i=0;
    for(;;)
     {var c=caml_string_get(always_safe,i);
      caml_check_bound(a,c)[c + 1] = 1;
      var _aN_=i + 1 | 0;
      if(65 !== i){var i=_aN_;continue}
      var pchar$0=sub_delims$0(caml_call1(Stdlib_array[8],a));
      caml_check_bound(pchar$0,58)[59] = 1;
      caml_check_bound(pchar$0,64)[65] = 1;
      var safe_chars_for_scheme=caml_call1(Stdlib_array[8],a);
      caml_check_bound(safe_chars_for_scheme,43)[44] = 1;
      var
       safe_chars_for_path=
        sub_delims$0(caml_call1(Stdlib_array[8],pchar$0));
      caml_check_bound(safe_chars_for_path,47)[48] = 0;
      var safe_chars_for_fragment=caml_call1(Stdlib_array[8],pchar$0);
      caml_check_bound(safe_chars_for_fragment,47)[48] = 1;
      caml_check_bound(safe_chars_for_fragment,63)[64] = 1;
      caml_check_bound(safe_chars_for_fragment,38)[39] = 0;
      caml_check_bound(safe_chars_for_fragment,59)[60] = 0;
      caml_check_bound(safe_chars_for_fragment,43)[44] = 0;
      var
       safe_chars_for_query_key=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_key,61)[62] = 0;
      var
       safe_chars_for_query_value=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_value,44)[45] = 0;
      var a$0=caml_call1(Stdlib_array[8],a);
      caml_check_bound(a$0,58)[59] = 0;
      var
       safe_chars_for_component=
        function(param)
         {if(-145160103 <= param)
           if(795008922 <= param)
            {if(892015045 === param)return safe_chars_for_path;
             if(! (795008923 <= param))return safe_chars_for_query_value}
           else
            {if(127343600 === param)return safe_chars_for_fragment;
             if(! (-145160102 <= param))return a$0}
          else
           {if(-911188600 === param)return safe_chars_for_query_key;
            if(-250086680 === param)return safe_chars_for_fragment;
            if(-178940859 === param)return safe_chars_for_scheme}
          return a},
       normalize_host=function(hso){return hso},
       canonicalize_port=function(port){return port},
       canonicalize_path=function(path){return path},
       Generic=
        [0,
         safe_chars_for_component,
         normalize_host,
         canonicalize_port,
         canonicalize_path],
       safe_chars_for_component$0=Generic[1],
       normalize_host$0=
        function(param)
         {if(param)
           {var hs=param[1];return [0,caml_call1(Stdlib_string[30],hs)]}
          return 0},
       canonicalize_port$0=
        function(param)
         {if(param){var _dD_=param[1];return 80 === _dD_?0:[0,_dD_]}return 0},
       canonicalize_path$0=function(x){return x?x:_ai_},
       Http=
        [0,
         safe_chars_for_component$0,
         normalize_host$0,
         canonicalize_port$0,
         canonicalize_path$0],
       safe_chars_for_component$1=Http[1],
       normalize_host$1=Http[2],
       canonicalize_path$1=Http[4],
       canonicalize_port$1=
        function(param)
         {if(param){var _dC_=param[1];return 443 === _dC_?0:[0,_dC_]}return 0},
       Https=
        [0,
         safe_chars_for_component$1,
         normalize_host$1,
         canonicalize_port$1,
         canonicalize_path$1],
       safe_chars_for_component$2=Generic[1],
       canonicalize_port$2=Generic[3],
       canonicalize_path$2=Generic[4],
       normalize_host$2=
        function(param)
         {if(param)
           {var hs=param[1],hs$0=caml_call1(Stdlib_string[30],hs);
            return caml_string_equal(hs$0,cst_localhost)?_aj_:[0,hs$0]}
          return 0},
       File=
        [0,
         safe_chars_for_component$2,
         normalize_host$2,
         canonicalize_port$2,
         canonicalize_path$2],
       safe_chars_for_component$3=Generic[1],
       normalize_host$3=Generic[2],
       canonicalize_port$3=Generic[3],
       canonicalize_path$3=Generic[4],
       Urn=
        [0,
         safe_chars_for_component$3,
         normalize_host$3,
         canonicalize_port$3,
         canonicalize_path$3],
       module_of_scheme=
        function(param)
         {if(param)
           {var s=param[1],match=caml_call1(Stdlib_string[30],s);
            return caml_string_notequal(match,cst_file)
                    ?caml_string_notequal(match,cst_http)
                      ?caml_string_notequal(match,cst_https)
                        ?caml_string_notequal(match,cst_urn)?Generic:Urn
                        :Https
                      :Http
                    :File}
          return Generic},
       decoded_of_sexp=Sexplib_Conv[31],
       sexp_of_decoded=Sexplib_Conv[7],
       encode=
        function(scheme,opt,b)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          var
           Scheme=module_of_scheme(scheme),
           safe_chars=caml_call1(Scheme[1],component),
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len),
           start=0,
           cur=0;
          for(;;)
           {if(len <= cur)
             {caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
              return caml_call1(Stdlib_buffer[2],buf)}
            var c=caml_string_get(b,cur);
            if(caml_check_bound(safe_chars,c)[c + 1])
             {var cur$0=cur + 1 | 0,cur=cur$0;continue}
            if(start < cur)
             caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
            var _dB_=caml_call2(Stdlib_printf[4],_ak_,c);
            caml_call2(Stdlib_buffer[14],buf,_dB_);
            var cur$1=cur + 1 | 0,start$0=cur + 1 | 0,start=start$0,cur=cur$1;
            continue}},
       int_of_hex_char=
        function(c)
         {var c$0=caml_call1(Stdlib_char[6],c) - 48 | 0;
          if(9 < c$0)
           {if(16 < c$0)if(! (23 <= c$0))return c$0 - 7 | 0;
            return caml_call1(Stdlib[3],cst_int_of_hex_char)}
          return 0 <= c$0?c$0:caml_call1(Stdlib[3],cst_int_of_hex_char$0)},
       decode=
        function(b)
         {var
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len);
          function scan(start,cur)
           {var start$0=start,cur$0=cur;
            for(;;)
             {if(len <= cur$0)
               return caml_call4
                       (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
              if(37 === caml_string_get(b,cur$0))
               {caml_call4
                 (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
                var cur$1=cur$0 + 1 | 0;
                if(len <= cur$1)return caml_call2(Stdlib_buffer[10],buf,37);
                try
                 {var highbits=int_of_hex_char(caml_string_get(b,cur$1))}
                catch(_dA_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var start$0=cur$1,cur$0=cur$1;
                  continue}
                var cur$2=cur$1 + 1 | 0;
                if(len <= cur$2)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _dw_=caml_string_get(b,cur$2 - 1 | 0);
                  return caml_call2(Stdlib_buffer[10],buf,_dw_)}
                try
                 {var
                   lowbits=int_of_hex_char(caml_string_get(b,cur$2)),
                   switch$0=0}
                catch(_dz_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _dx_=caml_string_get(b,cur$2 - 1 | 0);
                  caml_call2(Stdlib_buffer[10],buf,_dx_);
                  var cur$3=cur$2,switch$0=1}
                if(! switch$0)
                 {var
                   _dy_=
                    caml_call1(Stdlib_char[1],(highbits << 4) + lowbits | 0);
                  caml_call2(Stdlib_buffer[10],buf,_dy_);
                  var cur$3=cur$2 + 1 | 0}
                var start$0=cur$3,cur$0=cur$3;
                continue}
              var cur$4=cur$0 + 1 | 0,cur$0=cur$4;
              continue}}
          scan(0,0);
          return caml_call1(Stdlib_buffer[2],buf)},
       pct_encode=
        function(scheme,opt,s)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          return encode(scheme,[0,component],s)},
       pct_decode=function(s){return decode(s)},
       compare=
        function(param,_dv_)
         {var
           p=_dv_[2],
           u=_dv_[1],
           p$0=param[2],
           u$0=param[1],
           c=caml_call2(Stdlib_string[33],u$0,u);
          return 0 === c?compare_opt(Stdlib_string[33],p$0,p):c},
       userinfo_of_encoded=
        function(us)
         {var match=caml_call3(Stringext[3],_al_,us,58);
          if(match)
           {var _ds_=match[2],_dt_=match[1];
            if(_ds_)
             {var p=_ds_[1],_du_=[0,pct_decode(p)];
              return [0,pct_decode(_dt_),_du_]}
            return [0,pct_decode(_dt_),0]}
          return _am_},
       encoded_of_userinfo=
        function(scheme)
         {return function(param)
           {var po=param[2],u=param[1];
            if(po)var p=po[1],_dp_=caml_ml_string_length(p);else var _dp_=0;
            var
             len=(1 + caml_ml_string_length(u) | 0) + _dp_ | 0,
             buf=caml_call1(Stdlib_buffer[1],len),
             _dq_=pct_encode(scheme,_an_,u);
            caml_call2(Stdlib_buffer[14],buf,_dq_);
            if(po)
             {var p$0=po[1];
              caml_call2(Stdlib_buffer[10],buf,58);
              var _dr_=pct_encode(scheme,_ao_,p$0);
              caml_call2(Stdlib_buffer[14],buf,_dr_)}
            return caml_call1(Stdlib_buffer[2],buf)}},
       _ap_=Stdlib_string[33],
       path_of_encoded=
        function(ps)
         {var tokl=caml_call2(Stringext[4],ps,47);
          return caml_call2(Stdlib_list[17],pct_decode,tokl)},
       remove_dot_segments=
        function(p)
         {var
           param$1=caml_call1(Stdlib_list[9],p),
           ascension=0,
           outp=0,
           param$2=param$1;
          for(;;)
           {if(param$2)
             {var _dl_=param$2[1];
              if(caml_string_notequal(_dl_,cst$3))
               {if(caml_string_notequal(_dl_,cst$4))
                 if(caml_string_notequal(_dl_,cst$5))
                  var switch$0=1,switch$1=0,switch$2=0;
                 else
                  {var _dn_=param$2[2];
                   if(_dn_)
                    {var _do_=_dn_[1];
                     if(caml_string_notequal(_do_,cst$9))
                      if(caml_string_notequal(_do_,cst$10))
                       {if(! caml_string_notequal(_do_,cst$11))
                         {var r$0=_dn_[2];
                          if(0 < ascension)
                           {var
                             param$4=[0,cst$12,r$0],
                             ascension$1=ascension - 1 | 0,
                             ascension=ascension$1,
                             param$2=param$4;
                            continue}}
                        var r=_dn_[2];
                        if(0 < ascension)
                         {var
                           ascension$0=ascension - 1 | 0,
                           ascension=ascension$0,
                           param$2=r;
                          continue}
                        var switch$0=1,switch$1=0,switch$2=0}
                      else
                       var param$5=_dn_[2],switch$2=1;
                     else
                      var param$6=_dn_[2],switch$1=1,switch$2=0}
                   else
                    var switch$0=0,switch$1=0,switch$2=0}
                else
                 var param$5=param$2[2],switch$2=1;
                if(switch$2)
                 {var
                   ascension$2=ascension + 1 | 0,
                   ascension=ascension$2,
                   param$2=param$5;
                  continue}}
              else
               var param$6=param$2[2],switch$1=1;
              if(switch$1){var param$2=param$6;continue}}
            else
             var switch$0=0;
            if(! switch$0)
             if(0 < caml_call1(Stdlib_list[1],p))
              if(caml_string_equal(caml_call1(Stdlib_list[5],p),cst$13))
               return [0,cst$14,outp];
            if(param$2)
             {var
               param$3=param$2[2],
               s=param$2[1],
               outp$0=[0,s,outp],
               ascension=0,
               outp=outp$0,
               param$2=param$3;
              continue}
            if(0 < ascension)
             {var
               lst=
                caml_call1(Stdlib_array[11],caml_make_vect(ascension,cst$6));
              if(lst)
               {var t=lst[2],h=lst[1],acc$1=[0,h,0],acc=acc$1,param=t;
                for(;;)
                 {if(param)
                   {var
                     param$0=param[2],
                     x=param[1],
                     acc$0=[0,x,[0,e,acc]],
                     acc=acc$0,
                     param=param$0;
                    continue}
                  var _dm_=acc;
                  break}}
              else
               var _dm_=0;
              return caml_call2(Stdlib_list[12],[0,cst$7,_dm_],outp)}
            if(0 < caml_call1(Stdlib_list[1],outp))
             if(caml_string_equal(caml_call1(Stdlib_list[5],outp),cst$8))
              return caml_call1(Stdlib_list[6],outp);
            return outp}},
       encoded_of_path=
        function(scheme)
         {return function(p)
           {var _di_=0;
            function _dj_(c,tok){return caml_ml_string_length(tok) + c | 0}
            var
             len=caml_call3(Stdlib_list[20],_dj_,_di_,p),
             buf=caml_call1(Stdlib_buffer[1],len);
            iter_concat
             (function(buf,seg)
               {if(caml_string_notequal(seg,cst$16))
                 {var _dk_=pct_encode(scheme,_aq_,seg);
                  return caml_call2(Stdlib_buffer[14],buf,_dk_)}
                return caml_call2(Stdlib_buffer[10],buf,47)},
              cst$15,
              buf,
              p);
            return caml_call1(Stdlib_buffer[2],buf)}},
       find=
        function(q,k)
         {try
           {var _dg_=[0,caml_call2(Stdlib_list[38],k,q)];return _dg_}
          catch(_dh_)
           {_dh_ = caml_wrap_exception(_dh_);
            if(_dh_ === Not_found)return 0;
            throw _dh_}},
       query_of_encoded=
        function(qs)
         {var els=caml_call3(Stringext[3],0,qs,38);
          function plus_to_space(s)
           {var
             s$0=caml_call1(Stdlib_bytes[43],s),
             _de_=runtime.caml_ml_bytes_length(s$0) - 1 | 0,
             _dd_=0;
            if(! (_de_ < 0))
             {var i=_dd_;
              for(;;)
               {if(43 === runtime.caml_bytes_get(s$0,i))
                 runtime.caml_bytes_set(s$0,i,32);
                var _df_=i + 1 | 0;
                if(_de_ !== i){var i=_df_;continue}
                break}}
            return caml_call1(Stdlib_bytes[42],s$0)}
          if(els)
           {var
             _c$_=function(el){return caml_call3(Stringext[3],_at_,el,61)},
             param$1=caml_call2(Stdlib_list[19],_c$_,els),
             acc=0,
             param=param$1;
            for(;;)
             {if(param)
               {var _c7_=param[1];
                if(_c7_)
                 {var _c8_=_c7_[2],_c9_=_c7_[1];
                  if(_c8_)
                   {var
                     tl=param[2],
                     v=_c8_[1],
                     _c__=plus_to_space(v),
                     l=caml_call3(Stringext[3],0,_c__,44),
                     l$0=l || _ar_,
                     n=[0,plus_to_space(_c9_),l$0],
                     acc$0=[0,n,acc],
                     acc=acc$0,
                     param=tl;
                    continue}
                  var
                   tl$0=param[2],
                   n$0=[0,plus_to_space(_c9_),0],
                   acc$1=[0,n$0,acc],
                   acc=acc$1,
                   param=tl$0;
                  continue}
                var
                 param$0=param[2],
                 acc$2=[0,_as_,acc],
                 acc=acc$2,
                 param=param$0;
                continue}
              var _da_=acc;
              break}}
          else
           var _da_=_au_;
          function _db_(param)
           {var
             v=param[2],
             k=param[1],
             _dc_=caml_call2(Stdlib_list[17],pct_decode,v);
            return [0,pct_decode(k),_dc_]}
          return caml_call2(Stdlib_list[17],_db_,_da_)},
       encoded_of_query=
        function(scheme,l)
         {var _c0_=-1;
          function _c1_(a,param)
           {var v=param[2],k=param[1],_c5_=0;
            function _c6_(a,s)
             {return (a + caml_ml_string_length(s) | 0) + 1 | 0}
            return ((a + caml_ml_string_length(k) | 0)
                    +
                    caml_call3(Stdlib_list[20],_c6_,_c5_,v)
                    |
                    0)
                   +
                   2
                   |
                   0}
          var
           len=caml_call3(Stdlib_list[20],_c1_,_c0_,l),
           buf=caml_call1(Stdlib_buffer[1],len);
          iter_concat
           (function(buf,param)
             {var v=param[2],k=param[1],_c2_=pct_encode(scheme,_av_,k);
              caml_call2(Stdlib_buffer[14],buf,_c2_);
              var _c3_=0 !== v?1:0;
              return _c3_
                      ?(caml_call2(Stdlib_buffer[10],buf,61),
                        iter_concat
                         (function(buf,s)
                           {var _c4_=pct_encode(scheme,_aw_,s);
                            return caml_call2(Stdlib_buffer[14],buf,_c4_)},
                          cst$22,
                          buf,
                          v))
                      :_c3_},
            cst$21,
            buf,
            l);
          return caml_call1(Stdlib_buffer[2],buf)},
       of_raw=
        function(qs)
         {function _cZ_(param){return query_of_encoded(qs)}
          var lazy_query=caml_call1(Sexplib_Std[2][3],_cZ_);
          return [1,[0,qs],lazy_query]},
       kv=
        function(param)
         {if(0 === param[0])
           var kv=param[1];
          else
           var
            _cW_=param[2],
            _cX_=caml_obj_tag(_cW_),
            _cY_=
             250 === _cX_
              ?_cW_[1]
              :246 === _cX_?caml_call1(CamlinternalLazy[2],_cW_):_cW_,
            kv=_cY_;
          return kv},
       encoded_of_query$0=
        function(scheme)
         {return function(_cV_){return encoded_of_query(scheme,_cV_)}},
       t_of_sexp=
        function(sexp)
         {if(0 === sexp[0])
           return caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc$3,sexp);
          var
           field_sexps=sexp[1],
           scheme_field=[0,0],
           userinfo_field=[0,0],
           host_field=[0,0],
           port_field=[0,0],
           path_field=[0,0],
           query_field=[0,0],
           fragment_field=[0,0],
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
                      if(caml_string_notequal(_cL_,cst_fragment))
                       if(caml_string_notequal(_cL_,cst_host))
                        if(caml_string_notequal(_cL_,cst_path))
                         if(caml_string_notequal(_cL_,cst_port))
                          if(caml_string_notequal(_cL_,cst_query))
                           if(caml_string_notequal(_cL_,cst_scheme))
                            if(caml_string_notequal(_cL_,cst_userinfo))
                             {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_cL_,extra[1]]}
                            else
                             if(userinfo_field[1])
                              duplicates[1] = [0,_cL_,duplicates[1]];
                             else
                              {if(1 === field_sexp[0])
                                {var _cE_=field_sexp[1];
                                 if(_cE_)
                                  {var _cF_=_cE_[2];
                                   if(_cF_)
                                    if(_cF_[2])
                                     var switch$0=0;
                                    else
                                     var
                                      v1=_cF_[1],
                                      v0=_cE_[1],
                                      v0$0=caml_call1(Sexplib_Conv[31],v0),
                                      v1$0=caml_call2(Sexplib_Conv[41],Sexplib_Conv[31],v1),
                                      fvalue$1=[0,v0$0,v1$0],
                                      switch$0=1;
                                   else
                                    var switch$0=0}
                                 else
                                  var switch$0=0}
                               else
                                var switch$0=0;
                               if(! switch$0)
                                var
                                 fvalue$1=
                                  caml_call3
                                   (Sexplib0_Sexp_conv_error[2],tp_loc$1,2,field_sexp);
                               userinfo_field[1] = [0,fvalue$1]}
                           else
                            if(scheme_field[1])
                             duplicates[1] = [0,_cL_,duplicates[1]];
                            else
                             {var fvalue$2=caml_call1(decoded_of_sexp,field_sexp);
                              scheme_field[1] = [0,fvalue$2]}
                          else
                           if(query_field[1])
                            duplicates[1] = [0,_cL_,duplicates[1]];
                           else
                            {var
                              _cG_=
                               function(sexp)
                                {if(1 === sexp[0])
                                  {var _cT_=sexp[1];
                                   if(_cT_)
                                    {var _cU_=_cT_[2];
                                     if(_cU_)
                                      if(! _cU_[2])
                                       {var
                                         v1=_cU_[1],
                                         v0=_cT_[1],
                                         v0$0=caml_call1(Sexplib_Conv[31],v0),
                                         v1$0=caml_call2(Sexplib_Conv[44],Sexplib_Conv[31],v1);
                                        return [0,v0$0,v1$0]}}}
                                 return caml_call3
                                         (Sexplib0_Sexp_conv_error[2],tp_loc$2,2,sexp)},
                              fvalue$0=[0,caml_call2(Sexplib_Conv[44],_cG_,field_sexp)];
                             query_field[1] = [0,fvalue$0]}
                         else
                          if(port_field[1])
                           duplicates[1] = [0,_cL_,duplicates[1]];
                          else
                           {var fvalue$3=caml_call1(Sexplib_Conv[34],field_sexp);
                            port_field[1] = [0,fvalue$3]}
                        else
                         if(path_field[1])
                          duplicates[1] = [0,_cL_,duplicates[1]];
                         else
                          {var
                            fvalue=
                             caml_call2(Sexplib_Conv[44],Sexplib_Conv[31],field_sexp);
                           path_field[1] = [0,fvalue]}
                       else
                        if(host_field[1])
                         duplicates[1] = [0,_cL_,duplicates[1]];
                        else
                         {var fvalue$4=caml_call1(decoded_of_sexp,field_sexp);
                          host_field[1] = [0,fvalue$4]}
                      else
                       if(fragment_field[1])
                        duplicates[1] = [0,_cL_,duplicates[1]];
                       else
                        {var fvalue$5=caml_call1(decoded_of_sexp,field_sexp);
                         fragment_field[1] = [0,fvalue$5]}
                      var param=tail;
                      continue}}}}
              caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc$3,_cH_)}
            if(duplicates[1])
             return caml_call3
                     (Sexplib0_Sexp_conv_error[11],tp_loc$3,duplicates[1],sexp);
            if(extra[1])
             return caml_call3
                     (Sexplib0_Sexp_conv_error[12],tp_loc$3,extra[1],sexp);
            var
             _cQ_=path_field[1],
             _cR_=query_field[1],
             _cM_=scheme_field[1],
             _cN_=userinfo_field[1],
             _cO_=host_field[1],
             _cP_=port_field[1],
             _cS_=fragment_field[1];
            if(_cQ_)
             if(_cR_)
              {var query_value=_cR_[1],path_value=_cQ_[1];
               return [0,_cM_,_cN_,_cO_,_cP_,path_value,query_value,_cS_]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[14],
                     tp_loc$3,
                     sexp,
                     [0,
                      [0,0 === path_field[1]?1:0,cst_path$0],
                      [0,[0,0 === query_field[1]?1:0,cst_query$0],0]])}},
       sexp_of_t=
        function(param)
         {var
           v_fragment=param[7],
           v_query=param[6],
           v_path=param[5],
           v_port=param[4],
           v_host=param[3],
           v_userinfo=param[2],
           v_scheme=param[1],
           bnds=0;
          if(v_fragment)
           var
            v=v_fragment[1],
            arg$2=caml_call1(sexp_of_decoded,v),
            bnd=[1,[0,_ax_,[0,arg$2,0]]],
            bnds$0=[0,bnd,bnds];
          else
           var bnds$0=bnds;
          if(0 === v_query[0])
           var kv=v_query[1];
          else
           var
            _cB_=v_query[2],
            _cC_=caml_obj_tag(_cB_),
            _cD_=
             250 === _cC_
              ?_cB_[1]
              :246 === _cC_?caml_call1(CamlinternalLazy[2],_cB_):_cB_,
            kv=_cD_;
          function _cA_(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Sexplib_Conv[7],v0),
             v1$0=caml_call2(Sexplib_Conv[20],Sexplib_Conv[7],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]}
          var
           arg$1=caml_call2(Sexplib_Conv[20],_cA_,kv),
           bnds$1=[0,[1,[0,_ay_,[0,arg$1,0]]],bnds$0],
           arg$0=caml_call2(Sexplib_Conv[20],Sexplib_Conv[7],v_path),
           bnds$2=[0,[1,[0,_az_,[0,arg$0,0]]],bnds$1];
          if(v_port)
           var
            v$0=v_port[1],
            arg$3=caml_call1(Sexplib_Conv[10],v$0),
            bnd$0=[1,[0,_aA_,[0,arg$3,0]]],
            bnds$3=[0,bnd$0,bnds$2];
          else
           var bnds$3=bnds$2;
          if(v_host)
           var
            v$1=v_host[1],
            arg$4=caml_call1(sexp_of_decoded,v$1),
            bnd$1=[1,[0,_aB_,[0,arg$4,0]]],
            bnds$4=[0,bnd$1,bnds$3];
          else
           var bnds$4=bnds$3;
          if(v_userinfo)
           var
            v$2=v_userinfo[1],
            v1=v$2[2],
            v0=v$2[1],
            v0$0=caml_call1(Sexplib_Conv[7],v0),
            v1$0=caml_call2(Sexplib_Conv[17],Sexplib_Conv[7],v1),
            arg=[1,[0,v0$0,[0,v1$0,0]]],
            bnd$2=[1,[0,_aC_,[0,arg,0]]],
            bnds$5=[0,bnd$2,bnds$4];
          else
           var bnds$5=bnds$4;
          if(v_scheme)
           var
            v$3=v_scheme[1],
            arg$5=caml_call1(sexp_of_decoded,v$3),
            bnd$3=[1,[0,_aD_,[0,arg$5,0]]],
            bnds$6=[0,bnd$3,bnds$5];
          else
           var bnds$6=bnds$5;
          return [1,bnds$6]},
       empty=[0,0,0,0,0,0,[1,0,caml_call1(Sexplib_Std[2][4],0)],0],
       _aE_=Stdlib_string[33],
       compare_decoded_opt=
        function(_cy_,_cz_){return compare_opt(_aE_,_cy_,_cz_)},
       compare$0=
        function(t$0,t)
         {var c=compare_decoded_opt(t$0[3],t[3]);
          if(0 === c)
           {var c$0=compare_decoded_opt(t$0[1],t[1]);
            if(0 === c$0)
             {var
               _ct_=t[4],
               _cu_=t$0[4],
               c$1=
                compare_opt
                 (function(p$0,p){return p$0 < p?-1:p < p$0?1:0},_cu_,_ct_);
              if(0 === c$1)
               {var c$2=compare_opt(compare,t$0[2],t[2]);
                if(0 === c$2)
                 {var c$4=compare_list(_ap_,t$0[5],t[5]);
                  if(0 === c$4)
                   {var _cv_=t[6],_cw_=t$0[6];
                    if(0 === _cw_[0])
                     {var _cl_=_cw_[1];
                      if(0 === _cv_[0])
                       var kvl$0=_cv_[1],kvl=_cl_,switch$0=0;
                      else
                       var
                        _cm_=_cv_[2],
                        _cn_=caml_obj_tag(_cm_),
                        _co_=
                         250 === _cn_
                          ?_cm_[1]
                          :246 === _cn_?caml_call1(CamlinternalLazy[2],_cm_):_cm_,
                        kvl$0=_co_,
                        kvl=_cl_,
                        switch$0=0}
                    else
                     {var _cp_=_cw_[2],_cq_=_cw_[1];
                      if(0 === _cv_[0])
                       var
                        _cr_=caml_obj_tag(_cp_),
                        _cs_=
                         250 === _cr_
                          ?_cp_[1]
                          :246 === _cr_?caml_call1(CamlinternalLazy[2],_cp_):_cp_,
                        kvl$0=_cv_[1],
                        kvl=_cs_,
                        switch$0=0;
                      else
                       var
                        raw=_cv_[1],
                        c$3=compare_opt(Stdlib_string[33],_cq_,raw),
                        switch$0=1}
                    if(! switch$0)
                     var
                      c$3=
                       compare_list
                        (function(param,_cx_)
                          {var
                            vl=_cx_[2],
                            k=_cx_[1],
                            vl$0=param[2],
                            k$0=param[1],
                            c=caml_call2(Stdlib_string[33],k$0,k);
                           return 0 === c?compare_list(Stdlib_string[33],vl$0,vl):c},
                         kvl,
                         kvl$0);
                    return 0 === c$3?compare_decoded_opt(t$0[7],t[7]):c$3}
                  return c$4}
                return c$2}
              return c$1}
            return c$0}
          return c},
       equal=function(t$0,t){return 0 === compare$0(t$0,t)?1:0},
       uncast_opt=
        function(param){if(param){var h=param[1];return [0,h]}return 0},
       normalize=
        function(schem,init)
         {var
           Scheme=module_of_scheme(uncast_opt(schem)),
           _cb_=init[7],
           _cc_=init[6],
           _cd_=init[5],
           _ce_=init[4],
           _cf_=uncast_opt(init[3]),
           param=caml_call1(Scheme[2],_cf_);
          if(param)var h=param[1],_cg_=[0,h];else var _cg_=0;
          var _ci_=init[1],_ch_=init[2],_cj_=Stdlib_string[30];
          if(_ci_)var x=_ci_[1],_ck_=[0,caml_call1(_cj_,x)];else var _ck_=0;
          return [0,_ck_,_ch_,_cg_,_ce_,_cd_,_cc_,_cb_]},
       make=
        function(scheme,userinfo,host,port,path,query,fragment,param)
         {function decode(param)
           {if(param){var x=param[1];return [0,x]}return 0}
          if(host)
           var switch$0=0;
          else
           {if(port)
             var switch$1=1;
            else
             if(userinfo)var switch$1=1;else var switch$0=0,switch$1=0;
            if(switch$1)var host$0=_aG_,switch$0=1}
          if(! switch$0)var host$0=host;
          if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          if(path)
           {var p=path[1],match=path_of_encoded(p);
            if(host$0)
             if(match)
              if(caml_string_notequal(match[1],cst$23))
               var _b$_=[0,cst$24,match],switch$2=1;
              else
               var switch$2=0;
             else
              var switch$2=0;
            else
             var switch$2=0;
            if(! switch$2)var _b$_=match;
            var path$0=_b$_}
          else
           var path$0=0;
          if(query)var p$0=query[1],query$0=[0,p$0];else var query$0=_aF_;
          var scheme$0=decode(scheme),_ca_=decode(fragment);
          return normalize
                  (scheme$0,
                   [0,
                    scheme$0,
                    userinfo$0,
                    decode(host$0),
                    port,
                    path$0,
                    query$0,
                    _ca_])},
       of_string=
        function(s)
         {function get_opt_encoded(s,n)
           {try
             {var _b9_=[0,caml_call2(Re[80],s,n)];return _b9_}
            catch(_b__)
             {_b__ = caml_wrap_exception(_b__);
              if(_b__ === Not_found)return 0;
              throw _b__}}
          function get_opt(s,n)
           {try
             {var pct=caml_call2(Re[80],s,n),_b7_=[0,decode(pct)];return _b7_}
            catch(_b8_)
             {_b8_ = caml_wrap_exception(_b8_);
              if(_b8_ === Not_found)return 0;
              throw _b8_}}
          var
           subs=caml_call4(Re[2],0,0,uri_reference$0,s),
           scheme=get_opt(subs,2),
           match=get_opt_encoded(subs,4);
          if(match)
           {var
             a=match[1],
             subs$0=caml_call4(Re[2],0,0,authority$0,a),
             match$0=get_opt_encoded(subs$0,1);
            if(match$0)
             var x=match$0[1],userinfo=[0,userinfo_of_encoded(x)];
            else
             var userinfo=0;
            var host=get_opt(subs$0,2),match$1=get_opt(subs$0,3);
            if(match$1)
             {var x$0=match$1[1];
              try
               {var _b5_=[0,runtime.caml_int_of_string(x$0)],_b4_=_b5_}
              catch(_b6_){var _b4_=0}
              var port=_b4_}
            else
             var port=0;
            var userinfo$0=userinfo,host$0=host,port$0=port}
          else
           var userinfo$0=0,host$0=0,port$0=0;
          var match$2=get_opt_encoded(subs,5);
          if(match$2)
           var x$1=match$2[1],path=path_of_encoded(x$1);
          else
           var path=0;
          var match$3=get_opt_encoded(subs,7);
          if(match$3)
           var x$2=match$3[1],query=of_raw(x$2);
          else
           var query=[1,0,caml_call1(Sexplib_Std[2][4],0)];
          var fragment=get_opt(subs,9);
          return normalize
                  (scheme,
                   [0,scheme,userinfo$0,host$0,port$0,path,query,fragment])},
       to_string=
        function(uri)
         {var _bG_=uri[1];
          if(_bG_)var s=_bG_[1],scheme=[0,s];else var scheme=0;
          var buf=caml_call1(Stdlib_buffer[1],128);
          function add_pct_string(opt,x)
           {if(opt)var sth=opt[1],component=sth;else var component=892015045;
            var _b3_=encode(scheme,[0,component],x);
            return caml_call2(Stdlib_buffer[14],buf,_b3_)}
          var _bH_=uri[1];
          if(_bH_)
           {var x=_bH_[1];
            add_pct_string(_aH_,x);
            caml_call2(Stdlib_buffer[10],buf,58)}
          var _bI_=uri[3],_bJ_=uri[4];
          if(uri[2])
           var switch$0=0;
          else
           if(_bI_)
            var switch$0=0;
           else
            if(_bJ_)var switch$0=0;else var _bK_=0,switch$0=1;
          if(! switch$0)var _bK_=1;
          if(_bK_)caml_call2(Stdlib_buffer[14],buf,cst$25);
          var _bL_=uri[2];
          if(_bL_)
           {var
             userinfo=_bL_[1],
             _bM_=caml_call1(encoded_of_userinfo(scheme),userinfo);
            caml_call2(Stdlib_buffer[14],buf,_bM_);
            caml_call2(Stdlib_buffer[10],buf,64)}
          var _bN_=uri[3];
          if(_bN_){var host=_bN_[1];add_pct_string(_aI_,host)}
          var _bO_=uri[4];
          if(_bO_)
           {var port=_bO_[1];
            caml_call2(Stdlib_buffer[10],buf,58);
            var _bP_=caml_call1(Stdlib[22],port);
            caml_call2(Stdlib_buffer[14],buf,_bP_)}
          var _bQ_=uri[5];
          if(_bQ_)
           {var _bR_=_bQ_[1];
            if(caml_string_notequal(_bR_,cst$26))
             {if(uri[3])
               caml_call2(Stdlib_buffer[10],buf,47);
              else
               {var match=caml_call3(Stringext[12],0,_bR_,cst$27);
                if(match)if(! scheme)caml_call2(Stdlib_buffer[14],buf,cst$28)}
              var _bS_=uri[5],_bT_=caml_call1(encoded_of_path(scheme),_bS_);
              caml_call2(Stdlib_buffer[14],buf,_bT_)}
            else
             {var _b1_=uri[5],_b2_=caml_call1(encoded_of_path(scheme),_b1_);
              caml_call2(Stdlib_buffer[14],buf,_b2_)}}
          var _bU_=uri[6];
          if(0 === _bU_[0])
           {var _bV_=_bU_[1];
            if(_bV_)var q=_bV_,switch$1=1;else var switch$1=0}
          else
           if(_bU_[1])
            var
             _bY_=_bU_[2],
             _bZ_=caml_obj_tag(_bY_),
             _b0_=
              250 === _bZ_
               ?_bY_[1]
               :246 === _bZ_?caml_call1(CamlinternalLazy[2],_bY_):_bY_,
             q=_b0_,
             switch$1=1;
           else
            var switch$1=0;
          if(switch$1)
           {caml_call2(Stdlib_buffer[10],buf,63);
            var _bW_=encoded_of_query(scheme,q);
            caml_call2(Stdlib_buffer[14],buf,_bW_)}
          var _bX_=uri[7];
          if(_bX_)
           {var f=_bX_[1];
            caml_call2(Stdlib_buffer[10],buf,35);
            add_pct_string(_aJ_,f)}
          return caml_call1(Stdlib_buffer[2],buf)},
       get_decoded_opt=
        function(param){if(param){var x=param[1];return [0,x]}return 0},
       scheme$0=function(uri){return get_decoded_opt(uri[1])},
       with_scheme=
        function(uri,param)
         {if(param)
           {var scheme=param[1];
            return [0,[0,scheme],uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]}
          return [0,0,uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]},
       host$1=function(uri){return get_decoded_opt(uri[3])},
       with_host=
        function(uri,param)
         {if(param)
           {var host=param[1];
            return [0,uri[1],uri[2],[0,host],uri[4],uri[5],uri[6],uri[7]]}
          return [0,uri[1],uri[2],0,uri[4],uri[5],uri[6],uri[7]]},
       host_with_default=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],default$0=sth;
          else
           var default$0=cst_localhost$0;
          var match=host$1(uri);
          if(match){var h=match[1];return h}
          return default$0},
       userinfo$0=
        function(uri)
         {var _bD_=uri[2];
          if(_bD_)
           {var userinfo=_bD_[1],_bE_=uri[1];
            if(_bE_)
             var
              s=_bE_[1],
              _bF_=caml_call1(encoded_of_userinfo([0,s]),userinfo);
            else
             var _bF_=caml_call1(encoded_of_userinfo(0),userinfo);
            return [0,_bF_]}
          return 0},
       with_userinfo=
        function(uri,userinfo)
         {if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          var match=host$1(uri);
          return match
                  ?[0,uri[1],userinfo$0,uri[3],uri[4],uri[5],uri[6],uri[7]]
                  :[0,
                    uri[1],
                    userinfo$0,
                    [0,cst$29],
                    uri[4],
                    uri[5],
                    uri[6],
                    uri[7]]},
       user=
        function(uri)
         {var _bC_=uri[2];
          if(_bC_){var match=_bC_[1],user=match[1];return [0,user]}
          return 0},
       password=
        function(uri)
         {var _bA_=uri[2];
          if(_bA_)
           {var _bB_=_bA_[1][2];if(_bB_){var pass=_bB_[1];return [0,pass]}}
          return 0},
       with_password=
        function(uri,password)
         {function result(userinfo)
           {var match=host$1(uri);
            return match
                    ?[0,uri[1],userinfo,uri[3],uri[4],uri[5],uri[6],uri[7]]
                    :[0,uri[1],userinfo,[0,cst$30],uri[4],uri[5],uri[6],uri[7]]}
          var _bz_=uri[2];
          if(_bz_)
           {var match=_bz_[1],user=match[1];
            return result([0,[0,user,password]])}
          return password?result([0,[0,cst$31,password]]):uri},
       port$0=function(uri){return uri[4]},
       with_port=
        function(uri,port)
         {var match=host$1(uri);
          return match
                  ?[0,uri[1],uri[2],uri[3],port,uri[5],uri[6],uri[7]]
                  :port
                    ?[0,uri[1],uri[2],[0,cst$32],port,uri[5],uri[6],uri[7]]
                    :[0,uri[1],uri[2],0,0,uri[5],uri[6],uri[7]]},
       path=
        function(uri)
         {var _bv_=uri[1];
          if(_bv_)
           var
            s=_bv_[1],
            _bw_=uri[5],
            _bx_=caml_call1(encoded_of_path([0,s]),_bw_);
          else
           var _by_=uri[5],_bx_=caml_call1(encoded_of_path(0),_by_);
          return _bx_},
       with_path=
        function(uri,path)
         {var match=path_of_encoded(path);
          if(host$1(uri))
           if(match)
            if(caml_string_notequal(match[1],cst$33))
             return [0,
                     uri[1],
                     uri[2],
                     uri[3],
                     uri[4],
                     [0,cst$34,match],
                     uri[6],
                     uri[7]];
          return [0,uri[1],uri[2],uri[3],uri[4],match,uri[6],uri[7]]},
       fragment$0=function(uri){return get_decoded_opt(uri[7])},
       with_fragment=
        function(uri,param)
         {if(param)
           {var frag=param[1];
            return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],[0,frag]]}
          return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],0]},
       query$0=function(uri){return kv(uri[6])},
       verbatim_query=
        function(uri)
         {var _bt_=uri[6];
          if(0 === _bt_[0])
           {var _bu_=_bt_[1];
            return _bu_?[0,encoded_of_query(scheme$0(uri),_bu_)]:0}
          var qs=_bt_[1];
          return qs},
       get_query_param=function(uri,k){return find(kv(uri[6]),k)},
       get_query_param$0=
        function(uri,k)
         {var match=get_query_param(uri,k);
          if(match)
           {var v=match[1];return [0,caml_call2(Stdlib_string[7],cst$35,v)]}
          return 0},
       with_query=
        function(uri,query)
         {return [0,uri[1],uri[2],uri[3],uri[4],uri[5],[0,query],uri[7]]},
       q_s=
        function(q)
         {function _bs_(param){var v=param[2],k=param[1];return [0,k,[0,v,0]]}
          return caml_call2(Stdlib_list[17],_bs_,q)},
       with_query$0=function(uri,query){return with_query(uri,q_s(query))},
       add_query_param=
        function(init,p)
         {var _bq_=init[7],_br_=[0,[0,p,kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_br_,_bq_]},
       add_query_param$0=
        function(init,param)
         {var
           v=param[2],
           k=param[1],
           _bo_=init[7],
           _bp_=[0,[0,[0,k,[0,v,0]],kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_bp_,_bo_]},
       add_query_params=
        function(init,ps)
         {var
           _bl_=init[7],
           _bm_=kv(init[6]),
           _bn_=[0,caml_call2(Stdlib[26],ps,_bm_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bn_,_bl_]},
       add_query_params$0=
        function(init,ps)
         {var
           _bh_=init[7],
           _bi_=kv(init[6]),
           _bj_=q_s(ps),
           _bk_=[0,caml_call2(Stdlib[26],_bj_,_bi_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bk_,_bh_]},
       remove_query_param=
        function(init,k)
         {var _bd_=init[7],_be_=kv(init[6]);
          function _bf_(param)
           {var k$0=param[1];return caml_string_notequal(k,k$0)}
          var _bg_=[0,caml_call2(Stdlib_list[35],_bf_,_be_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bg_,_bd_]},
       with_uri=
        function(scheme,userinfo,host,port,path,query,fragment,uri)
         {function with_path_opt(u,o)
           {if(o){var p=o[1];return with_path(u,p)}return with_path(u,cst$36)}
          function with_query_opt(u,o)
           {if(o){var q=o[1];return with_query(u,q)}return with_query(u,0)}
          function with$0(f,o,u)
           {if(o){var x=o[1];return caml_call2(f,u,x)}return u}
          return with$0
                  (with_fragment,
                   fragment,
                   with$0
                    (with_query_opt,
                     query,
                     with$0
                      (with_path_opt,
                       path,
                       with$0
                        (with_port,
                         port,
                         with$0
                          (with_host,
                           host,
                           with$0
                            (with_userinfo,userinfo,with$0(with_scheme,scheme,uri)))))))},
       path_and_query=
        function(uri)
         {var match=path(uri),match$0=query$0(uri);
          if(caml_string_notequal(match,cst$37))
           {if(match$0)
             {var
               scheme=uncast_opt(uri[1]),
               _bb_=caml_call1(encoded_of_query$0(scheme),match$0);
              return caml_call3(Stdlib_printf[4],_aK_,match,_bb_)}
            return match}
          if(match$0)
           {var
             scheme$0=uncast_opt(uri[1]),
             _bc_=caml_call1(encoded_of_query$0(scheme$0),match$0);
            return caml_call2(Stdlib_printf[4],_aL_,_bc_)}
          return cst$38},
       resolve=
        function(schem,base,uri)
         {var match$0=scheme$0(base);
          if(match$0)
           var scheme=match$0[1],scheme$1=scheme;
          else
           var scheme$1=schem;
          var
           schem$0=[0,scheme$1],
           match$1=scheme$0(uri),
           match$2=userinfo$0(uri),
           match$3=host$1(uri);
          if(match$1)
           var
            _aU_=uri[7],
            _aV_=uri[6],
            _aW_=remove_dot_segments(uri[5]),
            _aX_=[0,uri[1],uri[2],uri[3],uri[4],_aW_,_aV_,_aU_];
          else
           {if(match$2)
             var switch$0=0;
            else
             if(match$3)
              var switch$0=0;
             else
              {var
                init=[0,base[1],base[2],base[3],base[4],uri[5],uri[6],uri[7]],
                path_str=path(init);
               if(caml_string_equal(path_str,cst$39))
                var
                 _a1_=init[7],
                 _a2_=init[6][1]?init[6]:base[6],
                 _a3_=[0,init[1],init[2],init[3],init[4],base[5],_a2_,_a1_];
               else
                if(47 === caml_string_get(path_str,0))
                 var
                  _a4_=init[7],
                  _a5_=init[6],
                  _a6_=remove_dot_segments(init[5]),
                  _a3_=[0,init[1],init[2],init[3],init[4],_a6_,_a5_,_a4_];
                else
                 {var
                   _a9_=init[5],
                   _a7_=init[7],
                   _a8_=init[6],
                   _a__=base[3],
                   match=caml_call1(Stdlib_list[9],base[5]);
                  if(_a__)
                   if(match)
                    var switch$1=0;
                   else
                    var _a$_=[0,cst$20,_a9_],switch$1=1;
                  else
                   var switch$1=0;
                  if(! switch$1)
                   {if(match)
                     {if(caml_string_notequal(match[1],cst$17))
                       {var _aT_=match[2];
                        if(_aT_)
                         if(caml_string_notequal(_aT_[1],cst$18))
                          var switch$2=0,switch$3=0;
                         else
                          var rbpath=_aT_[2],switch$3=1;
                        else
                         var switch$2=0,switch$3=0}
                      else
                       var rbpath=match[2],switch$3=1;
                      if(switch$3)
                       var
                        _a$_=caml_call2(Stdlib_list[12],[0,cst$19,rbpath],_a9_),
                        switch$2=1}
                    else
                     var switch$2=0;
                    if(! switch$2)var _a$_=_a9_}
                  var
                   _ba_=remove_dot_segments(_a$_),
                   _a3_=[0,init[1],init[2],init[3],init[4],_ba_,_a8_,_a7_]}
               var _aX_=_a3_,switch$0=1}
            if(! switch$0)
             var
              _aY_=uri[7],
              _aZ_=uri[6],
              _a0_=remove_dot_segments(uri[5]),
              _aX_=[0,base[1],uri[2],uri[3],uri[4],_a0_,_aZ_,_aY_]}
          return normalize(schem$0,_aX_)},
       canonicalize=
        function(uri)
         {var
           init=resolve(cst$40,empty,uri),
           Scheme=module_of_scheme(uncast_opt(init[1])),
           _aP_=init[7],
           _aQ_=init[6],
           _aR_=caml_call1(Scheme[4],init[5]),
           _aS_=caml_call1(Scheme[3],init[4]);
          return [0,init[1],init[2],init[3],_aS_,_aR_,_aQ_,_aP_]},
       pp_hum=
        function(ppf,uri)
         {var _aO_=to_string(uri);
          return caml_call3(Stdlib_format[112],ppf,_aM_,_aO_)},
       Uri=
        [0,
         t_of_sexp,
         sexp_of_t,
         component_of_sexp$0,
         component_of_sexp,
         sexp_of_component,
         empty,
         compare$0,
         equal,
         pct_encode,
         pct_decode,
         of_string,
         to_string,
         resolve,
         canonicalize,
         make,
         with_uri,
         query$0,
         verbatim_query,
         encoded_of_query$0,
         query_of_encoded,
         with_query,
         with_query$0,
         get_query_param,
         get_query_param$0,
         add_query_param,
         add_query_param$0,
         add_query_params,
         add_query_params$0,
         remove_query_param,
         path,
         path_and_query,
         with_path,
         scheme$0,
         with_scheme,
         userinfo$0,
         with_userinfo,
         user,
         password,
         with_password,
         host$1,
         with_host,
         host_with_default,
         port$0,
         with_port,
         fragment$0,
         with_fragment,
         pp_hum];
      caml_register_global(152,Uri,"Uri");
      return}}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmkuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
