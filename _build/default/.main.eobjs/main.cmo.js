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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_My_Incr_dom_App=caml_new_string("My Incr_dom App"),
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Virtual_dom_Node=global_data.Virtual_dom__Node,
     Incr_dom_Incr=global_data.Incr_dom__Incr,
     Core_kernel=global_data.Core_kernel,
     Incr_dom_Start_app=global_data.Incr_dom__Start_app,
     cutoff=Core_kernel[359],
     Model=[0,cutoff],
     sexp_of_t=Core_kernel[598];
    function should_log(param){return 1}
    var Action=[0,sexp_of_t,should_log],State=[0],initial_model=0;
    function apply_action(action,model,param){return model}
    function view(model,param)
     {function _c_(model)
       {var
         _d_=[0,caml_call1(Virtual_dom_Node[1],cst_My_Incr_dom_App),0],
         _e_=[0,caml_call3(Virtual_dom_Node[9],0,0,_d_),0];
        return caml_call3(Virtual_dom_Node[3],0,0,_e_)}
      return caml_call2(Incr_dom_Incr[1][63][4][2],model,_c_)}
    function on_startup(param,model)
     {return caml_call1(Async_kernel_Deferred[12],0)}
    function update_visibility(model){return model}
    function on_display(param,_b_,_a_){return 0}
    var
     App=
      [0,
       Model,
       Action,
       State,
       apply_action,
       update_visibility,
       view,
       on_startup,
       on_display,
       initial_model];
    caml_call5
     (Incr_dom_Start_app[1],
      0,
      0,
      0,
      App[9],
      [0,App[1],App[2],App[3],App[4],App[5],App[6],App[7],App[8]]);
    var Main=[0,App];
    runtime.caml_register_global(6,Main,"Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9tYWluLmNtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjdXRvZmYiLCJzZXhwX29mX3QiLCJzaG91bGRfbG9nIiwiaW5pdGlhbF9tb2RlbCIsImFwcGx5X2FjdGlvbiIsImFjdGlvbiIsIm1vZGVsIiwidmlldyIsIm9uX3N0YXJ0dXAiLCJ1cGRhdGVfdmlzaWJpbGl0eSIsIm9uX2Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdCUUE7O0tBSUpDO2FBRUlDLGtCQUFtQixRQUFJO2tCQUYzQkQsVUFFSUMsc0JBT0ZDO2FBR0FDLGFBQWNDLE9BQW1CQyxhQUNuQyxPQURtQ0EsS0FDOUI7YUFFSEMsS0FBTUQ7TUFFUixhQUFRQTtRQUdTOztTQUFiO3NEQUE0QztNQUhoRCw2Q0FGUUEsVUFLd0M7YUFFOUNFLGlCQUF3QkY7TUFDMUIsOENBQWtCO2FBRWhCRyxrQkFBbUJILE9BQWlCLE9BQWpCQSxLQUFzQjthQUV6Q0ksMEJBQXNELFFBQUU7Ozs7Ozs7T0FmeEROO09BYUFLO09BVkFGO09BT0FDO09BS0FFO09BbEJBUDtJQXNCSjs7Ozs7Ozs7O1UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFud2Fya2UvZ2l0aHViL29jYW1sLXRlc3QvX2J1aWxkL2RlZmF1bHQvbWFpbi5tbCJdLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIENvcmVfa2VybmVsXG5vcGVuIEFzeW5jX2tlcm5lbFxub3BlbiBJbmNyX2RvbVxub3BlbiBJbmNyLkxldF9zeW50YXhcblxubW9kdWxlIEFwcCA6IHNpZ1xuXG4gIGluY2x1ZGUgQXBwX2ludGYuU19zaW1wbGVcblxuICB2YWwgaW5pdGlhbF9tb2RlbDogTW9kZWwudFxuXG5lbmQgPSBzdHJ1Y3RcblxuICBtb2R1bGUgTW9kZWwgPSBzdHJ1Y3RcbiAgICB0eXBlIHQgPSB1bml0XG5cbiAgICBsZXQgY3V0b2ZmID0gcGh5c19lcXVhbFxuICBlbmRcblxuICBtb2R1bGUgQWN0aW9uID0gc3RydWN0XG4gICAgdHlwZSB0ID0gdW5pdCBbQEBkZXJpdmluZyBzZXhwX29mXVxuXG4gICAgbGV0IHNob3VsZF9sb2cgKF86dCkgPSB0cnVlXG4gIGVuZFxuXG4gIG1vZHVsZSBTdGF0ZSA9IHN0cnVjdFxuICAgIHR5cGUgdCA9IHVuaXRcbiAgZW5kXG5cbiAgbGV0IGluaXRpYWxfbW9kZWwgOiBNb2RlbC50ID1cbiAgICAoKVxuXG4gIGxldCBhcHBseV9hY3Rpb24gKF9hY3Rpb246QWN0aW9uLnQpIChtb2RlbDpNb2RlbC50KSAoXzpTdGF0ZS50KSA9XG4gICAgbW9kZWxcblxuICBsZXQgdmlldyAobW9kZWw6TW9kZWwudCBJbmNyLnQpIH5pbmplY3Q6XyA9XG4gICAgbGV0IG9wZW4gVmRvbSBpblxuICAgIGxldCVtYXAgX21vZGVsID0gbW9kZWwgaW5cbiAgICBOb2RlLmJvZHlcbiAgICAgIFtdXG4gICAgICBbIE5vZGUuaDMgW10gWyBOb2RlLnRleHQgXCJNeSBJbmNyX2RvbSBBcHBcIiBdIF1cbiAgICBcbiAgbGV0IG9uX3N0YXJ0dXAgfnNjaGVkdWxlOl8gKF9tb2RlbDpNb2RlbC50KSA9XG4gICAgRGVmZXJyZWQucmV0dXJuICgpXG4gIFxuICBsZXQgdXBkYXRlX3Zpc2liaWxpdHkgKG1vZGVsOk1vZGVsLnQpID0gbW9kZWxcblxuICBsZXQgb25fZGlzcGxheSB+b2xkOihfOk1vZGVsLnQpIChfOk1vZGVsLnQpIChfOlN0YXRlLnQpID0gKClcbmVuZFxuXG5sZXQgKCkgPVxuICBTdGFydF9hcHAuc2ltcGxlXG4gICAgKG1vZHVsZSBBcHApXG4gICAgfmluaXRpYWxfbW9kZWw6QXBwLmluaXRpYWxfbW9kZWwiXX0=
