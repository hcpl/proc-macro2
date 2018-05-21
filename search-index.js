var searchIndex = {};
searchIndex["proc_macro2"] = {"doc":"A \"shim crate\" intended to multiplex the [`proc_macro`] API on to stable Rust.","items":[[3,"TokenStream","proc_macro2","An abstract stream of tokens, or more concretely a sequence of token trees.",null,null],[3,"LexError","","Error returned from `TokenStream::from_str`.",null,null],[3,"Span","","A region of source code, along with macro expansion information.",null,null],[3,"Group","","A delimited token stream.",null,null],[3,"Punct","","An `Punct` is an single punctuation character like `+`, `-` or `#`.",null,null],[3,"Ident","","A word of Rust code, which may be a keyword or legal variable name.",null,null],[3,"Literal","","A literal string (`\"hello\"`), byte string (`b\"hello\"`), character (`'a'`), byte character (`b'a'`), an integer or floating point number with or without a suffix (`1`, `1u8`, `2.3`, `2.3f32`).",null,null],[4,"TokenTree","","A single token or a delimited sequence of token trees (e.g. `[1, (), ..]`).",null,null],[13,"Group","","A token stream surrounded by bracket delimiters.",0,null],[13,"Ident","","An identifier.",0,null],[13,"Punct","","A single punctuation character (`+`, `,`, `$`, etc.).",0,null],[13,"Literal","","A literal character (`'a'`), string (`\"hello\"`), number (`2.3`), etc.",0,null],[4,"Delimiter","","Describes how a sequence of token trees is delimited.",null,null],[13,"Parenthesis","","`( ... )`",1,null],[13,"Brace","","`{ ... }`",1,null],[13,"Bracket","","`[ ... ]`",1,null],[13,"None","","`Ø ... Ø`",1,null],[4,"Spacing","","Whether an `Punct` is followed immediately by another `Punct` or followed by another token or whitespace.",null,null],[13,"Alone","","E.g. `+` is `Alone` in `+ =`, `+ident` or `+()`.",2,null],[13,"Joint","","E.g. `+` is `Joint` in `+=` or `'#`.",2,null],[0,"token_stream","","Public implementation details for the `TokenStream` type, such as iterators.",null,null],[3,"IntoIter","proc_macro2::token_stream","An iterator over `TokenStream`'s `TokenTree`s.",null,null],[11,"next","","",3,{"i":[{"n":"self"}],"o":{"g":["tokentree"],"n":"option"}}],[11,"fmt","","",3,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"into_iter","proc_macro2","",4,{"i":[{"n":"self"}],"o":{"n":"intoiter"}}],[11,"clone","","",4,{"i":[{"n":"self"}],"o":{"n":"tokenstream"}}],[11,"empty","","Returns an empty `TokenStream` containing no token trees.",4,{"o":{"n":"tokenstream"}}],[11,"is_empty","","Checks if this `TokenStream` is empty.",4,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[11,"from_str","","",4,{"i":[{"n":"str"}],"o":{"g":["tokenstream","lexerror"],"n":"result"}}],[11,"from","","",4,{"i":[{"n":"tokenstream"}],"o":{"n":"tokenstream"}}],[11,"extend","","",4,{"i":[{"n":"self"},{"n":"i"}]}],[11,"from_iter","","",4,{"i":[{"n":"i"}],"o":{"n":"self"}}],[11,"fmt","","",4,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",4,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",5,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",6,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"call_site","","The span of the invocation of the current procedural macro.",6,{"o":{"n":"span"}}],[11,"fmt","","",6,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"tokentree"}}],[11,"span","","Returns the span of this tree, delegating to the `span` method of the contained token or a delimited stream.",0,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"set_span","","Configures the span for only this token.",0,{"i":[{"n":"self"},{"n":"span"}]}],[11,"from","","",0,{"i":[{"n":"group"}],"o":{"n":"tokentree"}}],[11,"from","","",0,{"i":[{"n":"ident"}],"o":{"n":"tokentree"}}],[11,"from","","",0,{"i":[{"n":"punct"}],"o":{"n":"tokentree"}}],[11,"from","","",0,{"i":[{"n":"literal"}],"o":{"n":"tokentree"}}],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",7,{"i":[{"n":"self"}],"o":{"n":"group"}}],[11,"clone","","",1,{"i":[{"n":"self"}],"o":{"n":"delimiter"}}],[11,"fmt","","",1,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"eq","","",1,{"i":[{"n":"self"},{"n":"delimiter"}],"o":{"n":"bool"}}],[11,"new","","Creates a new `Group` with the given delimiter and token stream.",7,{"i":[{"n":"delimiter"},{"n":"tokenstream"}],"o":{"n":"group"}}],[11,"delimiter","","Returns the delimiter of this `Group`",7,{"i":[{"n":"self"}],"o":{"n":"delimiter"}}],[11,"stream","","Returns the `TokenStream` of tokens that are delimited in this `Group`.",7,{"i":[{"n":"self"}],"o":{"n":"tokenstream"}}],[11,"span","","Returns the span for the delimiters of this token stream, spanning the entire `Group`.",7,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"set_span","","Configures the span for this `Group`'s delimiters, but not its internal tokens.",7,{"i":[{"n":"self"},{"n":"span"}]}],[11,"fmt","","",7,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",7,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",8,{"i":[{"n":"self"}],"o":{"n":"punct"}}],[11,"clone","","",2,{"i":[{"n":"self"}],"o":{"n":"spacing"}}],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"eq","","",2,{"i":[{"n":"self"},{"n":"spacing"}],"o":{"n":"bool"}}],[11,"new","","Creates a new `Punct` from the given character and spacing.",8,{"i":[{"n":"char"},{"n":"spacing"}],"o":{"n":"punct"}}],[11,"as_char","","Returns the value of this punctuation character as `char`.",8,{"i":[{"n":"self"}],"o":{"n":"char"}}],[11,"spacing","","Returns the spacing of this punctuation character, indicating whether it's immediately followed by another `Punct` in the token stream, so they can potentially be combined into a multicharacter operator (`Joint`), or it's followed by some other token or whitespace (`Alone`) so the operator has certainly ended.",8,{"i":[{"n":"self"}],"o":{"n":"spacing"}}],[11,"span","","Returns the span for this punctuation character.",8,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"set_span","","Configure the span for this punctuation character.",8,{"i":[{"n":"self"},{"n":"span"}]}],[11,"fmt","","",8,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",8,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",9,{"i":[{"n":"self"}],"o":{"n":"ident"}}],[11,"new","","Creates a new `Ident` with the given `string` as well as the specified `span`.",9,{"i":[{"n":"str"},{"n":"span"}],"o":{"n":"ident"}}],[11,"span","","Returns the span of this `Ident`.",9,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"set_span","","Configures the span of this `Ident`, possibly changing its hygiene context.",9,{"i":[{"n":"self"},{"n":"span"}]}],[11,"eq","","",9,{"i":[{"n":"self"},{"n":"ident"}],"o":{"n":"bool"}}],[11,"eq","","",9,{"i":[{"n":"self"},{"n":"t"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",9,{"i":[{"n":"self"},{"n":"ident"}],"o":{"g":["ordering"],"n":"option"}}],[11,"cmp","","",9,{"i":[{"n":"self"},{"n":"ident"}],"o":{"n":"ordering"}}],[11,"hash","","",9,{"i":[{"n":"self"},{"n":"h"}]}],[11,"fmt","","",9,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",9,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",10,{"i":[{"n":"self"}],"o":{"n":"literal"}}],[11,"u8_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"u8"}],"o":{"n":"literal"}}],[11,"u16_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"u16"}],"o":{"n":"literal"}}],[11,"u32_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"u32"}],"o":{"n":"literal"}}],[11,"u64_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"u64"}],"o":{"n":"literal"}}],[11,"usize_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"usize"}],"o":{"n":"literal"}}],[11,"i8_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"i8"}],"o":{"n":"literal"}}],[11,"i16_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"i16"}],"o":{"n":"literal"}}],[11,"i32_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"i32"}],"o":{"n":"literal"}}],[11,"i64_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"i64"}],"o":{"n":"literal"}}],[11,"isize_suffixed","","Creates a new suffixed integer literal with the specified value.",10,{"i":[{"n":"isize"}],"o":{"n":"literal"}}],[11,"u8_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"u8"}],"o":{"n":"literal"}}],[11,"u16_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"u16"}],"o":{"n":"literal"}}],[11,"u32_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"u32"}],"o":{"n":"literal"}}],[11,"u64_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"u64"}],"o":{"n":"literal"}}],[11,"usize_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"usize"}],"o":{"n":"literal"}}],[11,"i8_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"i8"}],"o":{"n":"literal"}}],[11,"i16_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"i16"}],"o":{"n":"literal"}}],[11,"i32_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"i32"}],"o":{"n":"literal"}}],[11,"i64_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"i64"}],"o":{"n":"literal"}}],[11,"isize_unsuffixed","","Creates a new unsuffixed integer literal with the specified value.",10,{"i":[{"n":"isize"}],"o":{"n":"literal"}}],[11,"f64_unsuffixed","","",10,{"i":[{"n":"f64"}],"o":{"n":"literal"}}],[11,"f64_suffixed","","",10,{"i":[{"n":"f64"}],"o":{"n":"literal"}}],[11,"f32_unsuffixed","","Creates a new unsuffixed floating-point literal.",10,{"i":[{"n":"f32"}],"o":{"n":"literal"}}],[11,"f32_suffixed","","",10,{"i":[{"n":"f32"}],"o":{"n":"literal"}}],[11,"string","","",10,{"i":[{"n":"str"}],"o":{"n":"literal"}}],[11,"character","","",10,{"i":[{"n":"char"}],"o":{"n":"literal"}}],[11,"byte_string","","",10,null],[11,"span","","",10,{"i":[{"n":"self"}],"o":{"n":"span"}}],[11,"set_span","","",10,{"i":[{"n":"self"},{"n":"span"}]}],[11,"fmt","","",10,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",10,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}]],"paths":[[4,"TokenTree"],[4,"Delimiter"],[4,"Spacing"],[3,"IntoIter"],[3,"TokenStream"],[3,"LexError"],[3,"Span"],[3,"Group"],[3,"Punct"],[3,"Ident"],[3,"Literal"]]};
initSearch(searchIndex);
