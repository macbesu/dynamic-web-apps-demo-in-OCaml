(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_blit_bytes=runtime.caml_blit_bytes,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_check_bound=runtime.caml_check_bound,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_get=runtime.caml_string_get,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_UTF_8$0=caml_new_string("UTF-8"),
     cst_US_ASCII$0=caml_new_string("US-ASCII"),
     cst_ISO_8859_1$1=caml_new_string("ISO-8859-1"),
     cst_UTF_16$0=caml_new_string("UTF-16"),
     cst_UTF_16LE$0=caml_new_string("UTF-16LE"),
     cst_UTF_16BE$0=caml_new_string("UTF-16BE"),
     cst_ISO646_US=caml_new_string("ISO646-US"),
     cst_CSISOLATIN1=caml_new_string("CSISOLATIN1"),
     cst_ANSI_X3_4_1968=caml_new_string("ANSI_X3.4-1968"),
     cst_ANSI_X3_4_1986=caml_new_string("ANSI_X3.4-1986"),
     cst_ASCII=caml_new_string("ASCII"),
     cst_CP367=caml_new_string("CP367"),
     cst_CP819=caml_new_string("CP819"),
     cst_CSASCII=caml_new_string("CSASCII"),
     cst_IBM367=caml_new_string("IBM367"),
     cst_IBM819=caml_new_string("IBM819"),
     cst_ISO_8859_1$0=caml_new_string("ISO-8859-1"),
     cst_ISO_IR_100=caml_new_string("ISO-IR-100"),
     cst_ISO_IR_6=caml_new_string("ISO-IR-6"),
     cst_US=caml_new_string("US"),
     cst_ISO_646_IRV_1991=caml_new_string("ISO_646.IRV:1991"),
     cst_ISO_8859_1=caml_new_string("ISO_8859-1"),
     cst_ISO_8859_1_1987=caml_new_string("ISO_8859-1:1987"),
     cst_L1=caml_new_string("L1"),
     cst_LATIN1=caml_new_string("LATIN1"),
     cst_US_ASCII=caml_new_string("US-ASCII"),
     cst_UTF_16=caml_new_string("UTF-16"),
     cst_UTF_16BE=caml_new_string("UTF-16BE"),
     cst_UTF_16LE=caml_new_string("UTF-16LE"),
     cst_UTF_8=caml_new_string("UTF-8"),
     cst_expected_Await_encode=caml_new_string("expected `Await encode"),
     Stdlib_uchar=global_data.Stdlib__uchar,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib=global_data.Stdlib,
     Assert_failure=global_data.Assert_failure,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_format=global_data.Stdlib__format,
     _a_=Stdlib_format[112],
     _B_=[0,caml_new_string("src/uutf.ml"),364,9],
     _u_=[0,[11,caml_new_string("`Await"),0],caml_new_string("`Await")],
     _v_=[0,[11,caml_new_string("`End"),0],caml_new_string("`End")],
     _w_=
      [0,
       [18,
        [1,[0,0,caml_new_string("")]],
        [11,caml_new_string("`Uchar U+"),[4,8,[0,2,4],0,[17,0,0]]]],
       caml_new_string("@[`Uchar U+%04X@]")],
     _x_=
      [0,
       [18,
        [1,[0,0,caml_new_string("")]],
        [11,caml_new_string("`Malformed ("),0]],
       caml_new_string("@[`Malformed (")],
     _y_=[0,[4,8,[0,2,2],0,0],caml_new_string("%02X")],
     _A_=[0,[12,32,[4,8,[0,2,2],0,0]],caml_new_string(" %02X")],
     _z_=[0,[12,41,[17,0,0]],caml_new_string(")@]")],
     _p_=[0,-211555818,3299808],
     _k_=[0,-211558048,3299808],
     _q_=[0,684370880,3299808],
     _o_=[0,684370880,427938126],
     _l_=[0,-211558048,427938126],
     _m_=[0,caml_new_string("src/uutf.ml"),154,55],
     _n_=[0,684370880,427938126],
     _r_=[0,caml_new_string("src/uutf.ml"),153,55],
     _s_=[0,caml_new_string("src/uutf.ml"),155,55],
     _t_=[0,684370880,3455931],
     _j_=[0,caml_new_string("src/uutf.ml"),121,9],
     _c_=[0,684370880],
     _d_=[0,-211555818],
     _e_=[0,-211558048],
     _f_=[0,143365725],
     _g_=[0,423112016],
     _h_=[0,338302576],
     _b_=
      [0,
       [11,
        caml_new_string("invalid bounds (index "),
        [4,0,0,0,[11,caml_new_string(", length "),[4,0,0,0,[12,41,0]]]]],
       caml_new_string("invalid bounds (index %d, length %d)")],
     _i_=
      [0,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       2,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       4,
       4,
       4,
       4,
       4,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0];
    function invalid_bounds(j,l)
     {var _aF_=caml_call3(Stdlib_printf[4],_b_,j,l);
      return caml_call1(Stdlib[2],_aF_)}
    function unsafe_set_byte(s,j,byte$0)
     {runtime.caml_bytes_unsafe_set(s,j,byte$0);return 0}
    var
     u_bom=caml_call1(Stdlib_uchar[9],65279),
     u_rep=caml_call1(Stdlib_uchar[9],65533);
    function encoding_of_string(s)
     {var
       match=caml_call1(Stdlib_string[25],s),
       _aD_=caml_string_compare(match,cst_ISO646_US);
      if(0 <= _aD_)
       if(0 < _aD_)
        {var switch$0=caml_string_compare(match,cst_US);
         if(0 <= switch$0)
          if(0 < switch$0)
           if(caml_string_notequal(match,cst_US_ASCII))
            {if(! caml_string_notequal(match,cst_UTF_16))return _f_;
             if(! caml_string_notequal(match,cst_UTF_16BE))return _e_;
             if(! caml_string_notequal(match,cst_UTF_16LE))return _d_;
             if(! caml_string_notequal(match,cst_UTF_8))return _c_;
             var switch$1=0}
           else
            var switch$1=1;
          else
           var switch$1=1;
         else
          var
           switch$1=
            caml_string_notequal(match,cst_ISO_646_IRV_1991)
             ?caml_string_notequal(match,cst_ISO_8859_1)
               ?caml_string_notequal(match,cst_ISO_8859_1_1987)
                 ?caml_string_notequal(match,cst_L1)
                   ?caml_string_notequal(match,cst_LATIN1)?0:2
                   :2
                 :2
               :2
             :1}
       else
        var switch$1=1;
      else
       var
        _aE_=caml_string_compare(match,cst_CSISOLATIN1),
        switch$1=
         0 <= _aE_
          ?0 < _aE_
            ?caml_string_notequal(match,cst_IBM367)
              ?caml_string_notequal(match,cst_IBM819)
                ?caml_string_notequal(match,cst_ISO_8859_1$0)
                  ?caml_string_notequal(match,cst_ISO_IR_100)
                    ?caml_string_notequal(match,cst_ISO_IR_6)?0:1
                    :2
                  :2
                :2
              :1
            :2
          :caml_string_notequal(match,cst_ANSI_X3_4_1968)
            ?caml_string_notequal(match,cst_ANSI_X3_4_1986)
              ?caml_string_notequal(match,cst_ASCII)
                ?caml_string_notequal(match,cst_CP367)
                  ?caml_string_notequal(match,cst_CP819)
                    ?caml_string_notequal(match,cst_CSASCII)?0:1
                    :2
                  :1
                :1
              :1
            :1;
      switch(switch$1){case 0:return 0;case 1:return _g_;default:return _h_}}
    function encoding_to_string(param)
     {return 143365725 <= param
              ?423112016 <= param
                ?684370880 <= param?cst_UTF_8$0:cst_US_ASCII$0
                :338302576 <= param?cst_ISO_8859_1$1:cst_UTF_16$0
              :-211555818 <= param?cst_UTF_16LE$0:cst_UTF_16BE$0}
    function malformed(s,j,l)
     {return [0,659980059,caml_call3(Stdlib_bytes[8],s,j,l)]}
    function malformed_pair(be,hi,s,j,l)
     {var bs1=caml_call3(Stdlib_bytes[7],s,j,l),bs0=caml_create_bytes(2);
      if(be)var j0=0,j1=1;else var j0=1,j1=0;
      unsafe_set_byte(bs0,j0,hi >>> 8 | 0);
      unsafe_set_byte(bs0,j1,hi & 255);
      var _aC_=caml_call2(Stdlib_bytes[14],bs0,bs1);
      return [0,659980059,caml_call1(Stdlib_bytes[42],_aC_)]}
    var utf_8_len=_i_.slice();
    function r_utf_8(s,j,l)
     {function uchar(c){return [0,852405675,caml_call1(Stdlib_uchar[9],c)]}
      var switcher=l - 1 | 0;
      if(3 < switcher >>> 0)throw [0,Assert_failure,_j_];
      switch(switcher)
       {case 0:return uchar(caml_bytes_unsafe_get(s,j));
        case 1:
         var
          b0=caml_bytes_unsafe_get(s,j),
          b1=caml_bytes_unsafe_get(s,j + 1 | 0);
         return 2 === (b1 >>> 6 | 0)
                 ?uchar((b0 & 31) << 6 | b1 & 63)
                 :malformed(s,j,l);
        case 2:
         var
          b0$0=caml_bytes_unsafe_get(s,j),
          b1$0=caml_bytes_unsafe_get(s,j + 1 | 0),
          b2=caml_bytes_unsafe_get(s,j + 2 | 0),
          c=(b0$0 & 15) << 12 | (b1$0 & 63) << 6 | b2 & 63;
         if(2 === (b2 >>> 6 | 0))
          {if(224 === b0$0)
            {if(160 <= b1$0)if(! (191 < b1$0))return uchar(c);
             return malformed(s,j,l)}
           if(237 === b0$0)
            {if(128 <= b1$0)if(! (159 < b1$0))return uchar(c);
             return malformed(s,j,l)}
           return 2 === (b1$0 >>> 6 | 0)?uchar(c):malformed(s,j,l)}
         return malformed(s,j,l);
        default:
         var
          b0$1=caml_bytes_unsafe_get(s,j),
          b1$1=caml_bytes_unsafe_get(s,j + 1 | 0),
          b2$0=caml_bytes_unsafe_get(s,j + 2 | 0),
          b3=caml_bytes_unsafe_get(s,j + 3 | 0),
          c$0=
           (b0$1 & 7)
           <<
           18
           |
           (b1$1 & 63)
           <<
           12
           |
           (b2$0 & 63)
           <<
           6
           |
           b3
           &
           63;
         if(2 === (b3 >>> 6 | 0))
          if(2 === (b2$0 >>> 6 | 0))
           {if(240 === b0$1)
             {if(144 <= b1$1)if(! (191 < b1$1))return uchar(c$0);
              return malformed(s,j,l)}
            if(244 === b0$1)
             {if(128 <= b1$1)if(! (143 < b1$1))return uchar(c$0);
              return malformed(s,j,l)}
            return 2 === (b1$1 >>> 6 | 0)?uchar(c$0):malformed(s,j,l)}
         return malformed(s,j,l)}}
    function r_utf_16(s,j0,j1)
     {var
       b0=caml_bytes_unsafe_get(s,j0),
       b1=caml_bytes_unsafe_get(s,j1),
       u=b0 << 8 | b1;
      if(55296 <= u)
       if(! (57343 < u))
        return 56319 < u
                ?malformed(s,caml_call2(Stdlib[5],j0,j1),2)
                :[0,16161,u];
      return [0,852405675,caml_call1(Stdlib_uchar[9],u)]}
    function r_utf_16_lo(hi,s,j0,j1)
     {var
       b0=caml_bytes_unsafe_get(s,j0),
       b1=caml_bytes_unsafe_get(s,j1),
       lo=b0 << 8 | b1;
      if(56320 <= lo)
       if(! (57343 < lo))
        return [0,
                852405675,
                caml_call1
                 (Stdlib_uchar[9],((hi & 1023) << 10 | lo & 1023) + 65536 | 0)];
      return malformed_pair(j0 < j1?1:0,hi,s,caml_call2(Stdlib[5],j0,j1),2)}
    function r_encoding(s,j,l)
     {function some(i){return i < l?[0,caml_bytes_unsafe_get(s,j + i | 0)]:0}
      var match=some(0),match$0=some(1),match$1=some(2);
      if(match)
       {var _aB_=match[1];
        if(240 <= _aB_)
         if(254 === _aB_)
          if(match$0)
           {if(255 === match$0[1])return _k_;var switch$0=0}
          else
           var switch$0=1;
         else
          if(255 === _aB_)
           if(match$0)
            {if(254 === match$0[1])return _p_;var switch$0=0}
           else
            var switch$0=1;
          else
           var switch$0=0;
        else
         if(0 === _aB_)
          if(match$0)
           {var p=match$0[1];
            if(0 < p)return [0,-211558048,[0,605782321,p]];
            var switch$0=0}
          else
           var switch$0=1;
         else
          if(239 <= _aB_)
           if(match$0)
            if(187 === match$0[1])
             if(match$1)
              {if(191 === match$1[1])return _q_;var switch$0=1}
             else
              var switch$0=1;
            else
             var switch$0=0;
           else
            var switch$0=1;
          else
           var switch$0=0;
        if(! switch$0)
         if(match$0)
          if(0 === match$0[1])
           if(0 < _aB_)return [0,-211555818,[0,605782321,_aB_]];
        if(0 === caml_check_bound(utf_8_len,_aB_)[_aB_ + 1])
         {if(match$0)return _l_;
          if(match$1)throw [0,Assert_failure,_m_];
          return _n_}
        return _o_}
      if(match$0)throw [0,Assert_failure,_r_];
      if(match$1)throw [0,Assert_failure,_s_];
      return _t_}
    function pp_decode(ppf,param)
     {if(typeof param === "number")
       return 1006505782 <= param
               ?caml_call2(_a_,ppf,_u_)
               :caml_call2(_a_,ppf,_v_);
      if(852405675 <= param[1])
       {var u=param[2];
        return caml_call3(_a_,ppf,_w_,caml_call1(Stdlib_uchar[10],u))}
      var bs=param[2],l=caml_ml_string_length(bs);
      caml_call2(_a_,ppf,_x_);
      if(0 < l)caml_call3(_a_,ppf,_y_,caml_string_get(bs,0));
      var _az_=l - 1 | 0,_ay_=1;
      if(! (_az_ < 1))
       {var i=_ay_;
        for(;;)
         {caml_call3(_a_,ppf,_A_,caml_string_get(bs,i));
          var _aA_=i + 1 | 0;
          if(_az_ !== i){var i=_aA_;continue}
          break}}
      return caml_call2(_a_,ppf,_z_)}
    function i_rem(d){return (d[7] - d[6] | 0) + 1 | 0}
    function eoi(d){d[5] = Stdlib_bytes[3];d[6] = 0;d[7] = Stdlib[9];return 0}
    function src(d,s,j,l)
     {if(0 <= j)
       if(0 <= l)
        if(! (caml_ml_bytes_length(s) < (j + l | 0)))
         return 0 === l
                 ?eoi(d)
                 :(d[5] = s,d[6] = j,d[7] = (j + l | 0) - 1 | 0,0);
      return invalid_bounds(j,l)}
    function refill(k,d)
     {var _ax_=d[1];
      if(typeof _ax_ === "number"){d[18] = k;return 1006505782}
      if(438511779 <= _ax_[1])
       {var
         ic=_ax_[2],
         rc=caml_call4(Stdlib[73],ic,d[5],0,caml_ml_bytes_length(d[5]));
        src(d,d[5],0,rc);
        return caml_call1(k,d)}
      eoi(d);
      return caml_call1(k,d)}
    function t_need(d,need){d[9] = 0;d[10] = need;return 0}
    function t_fill(k,d)
     {function blit(d,l)
       {caml_blit_bytes(d[5],d[6],d[8],d[9],l);
        d[6] = d[6] + l | 0;
        d[9] = d[9] + l | 0;
        return 0}
      var rem=i_rem(d);
      if(0 <= rem)
       {var need=d[10] - d[9] | 0;
        return rem < need
                ?(blit(d,rem),refill(function(_aw_){return t_fill(k,_aw_)},d))
                :(blit(d,need),caml_call1(k,d))}
      return caml_call1(k,d)}
    function ret(k,v,byte_count,d)
     {d[18] = k;d[15] = d[15] + byte_count | 0;return caml_call2(d[17],d,v)}
    function decode_us_ascii(d)
     {var rem=i_rem(d);
      if(0 < rem)
       {var j=d[6];
        d[6] = d[6] + 1 | 0;
        var
         _au_=d[5],
         b0=caml_bytes_unsafe_get(_au_,j),
         _at_=1,
         _av_=
          127 < b0
           ?malformed(_au_,j,1)
           :[0,852405675,caml_call1(Stdlib_uchar[9],b0)];
        return ret(decode_us_ascii,_av_,_at_,d)}
      return 0 <= rem?refill(decode_us_ascii,d):3455931}
    function decode_iso_8859_1(d)
     {var rem=i_rem(d);
      if(0 < rem)
       {var j=d[6];
        d[6] = d[6] + 1 | 0;
        return ret
                (decode_iso_8859_1,
                 [0,
                  852405675,
                  caml_call1(Stdlib_uchar[9],caml_bytes_unsafe_get(d[5],j))],
                 1,
                 d)}
      return 0 <= rem?refill(decode_iso_8859_1,d):3455931}
    function t_decode_utf_8(d)
     {if(d[9] < d[10])
       {var _ar_=d[9];return ret(decode_utf_8,malformed(d[8],0,d[9]),_ar_,d)}
      var _as_=d[9];
      return ret(decode_utf_8,r_utf_8(d[8],0,d[9]),_as_,d)}
    function decode_utf_8(d)
     {var rem=i_rem(d);
      if(0 < rem)
       {var need=utf_8_len[caml_bytes_unsafe_get(d[5],d[6]) + 1];
        if(rem < need){t_need(d,need);return t_fill(t_decode_utf_8,d)}
        var j=d[6];
        return 0 === need
                ?(d[6]
                  =
                  d[6]
                  +
                  1
                  |
                  0,
                  ret(decode_utf_8,malformed(d[5],j,1),1,d))
                :(d[6]
                  =
                  d[6]
                  +
                  need
                  |
                  0,
                  ret(decode_utf_8,r_utf_8(d[5],j,need),need,d))}
      return 0 <= rem?refill(decode_utf_8,d):3455931}
    function t_decode_utf_16be_lo(hi,d)
     {var bcount=d[9] + 2 | 0;
      return d[9] < d[10]
              ?ret(decode_utf_16be,malformed_pair(1,hi,d[8],0,d[9]),bcount,d)
              :ret(decode_utf_16be,r_utf_16_lo(hi,d[8],0,1),bcount,d)}
    function decode_utf_16be_lo(v,d)
     {if(659980059 <= v[1])return ret(decode_utf_16be,v,2,d);
      var hi=v[2],rem=i_rem(d);
      if(2 <= rem)
       {var j=d[6];
        d[6] = d[6] + 2 | 0;
        return ret(decode_utf_16be,r_utf_16_lo(hi,d[5],j,j + 1 | 0),4,d)}
      t_need(d,2);
      return t_fill(function(_aq_){return t_decode_utf_16be_lo(hi,_aq_)},d)}
    function t_decode_utf_16be(d)
     {if(d[9] < d[10])
       {var _ap_=d[9];
        return ret(decode_utf_16be,malformed(d[8],0,d[9]),_ap_,d)}
      return decode_utf_16be_lo(r_utf_16(d[8],0,1),d)}
    function decode_utf_16be(d)
     {var rem=i_rem(d);
      if(0 < rem)
       {if(2 <= rem)
         {var j=d[6];
          d[6] = d[6] + 2 | 0;
          return decode_utf_16be_lo(r_utf_16(d[5],j,j + 1 | 0),d)}
        t_need(d,2);
        return t_fill(t_decode_utf_16be,d)}
      return 0 <= rem?refill(decode_utf_16be,d):3455931}
    function t_decode_utf_16_lo(hi,d)
     {var bcount=d[9] + 2 | 0;
      return d[9] < d[10]
              ?ret(decode_utf_16,malformed_pair(0,hi,d[8],0,d[9]),bcount,d)
              :ret(decode_utf_16,r_utf_16_lo(hi,d[8],1,0),bcount,d)}
    function decode_utf_16le_lo(v,d)
     {if(659980059 <= v[1])return ret(decode_utf_16,v,2,d);
      var hi=v[2],rem=i_rem(d);
      if(2 <= rem)
       {var j=d[6];
        d[6] = d[6] + 2 | 0;
        return ret(decode_utf_16,r_utf_16_lo(hi,d[5],j + 1 | 0,j),4,d)}
      t_need(d,2);
      return t_fill(function(_ao_){return t_decode_utf_16_lo(hi,_ao_)},d)}
    function t_decode_utf_16(d)
     {if(d[9] < d[10])
       {var _an_=d[9];return ret(decode_utf_16,malformed(d[8],0,d[9]),_an_,d)}
      return decode_utf_16le_lo(r_utf_16(d[8],1,0),d)}
    function decode_utf_16(d)
     {var rem=i_rem(d);
      if(0 < rem)
       {if(2 <= rem)
         {var j=d[6];
          d[6] = d[6] + 2 | 0;
          return decode_utf_16le_lo(r_utf_16(d[5],j + 1 | 0,j),d)}
        t_need(d,2);
        return t_fill(t_decode_utf_16,d)}
      return 0 <= rem?refill(decode_utf_16,d):3455931}
    function guessed_utf_16(d,be,v)
     {if(be)
       var
        decode_utf_16$0=decode_utf_16be,
        t_decode_utf_16$0=t_decode_utf_16be,
        t_decode_utf_16_lo$0=t_decode_utf_16be_lo,
        j0=0,
        j1=1;
      else
       var
        decode_utf_16$0=decode_utf_16,
        t_decode_utf_16$0=t_decode_utf_16,
        t_decode_utf_16_lo$0=t_decode_utf_16_lo,
        j0=1,
        j1=0;
      function b3(k,d)
       {return 3 <= d[9]
                ?(d[10]
                  =
                  2,
                  d[9]
                  =
                  1,
                  unsafe_set_byte(d[8],0,caml_bytes_unsafe_get(d[8],2)),
                  t_fill(k,d))
                :decode_utf_16$0(d)}
      if(typeof v === "number")
       {if(427938126 <= v)
         {var v$0=r_utf_16(d[8],j0,j1);
          if(659980059 <= v$0[1])
           {var _ad_=2;
            return ret
                    (function(_am_){return b3(t_decode_utf_16$0,_am_)},
                     v$0,
                     _ad_,
                     d)}
          var hi=v$0[2];
          if(3 <= d[9])
           return b3(function(_al_){return t_decode_utf_16_lo$0(hi,_al_)},d);
          var _ae_=d[9];
          return ret
                  (decode_utf_16$0,
                   malformed_pair(be,hi,Stdlib_bytes[3],0,0),
                   _ae_,
                   d)}
        var _af_=2,_ag_=[0,852405675,u_bom];
        return ret
                (function(_ak_){return b3(t_decode_utf_16$0,_ak_)},
                 _ag_,
                 _af_,
                 d)}
      var u=v[2],_ah_=2,_ai_=[0,852405675,caml_call1(Stdlib_uchar[9],u)];
      return ret
              (function(_aj_){return b3(t_decode_utf_16$0,_aj_)},_ai_,_ah_,d)}
    function k(d)
     {function setup(d)
       {var match=r_encoding(d[8],0,d[9]),_ac_=match[1];
        if(-211555818 === _ac_)
         {var r=match[2];
          d[2] = -211555818;
          d[18] = decode_utf_16;
          return guessed_utf_16(d,0,r)}
        if(684370880 <= _ac_)
         {var r$0=match[2];
          d[2] = 684370880;
          d[18] = decode_utf_8;
          if(3455931 === r$0)return 3455931;
          if(427938126 <= r$0)
           {var
             b3=
              function(d)
               {var
                 b3=caml_bytes_unsafe_get(d[8],2),
                 n=caml_check_bound(utf_8_len,b3)[b3 + 1];
                return 0 === n
                        ?ret(decode_utf_8,malformed(d[8],2,1),1,d)
                        :(d[10]
                          =
                          n,
                          d[9]
                          =
                          1,
                          unsafe_set_byte(d[8],0,b3),
                          t_fill(t_decode_utf_8,d))},
             b2=
              function(d)
               {var
                 b2=caml_bytes_unsafe_get(d[8],1),
                 b3$0=2 < d[9]?b3:decode_utf_8,
                 n=caml_check_bound(utf_8_len,b2)[b2 + 1];
                if(0 === n)return ret(b3$0,malformed(d[8],1,1),1,d);
                if(1 === n)return ret(b3$0,r_utf_8(d[8],1,1),1,d);
                d[10] = n;
                unsafe_set_byte(d[8],0,b2);
                if(3 <= d[9])
                 {d[9] = 2;
                  unsafe_set_byte(d[8],1,caml_bytes_unsafe_get(d[8],2))}
                else
                 d[9] = 1;
                return t_fill(t_decode_utf_8,d)},
             b1=caml_bytes_unsafe_get(d[8],0),
             b2$0=1 < d[9]?b2:decode_utf_8,
             n=caml_check_bound(utf_8_len,b1)[b1 + 1];
            if(4 < n >>> 0)throw [0,Assert_failure,_B_];
            switch(n)
             {case 0:return ret(b2$0,malformed(d[8],0,1),1,d);
              case 1:return ret(b2$0,r_utf_8(d[8],0,1),1,d);
              case 2:
               return 2 <= d[9]
                       ?3 <= d[9]
                         ?ret(b3,r_utf_8(d[8],0,2),2,d)
                         :ret(decode_utf_8,r_utf_8(d[8],0,2),2,d)
                       :ret(decode_utf_8,malformed(d[8],0,1),1,d);
              case 3:
               if(3 <= d[9])return ret(decode_utf_8,r_utf_8(d[8],0,3),3,d);
               var _aa_=d[9];
               return ret(decode_utf_8,malformed(d[8],0,d[9]),_aa_,d);
              default:
               if(3 <= d[9]){d[10] = 4;return t_fill(t_decode_utf_8,d)}
               var _ab_=d[9];
               return ret(decode_utf_8,malformed(d[8],0,d[9]),_ab_,d)}}
          return ret(decode_utf_8,[0,852405675,u_bom],3,d)}
        var r$1=match[2];
        d[2] = -211558048;
        d[18] = decode_utf_16be;
        return guessed_utf_16(d,1,r$1)}
      t_need(d,3);
      return t_fill(setup,d)}
    function nline(d){d[14] = 0;d[13] = d[13] + 1 | 0;return 0}
    function ncol(d){d[14] = d[14] + 1 | 0;return 0}
    function ncount(d){d[16] = d[16] + 1 | 0;return 0}
    function cr(d,b){d[12] = b;return 0}
    function pp(d,v)
     {if(852405675 <= v[1])
       {var u=v[2],match=caml_call1(Stdlib_uchar[10],u),_$_=match - 133 | 0;
        if(8100 < _$_ >>> 0)
         {var switcher=_$_ + 123 | 0;
          if(3 < switcher >>> 0)
           var switch$0=0;
          else
           switch(switcher)
            {case 0:
              var last_cr=d[12];
              cr(d,0);
              ncount(d);
              return last_cr?v:(nline(d),v);
             case 1:var switch$0=0;break;
             case 2:var switch$0=1;break;
             default:cr(d,1);ncount(d);nline(d);return v}}
        else
         var switch$0=8097 < (_$_ - 1 | 0) >>> 0?1:0;
        return switch$0
                ?(cr(d,0),ncount(d),nline(d),v)
                :(cr(d,0),ncount(d),ncol(d),v)}
      cr(d,0);
      ncount(d);
      ncol(d);
      return v}
    function pp_nln_readline(d,v)
     {if(852405675 <= v[1])
       {var u=v[2],match=caml_call1(Stdlib_uchar[10],u),___=match - 133 | 0;
        if(8100 < ___ >>> 0)
         {var switcher=___ + 123 | 0;
          if(3 < switcher >>> 0)
           var switch$0=0;
          else
           switch(switcher)
            {case 0:
              var last_cr=d[12];
              cr(d,0);
              return last_cr
                      ?caml_call1(d[18],d)
                      :(ncount(d),nline(d),[0,852405675,d[4]]);
             case 1:var switch$0=0;break;
             case 2:var switch$0=1;break;
             default:cr(d,1);ncount(d);nline(d);return [0,852405675,d[4]]}}
        else
         var switch$0=8097 < (___ - 1 | 0) >>> 0?1:0;
        return switch$0
                ?(cr(d,0),ncount(d),nline(d),[0,852405675,d[4]])
                :(cr(d,0),ncount(d),ncol(d),v)}
      cr(d,0);
      ncount(d);
      ncol(d);
      return v}
    function pp_nln_nlf(d,v)
     {if(852405675 <= v[1])
       {var u=v[2],match=caml_call1(Stdlib_uchar[10],u);
        if(14 <= match)
         if(8232 <= match)
          var switch$0=8234 <= match?0:1;
         else
          {if(133 === match)
            {cr(d,0);ncount(d);nline(d);return [0,852405675,d[4]]}
           var switch$0=0}
        else
         if(10 <= match)
          {var switcher=match - 10 | 0;
           switch(switcher)
            {case 0:
              var last_cr=d[12];
              cr(d,0);
              return last_cr
                      ?caml_call1(d[18],d)
                      :(ncount(d),nline(d),[0,852405675,d[4]]);
             case 1:var switch$0=0;break;
             case 2:var switch$0=1;break;
             default:cr(d,1);ncount(d);nline(d);return [0,852405675,d[4]]}}
         else
          var switch$0=0;
        return switch$0
                ?(cr(d,0),ncount(d),nline(d),v)
                :(cr(d,0),ncount(d),ncol(d),v)}
      cr(d,0);
      ncount(d);
      ncol(d);
      return v}
    function pp_nln_ascii(d,v)
     {if(852405675 <= v[1])
       {var u=v[2],match=caml_call1(Stdlib_uchar[10],u),_Z_=match - 133 | 0;
        if(8100 < _Z_ >>> 0)
         {var switcher=_Z_ + 123 | 0;
          if(3 < switcher >>> 0)
           var switch$0=0;
          else
           switch(switcher)
            {case 0:
              var last_cr=d[12];
              cr(d,0);
              return last_cr
                      ?caml_call1(d[18],d)
                      :(ncount(d),nline(d),[0,852405675,d[4]]);
             case 1:var switch$0=0;break;
             case 2:var switch$0=1;break;
             default:cr(d,1);ncount(d);nline(d);return [0,852405675,d[4]]}}
        else
         var switch$0=8097 < (_Z_ - 1 | 0) >>> 0?1:0;
        return switch$0
                ?(cr(d,0),ncount(d),nline(d),v)
                :(cr(d,0),ncount(d),ncol(d),v)}
      cr(d,0);
      ncount(d);
      ncol(d);
      return v}
    function decode_fun(param)
     {return 143365725 <= param
              ?423112016 <= param
                ?684370880 <= param?decode_utf_8:decode_us_ascii
                :338302576 <= param?decode_iso_8859_1:decode_utf_16be
              :-211555818 <= param?decode_utf_16:decode_utf_16be}
    function decoder(nln,encoding,src)
     {if(nln)
       {var _X_=nln[1],_Y_=_X_[1];
        if(3895880 === _Y_)
         var nl=_X_[2],pp$0=pp_nln_nlf,nl$0=nl;
        else
         if(605782321 <= _Y_)
          var nl$1=_X_[2],pp$0=pp_nln_ascii,nl$0=nl$1;
         else
          var nl$2=_X_[2],pp$0=pp_nln_readline,nl$0=nl$2}
      else
       var nl$3=caml_call1(Stdlib_uchar[9],10),pp$0=pp,nl$0=nl$3;
      if(encoding)
       var e=encoding[1],encoding$0=e,k$0=decode_fun(e);
      else
       var encoding$0=684370880,k$0=k;
      if(typeof src === "number")
       var i=Stdlib_bytes[3],i_pos=1,i_max=0;
      else
       if(438511779 <= src[1])
        var i=caml_create_bytes(65536),i_pos=1,i_max=0;
       else
        var
         s=src[2],
         i_max$0=caml_ml_string_length(s) - 1 | 0,
         i$0=caml_call1(Stdlib_bytes[43],s),
         i=i$0,
         i_pos=0,
         i_max=i_max$0;
      var utf16=143365725 === encoding$0?1:0;
      return [0,
              src,
              encoding$0,
              nln,
              nl$0,
              i,
              i_pos,
              i_max,
              caml_create_bytes(4),
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              function(d,v)
               {if(852405675 <= v[1])
                 {var u=v[2],match=caml_call1(Stdlib_uchar[10],u);
                  if(65279 === match)
                   {if(utf16){d[2] = -211558048;d[18] = decode_utf_16be}
                    d[11] = 1;
                    d[17] = pp$0;
                    return caml_call1(d[18],d)}
                  if(65534 === match)
                   if(utf16)
                    {d[2] = -211555818;
                     d[18] = decode_utf_16;
                     d[11] = 1;
                     d[17] = pp$0;
                     return caml_call1(d[18],d)}
                  d[11] = 0;
                  d[17] = pp$0;
                  return caml_call2(d[17],d,v)}
                d[11] = 0;
                d[17] = pp$0;
                return caml_call2(d[17],d,v)},
              k$0]}
    function decode(d){return caml_call1(d[18],d)}
    function decoder_line(d){return d[13]}
    function decoder_col(d){return d[14]}
    function decoder_byte_count(d){return d[15]}
    function decoder_count(d){return d[16]}
    function decoder_removed_bom(d){return d[11]}
    function decoder_src(d){return d[1]}
    function decoder_nln(d){return d[3]}
    function decoder_encoding(d){return d[2]}
    function set_decoder_encoding(d,e)
     {d[2] = e;d[18] = decode_fun(e);return 0}
    function o_rem(e){return (e[5] - e[4] | 0) + 1 | 0}
    function dst(e,s,j,l)
     {var _U_=j < 0?1:0;
      if(_U_)
       var _V_=_U_;
      else
       var
        _W_=l < 0?1:0,
        _V_=_W_ || (caml_ml_bytes_length(s) < (j + l | 0)?1:0);
      if(_V_)invalid_bounds(j,l);
      e[3] = s;
      e[4] = j;
      e[5] = (j + l | 0) - 1 | 0;
      return 0}
    function flush(k,e)
     {var _T_=e[1];
      if(typeof _T_ === "number")
       {e[9]
        =
        function(e,param)
         {if(typeof param === "number")
           if(1006505782 <= param)return caml_call1(k,e);
          return caml_call1(Stdlib[2],cst_expected_Await_encode)};
        return 939392865}
      if(438511779 <= _T_[1])
       {var oc=_T_[2];
        caml_call4(Stdlib[57],oc,e[3],0,e[4]);
        e[4] = 0;
        return caml_call1(k,e)}
      var b=_T_[2],o=caml_call1(Stdlib_bytes[42],e[3]);
      caml_call4(Stdlib_buffer[16],b,o,0,e[4]);
      e[4] = 0;
      return caml_call1(k,e)}
    function t_range(e,max){e[7] = 0;e[8] = max;return 0}
    function t_flush(k,e)
     {function blit(e,l)
       {caml_blit_bytes(e[6],e[7],e[3],e[4],l);
        e[4] = e[4] + l | 0;
        e[7] = e[7] + l | 0;
        return 0}
      var rem=o_rem(e),len=(e[8] - e[7] | 0) + 1 | 0;
      return rem < len
              ?(blit(e,rem),flush(function(_S_){return t_flush(k,_S_)},e))
              :(blit(e,len),caml_call1(k,e))}
    function encode_utf_8(e,v)
     {function k(e){e[9] = encode_utf_8;return 17724}
      if(typeof v === "number")return 1006505782 <= v?k(e):flush(k,e);
      var u=v[2],u$0=caml_call1(Stdlib_uchar[10],u),rem=o_rem(e);
      if(127 < u$0)
       {if(2047 < u$0)
         {if(65535 < u$0)
           {if(4 <= rem)
             {var j=e[4];e[4] = e[4] + 4 | 0;var s=e[3],j$0=j,k$0=k}
            else
             {t_range(e,3);
              var
               _M_=function(_R_){return t_flush(k,_R_)},
               s=e[6],
               j$0=0,
               k$0=_M_}
            unsafe_set_byte(s,j$0,240 | u$0 >>> 18 | 0);
            unsafe_set_byte(s,j$0 + 1 | 0,128 | (u$0 >>> 12 | 0) & 63);
            unsafe_set_byte(s,j$0 + 2 | 0,128 | (u$0 >>> 6 | 0) & 63);
            unsafe_set_byte(s,j$0 + 3 | 0,128 | u$0 & 63);
            return k$0(e)}
          if(3 <= rem)
           {var j$1=e[4];e[4] = e[4] + 3 | 0;var s$0=e[3],j$2=j$1,k$1=k}
          else
           {t_range(e,2);
            var
             _N_=function(_Q_){return t_flush(k,_Q_)},
             s$0=e[6],
             j$2=0,
             k$1=_N_}
          unsafe_set_byte(s$0,j$2,224 | u$0 >>> 12 | 0);
          unsafe_set_byte(s$0,j$2 + 1 | 0,128 | (u$0 >>> 6 | 0) & 63);
          unsafe_set_byte(s$0,j$2 + 2 | 0,128 | u$0 & 63);
          return k$1(e)}
        if(2 <= rem)
         {var j$3=e[4];e[4] = e[4] + 2 | 0;var s$1=e[3],j$4=j$3,k$2=k}
        else
         {t_range(e,1);
          var _O_=function(_P_){return t_flush(k,_P_)},s$1=e[6],j$4=0,k$2=_O_}
        unsafe_set_byte(s$1,j$4,192 | u$0 >>> 6 | 0);
        unsafe_set_byte(s$1,j$4 + 1 | 0,128 | u$0 & 63);
        return k$2(e)}
      return 1 <= rem
              ?(unsafe_set_byte(e[3],e[4],u$0),e[4] = e[4] + 1 | 0,k(e))
              :flush(function(e){return encode_utf_8(e,v)},e)}
    function encode_utf_16be(e,v)
     {function k(e){e[9] = encode_utf_16be;return 17724}
      if(typeof v === "number")return 1006505782 <= v?k(e):flush(k,e);
      var u=v[2],u$0=caml_call1(Stdlib_uchar[10],u),rem=o_rem(e);
      if(65536 <= u$0)
       {if(4 <= rem)
         {var j=e[4];e[4] = e[4] + 4 | 0;var s=e[3],j$0=j,k$0=k}
        else
         {t_range(e,3);
          var _I_=function(_L_){return t_flush(k,_L_)},s=e[6],j$0=0,k$0=_I_}
        var
         u$1=u$0 - 65536 | 0,
         hi=55296 | u$1 >>> 10 | 0,
         lo=56320 | u$1 & 1023;
        unsafe_set_byte(s,j$0,hi >>> 8 | 0);
        unsafe_set_byte(s,j$0 + 1 | 0,hi & 255);
        unsafe_set_byte(s,j$0 + 2 | 0,lo >>> 8 | 0);
        unsafe_set_byte(s,j$0 + 3 | 0,lo & 255);
        return k$0(e)}
      if(2 <= rem)
       {var j$1=e[4];e[4] = e[4] + 2 | 0;var s$0=e[3],j$2=j$1,k$1=k}
      else
       {t_range(e,1);
        var _J_=function(_K_){return t_flush(k,_K_)},s$0=e[6],j$2=0,k$1=_J_}
      unsafe_set_byte(s$0,j$2,u$0 >>> 8 | 0);
      unsafe_set_byte(s$0,j$2 + 1 | 0,u$0 & 255);
      return k$1(e)}
    function encode_utf_16le(e,v)
     {function k(e){e[9] = encode_utf_16le;return 17724}
      if(typeof v === "number")return 1006505782 <= v?k(e):flush(k,e);
      var u=v[2],u$0=caml_call1(Stdlib_uchar[10],u),rem=o_rem(e);
      if(65536 <= u$0)
       {if(4 <= rem)
         {var j=e[4];e[4] = e[4] + 4 | 0;var s=e[3],j$0=j,k$0=k}
        else
         {t_range(e,3);
          var _E_=function(_H_){return t_flush(k,_H_)},s=e[6],j$0=0,k$0=_E_}
        var
         u$1=u$0 - 65536 | 0,
         hi=55296 | u$1 >>> 10 | 0,
         lo=56320 | u$1 & 1023;
        unsafe_set_byte(s,j$0,hi & 255);
        unsafe_set_byte(s,j$0 + 1 | 0,hi >>> 8 | 0);
        unsafe_set_byte(s,j$0 + 2 | 0,lo & 255);
        unsafe_set_byte(s,j$0 + 3 | 0,lo >>> 8 | 0);
        return k$0(e)}
      if(2 <= rem)
       {var j$1=e[4];e[4] = e[4] + 2 | 0;var s$0=e[3],j$2=j$1,k$1=k}
      else
       {t_range(e,1);
        var _F_=function(_G_){return t_flush(k,_G_)},s$0=e[6],j$2=0,k$1=_F_}
      unsafe_set_byte(s$0,j$2,u$0 & 255);
      unsafe_set_byte(s$0,j$2 + 1 | 0,u$0 >>> 8 | 0);
      return k$1(e)}
    function encoder(encoding,dst)
     {if(typeof dst === "number")
       var o=Stdlib_bytes[3],o_pos=1,o_max=0;
      else
       var o$0=caml_create_bytes(65536),o=o$0,o_pos=0,o_max=65535;
      var
       _D_=
        143365725 <= encoding
         ?684370880 <= encoding?encode_utf_8:encode_utf_16be
         :-211555818 <= encoding?encode_utf_16le:encode_utf_16be;
      return [0,dst,encoding,o,o_pos,o_max,caml_create_bytes(4),1,0,_D_]}
    function encode(e,v){return caml_call2(e[9],e,v)}
    function encoder_encoding(e){return e[2]}
    function encoder_dst(e){return e[1]}
    var Manual=[0,src,dst,o_rem];
    function encoding_guess(s)
     {var
       s$0=caml_call1(Stdlib_bytes[43],s),
       match=
        r_encoding(s$0,0,caml_call2(Stdlib[6],caml_ml_bytes_length(s$0),3)),
       _C_=match[1];
      if(-211555818 === _C_)
       {var d=match[2];return [0,-211555818,3299808 === d?1:0]}
      if(684370880 <= _C_)
       {var d$0=match[2];return [0,684370880,3299808 === d$0?1:0]}
      var d$1=match[2];
      return [0,-211558048,3299808 === d$1?1:0]}
    function fold_utf_8(opt,len,f,acc,s)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      if(len)
       var l=len[1],len$0=l;
      else
       var len$0=caml_ml_string_length(s) - pos | 0;
      var s$0=caml_call1(Stdlib_bytes[43],s),acc$0=acc,i=pos;
      for(;;)
       {if(i === len$0)return acc$0;
        var need=utf_8_len[caml_bytes_unsafe_get(s$0,i) + 1];
        if(0 === need)
         {var
           i$0=i + 1 | 0,
           acc$1=caml_call3(f,acc$0,i,malformed(s$0,i,1)),
           acc$0=acc$1,
           i=i$0;
          continue}
        var rem=len$0 - i | 0;
        if(rem < need)return caml_call3(f,acc$0,i,malformed(s$0,i,rem));
        var
         i$1=i + need | 0,
         acc$2=caml_call3(f,acc$0,i,r_utf_8(s$0,i,need)),
         acc$0=acc$2,
         i=i$1;
        continue}}
    function fold_utf_16be(opt,len,f,acc,s)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      if(len)
       var l=len[1],len$0=l;
      else
       var len$0=caml_ml_string_length(s) - pos | 0;
      var s$0=caml_call1(Stdlib_bytes[43],s),acc$0=acc,i=pos;
      for(;;)
       {if(i === len$0)return acc$0;
        var rem=len$0 - i | 0;
        if(2 <= rem)
         {var v=r_utf_16(s$0,i,i + 1 | 0);
          if(659980059 <= v[1])
           {var i$0=i + 2 | 0,acc$1=caml_call3(f,acc$0,i,v),acc$0=acc$1,i=i$0;
            continue}
          var hi=v[2];
          if(4 <= rem)
           {var
             i$1=i + 4 | 0,
             acc$2=
              caml_call3(f,acc$0,i,r_utf_16_lo(hi,s$0,i + 2 | 0,i + 3 | 0)),
             acc$0=acc$2,
             i=i$1;
            continue}
          return caml_call3(f,acc$0,i,malformed(s$0,i,rem))}
        return caml_call3(f,acc$0,i,malformed(s$0,i,1))}}
    function fold_utf_16le(opt,len,f,acc,s)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      if(len)
       var l=len[1],len$0=l;
      else
       var len$0=caml_ml_string_length(s) - pos | 0;
      var s$0=caml_call1(Stdlib_bytes[43],s),acc$0=acc,i=pos;
      for(;;)
       {if(i === len$0)return acc$0;
        var rem=len$0 - i | 0;
        if(2 <= rem)
         {var v=r_utf_16(s$0,i + 1 | 0,i);
          if(659980059 <= v[1])
           {var i$0=i + 2 | 0,acc$1=caml_call3(f,acc$0,i,v),acc$0=acc$1,i=i$0;
            continue}
          var hi=v[2];
          if(4 <= rem)
           {var
             i$1=i + 4 | 0,
             acc$2=
              caml_call3(f,acc$0,i,r_utf_16_lo(hi,s$0,i + 3 | 0,i + 2 | 0)),
             acc$0=acc$2,
             i=i$1;
            continue}
          return caml_call3(f,acc$0,i,malformed(s$0,i,rem))}
        return caml_call3(f,acc$0,i,malformed(s$0,i,1))}}
    var String=[0,encoding_guess,fold_utf_8,fold_utf_16be,fold_utf_16le];
    function add_utf_8(b,u)
     {var u$0=caml_call1(Stdlib_uchar[10],u);
      function w(byte$0){return caml_call2(Stdlib_buffer[10],b,byte$0)}
      return 127 < u$0
              ?2047 < u$0
                ?65535 < u$0
                  ?(w(240 | u$0 >>> 18 | 0),
                    w(128 | (u$0 >>> 12 | 0) & 63),
                    w(128 | (u$0 >>> 6 | 0) & 63),
                    w(128 | u$0 & 63))
                  :(w(224 | u$0 >>> 12 | 0),
                    w(128 | (u$0 >>> 6 | 0) & 63),
                    w(128 | u$0 & 63))
                :(w(192 | u$0 >>> 6 | 0),w(128 | u$0 & 63))
              :w(u$0)}
    function add_utf_16be(b,u)
     {var u$0=caml_call1(Stdlib_uchar[10],u);
      function w(byte$0){return caml_call2(Stdlib_buffer[10],b,byte$0)}
      if(65536 <= u$0)
       {var
         u$1=u$0 - 65536 | 0,
         hi=55296 | u$1 >>> 10 | 0,
         lo=56320 | u$1 & 1023;
        w(hi >>> 8 | 0);
        w(hi & 255);
        w(lo >>> 8 | 0);
        return w(lo & 255)}
      w(u$0 >>> 8 | 0);
      return w(u$0 & 255)}
    function add_utf_16le(b,u)
     {var u$0=caml_call1(Stdlib_uchar[10],u);
      function w(byte$0){return caml_call2(Stdlib_buffer[10],b,byte$0)}
      if(65536 <= u$0)
       {var
         u$1=u$0 - 65536 | 0,
         hi=55296 | u$1 >>> 10 | 0,
         lo=56320 | u$1 & 1023;
        w(hi & 255);
        w(hi >>> 8 | 0);
        w(lo & 255);
        return w(lo >>> 8 | 0)}
      w(u$0 & 255);
      return w(u$0 >>> 8 | 0)}
    var
     Buffer=[0,add_utf_8,add_utf_16be,add_utf_16le],
     Uutf=
      [0,
       u_bom,
       u_rep,
       encoding_of_string,
       encoding_to_string,
       decoder,
       decode,
       decoder_encoding,
       set_decoder_encoding,
       decoder_line,
       decoder_col,
       decoder_byte_count,
       decoder_count,
       decoder_removed_bom,
       decoder_src,
       decoder_nln,
       pp_decode,
       encoder,
       encode,
       encoder_encoding,
       encoder_dst,
       Manual,
       String,
       Buffer];
    runtime.caml_register_global(66,Uutf,"Uutf");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1dXRmLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
