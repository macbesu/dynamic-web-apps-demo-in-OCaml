#!/bin/bash
dune clean && dune build ./{main.bc.js,index.html,style.css} --profile=release
