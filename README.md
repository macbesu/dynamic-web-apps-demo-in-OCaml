# dynamic-web-apps-demo-in-OCaml

Dynamic Web Apps Demo in OCaml

## Installation
* [ocaml >= 4.07.0](https://ocaml.org/docs/install.html)
* [opam >= 2.0.1](https://opam.ocaml.org/doc/Install.html)

## Getting Started

Follow the commands listed as below:
```bash
# Clone the project
$ git clone git@github.com:ivanchean/dynamic-web-apps-demo-in-OCaml.git && cd dynamic-web-apps-demo-in-OCaml

# Install packages used in this project via opam
$ opam install incr_dom js_of_ocaml ppx_jane js_of_ocaml-ppx

# Install useful optional packages via opam
$ opam install merlin ocp-indent dune utop

# Run this command to make sure our environment is properly synced
$ eval $(opam config env)

# Build the target JavaScript file
$ jbuilder build ./{main.bc.js,index.html,style.css}
# or
$ chmod +x gen.sh && ./gen.sh
```

## Introduction to serveral Opam Packages

1. __merlin:__ Available via the ocamlmerlin command, is the tool providing OCaml IDE experience that can be integrated to your editor. Its features include context-sensitive auto-completion, error-reporting, querying type information and documentation, and jumping to definition. Merlin will most likely be used by your editor plugins and not you directly.

2. __ocp-indent:__ A simple, customizable tool to indent your OCaml source code. As with Merlin, most editor plugins also make use of this to indent your code automatically. If you want a more opinionated solution, there is also ocamlformat, but it’s still in active development and might not be stable yet. You might still want to try it, though.

3. __dune:__ The installable package of Dune. At the point of this writing, Dune’s latest version is 1.0.1.
4. __utop:__ An improved REPL (toplevel) for OCaml. It is based on lambda-term and supports auto-completion. In general, I favor utop as our REPL instead of the builtin ocaml, since the former have better UX.

We can find all the packages [here](https://opam.ocaml.org/packages/).

## Demo
(no picture currently =D)