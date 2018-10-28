(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
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
     flags=[0,0,0],
     cst=caml_new_string("\n"),
     flags$0=[0,1,[0,3,0]],
     Base_List=global_data.Base__List,
     Caml=global_data.Caml,
     Base=global_data.Base,
     Base_Char=global_data.Base__Char,
     Base_String=global_data.Base__String,
     Base_Bytes=global_data.Base__Bytes,
     Base_Buffer=global_data.Base__Buffer,
     Stdlib_buffer=global_data.Stdlib__buffer,
     End_of_file=global_data.End_of_file,
     Base_Exn=global_data.Base__Exn,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdio=[0,0,0,0,0];
    caml_register_global(6,Stdio,"Stdio__");
    var Stdio_Import=[0,0,0];
    caml_register_global(7,Stdio_Import,"Stdio__Import");
    var
     _a_=[0,caml_new_string("<stderr>")],
     _b_=[0,caml_new_string("<stdout>")],
     _c_=[0,caml_new_string("<Out_channel.t>")];
    function equal(t1,t2){return caml_call2(Base[302],t1,t2)}
    var
     seek=Stdlib[1][84][4],
     pos=Stdlib[1][84][5],
     length=Stdlib[1][84][6],
     stdin=Caml[27];
    function create(opt,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      var flags$0=binary?[0,6,flags]:flags;
      return caml_call3(Caml[70],flags$0,0,file)}
    var close=Caml[82];
    function with_file(binary,file,f)
     {var _p_=create(binary,file);return caml_call3(Base_Exn[11],f,_p_,close)}
    function may_eof(f)
     {try
       {var _n_=[0,caml_call1(f,0)];return _n_}
      catch(_o_)
       {_o_ = caml_wrap_exception(_o_);
        if(_o_ === End_of_file)return 0;
        throw _o_}}
    function input(t,buf,pos,len){return caml_call4(Caml[73],t,buf,pos,len)}
    function really_input(t,buf,pos,len)
     {return may_eof
              (function(param){return caml_call4(Caml[74],t,buf,pos,len)})}
    function really_input_exn(t,buf,pos,len)
     {return caml_call4(Caml[74],t,buf,pos,len)}
    function input_byte(t)
     {return may_eof(function(param){return caml_call1(Caml[76],t)})}
    function input_char(t)
     {return may_eof(function(param){return caml_call1(Caml[71],t)})}
    function input_binary_int(t)
     {return may_eof(function(param){return caml_call1(Caml[77],t)})}
    function unsafe_input_value(t)
     {return may_eof(function(param){return caml_call1(Caml[78],t)})}
    function input_buffer(t,buf,len)
     {return may_eof
              (function(param){return caml_call3(Stdlib_buffer[20],buf,t,len)})}
    var set_binary_mode=Caml[84];
    function input_all(t)
     {var
       buf=caml_call1(Base_Bytes[32],65536),
       buffer=caml_call1(Base_Buffer[2],65536);
      for(;;)
       {var len=input(t,buf,0,caml_call1(Base_Bytes[37],buf));
        if(caml_call2(Base[282],len,0))
         {caml_call4(Base_Buffer[18],buffer,buf,0,len);continue}
        return caml_call1(Base_Buffer[3],buffer)}}
    function trim(fix_win_eol,line)
     {if(fix_win_eol)
       {var len=runtime.caml_ml_string_length(line);
        if(caml_call2(Base[282],len,0))
         {var _l_=runtime.caml_string_get(line,caml_call2(Base[260],len,1));
          if(caml_call2(Base_Char[14],_l_,13))
           {var _m_=caml_call2(Base[260],len,1);
            return caml_call3(Base_String[5],line,0,_m_)}}
        return line}
      return line}
    function input_line(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var match=may_eof(function(param){return caml_call1(Caml[72],t)});
      if(match){var line=match[1];return [0,trim(fix_win_eol,line)]}
      return 0}
    function input_line_exn(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var line=caml_call1(Caml[72],t);
      return trim(fix_win_eol,line)}
    function fold_lines(fix_win_eol,t,ac,f)
     {var ac$0=ac;
      for(;;)
       {var match=input_line(fix_win_eol,t);
        if(match)
         {var line=match[1],ac$1=caml_call2(f,ac$0,line),ac$0=ac$1;continue}
        return ac$0}}
    function input_lines(fix_win_eol,t)
     {var
       _k_=
        fold_lines
         (fix_win_eol,t,0,function(lines,line){return [0,line,lines]});
      return caml_call1(Base_List[36],_k_)}
    function iter_lines(fix_win_eol,t,f)
     {return fold_lines
              (fix_win_eol,
               t,
               0,
               function(param,line){return caml_call1(f,line)})}
    function read_lines(fname)
     {return with_file(0,fname,function(eta){return input_lines(0,eta)})}
    function read_all(fname){return with_file(0,fname,input_all)}
    var
     Stdio_In_channel=
      [0,
       equal,
       stdin,
       create,
       with_file,
       close,
       input,
       really_input,
       really_input_exn,
       input_char,
       input_byte,
       input_binary_int,
       unsafe_input_value,
       input_buffer,
       input_all,
       input_line,
       input_line_exn,
       fold_lines,
       input_lines,
       iter_lines,
       seek,
       pos,
       length,
       set_binary_mode,
       read_lines,
       read_all];
    caml_register_global(19,Stdio_In_channel,"Stdio__In_channel");
    function equal$0(t1,t2){return caml_call2(Base[302],t1,t2)}
    var
     seek$0=Stdlib[1][84][1],
     pos$0=Stdlib[1][84][2],
     length$0=Stdlib[1][84][3],
     stdout=Caml[28],
     stderr=Caml[29];
    function sexp_of_t(t)
     {return caml_call2(Base[302],t,stderr)
              ?_a_
              :caml_call2(Base[302],t,stdout)?_b_:_c_}
    function create$0(opt,_h_,_g_,_f_,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      if(_h_)var sth$0=_h_[1],append=sth$0;else var append=0;
      if(_g_)var sth$1=_g_[1],fail_if_exists=sth$1;else var fail_if_exists=0;
      if(_f_)var sth$2=_f_[1],perm=sth$2;else var perm=438;
      var
       _i_=binary?6:7,
       flags=[0,_i_,flags$0],
       _j_=append?2:4,
       flags$1=[0,_j_,flags],
       flags$2=fail_if_exists?[0,5,flags$1]:flags$1;
      return caml_call3(Caml[51],flags$2,perm,file)}
    var
     set_binary_mode$0=Caml[67],
     flush=Caml[52],
     close$0=Caml[65],
     close_no_err=Caml[66];
    function output(t,buf,pos,len){return caml_call4(Caml[57],t,buf,pos,len)}
    function output_substring(t,buf,pos,len)
     {return caml_call4(Caml[58],t,buf,pos,len)}
    var
     output_string=Caml[55],
     output_bytes=Caml[56],
     output_char=Caml[54],
     output_byte=Caml[59],
     output_binary_int=Caml[60],
     output_buffer=Stdlib_buffer[21],
     output_value=Caml[61];
    function newline(t){return caml_call2(output_string,t,cst)}
    function output_lines(t,lines)
     {function _e_(line){caml_call2(output_string,t,line);return newline(t)}
      return caml_call2(Base_List[8],lines,_e_)}
    var
     printf=Stdlib_printf[2],
     eprintf=Stdlib_printf[3],
     fprintf=Stdlib_printf[1],
     kfprintf=Stdlib_printf[7],
     print_endline=Caml[35],
     prerr_endline=Caml[42];
    function with_file$0(binary,append,fail_if_exists,perm,file,f)
     {var _d_=create$0(binary,append,fail_if_exists,perm,file);
      return caml_call3(Base_Exn[11],f,_d_,close$0)}
    function write_lines(file,lines)
     {return with_file$0
              (0,0,0,0,file,function(t){return output_lines(t,lines)})}
    function write_all(file,data)
     {return with_file$0
              (0,
               0,
               0,
               0,
               file,
               function(t){return caml_call2(output_string,t,data)})}
    var
     Stdio_Out_channel=
      [0,
       sexp_of_t,
       equal$0,
       stdout,
       stderr,
       create$0,
       with_file$0,
       close$0,
       close_no_err,
       set_binary_mode$0,
       flush,
       output,
       output_string,
       output_substring,
       output_bytes,
       output_char,
       output_byte,
       output_binary_int,
       output_buffer,
       output_value,
       newline,
       output_lines,
       fprintf,
       printf,
       eprintf,
       kfprintf,
       print_endline,
       prerr_endline,
       seek$0,
       pos$0,
       length$0,
       write_lines,
       write_all];
    caml_register_global(21,Stdio_Out_channel,"Stdio__Out_channel");
    var
     Stdio$0=
      [0,0,0,stdin,stdout,stderr,printf,eprintf,print_endline,prerr_endline];
    caml_register_global(22,Stdio$0,"Stdio");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdGRpby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
