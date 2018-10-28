(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_virtual_dom=caml_new_string("virtual_dom"),
     cst_src_event_intf_ml=caml_new_string("src/event_intf.ml"),
     cst=caml_new_string(""),
     cst_virtual_dom$0=caml_new_string("virtual_dom"),
     cst_virtual_dom$1=caml_new_string("virtual_dom"),
     cst_handle_non_dom_event_exn_called_with_Stop_propagation_which_requires_a_dom_event=
      caml_new_string
       ("[handle_non_dom_event_exn] called with [Stop_propagation] which requires a dom event"),
     cst_handle_non_dom_event_exn_called_with_Prevent_default_which_requires_a_dom_event=
      caml_new_string
       ("[handle_non_dom_event_exn] called with [Prevent_default] which requires a dom event"),
     cst_Unrecognized_variant=caml_new_string("Unrecognized variant"),
     cst_Virtual_dom_Event_Define_Handler_C=
      caml_new_string("Virtual_dom__Event.Define(Handler).C"),
     cst_virtual_dom$2=caml_new_string("virtual_dom"),
     cst_src_event_ml=caml_new_string("src/event.ml"),
     cst$0=caml_new_string(""),
     cst_virtual_dom$3=caml_new_string("virtual_dom"),
     cst_Virtual_dom_Event_Ignore=caml_new_string("Virtual_dom__Event.Ignore"),
     cst_Virtual_dom_Event_Viewport_changed=
      caml_new_string("Virtual_dom__Event.Viewport_changed"),
     cst_Virtual_dom_Event_Stop_propagation=
      caml_new_string("Virtual_dom__Event.Stop_propagation"),
     cst_Virtual_dom_Event_Prevent_default=
      caml_new_string("Virtual_dom__Event.Prevent_default"),
     cst_Virtual_dom_Event_Many=caml_new_string("Virtual_dom__Event.Many"),
     cst_virtual_dom$4=caml_new_string("virtual_dom"),
     cst_value$0=caml_new_string("value"),
     cst_style$0=caml_new_string("style"),
     cst_style=caml_new_string("style"),
     cst_on=caml_new_string("on"),
     cst_tabindex=caml_new_string("tabindex"),
     cst_value=caml_new_string("value"),
     cst_type=caml_new_string("type"),
     cst_for=caml_new_string("for"),
     cst_autofocus=caml_new_string("autofocus"),
     cst_placeholder=caml_new_string("placeholder"),
     cst_href=caml_new_string("href"),
     cst_id=caml_new_string("id"),
     cst_class=caml_new_string("class"),
     cst_virtual_dom$5=caml_new_string("virtual_dom"),
     cst_src_attr_ml=caml_new_string("src/attr.ml"),
     cst$1=caml_new_string(""),
     cst_virtual_dom$6=caml_new_string("virtual_dom"),
     cst$2=caml_new_string(""),
     cst_checked=caml_new_string("checked"),
     cst$3=caml_new_string(""),
     cst_disabled=caml_new_string("disabled"),
     cst_focus=caml_new_string("focus"),
     cst_blur=caml_new_string("blur"),
     cst_click=caml_new_string("click"),
     cst_contextmenu=caml_new_string("contextmenu"),
     cst_dblclick=caml_new_string("dblclick"),
     cst_mousemove=caml_new_string("mousemove"),
     cst_mouseup=caml_new_string("mouseup"),
     cst_mousedown=caml_new_string("mousedown"),
     cst_mouseenter=caml_new_string("mouseenter"),
     cst_mouseleave=caml_new_string("mouseleave"),
     cst_mouseover=caml_new_string("mouseover"),
     cst_mouseout=caml_new_string("mouseout"),
     cst_keyup=caml_new_string("keyup"),
     cst_keypress=caml_new_string("keypress"),
     cst_keydown=caml_new_string("keydown"),
     cst_change=caml_new_string("change"),
     cst_input=caml_new_string("input"),
     cst_virtual_dom$7=caml_new_string("virtual_dom"),
     cst_virtual_dom$8=caml_new_string("virtual_dom"),
     cst_src_attr_intf_ml=caml_new_string("src/attr_intf.ml"),
     cst$4=caml_new_string(""),
     cst_virtual_dom$9=caml_new_string("virtual_dom"),
     cst_virtual_dom$10=caml_new_string("virtual_dom"),
     cst_virtual_dom$11=caml_new_string("virtual_dom"),
     cst_src_node_ml=caml_new_string("src/node.ml"),
     cst$5=caml_new_string(""),
     cst_virtual_dom$12=caml_new_string("virtual_dom"),
     cst_a=caml_new_string("a"),
     cst_body=caml_new_string("body"),
     cst_button=caml_new_string("button"),
     cst_div=caml_new_string("div"),
     cst_footer=caml_new_string("footer"),
     cst_h1=caml_new_string("h1"),
     cst_h2=caml_new_string("h2"),
     cst_h3=caml_new_string("h3"),
     cst_h4=caml_new_string("h4"),
     cst_h5=caml_new_string("h5"),
     cst_header=caml_new_string("header"),
     cst_html=caml_new_string("html"),
     cst_input$0=caml_new_string("input"),
     cst_textarea=caml_new_string("textarea"),
     cst_select=caml_new_string("select"),
     cst_option=caml_new_string("option"),
     cst_label=caml_new_string("label"),
     cst_li=caml_new_string("li"),
     cst_p=caml_new_string("p"),
     cst_section=caml_new_string("section"),
     cst_span=caml_new_string("span"),
     cst_strong=caml_new_string("strong"),
     cst_table=caml_new_string("table"),
     cst_tbody=caml_new_string("tbody"),
     cst_td=caml_new_string("td"),
     cst_th=caml_new_string("th"),
     cst_thead=caml_new_string("thead"),
     cst_tr=caml_new_string("tr"),
     cst_ul=caml_new_string("ul"),
     cst_virtual_dom$13=caml_new_string("virtual_dom"),
     cst_virtual_dom$14=caml_new_string("virtual_dom"),
     cst_src_tyxml_f_ml=caml_new_string("src/tyxml_f.ml"),
     cst$6=caml_new_string(""),
     cst_virtual_dom$15=caml_new_string("virtual_dom"),
     cst_virtual_dom$16=caml_new_string("virtual_dom"),
     cst_virtual_dom$17=caml_new_string("virtual_dom"),
     cst_src_vdom_ml=caml_new_string("src/vdom.ml"),
     cst$7=caml_new_string(""),
     cst_virtual_dom$18=caml_new_string("virtual_dom"),
     cst_virtual_dom$19=caml_new_string("virtual_dom"),
     cst$12=caml_new_string(";"),
     cst$13=caml_new_string("&"),
     cst$11=caml_new_string(" "),
     cst$10=caml_new_string(","),
     cst$9=caml_new_string(" "),
     cst_checked$0=caml_new_string("checked"),
     cst_selected=caml_new_string("selected"),
     cst_value$1=caml_new_string("value"),
     cst_virtual_dom$20=caml_new_string("virtual_dom"),
     cst_src_tyxml_ml=caml_new_string("src/tyxml.ml"),
     cst$8=caml_new_string(""),
     cst_virtual_dom$21=caml_new_string("virtual_dom"),
     cst_virtual_dom$22=caml_new_string("virtual_dom"),
     cst_virtual_dom$23=caml_new_string("virtual_dom"),
     cst_src_virtual_dom_ml=caml_new_string("src/virtual_dom.ml"),
     cst$14=caml_new_string(""),
     cst_virtual_dom$24=caml_new_string("virtual_dom"),
     cst_virtual_dom$25=caml_new_string("virtual_dom"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Dom_html=global_data.Dom_html,
     Dom=global_data.Dom,
     Base_Hashtbl=global_data.Base__Hashtbl,
     Stdlib_obj=global_data.Stdlib__obj,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Int=global_data.Base__Int,
     Base_String=global_data.Base__String,
     Js=global_data.Js,
     Base_Option=global_data.Base__Option,
     Base_Bool=global_data.Base__Bool,
     Base_Type_equal=global_data.Base__Type_equal,
     Base_Array=global_data.Base__Array,
     Stdlib=global_data.Stdlib,
     Assert_failure=global_data.Assert_failure,
     Stdlib_string=global_data.Stdlib__string,
     Xml_wrap=global_data.Xml_wrap,
     Svg_f=global_data.Svg_f,
     Html_f=global_data.Html_f,
     Virtual_dom=[0,0,0,0,0,0,0,0,0,0];
    caml_register_global(174,Virtual_dom,"Virtual_dom__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom);
    caml_call1(Expect_test_collector[4][1],cst_src_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Event_intf=[0];
    caml_register_global(178,Virtual_dom_Event_intf,"Virtual_dom__Event_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$2);
    caml_call1(Expect_test_collector[4][1],cst_src_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$3,cst$0);
    var
     Ignore=[248,cst_Virtual_dom_Event_Ignore,caml_fresh_oo_id(0)],
     Viewport_changed=
      [248,cst_Virtual_dom_Event_Viewport_changed,caml_fresh_oo_id(0)],
     Stop_propagation=
      [248,cst_Virtual_dom_Event_Stop_propagation,caml_fresh_oo_id(0)],
     Prevent_default=
      [248,cst_Virtual_dom_Event_Prevent_default,caml_fresh_oo_id(0)],
     Many=[248,cst_Virtual_dom_Event_Many,caml_fresh_oo_id(0)],
     handlers=
      caml_call3
       (Base_Hashtbl[5],0,[0,8],[0,Base_Int[18],Base_Int[8],Base_Int[6]]),
     visibility_handlers=[0,0],
     _a_=[0,caml_new_string(" ")],
     _d_=[0,caml_new_string("src/tyxml.ml"),61,19],
     _c_=[0,caml_new_string("src/tyxml.ml"),60,17];
    function Define(Handler)
     {var
       C=[248,cst_Virtual_dom_Event_Define_Handler_C,caml_fresh_oo_id(0)],
       key=caml_call1(Stdlib_obj[23],C);
      function _bB_(inp)
       {if(inp[1] === C){var value=inp[2];return caml_call1(Handler[2],value)}
        var _bC_=caml_call1(Sexplib0_Sexp_conv[7],cst_Unrecognized_variant);
        return caml_call1(Base[301],_bC_)}
      caml_call3(Base_Hashtbl[35],handlers,key,_bB_);
      function inject(v){return [0,C,v]}
      return [0,C,inject]}
    function Define_visibility(VH)
     {visibility_handlers[1] = [0,VH[1],visibility_handlers[1]];return [0]}
    function handle_registered_event(t)
     {var
       _bz_=caml_call1(Stdlib_obj[21],t),
       _bA_=caml_call1(Stdlib_obj[23],_bz_);
      return caml_call3(Base_Hashtbl[52],handlers,_bA_,t)}
    function handle(evt)
     {function handle(t)
       {if(t === Ignore)return 0;
        if(t[1] === Many){var l=t[2];return caml_call2(Base_List[8],l,handle)}
        if(t === Viewport_changed)
         {var _by_=function(f){return caml_call1(f,0)};
          return caml_call2(Base_List[8],visibility_handlers[1],_by_)}
        return t === Stop_propagation
                ?caml_call1(Dom_html[113],evt)
                :t === Prevent_default
                  ?caml_call1(Dom[17],evt)
                  :handle_registered_event(t)}
      return handle}
    function handle_non_dom_event_exn(t)
     {if(t === Ignore)return 0;
      if(t[1] === Many)
       {var l=t[2];return caml_call2(Base_List[8],l,handle_non_dom_event_exn)}
      if(t === Viewport_changed)
       {var _bx_=function(f){return caml_call1(f,0)};
        return caml_call2(Base_List[8],visibility_handlers[1],_bx_)}
      return t === Stop_propagation
              ?caml_call1
                (Base[299],
                 cst_handle_non_dom_event_exn_called_with_Stop_propagation_which_requires_a_dom_event)
              :t === Prevent_default
                ?caml_call1
                  (Base[299],
                   cst_handle_non_dom_event_exn_called_with_Prevent_default_which_requires_a_dom_event)
                :handle_registered_event(t)}
    var Expert=[0,handle,handle_non_dom_event_exn];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Event=
      [0,
       Ignore,
       Viewport_changed,
       Stop_propagation,
       Prevent_default,
       Many,
       Define,
       Define_visibility,
       Expert];
    caml_register_global(187,Event,"Virtual_dom__Event");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$5);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$6,cst$1);
    function create(name,value){return [1,name,value.toString()]}
    function property(name,value){return [0,name,value]}
    function create_float(name,value){return [1,name,value.toString()]}
    function class$0(c){return create(cst_class,c)}
    function classes(classes)
     {return class$0(caml_call2(Base_String[53],_a_,classes))}
    function id(s){return create(cst_id,s)}
    function href(r){return create(cst_href,r)}
    var checked=create(cst_checked,cst$2),disabled=create(cst_disabled,cst$3);
    function placeholder(x){return create(cst_placeholder,x)}
    function autofocus(b)
     {return create(cst_autofocus,caml_call1(Base_Bool[26],b))}
    function for$0(x){return create(cst_for,x)}
    function type(x){return create(cst_type,x)}
    function value(x){return create(cst_value,x)}
    function tabindex(x)
     {return create(cst_tabindex,caml_call1(Base_Int[10],x))}
    function string_property(name,value){return [0,name,value.toString()]}
    function on(event,convert_to_vdom_event)
     {function f(e)
       {var _bw_=caml_call1(convert_to_vdom_event,e);
        caml_call2(Event[8][1],e,_bw_);
        return Js[7]}
      var _bv_=caml_call1(Dom[10],f);
      return [0,caml_call2(Base[296],cst_on,event),_bv_]}
    function style(props)
     {var obj={};
      function _bu_(param)
       {var v=param[2],k=param[1];return obj[k.toString()] = v.toString()}
      caml_call2(Base_List[8],props,_bu_);
      return [0,cst_style,obj]}
    function style_css(css){return create(cst_style$0,css)}
    function on_focus(_bt_){return on(cst_focus,_bt_)}
    function on_blur(_bs_){return on(cst_blur,_bs_)}
    function on_click(_br_){return on(cst_click,_br_)}
    function on_contextmenu(_bq_){return on(cst_contextmenu,_bq_)}
    function on_double_click(_bp_){return on(cst_dblclick,_bp_)}
    function on_mousemove(_bo_){return on(cst_mousemove,_bo_)}
    function on_mouseup(_bn_){return on(cst_mouseup,_bn_)}
    function on_mousedown(_bm_){return on(cst_mousedown,_bm_)}
    function on_mouseenter(_bl_){return on(cst_mouseenter,_bl_)}
    function on_mouseleave(_bk_){return on(cst_mouseleave,_bk_)}
    function on_mouseover(_bj_){return on(cst_mouseover,_bj_)}
    function on_mouseout(_bi_){return on(cst_mouseout,_bi_)}
    function on_keyup(_bh_){return on(cst_keyup,_bh_)}
    function on_keypress(_bg_){return on(cst_keypress,_bg_)}
    function on_keydown(_bf_){return on(cst_keydown,_bf_)}
    function const_ignore(param){return Event[1]}
    function run_coercion(coercion,target,prev)
     {if(prev)return prev;
      var _be_=caml_call1(coercion,target);
      return caml_call1(Js[5][10],_be_)}
    function on_input_event(event,handler)
     {return on
              (event,
               function(ev)
                {function _a__(target)
                  {function _bc_(target)
                    {var text=caml_js_to_string(target.value);
                     return caml_call2(handler,ev,text)}
                   var
                    _bd_=Event[1],
                    _a$_=run_coercion(Dom_html[114][33],target,0),
                    _ba_=run_coercion(Dom_html[114][50],target,_a$_),
                    _bb_=run_coercion(Dom_html[114][55],target,_ba_);
                   return caml_call3(Base_Option[38],_bb_,_bd_,_bc_)}
                 return caml_call3(Js[5][7],ev.target,const_ignore,_a__)})}
    function on_change(_a9_){return on_input_event(cst_change,_a9_)}
    function on_input(_a8_){return on_input_event(cst_input,_a8_)}
    function list_to_obj(attrs)
     {var attrs_obj={};
      function _a7_(param)
       {if(0 === param[0])
         {var
           value=param[2],
           name=param[1],
           value$0=
            caml_call2(Base_String[29],name,cst_value$0)
             ?Js[50][1].SoftSetHook(value)
             :value;
          return attrs_obj[name.toString()] = value$0}
        var value$1=param[2],name$0=param[1];
        if(1 - caml_call1(Js[6][5],attrs_obj.attributes))
         attrs_obj.attributes = {};
        return attrs_obj.attributes[name$0.toString()] = value$1}
      caml_call2(Base_List[8],attrs,_a7_);
      return attrs_obj}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Attr=
      [0,
       create,
       create_float,
       string_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       classes,
       disabled,
       for$0,
       href,
       id,
       placeholder,
       style,
       style_css,
       tabindex,
       type,
       value,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown,
       list_to_obj];
    caml_register_global(192,Virtual_dom_Attr,"Virtual_dom__Attr");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$8);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$9,cst$4);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Attr_intf=[0];
    caml_register_global(193,Virtual_dom_Attr_intf,"Virtual_dom__Attr_intf");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$11);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$12,cst$5);
    function text(s)
     {var vtext=Js[50][1].VirtualDom.VText;return new vtext(s.toString())}
    function create$0(tag,key,attrs,children)
     {var vnode=Js[50][1].VirtualDom.VNode;
      if(key)
       {var
         key$0=key[1],
         _a2_=key$0.toString(),
         _a3_=caml_js_from_array(caml_call1(Base_Array[37],children)),
         _a4_=list_to_obj(attrs);
        return new vnode(tag.toString(),_a4_,_a3_,_a2_)}
      var
       _a5_=caml_js_from_array(caml_call1(Base_Array[37],children)),
       _a6_=list_to_obj(attrs);
      return new vnode(tag.toString(),_a6_,_a5_)}
    function svg(tag,key,attrs,children)
     {var vnode=Js[50][1].VirtualDom.svg;
      if(key)
       {var
         key$0=key[1],
         _aX_=key$0.toString(),
         _aY_=caml_js_from_array(caml_call1(Base_Array[37],children)),
         _aZ_=list_to_obj(attrs);
        return new vnode(tag.toString(),_aZ_,_aY_,_aX_)}
      var
       _a0_=caml_js_from_array(caml_call1(Base_Array[37],children)),
       _a1_=list_to_obj(attrs);
      return new vnode(tag.toString(),_a1_,_a0_)}
    function to_dom(t){return Js[50][1].VirtualDom.createElement(t)}
    function a(_aU_,_aV_,_aW_){return create$0(cst_a,_aU_,_aV_,_aW_)}
    function body(_aR_,_aS_,_aT_){return create$0(cst_body,_aR_,_aS_,_aT_)}
    function button(_aO_,_aP_,_aQ_)
     {return create$0(cst_button,_aO_,_aP_,_aQ_)}
    function div(_aL_,_aM_,_aN_){return create$0(cst_div,_aL_,_aM_,_aN_)}
    function footer(_aI_,_aJ_,_aK_)
     {return create$0(cst_footer,_aI_,_aJ_,_aK_)}
    function h1(_aF_,_aG_,_aH_){return create$0(cst_h1,_aF_,_aG_,_aH_)}
    function h2(_aC_,_aD_,_aE_){return create$0(cst_h2,_aC_,_aD_,_aE_)}
    function h3(_az_,_aA_,_aB_){return create$0(cst_h3,_az_,_aA_,_aB_)}
    function h4(_aw_,_ax_,_ay_){return create$0(cst_h4,_aw_,_ax_,_ay_)}
    function h5(_at_,_au_,_av_){return create$0(cst_h5,_at_,_au_,_av_)}
    function header(_aq_,_ar_,_as_)
     {return create$0(cst_header,_aq_,_ar_,_as_)}
    function html(_an_,_ao_,_ap_){return create$0(cst_html,_an_,_ao_,_ap_)}
    function input(_ak_,_al_,_am_)
     {return create$0(cst_input$0,_ak_,_al_,_am_)}
    function textarea(_ah_,_ai_,_aj_)
     {return create$0(cst_textarea,_ah_,_ai_,_aj_)}
    function select(_ae_,_af_,_ag_)
     {return create$0(cst_select,_ae_,_af_,_ag_)}
    function option(_ab_,_ac_,_ad_)
     {return create$0(cst_option,_ab_,_ac_,_ad_)}
    function label(___,_$_,_aa_){return create$0(cst_label,___,_$_,_aa_)}
    function li(_X_,_Y_,_Z_){return create$0(cst_li,_X_,_Y_,_Z_)}
    function p(_U_,_V_,_W_){return create$0(cst_p,_U_,_V_,_W_)}
    function section(_R_,_S_,_T_){return create$0(cst_section,_R_,_S_,_T_)}
    function span(_O_,_P_,_Q_){return create$0(cst_span,_O_,_P_,_Q_)}
    function strong(_L_,_M_,_N_){return create$0(cst_strong,_L_,_M_,_N_)}
    function table(_I_,_J_,_K_){return create$0(cst_table,_I_,_J_,_K_)}
    function tbody(_F_,_G_,_H_){return create$0(cst_tbody,_F_,_G_,_H_)}
    function td(_C_,_D_,_E_){return create$0(cst_td,_C_,_D_,_E_)}
    function th(_z_,_A_,_B_){return create$0(cst_th,_z_,_A_,_B_)}
    function thead(_w_,_x_,_y_){return create$0(cst_thead,_w_,_x_,_y_)}
    function tr(_t_,_u_,_v_){return create$0(cst_tr,_t_,_u_,_v_)}
    function ul(_q_,_r_,_s_){return create$0(cst_ul,_q_,_r_,_s_)}
    function widget(opt,_o_,id,init,param)
     {if(opt)
       var sth=opt[1],destroy=sth;
      else
       var destroy=function(param,_p_){return 0};
      if(_o_)
       var sth$0=_o_[1],update=sth$0;
      else
       var update=function(s,elt){return [0,s,elt]};
      var obj={};
      obj.type = "Widget";
      obj.name = 0;
      obj.id = id;
      obj.init
      =
      caml_js_wrap_callback
       (function(param)
         {var match=caml_call1(init,0),dom_node=match[2],s0=match[1];
          obj.state = s0;
          return dom_node});
      obj.update
      =
      caml_js_wrap_callback
       (function(prev,dom_node)
         {caml_call2(Base_Type_equal[12][11],prev.id,id);
          var
           match=caml_call2(update,prev.state,dom_node),
           dom_node$0=match[2],
           state=match[1];
          obj.state = state;
          return dom_node$0});
      obj.destroy
      =
      caml_js_wrap_callback
       (function(dom_node){return caml_call2(destroy,obj.state,dom_node)});
      return obj}
    function thunk(params,thunk){this.params = params;this.thunk = thunk}
    thunk.prototype.type = "Thunk";
    var
     _b_=
      runtime.caml_js_wrap_meth_callback
       (function(this$0,previous)
         {function _i_(previous)
           {var i$1=caml_call2(Base[260],this$0.params.length,1),i=i$1;
            for(;;)
             {if(caml_call2(Base[278],i,0))
               var _n_=0;
              else
               {var
                 _k_=caml_call2(Js[16],previous.params,i),
                 _l_=caml_call2(Js[16],this$0.params,i),
                 _m_=1 - caml_call2(Base[302],_l_,_k_);
                if(! _m_){var i$0=caml_call2(Base[260],i,1),i=i$0;continue}
                var _n_=_m_}
              return _n_?this$0.thunk(0):previous.vnode}}
          function _j_(param){return this$0.thunk(0)}
          return caml_call3(Js[5][7],previous,_j_,_i_)});
    thunk.prototype.render = _b_;
    function create$1(f,x1)
     {var args=caml_js_from_array([0,f,x1]);
      return new thunk(args,function(param){return caml_call1(f,x1)})}
    function create2(f,x1,x2)
     {var args=caml_js_from_array([0,f,x1,x2]);
      return new thunk(args,function(param){return caml_call2(f,x1,x2)})}
    function create3(f,x1,x2,x3)
     {var args=caml_js_from_array([0,f,x1,x2,x3]);
      return new thunk(args,function(param){return caml_call3(f,x1,x2,x3)})}
    function create4(f,x1,x2,x3,x4)
     {var args=caml_js_from_array([0,f,x1,x2,x3,x4]);
      return new thunk(args,function(param){return caml_call4(f,x1,x2,x3,x4)})}
    function create5(f,x1,x2,x3,x4,x5)
     {var args=caml_js_from_array([0,f,x1,x2,x3,x4,x5]);
      return new
              thunk
              (args,function(param){return caml_call5(f,x1,x2,x3,x4,x5)})}
    function create$2(previous,current)
     {return Js[50][1].VirtualDom.diff(previous,current)}
    function apply(t,elt){return Js[50][1].VirtualDom.patch(elt,t)}
    function f(patch)
     {for(var key in patch)if(key !== "a")return false;return true}
    function is_empty(t){return f(t) | 0}
    var Patch=[0,create$2,apply,is_empty];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Node=
      [0,
       text,
       a,
       body,
       button,
       div,
       footer,
       h1,
       h2,
       h3,
       h4,
       h5,
       header,
       html,
       input,
       textarea,
       select,
       option,
       label,
       li,
       p,
       section,
       span,
       strong,
       table,
       tbody,
       td,
       th,
       thead,
       tr,
       ul,
       create$0,
       svg,
       to_dom,
       widget,
       [0,create$1,create2,create3,create4,create5],
       Patch];
    caml_register_global(196,Virtual_dom_Node,"Virtual_dom__Node");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$14);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_f_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$15,cst$6);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Tyxml_f=[0,0,0,0,0,0,0,0,0,0,0];
    caml_register_global(197,Virtual_dom_Tyxml_f,"Virtual_dom__Tyxml_f");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$17);
    caml_call1(Expect_test_collector[4][1],cst_src_vdom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$18,cst$7);
    var
     Attr=
      [0,
       create,
       create_float,
       string_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       classes,
       disabled,
       for$0,
       href,
       id,
       placeholder,
       style,
       style_css,
       tabindex,
       type,
       value,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom_Vdom=[0,Attr,Event,0];
    caml_register_global(198,Virtual_dom_Vdom,"Virtual_dom__Vdom");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$20);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$21,cst$8);
    function uri_of_string(s){return s}
    function string_of_uri(s){return s}
    function attr(name,value)
     {if(caml_string_notequal(name,cst_checked$0))
       if(caml_string_notequal(name,cst_selected))
        if(caml_string_notequal(name,cst_value$1))return create(name,value);
      return [0,name,value.toString()]}
    function attr_ev(name,cvt_to_vdom_event)
     {function f(e)
       {var _h_=caml_call1(cvt_to_vdom_event,e);
        caml_call2(Event[8][1],e,_h_);
        return Js[7]}
      return [0,name,caml_call1(Dom[10],f)]}
    function float_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[24],value))}
    function int_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[22],value))}
    function string_attrib(name,value){return attr(name,value)}
    function space_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$9,values))}
    function comma_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$10,values))}
    function event_handler_attrib(name,value){return attr_ev(name,value)}
    function mouse_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function keyboard_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function uri_attrib(name,value){return attr(name,value)}
    function uris_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$11,values))}
    function empty(param){throw [0,Assert_failure,_c_]}
    function comment(c){throw [0,Assert_failure,_d_]}
    function pcdata(s){return text(s)}
    function encodedpcdata(s){return text(s)}
    function entity(e)
     {var
       _f_=caml_call2(Stdlib[17],e,cst$12),
       _g_=caml_call2(Stdlib[17],cst$13,_f_).toString(),
       entity=caml_call1(Dom_html[119],_g_);
      return text(caml_js_to_string(entity))}
    function leaf(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return create$0(name,0,a,0)}
    function node(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;
      return create$0(name,0,a,children)}
    function cdata(s){return pcdata(s)}
    function cdata_script(s){return cdata(s)}
    function cdata_style(s){return cdata(s)}
    function leaf$0(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return svg(name,0,a,0)}
    function node$0(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return svg(name,0,a,children)}
    var
     Svg=
      caml_call1
       (Svg_f[1],
        [0,
         Xml_wrap[1],
         string_of_uri,
         uri_of_string,
         float_attrib,
         int_attrib,
         string_attrib,
         space_sep_attrib,
         comma_sep_attrib,
         event_handler_attrib,
         mouse_event_handler_attrib,
         keyboard_event_handler_attrib,
         uri_attrib,
         uris_attrib,
         empty,
         comment,
         pcdata,
         encodedpcdata,
         entity,
         leaf$0,
         node$0,
         cdata,
         cdata_script,
         cdata_style]),
     _e_=
      [0,
       Svg[2],
       Svg[3],
       Svg[4],
       Svg[5],
       Svg[6],
       Svg[7],
       Svg[8],
       Svg[9],
       Svg[10],
       Svg[11],
       Svg[12],
       Svg[13],
       Svg[14],
       Svg[15],
       Svg[16],
       Svg[17],
       Svg[18],
       Svg[19],
       Svg[20],
       Svg[21],
       Svg[22],
       Svg[23],
       Svg[24],
       Svg[25],
       Svg[26],
       Svg[27],
       Svg[28],
       Svg[29],
       Svg[30],
       Svg[31],
       Svg[32],
       Svg[33],
       Svg[34],
       Svg[35],
       Svg[36],
       Svg[37],
       Svg[38],
       Svg[39],
       Svg[40],
       Svg[41],
       Svg[42],
       Svg[43],
       Svg[44],
       Svg[45],
       Svg[46],
       Svg[47],
       Svg[48],
       Svg[49],
       Svg[50],
       Svg[51],
       Svg[52],
       Svg[53],
       Svg[54],
       Svg[55],
       Svg[56],
       Svg[57],
       Svg[58],
       Svg[59],
       Svg[60],
       Svg[61],
       Svg[62],
       Svg[63],
       Svg[64],
       Svg[65],
       Svg[66],
       Svg[67],
       Svg[68],
       Svg[69],
       Svg[70],
       Svg[71],
       Svg[72],
       Svg[73],
       Svg[74],
       Svg[75],
       Svg[76],
       Svg[77],
       Svg[78],
       Svg[79],
       Svg[80],
       Svg[81],
       Svg[82],
       Svg[83],
       Svg[84],
       Svg[85],
       Svg[86],
       Svg[87],
       Svg[88],
       Svg[89],
       Svg[90],
       Svg[91],
       Svg[92],
       Svg[93],
       Svg[94],
       Svg[95],
       Svg[96],
       Svg[97],
       Svg[98],
       Svg[99],
       Svg[100],
       Svg[101],
       Svg[102],
       Svg[103],
       Svg[104],
       Svg[105],
       Svg[106],
       Svg[107],
       Svg[108],
       Svg[109],
       Svg[110],
       Svg[111],
       Svg[112],
       Svg[113],
       Svg[114],
       Svg[115],
       Svg[116],
       Svg[117],
       Svg[118],
       Svg[119],
       Svg[120],
       Svg[121],
       Svg[122],
       Svg[123],
       Svg[124],
       Svg[125],
       Svg[126],
       Svg[127],
       Svg[128],
       Svg[129],
       Svg[130],
       Svg[131],
       Svg[132],
       Svg[133],
       Svg[134],
       Svg[135],
       Svg[136],
       Svg[137],
       Svg[138],
       Svg[139],
       Svg[140],
       Svg[141],
       Svg[142],
       Svg[143],
       Svg[144],
       Svg[145],
       Svg[146],
       Svg[147],
       Svg[148],
       Svg[149],
       Svg[150],
       Svg[151],
       Svg[152],
       Svg[153],
       Svg[154],
       Svg[155],
       Svg[156],
       Svg[157],
       Svg[158],
       Svg[159],
       Svg[160],
       Svg[161],
       Svg[162],
       Svg[163],
       Svg[164],
       Svg[165],
       Svg[166],
       Svg[167],
       Svg[168],
       Svg[169],
       Svg[170],
       Svg[171],
       Svg[172],
       Svg[173],
       Svg[174],
       Svg[175],
       Svg[176],
       Svg[177],
       Svg[178],
       Svg[179],
       Svg[180],
       Svg[181],
       Svg[182],
       Svg[183],
       Svg[184],
       Svg[185],
       Svg[186],
       Svg[187],
       Svg[188],
       Svg[189],
       Svg[190],
       Svg[191],
       Svg[192],
       Svg[193],
       Svg[194],
       Svg[195],
       Svg[196],
       Svg[197],
       Svg[198],
       Svg[199],
       Svg[200],
       Svg[201],
       Svg[202],
       Svg[203],
       Svg[204],
       Svg[205],
       Svg[206],
       Svg[207],
       Svg[208],
       Svg[209],
       Svg[210],
       Svg[211],
       Svg[212],
       Svg[213],
       Svg[214],
       Svg[215],
       Svg[216],
       Svg[217],
       Svg[218],
       Svg[219],
       Svg[220],
       Svg[221],
       Svg[222],
       Svg[223],
       Svg[224],
       Svg[225],
       Svg[226],
       Svg[227],
       Svg[228],
       Svg[229],
       Svg[230],
       Svg[231],
       Svg[232],
       Svg[233],
       Svg[234],
       Svg[235],
       Svg[236],
       Svg[237],
       Svg[238],
       Svg[239],
       Svg[240],
       Svg[241],
       Svg[242],
       Svg[243],
       Svg[244],
       Svg[245],
       Svg[246],
       Svg[247],
       Svg[248],
       Svg[249],
       Svg[250],
       Svg[251],
       Svg[252],
       Svg[253],
       Svg[254],
       Svg[255],
       Svg[256],
       Svg[257],
       Svg[258],
       Svg[259],
       Svg[260],
       Svg[261],
       Svg[262],
       Svg[263],
       Svg[264],
       Svg[265],
       Svg[266],
       Svg[267],
       Svg[268],
       Svg[269],
       Svg[270],
       Svg[271],
       Svg[272],
       Svg[273],
       Svg[274],
       Svg[275],
       Svg[276],
       Svg[277],
       Svg[278],
       Svg[279],
       Svg[280],
       Svg[281],
       Svg[282],
       Svg[283],
       Svg[284],
       Svg[285],
       Svg[286],
       Svg[287],
       Svg[288],
       Svg[289],
       Svg[290],
       Svg[291],
       Svg[292],
       Svg[293],
       Svg[294],
       Svg[295],
       Svg[296],
       Svg[297],
       Svg[298],
       Svg[299],
       Svg[300],
       Svg[301],
       Svg[302],
       Svg[303],
       Svg[304],
       Svg[305],
       Svg[306],
       Svg[307],
       Svg[308],
       Svg[309],
       Svg[310],
       Svg[311],
       Svg[312],
       Svg[313],
       Svg[314],
       Svg[315],
       Svg[316],
       Svg[317],
       Svg[318],
       Svg[319],
       Svg[320],
       Svg[321],
       Svg[322],
       Svg[323]],
     Html=
      caml_call1
       (caml_call1
         (Html_f[1],
          [0,
           Xml_wrap[1],
           string_of_uri,
           uri_of_string,
           float_attrib,
           int_attrib,
           string_attrib,
           space_sep_attrib,
           comma_sep_attrib,
           event_handler_attrib,
           mouse_event_handler_attrib,
           keyboard_event_handler_attrib,
           uri_attrib,
           uris_attrib,
           empty,
           comment,
           pcdata,
           encodedpcdata,
           entity,
           leaf,
           node,
           cdata,
           cdata_script,
           cdata_style]),
        _e_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Virtual_dom_Tyxml=
      [0,
       [0,
        Xml_wrap[1],
        string_of_uri,
        uri_of_string,
        float_attrib,
        int_attrib,
        string_attrib,
        space_sep_attrib,
        comma_sep_attrib,
        event_handler_attrib,
        mouse_event_handler_attrib,
        keyboard_event_handler_attrib,
        uri_attrib,
        uris_attrib,
        empty,
        comment,
        pcdata,
        encodedpcdata,
        entity,
        leaf,
        node,
        cdata,
        cdata_script,
        cdata_style],
       Svg,
       Html];
    caml_register_global(205,Virtual_dom_Tyxml,"Virtual_dom__Tyxml");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_virtual_dom$23);
    caml_call1(Expect_test_collector[4][1],cst_src_virtual_dom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$24,cst$14);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Virtual_dom$0=[0,0,0];
    caml_register_global(206,Virtual_dom$0,"Virtual_dom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2aXJ0dWFsX2RvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
