(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
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
     cst$7=caml_new_string(""),
     cst_Stringext_rcut_empty_separator=
      caml_new_string("Stringext.rcut: empty separator"),
     cst_Stringext_cut_empty_separator=
      caml_new_string("Stringext.cut: empty separator"),
     cst$6=caml_new_string(""),
     cst$5=caml_new_string(""),
     cst$4=caml_new_string(""),
     cst$3=caml_new_string(""),
     cst$2=caml_new_string(""),
     cst$1=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst=caml_new_string(""),
     cst_Stringext_Found_int=caml_new_string("Stringext.Found_int"),
     cst_Stringext_Found_replace=caml_new_string("Stringext.Found_replace"),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib=global_data.Stdlib,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Not_found=global_data.Not_found;
    function string_after(s,n)
     {return caml_call3(Stdlib_string[4],s,n,caml_ml_string_length(s) - n | 0)}
    function quote(s)
     {var
       len=caml_ml_string_length(s),
       buf=caml_call1(Stdlib_buffer[1],2 * len | 0),
       _U_=len - 1 | 0,
       _T_=0;
      if(! (_U_ < 0))
       {var i=_T_;
        for(;;)
         {var c=caml_string_get(s,i),_V_=c - 63 | 0;
          if(31 < _V_ >>> 0)
           {var _W_=_V_ + 27 | 0;
            if(10 < _W_ >>> 0)
             var switch$0=0;
            else
             switch(_W_)
              {case 0:
               case 6:
               case 7:
               case 10:var switch$0=1;break;
               default:var switch$0=0}}
          else
           var switch$0=26 < (_V_ - 1 | 0) >>> 0?1:0;
          if(switch$0)
           {caml_call2(Stdlib_buffer[10],buf,92);
            caml_call2(Stdlib_buffer[10],buf,c)}
          else
           caml_call2(Stdlib_buffer[10],buf,c);
          var _X_=i + 1 | 0;
          if(_U_ !== i){var i=_X_;continue}
          break}}
      return caml_call1(Stdlib_buffer[2],buf)}
    var of_char=caml_call1(Stdlib_string[1],1);
    function full_split(str,on)
     {if(caml_string_equal(str,cst$3))return 0;
      var sep=caml_call1(of_char,on);
      function loop(acc,offset)
       {try
         {var index=caml_call3(Stdlib_string[20],str,offset,on);
          if(index === offset)
           var _R_=loop([0,sep,acc],index - 1 | 0);
          else
           var
            token=
             caml_call3(Stdlib_string[4],str,index + 1 | 0,offset - index | 0),
            _R_=loop([0,sep,[0,token,acc]],index - 1 | 0);
          return _R_}
        catch(_S_)
         {_S_ = caml_wrap_exception(_S_);
          if(_S_ === Not_found)
           return 0 <= offset
                   ?[0,caml_call3(Stdlib_string[4],str,0,offset + 1 | 0),acc]
                   :acc;
          throw _S_}}
      return loop(0,caml_ml_string_length(str) - 1 | 0)}
    function split(max,s,on)
     {if(max)
       {var max$0=max[1];
        if(caml_string_equal(s,cst))return 0;
        if(1 === max$0)return [0,s,0];
        var
         loop=
          function(offset,tokens)
           {if(tokens === (max$0 - 1 | 0))
             return [0,
                     caml_call3
                      (Stdlib_string[4],
                       s,
                       offset,
                       caml_ml_string_length(s) - offset | 0),
                     0];
            try
             {var index=caml_call3(Stdlib_string[18],s,offset,on);
              if(index === offset)
               var _P_=[0,cst$0,loop(offset + 1 | 0,tokens + 1 | 0)];
              else
               var
                token=caml_call3(Stdlib_string[4],s,offset,index - offset | 0),
                _P_=[0,token,loop(index + 1 | 0,tokens + 1 | 0)];
              return _P_}
            catch(_Q_)
             {_Q_ = caml_wrap_exception(_Q_);
              if(_Q_ === Not_found)
               return [0,
                       caml_call3
                        (Stdlib_string[4],
                         s,
                         offset,
                         caml_ml_string_length(s) - offset | 0),
                       0];
              throw _Q_}};
        return loop(0,0)}
      if(caml_string_equal(s,cst$1))return 0;
      function loop$0(acc,offset)
       {try
         {var index=caml_call3(Stdlib_string[20],s,offset,on);
          if(index === offset)
           var _N_=loop$0([0,cst$2,acc],index - 1 | 0);
          else
           var
            token=
             caml_call3(Stdlib_string[4],s,index + 1 | 0,offset - index | 0),
            _N_=loop$0([0,token,acc],index - 1 | 0);
          return _N_}
        catch(_O_)
         {_O_ = caml_wrap_exception(_O_);
          if(_O_ === Not_found)
           return [0,caml_call3(Stdlib_string[4],s,0,offset + 1 | 0),acc];
          throw _O_}}
      return loop$0(0,caml_ml_string_length(s) - 1 | 0)}
    function rindex_from_on(s,i,on)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {var _M_=caml_string_get(s,i$0);
          if(caml_call2(Stdlib_string[22],on,_M_))return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function trim_left_sub(s,pos,len,chars)
     {var final$0=pos + len | 0,last_char=pos,i=pos;
      for(;;)
       {if(i !== final$0)
         {var _L_=caml_string_get(s,i);
          if(caml_call2(Stdlib_string[22],chars,_L_))
           {var
             i$0=i + 1 | 0,
             last_char$0=i + 1 | 0,
             last_char=last_char$0,
             i=i$0;
            continue}}
        var new_len=len - (last_char - pos | 0) | 0;
        return caml_call3(Stdlib_string[4],s,last_char,new_len)}}
    function split_trim_left(str,on,trim)
     {if(caml_string_equal(str,cst$4))return 0;
      function loop(acc,offset)
       {try
         {var index=rindex_from_on(str,offset,on);
          if(index === offset)
           var _J_=loop([0,cst$5,acc],index - 1 | 0);
          else
           var
            token=trim_left_sub(str,index + 1 | 0,offset - index | 0,trim),
            _J_=loop([0,token,acc],index - 1 | 0);
          return _J_}
        catch(_K_)
         {_K_ = caml_wrap_exception(_K_);
          if(_K_ === Not_found)
           return [0,trim_left_sub(str,0,offset + 1 | 0,trim),acc];
          throw _K_}}
      return loop(0,caml_ml_string_length(str) - 1 | 0)}
    var Found_int=[248,cst_Stringext_Found_int,caml_fresh_oo_id(0)];
    function first_char_ne(s,c)
     {var
       _H_=0 < caml_ml_string_length(s)?1:0,
       _I_=_H_?caml_string_get(s,0) !== c?1:0:_H_;
      return _I_}
    function trim_left(s)
     {if(first_char_ne(s,32))return s;
      var len=caml_ml_string_length(s);
      try
       {var _F_=len - 1 | 0,_E_=0;
        if(! (_F_ < 0))
         {var i=_E_;
          for(;;)
           {if(32 !== caml_string_get(s,i))throw [0,Found_int,i];
            var _G_=i + 1 | 0;
            if(_F_ !== i){var i=_G_;continue}
            break}}
        return cst$6}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Found_int)
         {var non_space=exn[2];
          return caml_call3(Stdlib_string[4],s,non_space,len - non_space | 0)}
        throw exn}}
    function find_from(opt,str,pattern)
     {if(opt)var sth=opt[1],start$0=sth;else var start$0=0;
      try
       {var
         _z_=
          caml_ml_string_length(str) - caml_ml_string_length(pattern) | 0;
        if(! (_z_ < start$0))
         {var sth$0=start$0;
          for(;;)
           {var opt$0=[0,sth$0],start=opt$0?sth$0:0;
            try
             {var _v_=caml_ml_string_length(pattern) - 1 | 0,_u_=0;
              if(! (_v_ < 0))
               {var i=_u_;
                for(;;)
                 {var _x_=caml_string_get(pattern,i);
                  if(caml_string_get(str,i + start | 0) !== _x_)
                   throw Stdlib[4];
                  var _y_=i + 1 | 0;
                  if(_v_ !== i){var i=_y_;continue}
                  break}}
              var _w_=1,_B_=_w_}
            catch(_D_){var _B_=0}
            if(_B_)throw [0,Found_int,sth$0];
            var _C_=sth$0 + 1 | 0;
            if(_z_ !== sth$0){var sth$0=_C_;continue}
            break}}
        var _A_=0;
        return _A_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Found_int){var i$0=exn[2];return [0,i$0]}
        return 0}}
    function find_min(l,f)
     {if(l)
       {var
         xs$0=l[2],
         x$1=l[1],
         fx$1=caml_call1(f,x$1),
         x=x$1,
         fx=fx$1,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],x$0=param[1],fx$0=caml_call1(f,x$0);
            if(runtime.caml_lessthan(fx$0,fx))
             {var x=x$0,fx=fx$0,param=xs;continue}
            var param=xs;
            continue}
          return [0,[0,x,fx]]}}
      return 0}
    function replace_all(str,pattern,with$0)
     {var
       plen=caml_ml_string_length(pattern),
       slen=caml_ml_string_length(str),
       buf=caml_call1(Stdlib_buffer[1],slen),
       i=0;
      for(;;)
       {var match=find_from([0,i],str,pattern);
        if(match)
         {var j=match[1];
          caml_call4(Stdlib_buffer[16],buf,str,i,j - i | 0);
          caml_call2(Stdlib_buffer[14],buf,with$0);
          var i$0=j + plen | 0,i=i$0;
          continue}
        caml_call4(Stdlib_buffer[16],buf,str,i,slen - i | 0);
        return caml_call1(Stdlib_buffer[2],buf)}}
    var Found_replace=[248,cst_Stringext_Found_replace,caml_fresh_oo_id(0)];
    function replace_all_assoc(str,tbl)
     {var
       slen=caml_ml_string_length(str),
       buf=caml_call1(Stdlib_buffer[1],slen);
      function loop(i)
       {var i$0=i;
        for(;;)
         {if(slen <= i$0)return caml_call1(Stdlib_buffer[2],buf);
          try
           {var
             found=[0,0],
             e=
              find_min
               (tbl,
                function(i,found)
                  {return function(param)
                    {var
                      with$0=param[2],
                      pattern=param[1],
                      match=find_from([0,i],str,pattern);
                     if(match)
                      {var j=match[1];
                       if(j === i)throw [0,Found_replace,j,pattern,with$0];
                       found[1] = 1;
                       return j}
                     return Stdlib[8]}}
                 (i$0,found));
            if(e)
             var
              _r_=e[1],
              j$1=_r_[2],
              match$0=_r_[1],
              with$2=match$0[2],
              pattern$1=match$0[1],
              _s_=found[1]?[0,[0,j$1,pattern$1,with$2]]:0,
              _t_=_s_;
            else
             var _t_=0;
            var r=_t_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] !== Found_replace)throw exn;
            var
             with$0=exn[4],
             pattern=exn[3],
             j=exn[2],
             r=[0,[0,j,pattern,with$0]]}
          if(r)
           {var match=r[1],with$1=match[3],pattern$0=match[2],j$0=match[1];
            caml_call4(Stdlib_buffer[16],buf,str,i$0,j$0 - i$0 | 0);
            caml_call2(Stdlib_buffer[14],buf,with$1);
            var i$1=j$0 + caml_ml_string_length(pattern$0) | 0,i$0=i$1;
            continue}
          caml_call4(Stdlib_buffer[16],buf,str,i$0,slen - i$0 | 0);
          return caml_call1(Stdlib_buffer[2],buf)}}
      return loop(0)}
    function of_list(xs$0)
     {var
       l=caml_call1(Stdlib_list[1],xs$0),
       s=caml_create_bytes(l),
       i=0,
       param=xs$0;
      for(;;)
       {if(param)
         {var xs=param[2],x=param[1];
          caml_bytes_set(s,i,x);
          var i$0=i + 1 | 0,i=i$0,param=xs;
          continue}
        return caml_call1(Stdlib_bytes[42],s)}}
    function to_list(s)
     {var i$1=caml_ml_string_length(s) - 1 | 0,acc=0,i=i$1;
      for(;;)
       {if(-1 === i)return acc;
        var i$0=i - 1 | 0,acc$0=[0,caml_string_get(s,i),acc],acc=acc$0,i=i$0;
        continue}}
    function of_array(a)
     {var len=a.length - 1,bytes=caml_create_bytes(len),_p_=len - 1 | 0,_o_=0;
      if(! (_p_ < 0))
       {var i=_o_;
        for(;;)
         {caml_bytes_set(bytes,i,runtime.caml_check_bound(a,i)[i + 1]);
          var _q_=i + 1 | 0;
          if(_p_ !== i){var i=_q_;continue}
          break}}
      return caml_call1(Stdlib_bytes[42],bytes)}
    function to_array(s)
     {function _m_(_n_){return caml_string_get(s,_n_)}
      return caml_call2(Stdlib_array[2],caml_ml_string_length(s),_m_)}
    function cut(s,on)
     {var sep_max=caml_ml_string_length(on) - 1 | 0;
      if(0 <= sep_max)
       {var s_max=caml_ml_string_length(s) - 1 | 0;
        if(0 <= s_max)
         {var k=[0,0],i=[0,0];
          try
           {a:
            for(;;)
             {if((i[1] + sep_max | 0) <= s_max)
               {if
                 (caml_string_unsafe_get(s,i[1])
                  !==
                  caml_string_unsafe_get(on,0))
                 {i[1]++;continue}
                k[1] = 1;
                for(;;)
                 {if(k[1] <= sep_max)
                   if
                    (caml_string_unsafe_get(s,i[1] + k[1] | 0)
                     ===
                     caml_string_unsafe_get(on,k[1]))
                    {k[1]++;continue}
                  if(k[1] <= sep_max){i[1]++;continue a}
                  throw Stdlib[4]}}
              var _k_=0;
              return _k_}}
          catch(_l_)
           {_l_ = caml_wrap_exception(_l_);
            if(_l_ === Stdlib[4])
             {var
               left_end=i[1] - 1 | 0,
               right_start=(i[1] + sep_max | 0) + 1 | 0,
               _j_=
                caml_call3
                 (Stdlib_string[4],
                  s,
                  right_start,
                  (s_max - right_start | 0) + 1 | 0);
              return [0,
                      [0,caml_call3(Stdlib_string[4],s,0,left_end + 1 | 0),_j_]]}
            throw _l_}}
        return 0}
      return caml_call1(Stdlib[2],cst_Stringext_cut_empty_separator)}
    function rcut(s,on)
     {var sep_max=caml_ml_string_length(on) - 1 | 0;
      if(0 <= sep_max)
       {var s_max=caml_ml_string_length(s) - 1 | 0;
        if(0 <= s_max)
         {var k=[0,0],i=[0,s_max];
          try
           {a:
            for(;;)
             {if(sep_max <= i[1])
               {if
                 (caml_string_unsafe_get(s,i[1])
                  !==
                  caml_string_unsafe_get(on,sep_max))
                 {i[1] += -1;continue}
                var sep_start=i[1] - sep_max | 0;
                k[1] = sep_max - 1 | 0;
                for(;;)
                 {if(0 <= k[1])
                   if
                    (caml_string_unsafe_get(s,sep_start + k[1] | 0)
                     ===
                     caml_string_unsafe_get(on,k[1]))
                    {k[1] += -1;continue}
                  if(0 <= k[1]){i[1] += -1;continue a}
                  throw Stdlib[4]}}
              var _h_=0;
              return _h_}}
          catch(_i_)
           {_i_ = caml_wrap_exception(_i_);
            if(_i_ === Stdlib[4])
             {var
               left_end=(i[1] - sep_max | 0) - 1 | 0,
               right_start=i[1] + 1 | 0,
               _g_=
                caml_call3
                 (Stdlib_string[4],
                  s,
                  right_start,
                  (s_max - right_start | 0) + 1 | 0);
              return [0,
                      [0,caml_call3(Stdlib_string[4],s,0,left_end + 1 | 0),_g_]]}
            throw _i_}}
        return 0}
      return caml_call1(Stdlib[2],cst_Stringext_rcut_empty_separator)}
    function chop_prefix(s,prefix)
     {var
       prefix_l=caml_ml_string_length(prefix),
       string_l=caml_ml_string_length(s);
      if(string_l < prefix_l)return 0;
      try
       {var _b_=prefix_l - 1 | 0,_a_=0;
        if(! (_b_ < 0))
         {var i=_a_;
          for(;;)
           {var _d_=caml_string_get(prefix,i);
            if(caml_string_get(s,i) !== _d_)throw Stdlib[4];
            var _e_=i + 1 | 0;
            if(_b_ !== i){var i=_e_;continue}
            break}}
        var
         _c_=
          [0,caml_call3(Stdlib_string[4],s,prefix_l,string_l - prefix_l | 0)];
        return _c_}
      catch(_f_){return 0}}
    function drop(s,n)
     {var l=caml_ml_string_length(s);
      return l <= n?cst$7:caml_call3(Stdlib_string[4],s,n,l - n | 0)}
    function take(s,n)
     {return caml_ml_string_length(s) <= n
              ?s
              :caml_call3(Stdlib_string[4],s,0,n)}
    var
     Stringext=
      [0,
       string_after,
       quote,
       split,
       full_split,
       trim_left,
       split_trim_left,
       of_char,
       of_list,
       to_list,
       to_array,
       of_array,
       find_from,
       replace_all,
       replace_all_assoc,
       cut,
       rcut,
       chop_prefix,
       drop,
       take,
       trim_left_sub];
    runtime.caml_register_global(20,Stringext,"Stringext");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdHJpbmdleHQuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
