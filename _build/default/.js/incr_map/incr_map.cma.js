(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_update_dummy=runtime.caml_update_dummy;
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
     cst_impossible_case_BUG_in_incr_map_ml_subrange=
      caml_new_string("impossible case: BUG in incr_map.ml subrange"),
     cst_incr_map=caml_new_string("incr_map"),
     cst_src_incr_map_ml=caml_new_string("src/incr_map.ml"),
     cst=caml_new_string(""),
     cst_incr_map$0=caml_new_string("incr_map"),
     cst_incr_map$1=caml_new_string("incr_map"),
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Info=global_data.Core_kernel__Info,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Bool=global_data.Core_kernel__Bool,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Tuple=global_data.Core_kernel__Tuple,
     Assert_failure=global_data.Assert_failure,
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_incr_map);
    caml_call1(Expect_test_collector[4][1],cst_src_incr_map_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_map$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_map$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _g_=[0,caml_new_string("entries")],
     _h_=[0,caml_new_string("actual_value")],
     _i_=[0,caml_new_string("key")],
     _b_=[0,caml_new_string("node_is_unnecessary")],
     _c_=[0,caml_new_string("node_is_invalid")],
     _d_=[0,caml_new_string("node_is_const")],
     _e_=[0,caml_new_string("node_info")],
     _f_=[0,caml_new_string("saved_value")],
     _a_=[0,caml_new_string("src/incr_map.ml"),129,14],
     Incr_map=
      [0,
       function(Incr)
        {function diff_map(i,f)
          {var old=[0,0];
           function _a9_(a)
            {var b=caml_call2(f,old[1],a);old[1] = [0,[0,a,b]];return b}
           return caml_call2(Incr[63][4][2],i,_a9_)}
         function unordered_fold(opt,update,map,init,add,remove)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[359];
           function default$0(key,old_data,new_data,acc)
            {return caml_call3
                     (add,key,new_data,caml_call3(remove,key,old_data,acc))}
           var update$0=caml_call2(Core_kernel_Option[51],update,default$0);
           return diff_map
                   (map,
                    function(old,new_in)
                     {if(old)
                       var x=old[1],old_in=x[1],old_out=x[2];
                      else
                       var
                        _a7_=caml_call1(Core_kernel_Map[2],new_in),
                        old_in$0=caml_call1(Core_kernel_Map[87][1],_a7_),
                        old_in=old_in$0,
                        old_out=init;
                      function _a5_(acc,param)
                       {var change=param[2],key=param[1],_a8_=change[1];
                        if(847852583 === _a8_)
                         {var old=change[2];return caml_call3(remove,key,old,acc)}
                        if(1013247643 <= _a8_)
                         {var match=change[2],new$0=match[2],old$0=match[1];
                          return caml_call4(update$0,key,old$0,new$0,acc)}
                        var new$1=change[2];
                        return caml_call3(add,key,new$1,acc)}
                      var
                       _a6_=
                        caml_call3(Core_kernel_Map[63],old_in,new_in,data_equal);
                      return caml_call3(Core_kernel_Sequence[8],_a6_,old_out,_a5_)})}
         function with_comparator(map,f)
          {var
            _a3_=caml_call2(Incr[8],map,Core_kernel_Map[2]),
            _a4_=caml_call2(Incr[26],0,_a3_);
           return caml_call2(Incr[18],_a4_,f)}
         function generic_mapi(witness,opt,map,f)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[359];
           return diff_map
                   (map,
                    function(old,input)
                     {if(old)
                       {var
                         match=old[1],
                         old_output=match[2],
                         old_input=match[1],
                         _a0_=
                          function(output,param)
                           {var change=param[2],key=param[1],_a2_=change[1];
                            if(847852583 === _a2_)
                             return caml_call2(Core_kernel_Map[33],output,key);
                            var
                             new_data=1013247643 <= _a2_?change[2][2]:change[2],
                             res=caml_call2(f,key,new_data);
                            if(0 === witness)
                             return caml_call3(Core_kernel_Map[24],output,key,res);
                            if(res)
                             {var output_data=res[1];
                              return caml_call3
                                      (Core_kernel_Map[24],output,key,output_data)}
                            return caml_call2(Core_kernel_Map[33],output,key)},
                         _a1_=
                          caml_call3(Core_kernel_Map[63],old_input,input,data_equal);
                        return caml_call3
                                (Core_kernel_Sequence[8],_a1_,old_output,_a0_)}
                      return 0 === witness
                              ?caml_call2(Core_kernel_Map[40],input,f)
                              :caml_call2(Core_kernel_Map[48],input,f)})}
         function mapi(data_equal,map,f)
          {return generic_mapi(0,data_equal,map,f)}
         function filter_mapi(data_equal,map,f)
          {return generic_mapi(1,data_equal,map,f)}
         function diff_map2(i1,i2,f)
          {var old=[0,0];
           function _aZ_(a1,a2)
            {var b=caml_call3(f,old[1],a1,a2);
             old[1] = [0,[0,a1,a2,b]];
             return b}
           return caml_call3(Incr[10],i1,i2,_aZ_)}
         function merge(opt,_aN_,left_map,right_map,f)
          {if(opt)
            var sth=opt[1],data_equal_left=sth;
           else
            var data_equal_left=Core_kernel[359];
           if(_aN_)
            var sth$0=_aN_[1],data_equal_right=sth$0;
           else
            var data_equal_right=Core_kernel[359];
           return diff_map2
                   (left_map,
                    right_map,
                    function(old,new_left_map,new_right_map)
                     {var comparator=caml_call1(Core_kernel_Map[2],new_left_map);
                      if(old)
                       var
                        x=old[1],
                        old_left_map=x[1],
                        old_right_map=x[2],
                        old_output=x[3];
                      else
                       var
                        empty=caml_call1(Core_kernel_Map[87][1],comparator),
                        old_left_map=empty,
                        old_right_map=empty,
                        old_output=empty;
                      var
                       left_diff=
                        caml_call3
                         (Core_kernel_Map[63],
                          old_left_map,
                          new_left_map,
                          data_equal_left),
                       right_diff=
                        caml_call3
                         (Core_kernel_Map[63],
                          old_right_map,
                          new_right_map,
                          data_equal_right);
                      function _aO_(output,diff_element)
                       {if(2 === diff_element[0])
                         {var
                           right_key=diff_element[2][1],
                           match$4=diff_element[1],
                           left_key=match$4[1],
                           _aX_=caml_call2(comparator[1],left_key,right_key);
                          if(! caml_call2(Core_kernel_Int[118][3],_aX_,0))
                           throw [0,Assert_failure,_a_];
                          var key$0=left_key}
                        else
                         var match=diff_element[1],key=match[1],key$0=key;
                        function new_data(param)
                         {var _aY_=param[1];
                          if(847852583 === _aY_)return 0;
                          var x=1013247643 <= _aY_?param[2][2]:param[2];
                          return [0,x]}
                        switch(diff_element[0])
                         {case 0:
                           var
                            match$0=diff_element[1],
                            left_diff=match$0[2],
                            _aS_=caml_call2(Core_kernel_Map[30],new_right_map,key$0),
                            match$1=[0,new_data(left_diff),_aS_];
                           break;
                          case 1:
                           var
                            match$2=diff_element[1],
                            right_diff=match$2[2],
                            _aV_=new_data(right_diff),
                            match$1=
                             [0,caml_call2(Core_kernel_Map[30],new_left_map,key$0),_aV_];
                           break;
                          default:
                           var
                            right_diff$0=diff_element[2][2],
                            match$3=diff_element[1],
                            left_diff$0=match$3[2],
                            _aW_=new_data(right_diff$0),
                            match$1=[0,new_data(left_diff$0),_aW_]}
                        var right_data_opt=match$1[2],left_data_opt=match$1[1];
                        if(left_data_opt)
                         {var _aT_=left_data_opt[1];
                          if(right_data_opt)
                           var
                            y=right_data_opt[1],
                            _aU_=caml_call2(f,key$0,[0,737457313,[0,_aT_,y]]);
                          else
                           var _aU_=caml_call2(f,key$0,[0,847852583,_aT_]);
                          var output_data_opt=_aU_}
                        else
                         if(right_data_opt)
                          var
                           y$0=right_data_opt[1],
                           output_data_opt=caml_call2(f,key$0,[0,-57574468,y$0]);
                         else
                          var output_data_opt=0;
                        if(output_data_opt)
                         {var data=output_data_opt[1];
                          return caml_call3(Core_kernel_Map[24],output,key$0,data)}
                        return caml_call2(Core_kernel_Map[33],output,key$0)}
                      function _aP_(param,_aR_)
                       {var right_key=_aR_[1],left_key=param[1];
                        return caml_call2(comparator[1],left_key,right_key)}
                      var
                       _aQ_=
                        caml_call3
                         (Core_kernel_Sequence[54],left_diff,right_diff,_aP_);
                      return caml_call3
                              (Core_kernel_Sequence[8],_aQ_,old_output,_aO_)})}
         function generic_mapi_with_comparator
          (witness,cutoff,opt,lhs,comparator,f)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[359];
           var
            _aw_=Incr[57],
            empty_map=caml_call1(Core_kernel_Map[87][1],comparator),
            prev_map=[0,empty_map],
            prev_nodes=[0,empty_map],
            acc=[0,empty_map];
           function _ax_(param){return acc[1]}
           var
            result=caml_call2(_aw_[2][2],0,_ax_),
            on_inner_change=
             0 === witness
              ?function(key,data)
                {acc[1] = caml_call3(Core_kernel_Map[24],acc[1],key,data);
                 return 0}
              :function(key,opt)
                {var old=acc[1];
                 if(opt)
                  var
                   data=opt[1],
                   _aM_=caml_call3(Core_kernel_Map[24],old,key,data);
                 else
                  var
                   _aM_=
                    caml_call2(Core_kernel_Map[34],old,key)
                     ?caml_call2(Core_kernel_Map[33],old,key)
                     :old;
                 acc[1] = _aM_;
                 return 0},
            lhs_change=[];
           caml_update_dummy
            (lhs_change,
             [246,
              function(_aA_)
               {function _aB_(map)
                 {var
                   symmetric_diff=
                    caml_call3(Core_kernel_Map[63],prev_map[1],map,data_equal);
                  function _aC_(nodes,param)
                   {var changed=param[2],key=param[1],_aD_=changed[1];
                    if(847852583 === _aD_)
                     {var
                       match=caml_call2(Core_kernel_Map[31],nodes,key),
                       dep=match[2],
                       node=match[1],
                       nodes$0=caml_call2(Core_kernel_Map[33],nodes,key);
                      caml_call2(_aw_[2][7],result,dep);
                      acc[1] = caml_call2(Core_kernel_Map[33],acc[1],key);
                      caml_call1(_aw_[2][5],node);
                      return nodes$0}
                    if(1013247643 <= _aD_)
                     {var
                       match$0=caml_call2(Core_kernel_Map[31],nodes,key),
                       node$0=match$0[1];
                      caml_call1(_aw_[2][4],node$0);
                      return nodes}
                    function _aE_(param)
                     {return caml_call2(Core_kernel_Map[31],prev_map[1],key)}
                    var node$1=caml_call2(_aw_[2][2],0,_aE_);
                    function _aF_(c)
                     {var _aL_=caml_call1(_aw_[2][3],node$1);
                      return caml_call2(Incr[48],_aL_,c)}
                    caml_call2(Core_kernel_Option[18],cutoff,_aF_);
                    var
                     _aG_=caml_call1(Core_kernel[350],lhs_change),
                     _aH_=caml_call2(_aw_[1][2],0,_aG_);
                    caml_call2(_aw_[2][6],node$1,_aH_);
                    var
                     _aI_=caml_call2(f,key,caml_call1(_aw_[2][3],node$1)),
                     _aJ_=[0,function(_aK_){return on_inner_change(key,_aK_)}],
                     user_function_dep=caml_call2(_aw_[1][2],_aJ_,_aI_);
                    caml_call2(_aw_[2][6],result,user_function_dep);
                    return caml_call3
                            (Core_kernel_Map[24],nodes,key,[0,node$1,user_function_dep])}
                  var
                   new_nodes=
                    caml_call3
                     (Core_kernel_Sequence[8],symmetric_diff,prev_nodes[1],_aC_);
                  prev_nodes[1] = new_nodes;
                  prev_map[1] = map;
                  return 0}
                return caml_call2(Incr[8],lhs,_aB_)}]);
           var
            _ay_=caml_call1(Core_kernel[350],lhs_change),
            _az_=caml_call2(_aw_[1][2],0,_ay_);
           caml_call2(_aw_[2][6],result,_az_);
           return caml_call1(_aw_[2][3],result)}
         function filter_mapi$0(cutoff,data_equal,map,f)
          {return with_comparator
                   (map,
                    function(comparator)
                     {return generic_mapi_with_comparator
                              (1,cutoff,data_equal,map,comparator,f)})}
         function mapi$0(cutoff,data_equal,map,f)
          {return with_comparator
                   (map,
                    function(comparator)
                     {return generic_mapi_with_comparator
                              (0,cutoff,data_equal,map,comparator,f)})}
         function flatten(map)
          {var
            _aq_=Incr[57],
            _ar_=caml_call1(Core_kernel_Map[2],map),
            result=[0,caml_call1(Core_kernel_Map[87][1],_ar_)];
           function _as_(param){return result[1]}
           var node=caml_call2(_aq_[2][2],0,_as_);
           function _at_(key,incr)
            {var
              _au_=
               [0,
                function(a)
                 {result[1] = caml_call3(Core_kernel_Map[24],result[1],key,a);
                  return 0}],
              _av_=caml_call2(_aq_[1][2],_au_,incr);
             return caml_call2(_aq_[2][6],node,_av_)}
           caml_call2(Core_kernel_Map[37],map,_at_);
           return caml_call1(_aq_[2][3],node)}
         function join(map_incr)
          {return with_comparator
                   (map_incr,
                    function(comparator)
                     {var
                       _aj_=Incr[57],
                       empty_map=caml_call1(Core_kernel_Map[87][1],comparator),
                       result_map=[0,empty_map],
                       old_map_of_incrs=[0,empty_map],
                       current_dependencies=[0,empty_map];
                      function _ak_(param){return result_map[1]}
                      var result=caml_call2(_aj_[2][2],0,_ak_);
                      function add_subnode(current_dependencies,key,data_node)
                       {var
                         _ap_=
                          [0,
                           function(data)
                            {result_map[1]
                             =
                             caml_call3(Core_kernel_Map[24],result_map[1],key,data);
                             return 0}],
                         new_dep=caml_call2(_aj_[1][2],_ap_,data_node);
                        caml_call2(_aj_[2][6],result,new_dep);
                        return caml_call3
                                (Core_kernel_Map[24],current_dependencies,key,new_dep)}
                      function remove_subnode(current_dependencies,key)
                       {var
                         dep=
                          caml_call2(Core_kernel_Map[31],current_dependencies,key);
                        caml_call2(_aj_[2][7],result,dep);
                        result_map[1]
                        =
                        caml_call2(Core_kernel_Map[33],result_map[1],key);
                        return caml_call2
                                (Core_kernel_Map[33],current_dependencies,key)}
                      function _al_(map_of_incrs)
                       {var
                         sequence=
                          caml_call3
                           (Core_kernel_Map[63],
                            old_map_of_incrs[1],
                            map_of_incrs,
                            Core_kernel[359]);
                        function _an_(current_dependencies,param)
                         {var diff=param[2],key=param[1],_ao_=diff[1];
                          if(847852583 === _ao_)
                           return remove_subnode(current_dependencies,key);
                          if(1013247643 <= _ao_)
                           {var match=diff[2],data_node=match[2];
                            return add_subnode
                                    (remove_subnode(current_dependencies,key),key,data_node)}
                          var data_node$0=diff[2];
                          return add_subnode(current_dependencies,key,data_node$0)}
                        var
                         new_dependency_map=
                          caml_call3
                           (Core_kernel_Sequence[8],
                            sequence,
                            current_dependencies[1],
                            _an_);
                        current_dependencies[1] = new_dependency_map;
                        old_map_of_incrs[1] = map_of_incrs;
                        return 0}
                      var
                       lhs_change=caml_call2(Incr[8],map_incr,_al_),
                       _am_=caml_call2(_aj_[1][2],0,lhs_change);
                      caml_call2(_aj_[2][6],result,_am_);
                      return caml_call1(_aj_[2][3],result)})}
         function subrange(opt,map_incr,range)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[359];
           return diff_map2
                   (map_incr,
                    range,
                    function(old,map,range)
                     {var compare=caml_call1(Core_kernel_Map[2],map)[1];
                      function equal(l,r)
                       {var _ai_=caml_call2(compare,l,r);
                        return caml_call2(Core_kernel_Int[118][3],_ai_,0)}
                      if(range)
                       {var
                         range$0=range[1],
                         max=range$0[2],
                         min=range$0[1],
                         from_scratch=
                          function(param)
                           {return caml_call3(Core_kernel_Map[76],map,[0,min],[0,max])};
                        if(old)
                         {var _R_=old[1],_S_=_R_[2];
                          if(_S_)
                           {var
                             old_res=_R_[3],
                             old_range=_S_[1],
                             old_max=old_range[2],
                             old_min=old_range[1],
                             old_map=_R_[1],
                             _T_=caml_call2(compare,old_min,old_max);
                            if(! caml_call2(Core_kernel_Int[118][4],_T_,0))
                             {var _U_=caml_call2(compare,old_max,min);
                              if(! caml_call2(Core_kernel_Int[118][5],_U_,0))
                               {var _V_=caml_call2(compare,old_min,max);
                                if(! caml_call2(Core_kernel_Int[118][4],_V_,0))
                                 {var
                                   _W_=
                                    function(param)
                                     {function apply_diff_in_intersection(param$0,_af_)
                                       {var
                                         data=_af_[2],
                                         key=_af_[1],
                                         map=param$0[2],
                                         outside=param$0[1],
                                         _Z_=caml_call2(compare,min,key),
                                         ___=caml_call2(Core_kernel_Int[118][2],_Z_,0);
                                        if(___)
                                         {var
                                           _$_=caml_call2(compare,key,max),
                                           _aa_=caml_call2(Core_kernel_Int[118][2],_$_,0);
                                          if(_aa_)
                                           {var
                                             _ab_=caml_call2(compare,old_min,key),
                                             _ac_=caml_call2(Core_kernel_Int[118][2],_ab_,0);
                                            if(_ac_)
                                             var
                                              _ad_=caml_call2(compare,key,old_max),
                                              _ag_=caml_call2(Core_kernel_Int[118][2],_ad_,0),
                                              switch$0=1;
                                            else
                                             var _ae_=_ac_,switch$0=0}
                                          else
                                           var _ae_=_aa_,switch$0=0}
                                        else
                                         var _ae_=___,switch$0=0;
                                        if(! switch$0)var _ag_=_ae_;
                                        if(_ag_)
                                         {var _ah_=data[1];
                                          if(847852583 === _ah_)
                                           return [0,outside,caml_call2(Core_kernel_Map[33],map,key)];
                                          var data$0=1013247643 <= _ah_?data[2][2]:data[2];
                                          return [0,
                                                  outside,
                                                  caml_call3(Core_kernel_Map[24],map,key,data$0)]}
                                        var outside$0=outside - 1 | 0;
                                        return caml_call2(Core_kernel_Int[118][5],outside$0,0)
                                                ?caml_call1(param,from_scratch(0))
                                                :[0,outside$0,caml_call2(Core_kernel_Map[33],map,key)]}
                                      var
                                       outside_cutoff=
                                        caml_call1(Core_kernel_Map[21],old_res)
                                        /
                                        4
                                        |
                                        0,
                                       _Y_=caml_call3(Core_kernel_Map[63],old_map,map,data_equal),
                                       with_updated_values_in_intersection=
                                        caml_call3
                                          (Core_kernel_Sequence[8],
                                           _Y_,
                                           [0,outside_cutoff,old_res],
                                           apply_diff_in_intersection)
                                         [2];
                                      if
                                       (caml_call4
                                         (Core_kernel_Tuple[1][10],equal,equal,old_range,range$0))
                                       return with_updated_values_in_intersection;
                                      var
                                       without_keys_out_of_range=
                                        caml_call3
                                         (Core_kernel_Map[76],
                                          with_updated_values_in_intersection,
                                          [0,min],
                                          [0,max]);
                                      function map_append_exn(lower_part,upper_part)
                                       {var
                                         match=
                                          caml_call2(Core_kernel_Map[75],lower_part,upper_part);
                                        if(typeof match === "number")
                                         return caml_call1
                                                 (Core_kernel[164],
                                                  cst_impossible_case_BUG_in_incr_map_ml_subrange);
                                        var map=match[2];
                                        return map}
                                      var
                                       lower_part=
                                        caml_call3(Core_kernel_Map[76],map,[0,min],[1,old_min]),
                                       upper_part=
                                        caml_call3(Core_kernel_Map[76],map,[1,old_max],[0,max]),
                                       with_new_keys_now_in_range=
                                        map_append_exn
                                         (lower_part,
                                          map_append_exn(without_keys_out_of_range,upper_part));
                                      return with_new_keys_now_in_range};
                                  return caml_call1(Core_kernel[369],_W_)}}}
                            return from_scratch(0)}}
                        return from_scratch(0)}
                      var _X_=caml_call1(Core_kernel_Map[2],map);
                      return caml_call1(Core_kernel_Map[87][1],_X_)})}
         function create(opt,input_map,comparator)
          {if(opt)
            var sth=opt[1],data_equal=sth;
           else
            var data_equal=Core_kernel[359];
           var self=[];
           caml_update_dummy
            (self,
             [246,
              function(_J_)
               {function _K_(input_map)
                 {var
                   _L_=caml_obj_tag(self),
                   self$0=
                    250 === _L_
                     ?self[1]
                     :246 === _L_?caml_call1(CamlinternalLazy[2],self):self;
                  function _M_(param)
                   {var
                     changed_value=param[2],
                     key=param[1],
                     entries=caml_call2(Core_kernel_Map[27],self$0[2],key);
                    function _O_(entry)
                     {var _P_=changed_value[1];
                      if(847852583 === _P_)
                       var _Q_=0;
                      else
                       var
                        new_value=
                         1013247643 <= _P_?changed_value[2][2]:changed_value[2],
                        _Q_=[0,new_value];
                      entry[1] = _Q_;
                      return caml_call1(Incr[57][2][4],entry[2])}
                    return caml_call2(Core_kernel_List[19],entries,_O_)}
                  var
                   _N_=
                    caml_call3
                     (Core_kernel_Map[63],self$0[1],input_map,data_equal);
                  caml_call2(Core_kernel_Sequence[7],_N_,_M_);
                  self$0[1] = input_map;
                  return 0}
                var
                 updater_node=caml_call2(Incr[8],input_map,_K_),
                 empty_map=caml_call1(Core_kernel_Map[87][1],comparator);
                return [0,
                        empty_map,
                        empty_map,
                        updater_node,
                        caml_call1(Incr[50][2],0)]}]);
           var _I_=caml_obj_tag(self);
           return 250 === _I_
                   ?self[1]
                   :246 === _I_?caml_call1(CamlinternalLazy[2],self):self}
         function find(t,key)
          {var match=caml_call2(Core_kernel_Map[27],t[2],key);
           if(match)
            {var entry=match[1];return caml_call1(Incr[57][2][3],entry[2])}
           function _x_(param)
            {var entry=[];
             caml_update_dummy
              (entry,
               [246,
                function(_A_)
                 {function _B_(param)
                   {return caml_call1(Core_kernel[350],entry)[1]}
                  var
                   _C_=
                    [0,
                     function(is_now_observable)
                      {var
                        _E_=caml_obj_tag(entry),
                        entry$0=
                         250 === _E_
                          ?entry[1]
                          :246 === _E_?caml_call1(CamlinternalLazy[2],entry):entry,
                        current_entries=caml_call2(Core_kernel_Map[27],t[2],key),
                        _F_=caml_call1(Core_kernel[359],entry$0),
                        is_linked=
                         caml_call2(Core_kernel_List[23],current_entries,_F_);
                       if
                        (caml_call2
                          (Core_kernel_Bool[23],is_linked,is_now_observable))
                        return 0;
                       if(is_now_observable)
                        {t[2] = caml_call3(Core_kernel_Map[25],t[2],key,entry$0);
                         return 0}
                       function _G_(x)
                        {return 1 - caml_call2(Core_kernel[359],entry$0,x)}
                       var
                        new_entries=
                         caml_call2(Core_kernel_List[64],current_entries,_G_),
                        _H_=
                         caml_call1(Core_kernel_List[18],new_entries)
                          ?caml_call2(Core_kernel_Map[33],t[2],key)
                          :caml_call3(Core_kernel_Map[24],t[2],key,new_entries);
                       t[2] = _H_;
                       return 0}],
                   _D_=caml_call2(Incr[57][2][2],_C_,_B_);
                  return [0,caml_call2(Core_kernel_Map[30],t[1],key),_D_]}]);
             var
              _y_=caml_obj_tag(entry),
              entry$0=
               250 === _y_
                ?entry[1]
                :246 === _y_?caml_call1(CamlinternalLazy[2],entry):entry,
              _z_=caml_call2(Incr[57][1][2],0,t[3]);
             caml_call2(Incr[57][2][6],entry$0[2],_z_);
             return caml_call1(Incr[57][2][3],entry$0[2])}
           return caml_call2(Incr[50][3],t[4],_x_)}
         function sexp_of_t(sexp_of_key,sexp_of_value,t)
          {function _j_(key,data)
            {var _k_=data[1];
             if(737457313 === _k_)
              var
               match=data[2],
               y=match[2],
               x=match[1],
               actual_value=[0,x],
               actual_value$0=actual_value,
               entries=y;
             else
              if(847852583 <= _k_)
               var x$0=data[2],actual_value$0=[0,x$0],entries=0;
              else
               var y$0=data[2],actual_value$0=0,entries=y$0;
             var _l_=0,_m_=0;
             function _n_(entry)
              {var
                saved_value=entry[1],
                node=entry[2],
                node$0=caml_call1(Incr[57][2][3],node),
                match=caml_call1(Incr[55],node$0),
                _p_=caml_call1(Incr[3],node$0),
                match$0=caml_call2(Core_kernel_Option[56],_p_,0),
                _q_=1 - caml_call1(Incr[4],node$0),
                match$1=caml_call2(Core_kernel_Option[56],_q_,0),
                _r_=1 - caml_call1(Incr[5],node$0),
                _s_=caml_call2(Core_kernel_Option[56],_r_,0),
                match$2=0;
               if(_s_)
                var
                 v=_s_[1],
                 _t_=
                  [0,[1,[0,_b_,[0,caml_call1(Core_kernel[598],v),0]]],match$2];
               else
                var _t_=match$2;
               if(match$1)
                var
                 v$0=match$1[1],
                 _u_=
                  [0,[1,[0,_c_,[0,caml_call1(Core_kernel[598],v$0),0]]],_t_];
               else
                var _u_=_t_;
               if(match$0)
                var
                 v$1=match$0[1],
                 _v_=
                  [0,[1,[0,_d_,[0,caml_call1(Core_kernel[598],v$1),0]]],_u_];
               else
                var _v_=_u_;
               if(match)
                var
                 v$2=match[1],
                 _w_=
                  [0,
                   [1,[0,_e_,[0,caml_call1(Core_kernel_Info[5],v$2),0]]],
                   _v_];
               else
                var _w_=_v_;
               return [1,
                       [0,
                        [1,
                         [0,
                          _f_,
                          [0,caml_call2(Core_kernel[542],sexp_of_value,saved_value),0]]],
                        _w_]]}
             var
              match$0=
               [0,
                [1,[0,_g_,[0,caml_call2(Core_kernel[513],_n_,entries),_m_]]],
                _l_];
             if(actual_value$0)
              var
               v=actual_value$0[1],
               _o_=[0,[1,[0,_h_,[0,caml_call1(sexp_of_value,v),0]]],match$0];
             else
              var _o_=match$0;
             return [0,
                     [1,[0,[1,[0,_i_,[0,caml_call1(sexp_of_key,key),0]]],_o_]]]}
           var info_per_key=caml_call3(Core_kernel_Map[60],t[1],t[2],_j_);
           return [1,caml_call1(Core_kernel_Map[57],info_per_key)]}
         return [0,
                 filter_mapi,
                 mapi,
                 filter_mapi$0,
                 mapi$0,
                 unordered_fold,
                 merge,
                 flatten,
                 join,
                 subrange,
                 [0,create,find,[0,sexp_of_t]]]}];
    runtime.caml_register_global(29,Incr_map,"Incr_map");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX21hcC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
