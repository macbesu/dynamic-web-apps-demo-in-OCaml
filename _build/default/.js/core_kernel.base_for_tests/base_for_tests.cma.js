(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
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
     cst=caml_new_string(""),
     cst_base_for_tests=caml_new_string("base_for_tests"),
     cst_base_for_tests$0=caml_new_string("base_for_tests"),
     cst_bug$0=caml_new_string("bug"),
     cst_blit_src=caml_new_string("blit src"),
     cst_blit_dst=caml_new_string("blit dst"),
     cst_sub_src=caml_new_string("sub src"),
     cst_sub_dst=caml_new_string("sub dst"),
     cst_bug=caml_new_string("bug"),
     cst_base_for_tests_src_test_blit_ml=
      caml_new_string("base_for_tests/src/test_blit.ml"),
     cst_assert_not_Elt_equal_elt1_elt2_let_src=
      caml_new_string
       (": <<assert (not (Elt.equal elt1 elt2)); (let src_[...]>>"),
     cst$0=caml_new_string(""),
     cst_base_for_tests$1=caml_new_string("base_for_tests"),
     cst_base_for_tests$2=caml_new_string("base_for_tests"),
     cst$1=caml_new_string(""),
     cst_base_for_tests$3=caml_new_string("base_for_tests"),
     cst_base_for_tests$4=caml_new_string("base_for_tests"),
     cst_expected_it_to_raise_but_it_didn_t=
      caml_new_string("expected it to raise but it didn't"),
     cst_Wrong_result=caml_new_string("Wrong result"),
     cst_expected_it_to_not_raise_but_it_raised=
      caml_new_string("expected it to not raise, but it raised"),
     cst_base_for_tests_src_test_binary_searchable_ml=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_First_equal_to=
      caml_new_string
       (": <<(binary_search ~compare [||] `First_equal_to [...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$0=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_First_equal_to=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `First_equal_to[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$1=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_First_equal_to$0=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `First_equal_to[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$2=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_First_equal=
      caml_new_string
       (": <<(binary_search ~compare [|s;b|] `First_equal_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$3=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_First_equal$0=
      caml_new_string
       (": <<(binary_search ~compare [|s;b|] `First_equal_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$4=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_b_First_equal=
      caml_new_string
       (": <<(binary_search ~compare [|b;b|] `First_equal_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$5=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_s_First_equal=
      caml_new_string
       (": <<(binary_search ~compare [|s;s|] `First_equal_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$6=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_b_First_equa=
      caml_new_string
       (": <<(binary_search ~compare [|s;b;b|] `First_equa[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$7=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_s_b_First_equa=
      caml_new_string
       (": <<(binary_search ~compare [|s;s;b|] `First_equa[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$8=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_b_b_First_equa=
      caml_new_string
       (": <<(binary_search ~compare [|b;b;b|] `First_equa[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$9=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_Last_equal_to_s=
      caml_new_string
       (": <<(binary_search ~compare [||] `Last_equal_to s[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$10=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_Last_equal_to=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `Last_equal_to [...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$11=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_Last_equal_to$0=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `Last_equal_to [...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$12=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_Last_equal_t=
      caml_new_string
       (": <<(binary_search ~compare [|s;b|] `Last_equal_t[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$13=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_Last_equal_t$0=
      caml_new_string
       (": <<(binary_search ~compare [|s;b|] `Last_equal_t[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$14=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_b_Last_equal_t=
      caml_new_string
       (": <<(binary_search ~compare [|b;b|] `Last_equal_t[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$15=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_s_Last_equal_t=
      caml_new_string
       (": <<(binary_search ~compare [|s;s|] `Last_equal_t[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$16=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_b_b_Last_equal=
      caml_new_string
       (": <<(binary_search ~compare [|s;b;b|] `Last_equal[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$17=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_s_b_Last_equal=
      caml_new_string
       (": <<(binary_search ~compare [|s;s;b|] `Last_equal[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$18=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_b_b_Last_equal=
      caml_new_string
       (": <<(binary_search ~compare [|b;b;b|] `Last_equal[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$19=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_First_greater_t=
      caml_new_string
       (": <<(binary_search ~compare [||] `First_greater_t[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$20=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_First_greater=
      caml_new_string
       (": <<(binary_search ~compare [|b|] `First_greater_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$21=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_First_greater=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `First_greater_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$22=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_First_strictly=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `First_strictly[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$23=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_Last_less_than=
      caml_new_string
       (": <<(binary_search ~compare [||] `Last_less_than_[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$24=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_b_Last_less_than=
      caml_new_string
       (": <<(binary_search ~compare [|b|] `Last_less_than[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$25=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_Last_less_than=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `Last_less_than[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$26=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_compare_s_Last_strictly=
      caml_new_string
       (": <<(binary_search ~compare [|s|] `Last_strictly_[...]>>"),
     only_small=[0,1e4,0],
     only_big=[0,0,1e4],
     both=[0,2531,4717],
     cst_base_for_tests_src_test_binary_searchable_ml$27=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_match_binary_search_create_test_case_only_sm=
      caml_new_string
       (": <<match binary_search (create_test_case only_sm[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$28=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_match_binary_search_arr_compare_First_equal=
      caml_new_string
       (": <<match binary_search arr ~compare `First_equal[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$29=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_equal_to_b=
      caml_new_string
       (": <<(binary_search arr ~compare `First_equal_to b[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$30=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_equal_to_s=
      caml_new_string
       (": <<(binary_search arr ~compare `First_equal_to s[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$31=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_equal_to_s=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_equal_to s)[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$32=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_greater_th=
      caml_new_string
       (": <<(binary_search arr ~compare `First_greater_th[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$33=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_less_than_o=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_less_than_o[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$34=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_strictly_g=
      caml_new_string
       (": <<(binary_search arr ~compare `First_strictly_g[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$35=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_strictly_le=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_strictly_le[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$36=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_equal_to_b$0=
      caml_new_string
       (": <<(binary_search arr ~compare `First_equal_to b[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$37=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_equal_to_b=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_equal_to b)[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$38=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_greater_th$0=
      caml_new_string
       (": <<(binary_search arr ~compare `First_greater_th[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$39=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_less_than_o$0=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_less_than_o[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$40=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_strictly_g$0=
      caml_new_string
       (": <<(binary_search arr ~compare `First_strictly_g[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$41=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_strictly_le$0=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_strictly_le[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$42=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_equal_to_s$0=
      caml_new_string
       (": <<(binary_search arr ~compare `First_equal_to s[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$43=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_equal_to_s$0=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_equal_to s)[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$44=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_greater_th$1=
      caml_new_string
       (": <<(binary_search arr ~compare `First_greater_th[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$45=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_less_than_o$1=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_less_than_o[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$46=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_strictly_g$1=
      caml_new_string
       (": <<(binary_search arr ~compare `First_strictly_g[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$47=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_strictly_le$1=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_strictly_le[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$48=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_equal_to_b$1=
      caml_new_string
       (": <<(binary_search arr ~compare `First_equal_to b[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$49=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_equal_to_b$0=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_equal_to b)[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$50=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_greater_th$2=
      caml_new_string
       (": <<(binary_search arr ~compare `First_greater_th[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$51=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_less_than_o$2=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_less_than_o[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$52=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_First_strictly_g$2=
      caml_new_string
       (": <<(binary_search arr ~compare `First_strictly_g[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$53=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_arr_compare_Last_strictly_le$2=
      caml_new_string
       (": <<(binary_search arr ~compare `Last_strictly_le[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$54=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_for_length_0_to_5_do_for_num_s_0_to_len=
      caml_new_string
       (": <<for length = 0 to 5 do   for num_s = 0 to len[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$55=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_segmented_arr_segment_of_La=
      caml_new_string
       (": <<((binary_search_segmented arr ~segment_of `La[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$56=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_segmented_arr_segment_of_La$0=
      caml_new_string
       (": <<((binary_search_segmented arr ~segment_of `La[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$57=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_binary_search_segmented_arr_segment_of_La$1=
      caml_new_string
       (": <<((binary_search_segmented arr ~segment_of `La[...]>>"),
     cst_base_for_tests_src_test_binary_searchable_ml$58=
      caml_new_string("base_for_tests/src/test_binary_searchable.ml"),
     cst_test_binary_searchable=caml_new_string(": test_binary_searchable"),
     cst$2=caml_new_string(""),
     cst_base_for_tests$5=caml_new_string("base_for_tests"),
     cst_base_for_tests$6=caml_new_string("base_for_tests"),
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Blit=global_data.Base__Blit,
     Base=global_data.Base,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Assert_failure=global_data.Assert_failure,
     Inline_test_config=global_data.Inline_test_config,
     Base_Binary_searchable=global_data.Base__Binary_searchable,
     Base_Bool=global_data.Base__Bool,
     Base_Ordered_collection_common=
      global_data.Base__Ordered_collection_common,
     Base_Array=global_data.Base__Array,
     Base_Exn=global_data.Base__Exn,
     Base_Result=global_data.Base__Result,
     Base_for_tests=[0,0,0,0,0];
    caml_register_global(189,Base_for_tests,"Base_for_tests");
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_for_tests,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_for_tests$0);
    var Base_for_tests_Test_blit_intf=[0];
    caml_register_global
     (191,Base_for_tests_Test_blit_intf,"Base_for_tests__Test_blit_intf");
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_for_tests$1,cst$0);
    var
     _g_=[0,caml_new_string("i")],
     _h_=[0,caml_new_string("name")],
     _a_=[0,caml_new_string("base_for_tests/src/test_blit.ml"),68,4],
     _j_=[0,caml_new_string("base_for_tests/src/test_blit.ml"),91,16],
     _i_=[0,caml_new_string("base_for_tests/src/test_blit.ml"),95,16],
     _b_=[0,caml_new_string("dst_pos")],
     _c_=[0,caml_new_string("dst_length")],
     _d_=[0,caml_new_string("src_pos")],
     _e_=[0,caml_new_string("src_length")],
     _f_=[0,caml_new_string("exn")],
     _W_=[0,99999],
     _V_=[0,0],
     _T_=[0,5e4],
     _U_=[0,50001],
     _S_=[0,9999],
     _R_=[0,9999],
     _Q_=[0,0],
     _P_=[0,0],
     _O_=[0,5e4],
     _N_=[0,99999],
     _M_=[0,50001],
     _L_=[0,99999],
     _K_=[0,50001],
     _J_=[0,5e4],
     _I_=[0,50001],
     _H_=[0,5e4],
     _G_=[0,0],
     _F_=[0,5e4],
     _E_=[0,0],
     _D_=[0,0],
     _C_=[0,0],
     _B_=[0,0],
     _A_=[0,1],
     _z_=[0,2],
     _y_=[0,0],
     _x_=[0,1],
     _w_=[0,0],
     _v_=[0,0],
     _u_=[0,1],
     _t_=[0,1],
     _s_=[0,0],
     _r_=[0,0];
    function Test_gen(_bS_,_bR_)
     {function init(len,create,set,f)
       {var t=caml_call1(create,len),_cL_=caml_call2(Base[260],len,1),_cK_=0;
        if(! (_cL_ < 0))
         {var i=_cK_;
          for(;;)
           {caml_call3(set,t,i,caml_call1(f,i));
            var _cM_=i + 1 | 0;
            if(_cL_ !== i){var i=_cM_;continue}
            break}}
        return t}
      function _bT_(param)
       {var elt1=caml_call1(_bS_[1][2],1),elt2=caml_call1(_bS_[1][2],0);
        if(caml_call2(_bS_[1][1],elt1,elt2))throw [0,Assert_failure,_a_];
        function src_bit(i)
         {var _cJ_=caml_call2(Base[271],i,1);
          return caml_call2(Base[281],_cJ_,0)?elt1:elt2}
        function dst_bit(i)
         {var _cI_=caml_call2(Base[271],i,1);
          return caml_call2(Base[281],_cI_,0)?elt2:elt1}
        var src_length=0;
        a:
        for(;;)
         {var dst_length=0;
          for(;;)
           {var _bV_=0;
            if(! (src_length < 0))
             {var src_pos=_bV_;
              for(;;)
               {var _bX_=0;
                if(! (dst_length < 0))
                 {var dst_pos=_bX_;
                  for(;;)
                   {var
                     _b0_=caml_call2(Base[260],dst_length,dst_pos),
                     _b1_=caml_call2(Base[260],src_length,src_pos),
                     _b2_=caml_call2(Base[289],_b1_,_b0_),
                     _bZ_=0;
                    if(! (_b2_ < 0))
                     {var src_len=_bZ_;
                      for(;;)
                       {try
                         {var
                           check=
                            function(length,get,name,sequence,expect)
                             {var
                               _cA_=caml_call1(length,sequence),
                               _cB_=caml_call2(Base[260],_cA_,1),
                               _cz_=0;
                              if(! (_cB_ < 0))
                               {var i=_cz_;
                                for(;;)
                                 {var
                                   _cC_=caml_call1(expect,i),
                                   _cD_=caml_call2(get,sequence,i);
                                  if(1 - caml_call2(_bS_[1][1],_cD_,_cC_))
                                   {var
                                     _cE_=[0,[1,[0,_g_,[0,caml_call1(Base[218],i),0]]],0],
                                     _cF_=[0,[1,[0,_h_,[0,caml_call1(Base[249],name),0]]],_cE_],
                                     _cG_=
                                      [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_bug$0),_cF_]];
                                    caml_call1(Base[301],_cG_)}
                                  var _cH_=i + 1 | 0;
                                  if(_cB_ !== i){var i=_cH_;continue}
                                  break}}
                              return 0},
                           _b$_=_bS_[2][3],
                           _ca_=_bS_[2][1],
                           check_src$0=
                            function(check,_cu_,_cv_)
                             {function check_src(_cw_,_cx_,_cy_)
                               {return check(_cv_,_cu_,_cw_,_cx_,_cy_)}
                              return check_src},
                           check_src=check_src$0(check,_b$_,_ca_),
                           _cb_=_bS_[3][3],
                           _cc_=_bS_[3][1],
                           check_dst$0=
                            function(check,_cp_,_cq_)
                             {function check_dst(_cr_,_cs_,_ct_)
                               {return check(_cq_,_cp_,_cr_,_cs_,_ct_)}
                              return check_dst},
                           check_dst=check_dst$0(check,_cb_,_cc_),
                           src=init(src_length,_bS_[2][2],_bS_[2][4],src_bit),
                           _cd_=caml_call1(_bS_[2][1],src);
                          if(! caml_call2(Base[281],_cd_,src_length))
                           throw [0,Assert_failure,_j_];
                          var
                           dst=init(dst_length,_bS_[3][2],_bS_[3][4],dst_bit),
                           _ce_=caml_call1(_bS_[3][1],dst);
                          if(! caml_call2(Base[281],_ce_,dst_length))
                           throw [0,Assert_failure,_i_];
                          var
                           init_src$0=
                            function(src_length,src)
                             {function init_src(param)
                               {var _cm_=caml_call2(Base[260],src_length,1),_cl_=0;
                                if(! (_cm_ < 0))
                                 {var i=_cl_;
                                  for(;;)
                                   {var _cn_=src_bit(i);
                                    caml_call3(_bS_[2][4],src,i,_cn_);
                                    var _co_=i + 1 | 0;
                                    if(_cm_ !== i){var i=_co_;continue}
                                    break}}
                                return 0}
                              return init_src},
                           init_src=init_src$0(src_length,src);
                          caml_call6
                           (_bR_[1],src,[0,src_pos],[0,src_len],dst,[0,dst_pos],0);
                          check_src(cst_blit_src,src,src_bit);
                          check_dst
                           (cst_blit_dst,
                            dst,
                            function(src_pos,dst_pos,src_len)
                              {return function(i)
                                {var _ch_=caml_call2(Base[283],i,dst_pos);
                                 if(_ch_)
                                  var
                                   _ci_=caml_call2(Base[259],dst_pos,src_len),
                                   _cj_=caml_call2(Base[278],i,_ci_);
                                 else
                                  var _cj_=_ch_;
                                 if(_cj_)
                                  {var _ck_=caml_call2(Base[259],src_pos,i);
                                   return src_bit(caml_call2(Base[260],_ck_,dst_pos))}
                                 return dst_bit(i)}}
                             (src_pos,dst_pos,src_len));
                          var _cf_=_bS_[3][5];
                          if(typeof _cf_ !== "number")
                           {var
                             src_to_dst=_cf_[2],
                             _cg_=caml_call2(Base[259],dst_pos,src_len);
                            if(caml_call2(Base[279],_cg_,src_length))
                             {init_src(0);caml_call1(src_to_dst,src)}}
                          init_src(0);
                          var dst$0=caml_call3(_bR_[2],src,src_pos,src_len);
                          check_src(cst_sub_src,src,src_bit);
                          check_dst
                           (cst_sub_dst,
                            dst$0,
                            function(src_pos)
                              {return function(i)
                                {return src_bit(caml_call2(Base[259],src_pos,i))}}
                             (src_pos))}
                        catch(exn)
                         {exn = caml_wrap_exception(exn);
                          var
                           _b4_=[0,[1,[0,_b_,[0,caml_call1(Base[218],dst_pos),0]]],0],
                           _b5_=
                            [0,[1,[0,_c_,[0,caml_call1(Base[218],dst_length),0]]],_b4_],
                           _b6_=
                            [0,[1,[0,_d_,[0,caml_call1(Base[218],src_pos),0]]],_b5_],
                           _b7_=
                            [0,[1,[0,_e_,[0,caml_call1(Base[218],src_length),0]]],_b6_],
                           _b8_=[0,[1,[0,_f_,[0,caml_call1(Base[208],exn),0]]],_b7_],
                           _b9_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_bug),_b8_]];
                          caml_call1(Base[301],_b9_)}
                        var _b__=src_len + 1 | 0;
                        if(_b2_ !== src_len){var src_len=_b__;continue}
                        break}}
                    var _b3_=dst_pos + 1 | 0;
                    if(dst_length !== dst_pos){var dst_pos=_b3_;continue}
                    break}}
                var _bY_=src_pos + 1 | 0;
                if(src_length !== src_pos){var src_pos=_bY_;continue}
                break}}
            var _bW_=dst_length + 1 | 0;
            if(4 !== dst_length){var dst_length=_bW_;continue}
            var _bU_=src_length + 1 | 0;
            if(4 !== src_length){var src_length=_bU_;continue a}
            return 0}}}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_assert_not_Elt_equal_elt1_elt2_let_src,
        0,
        cst_base_for_tests_src_test_blit_ml,
        65,
        2,
        3086,
        _bT_);
      return [0,init]}
    function Test1(Sequence,Tested)
     {var equal=caml_equal,_bO_=[0,Tested[2],Tested[4]];
      function of_bool(_bQ_){return _bQ_}
      var
       Elt=[0,equal,of_bool],
       length=Sequence[1],
       create_bool=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       overlapping_src_dst=[0,-656144216,function(_bP_){return _bP_}],
       Dst=[0,length,create_bool,get,set,overlapping_src_dst];
      return Test_gen([0,Elt,Sequence,Dst],_bO_)}
    function Test1_generic(Elt,Sequence,Tested)
     {var
       length=Sequence[1],
       create_bool=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       _bM_=[0,Tested[2],Tested[4]],
       overlapping_src_dst=[0,-656144216,function(_bN_){return _bN_}],
       Dst=[0,length,create_bool,get,set,overlapping_src_dst];
      return Test_gen([0,Elt,Sequence,Dst],_bM_)}
    function Elt_to_elt1(Elt)
     {var equal=Elt[1],of_bool=Elt[2];return [0,equal,of_bool]}
    function Test(_bJ_,Sequence,Tested)
     {var
       _bK_=[0,Tested[2],Tested[4]],
       Elt=Elt_to_elt1(_bJ_),
       length=Sequence[2],
       get=Sequence[3],
       set=Sequence[4],
       create_bool=Sequence[1],
       overlapping_src_dst=[0,-656144216,function(_bL_){return _bL_}];
      return Test_gen
              ([0,
                Elt,
                [0,length,create_bool,get,set],
                [0,length,create_bool,get,set,overlapping_src_dst]],
               _bK_)}
    function Test_distinct(_bH_,Src,Dst,Tested)
     {var
       _bI_=[0,Tested[2],Tested[4]],
       Elt=Elt_to_elt1(_bH_),
       length=Src[2],
       get=Src[3],
       set=Src[4],
       create_bool=Src[1],
       length$0=Dst[2],
       get$0=Dst[3],
       set$0=Dst[4],
       create_bool$0=Dst[1];
      return Test_gen
              ([0,
                Elt,
                [0,length,create_bool,get,set],
                [0,length$0,create_bool$0,get$0,set$0,1021207688]],
               _bI_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_for_tests$2);
    function _k_(Elt,Sequence)
     {var B=caml_call1(Base_Blit[4],[0,Sequence[1],Sequence[3],Sequence[2]]);
      Test1_generic(Elt,[0,Sequence[3],Sequence[4],Sequence[5],Sequence[6]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _l_(Sequence)
     {var B=caml_call1(Base_Blit[3],[0,Sequence[1],Sequence[3],Sequence[2]]);
      Test1([0,Sequence[3],Sequence[4],Sequence[5],Sequence[6]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _m_(Elt,Src,Dst)
     {var
       _bG_=[0,Dst[2],Dst[1],Dst[5]],
       B=caml_call1(caml_call1(Base_Blit[2],[0,Src[2]]),_bG_);
      Test_distinct(Elt,Src,[0,Dst[1],Dst[2],Dst[3],Dst[4]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _n_(Elt,Sequence)
     {var B=caml_call1(Base_Blit[1],[0,Sequence[2],Sequence[1],Sequence[5]]);
      Test(Elt,[0,Sequence[1],Sequence[2],Sequence[3],Sequence[4]],B);
      var blit=B[1],blito=B[2],unsafe_blit=B[3],sub=B[4],subo=B[5];
      return [0,blit,blito,unsafe_blit,sub,subo]}
    function _o_(_bF_,_bE_,_bD_){Test1_generic(_bF_,_bE_,_bD_);return [0]}
    function _p_(_bC_,_bB_){Test1(_bC_,_bB_);return [0]}
    function _q_(_bA_,_bz_,_by_,_bx_)
     {Test_distinct(_bA_,_bz_,_by_,_bx_);return [0]}
    var
     Base_for_tests_Test_blit=
      [0,
       function(_bw_,_bv_,_bu_){Test(_bw_,_bv_,_bu_);return [0]},
       _q_,
       _p_,
       _o_,
       _n_,
       _m_,
       _l_,
       _k_];
    caml_register_global
     (197,Base_for_tests_Test_blit,"Base_for_tests__Test_blit");
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_for_tests$3,cst$1);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_for_tests$4);
    var Base_for_tests_Test_binary_searchable_intf=[0];
    caml_register_global
     (198,
      Base_for_tests_Test_binary_searchable_intf,
      "Base_for_tests__Test_binary_searchable_intf");
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_base_for_tests$5,cst$2);
    function Test_gen$0(_Y_)
     {function _Z_(param)
       {var ___=_Y_[3][1],_aa_=_Y_[3][2],_ab_=_Y_[3][3],_$_=_Y_[3][1];
        function binary_search(pos,len,compare,t,how,v)
         {var _bt_=caml_call1(_Y_[3][4],t);
          return caml_call6(_Y_[1],pos,len,_bt_,compare,how,v)}
        function _ac_(param)
         {return caml_equal(binary_search(0,0,___,[0],-1056898635,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_First_equal_to,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml,
          43,
          6,
          82,
          _ac_);
        function _ad_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],-1056898635,_aa_),_r_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_First_equal_to,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$0,
          44,
          6,
          84,
          _ad_);
        function _ae_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],-1056898635,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_First_equal_to$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$1,
          45,
          6,
          82,
          _ae_);
        function _af_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_],-1056898635,_aa_),_s_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_First_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$2,
          46,
          6,
          84,
          _af_);
        function _ag_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_],-1056898635,_ab_),_t_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_First_equal$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$3,
          47,
          6,
          84,
          _ag_);
        function _ah_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_ab_,_ab_],-1056898635,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_b_First_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$4,
          48,
          6,
          82,
          _ah_);
        function _ai_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_aa_],-1056898635,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_s_First_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$5,
          49,
          6,
          82,
          _ai_);
        function _aj_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_,_ab_],-1056898635,_ab_),
                   _u_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_b_First_equa,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$6,
          50,
          6,
          84,
          _aj_);
        function _ak_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_aa_,_ab_],-1056898635,_aa_),
                   _v_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_s_b_First_equa,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$7,
          51,
          6,
          84,
          _ak_);
        function _al_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_ab_,_ab_,_ab_],-1056898635,_aa_),
                   0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_b_b_First_equa,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$8,
          52,
          6,
          82,
          _al_);
        function _am_(param)
         {return caml_equal(binary_search(0,0,___,[0],-1055410545,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_Last_equal_to_s,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$9,
          54,
          6,
          81,
          _am_);
        function _an_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],-1055410545,_aa_),_w_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_Last_equal_to,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$10,
          55,
          6,
          83,
          _an_);
        function _ao_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],-1055410545,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_Last_equal_to$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$11,
          56,
          6,
          81,
          _ao_);
        function _ap_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_],-1055410545,_ab_),_x_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_Last_equal_t,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$12,
          57,
          6,
          83,
          _ap_);
        function _aq_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_],-1055410545,_aa_),_y_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_Last_equal_t$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$13,
          58,
          6,
          83,
          _aq_);
        function _ar_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_ab_,_ab_],-1055410545,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_b_Last_equal_t,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$14,
          59,
          6,
          81,
          _ar_);
        function _as_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_aa_],-1055410545,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_s_Last_equal_t,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$15,
          60,
          6,
          81,
          _as_);
        function _at_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_ab_,_ab_],-1055410545,_ab_),
                   _z_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_b_b_Last_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$16,
          61,
          6,
          83,
          _at_);
        function _au_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_,_aa_,_ab_],-1055410545,_aa_),
                   _A_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_s_b_Last_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$17,
          62,
          6,
          83,
          _au_);
        function _av_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_ab_,_ab_,_ab_],-1055410545,_aa_),
                   0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_b_b_Last_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$18,
          63,
          6,
          81,
          _av_);
        function _aw_(param)
         {return caml_equal(binary_search(0,0,___,[0],926943384,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_First_greater_t,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$19,
          65,
          6,
          90,
          _aw_);
        function _ax_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_ab_],926943384,_aa_),_B_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_First_greater,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$20,
          66,
          6,
          92,
          _ax_);
        function _ay_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],926943384,_aa_),_C_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_First_greater,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$21,
          67,
          6,
          92,
          _ay_);
        function _az_(param)
         {return caml_equal(binary_search(0,0,___,[0,_aa_],-839473056,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_First_strictly,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$22,
          68,
          6,
          90,
          _az_);
        function _aA_(param)
         {return caml_equal(binary_search(0,0,___,[0],-253007807,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_Last_less_than,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$23,
          70,
          6,
          86,
          _aA_);
        function _aB_(param)
         {return caml_equal(binary_search(0,0,___,[0,_ab_],-253007807,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_b_Last_less_than,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$24,
          71,
          6,
          86,
          _aB_);
        function _aC_(param)
         {return caml_equal
                  (binary_search(0,0,___,[0,_aa_],-253007807,_aa_),_D_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_Last_less_than,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$25,
          72,
          6,
          88,
          _aC_);
        function _aD_(param)
         {return caml_equal(binary_search(0,0,___,[0,_aa_],200870407,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_compare_s_Last_strictly,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$26,
          73,
          6,
          83,
          _aD_);
        function create_test_case(param)
         {var
           num_b=param[2],
           num_s=param[1],
           _bp_=caml_call2(Base[259],num_s,num_b),
           arr=caml_call2(Base_Array[25],_bp_,_ab_),
           _br_=caml_call2(Base[260],num_s,1),
           _bq_=0;
          if(! (_br_ < 0))
           {var i=_bq_;
            for(;;)
             {runtime.caml_check_bound(arr,i)[i + 1] = _aa_;
              var _bs_=i + 1 | 0;
              if(_br_ !== i){var i=_bs_;continue}
              break}}
          return arr}
        function _aE_(param)
         {var
           match=
            binary_search
             (0,0,___,create_test_case(only_small),-1056898635,_aa_);
          return match?1:0}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_match_binary_search_create_test_case_only_sm,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$27,
          88,
          6,
          159,
          _aE_);
        function _aF_(param)
         {var
           arr=create_test_case(both),
           match=binary_search(0,0,___,arr,-1056898635,_ab_);
          if(match){var v=match[1];return caml_equal(v,2531)}
          return 0}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_match_binary_search_arr_compare_First_equal,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$28,
          93,
          6,
          178,
          _aF_);
        function _aG_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,-1056898635,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_equal_to_b,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$29,
          99,
          6,
          127,
          _aG_);
        function create_deterministic_test(param)
         {function _bo_(i){return caml_call2(Base[282],i,5e4)?_ab_:_aa_}
          return caml_call2(Base_Array[26],1e5,_bo_)}
        function _aH_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-1056898635,_aa_),_E_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_equal_to_s,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$30,
          106,
          6,
          130,
          _aH_);
        function _aI_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-1055410545,_aa_),_F_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_equal_to_s,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$31,
          110,
          6,
          134,
          _aI_);
        function _aJ_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,926943384,_aa_),_G_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_greater_th,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$32,
          114,
          6,
          146,
          _aJ_);
        function _aK_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-253007807,_aa_),_H_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_less_than_o,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$33,
          118,
          6,
          147,
          _aK_);
        function _aL_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-839473056,_aa_),_I_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_strictly_g,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$34,
          122,
          6,
          148,
          _aL_);
        function _aM_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,200870407,_ab_),_J_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_strictly_le,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$35,
          126,
          6,
          144,
          _aM_);
        function _aN_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-1056898635,_ab_),_K_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_equal_to_b$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$36,
          131,
          6,
          136,
          _aN_);
        function _aO_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-1055410545,_ab_),_L_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_equal_to_b,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$37,
          135,
          6,
          134,
          _aO_);
        function _aP_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,926943384,_ab_),_M_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_greater_th$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$38,
          139,
          6,
          151,
          _aP_);
        function _aQ_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-253007807,_ab_),_N_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_less_than_o$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$39,
          143,
          6,
          147,
          _aQ_);
        function _aR_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,-839473056,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_strictly_g$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$40,
          147,
          6,
          141,
          _aR_);
        function _aS_(param)
         {var arr=create_deterministic_test(0);
          return caml_equal(binary_search(0,0,___,arr,200870407,_ab_),_O_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_strictly_le$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$41,
          151,
          6,
          144,
          _aS_);
        function _aT_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,-1056898635,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_equal_to_s$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$42,
          157,
          6,
          126,
          _aT_);
        function _aU_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,-1055410545,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_equal_to_s$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$43,
          161,
          6,
          125,
          _aU_);
        function _aV_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,926943384,_aa_),_P_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_greater_th$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$44,
          165,
          6,
          144,
          _aV_);
        function _aW_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,-253007807,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_less_than_o$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$45,
          169,
          6,
          138,
          _aW_);
        function _aX_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,-839473056,_aa_),_Q_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_strictly_g$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$46,
          173,
          6,
          141,
          _aX_);
        function _aY_(param)
         {var arr=create_test_case(only_big);
          return caml_equal(binary_search(0,0,___,arr,200870407,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_strictly_le$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$47,
          177,
          6,
          135,
          _aY_);
        function _aZ_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,-1056898635,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_equal_to_b$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$48,
          184,
          6,
          129,
          _aZ_);
        function _a0_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,-1055410545,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_equal_to_b$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$49,
          188,
          6,
          127,
          _a0_);
        function _a1_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,926943384,_ab_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_greater_th$2,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$50,
          192,
          6,
          144,
          _a1_);
        function _a2_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,-253007807,_ab_),_R_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_less_than_o$2,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$51,
          196,
          6,
          146,
          _a2_);
        function _a3_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,-839473056,_aa_),0)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_First_strictly_g$2,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$52,
          200,
          6,
          141,
          _a3_);
        function _a4_(param)
         {var arr=create_test_case(only_small);
          return caml_equal(binary_search(0,0,___,arr,200870407,_ab_),_S_)}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_arr_compare_Last_strictly_le$2,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$53,
          204,
          6,
          143,
          _a4_);
        function _a5_(param)
         {var length=0;
          for(;;)
           {var _bb_=0;
            if(! (length < 0))
             {var num_s=_bb_;
              for(;;)
               {var
                 _bd_=
                  function(num_s)
                    {return function(i)
                      {return caml_call2(Base[278],i,num_s)?_aa_:_ab_}}
                   (num_s),
                 arr=caml_call2(Base_Array[26],length,_bd_),
                 _be_=-1;
                if(! (length < -1))
                 {var pos=_be_;
                  for(;;)
                   {var _bh_=caml_call2(Base[259],length,1),_bg_=-1;
                    if(! (_bh_ < -1))
                     {var len=_bg_;
                      for(;;)
                       {var
                         _bj_=
                          function(length,pos,len)
                            {return function(param)
                              {return caml_call3
                                       (Base_Ordered_collection_common[3],pos,len,length)}}
                           (length,pos,len),
                         should_raise=caml_call1(Base_Exn[16],_bj_),
                         _bk_=
                          function(arr,pos,len)
                            {return function(param)
                              {return binary_search
                                       ([0,pos],[0,len],_$_,arr,-1055410545,_aa_)}}
                           (arr,pos,len),
                         result=caml_call1(Base_Result[35],_bk_);
                        if(0 === should_raise)
                         if(0 === result[0])
                          {var
                            result$0=result[1],
                            searched=caml_call2(Base[260],num_s,1);
                           if(caml_call2(Base[278],searched,pos))
                            var correct_result=0;
                           else
                            if(caml_equal(len,0))
                             var correct_result=0;
                            else
                             {var _bm_=caml_call2(Base[259],pos,len);
                              if(caml_call2(Base[283],searched,_bm_))
                               var
                                _bn_=caml_call2(Base[259],pos,len),
                                correct_result=[0,caml_call2(Base[260],_bn_,1)];
                              else
                               var correct_result=[0,searched]}
                           if(1 - caml_equal(correct_result,result$0))
                            caml_call1(Base[299],cst_Wrong_result)}
                         else
                          caml_call1
                           (Base[299],cst_expected_it_to_not_raise_but_it_raised);
                        else
                         if(0 === result[0])
                          caml_call1(Base[299],cst_expected_it_to_raise_but_it_didn_t);
                        var _bl_=len + 1 | 0;
                        if(_bh_ !== len){var len=_bl_;continue}
                        break}}
                    var _bi_=pos + 1 | 0;
                    if(length !== pos){var pos=_bi_;continue}
                    break}}
                var _bf_=num_s + 1 | 0;
                if(length !== num_s){var num_s=_bf_;continue}
                break}}
            var _bc_=length + 1 | 0;
            if(5 !== length){var length=_bc_;continue}
            return 0}}
        caml_call8
         (Ppx_inline_test_lib_Runtime[5],
          Inline_test_config,
          cst_for_length_0_to_5_do_for_num_s_0_to_len,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$54,
          208,
          6,
          1712,
          _a5_);
        function binary_search_segmented(a)
         {var _ba_=caml_call1(_Y_[3][4],a);return caml_call3(_Y_[2],0,0,_ba_)}
        function _a6_(param)
         {var arr=create_deterministic_test(0);
          function segment_of(x)
           {return caml_equal(x,_ab_)?-57574468:847852583}
          var
           _a$_=
            caml_equal
             (caml_call2(binary_search_segmented(arr),segment_of,125585502),
              _T_);
          return _a$_
                  ?caml_equal
                    (caml_call2
                      (binary_search_segmented(arr),segment_of,-63348021),
                     _U_)
                  :_a$_}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_segmented_arr_segment_of_La,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$55,
          250,
          6,
          291,
          _a6_);
        function _a7_(param)
         {var arr=create_deterministic_test(0);
          function segment_of(param){return -57574468}
          var
           _a__=
            caml_equal
             (caml_call2(binary_search_segmented(arr),segment_of,125585502),0);
          return _a__
                  ?caml_equal
                    (caml_call2
                      (binary_search_segmented(arr),segment_of,-63348021),
                     _V_)
                  :_a__}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_segmented_arr_segment_of_La$0,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$56,
          256,
          6,
          254,
          _a7_);
        function _a8_(param)
         {var arr=create_deterministic_test(0);
          function segment_of(param){return 847852583}
          var
           _a9_=
            caml_equal
             (caml_call2(binary_search_segmented(arr),segment_of,125585502),
              _W_);
          return _a9_
                  ?caml_equal
                    (caml_call2
                      (binary_search_segmented(arr),segment_of,-63348021),
                     0)
                  :_a9_}
        caml_call8
         (Ppx_inline_test_lib_Runtime[4],
          Inline_test_config,
          cst_binary_search_segmented_arr_segment_of_La$1,
          0,
          cst_base_for_tests_src_test_binary_searchable_ml$57,
          262,
          6,
          258,
          _a8_);
        return 0}
      caml_call8
       (Ppx_inline_test_lib_Runtime[6],
        Inline_test_config,
        cst_test_binary_searchable,
        0,
        cst_base_for_tests_src_test_binary_searchable_ml$58,
        30,
        2,
        9774,
        _Z_);
      return [0]}
    function Test$0(M)
     {var binary_search=M[1],binary_search_segmented=M[2],For_test=M[3];
      return Test_gen$0([0,binary_search,binary_search_segmented,For_test])}
    function Test1$0(M)
     {var
       binary_search=M[1],
       binary_search_segmented=M[2],
       of_array=M[3][1],
       compare=Base_Bool[13];
      return Test_gen$0
              ([0,
                binary_search,
                binary_search_segmented,
                [0,compare,0,1,of_array]])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_base_for_tests$6);
    function _X_(M)
     {var
       B=caml_call1(Base_Binary_searchable[2],[0,M[1],M[2]]),
       binary_search=B[1],
       binary_search_segmented=B[2],
       binary_search$0=B[1],
       binary_search_segmented$0=B[2],
       For_test=M[3];
      Test1$0([0,binary_search$0,binary_search_segmented$0,For_test]);
      return [0,binary_search,binary_search_segmented]}
    var
     Base_for_tests_Test_binary_searchable=
      [0,
       Test$0,
       Test1$0,
       function(M)
        {var
          B=caml_call1(Base_Binary_searchable[1],[0,M[1],M[2]]),
          binary_search=B[1],
          binary_search_segmented=B[2],
          binary_search$0=B[1],
          binary_search_segmented$0=B[2],
          For_test=M[3];
         Test$0([0,binary_search$0,binary_search_segmented$0,For_test]);
         return [0,binary_search,binary_search_segmented]},
       _X_];
    caml_register_global
     (205,
      Base_for_tests_Test_binary_searchable,
      "Base_for_tests__Test_binary_searchable");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX2Zvcl90ZXN0cy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
