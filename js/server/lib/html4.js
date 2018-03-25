/* This module was module number 391 in the old packed code. It was referenced in the old code using `require(<module name>)` by the following module names:
* ./lib/html4.js
*/
var html4 = {};
(html4.atype = {
    NONE: 0,
    URI: 1,
    URI_FRAGMENT: 11,
    SCRIPT: 2,
    STYLE: 3,
    ID: 4,
    IDREF: 5,
    IDREFS: 6,
    GLOBAL_NAME: 7,
    LOCAL_NAME: 8,
    CLASSES: 9,
    FRAME_TARGET: 10,
}),
    (html4.ATTRIBS = {
        '*::class': 9,
        '*::dir': 0,
        '*::id': 4,
        '*::lang': 0,
        '*::onclick': 2,
        '*::ondblclick': 2,
        '*::onkeydown': 2,
        '*::onkeypress': 2,
        '*::onkeyup': 2,
        '*::onload': 2,
        '*::onmousedown': 2,
        '*::onmousemove': 2,
        '*::onmouseout': 2,
        '*::onmouseover': 2,
        '*::onmouseup': 2,
        '*::style': 3,
        '*::title': 0,
        'a::accesskey': 0,
        'a::coords': 0,
        'a::href': 1,
        'a::hreflang': 0,
        'a::name': 7,
        'a::onblur': 2,
        'a::onfocus': 2,
        'a::rel': 0,
        'a::rev': 0,
        'a::shape': 0,
        'a::tabindex': 0,
        'a::target': 10,
        'a::type': 0,
        'area::accesskey': 0,
        'area::alt': 0,
        'area::coords': 0,
        'area::href': 1,
        'area::nohref': 0,
        'area::onblur': 2,
        'area::onfocus': 2,
        'area::shape': 0,
        'area::tabindex': 0,
        'area::target': 10,
        'bdo::dir': 0,
        'blockquote::cite': 1,
        'br::clear': 0,
        'button::accesskey': 0,
        'button::disabled': 0,
        'button::name': 8,
        'button::onblur': 2,
        'button::onfocus': 2,
        'button::tabindex': 0,
        'button::type': 0,
        'button::value': 0,
        'caption::align': 0,
        'col::align': 0,
        'col::char': 0,
        'col::charoff': 0,
        'col::span': 0,
        'col::valign': 0,
        'col::width': 0,
        'colgroup::align': 0,
        'colgroup::char': 0,
        'colgroup::charoff': 0,
        'colgroup::span': 0,
        'colgroup::valign': 0,
        'colgroup::width': 0,
        'del::cite': 1,
        'del::datetime': 0,
        'dir::compact': 0,
        'div::align': 0,
        'dl::compact': 0,
        'font::color': 0,
        'font::face': 0,
        'font::size': 0,
        'form::accept': 0,
        'form::action': 1,
        'form::autocomplete': 0,
        'form::enctype': 0,
        'form::method': 0,
        'form::name': 7,
        'form::onreset': 2,
        'form::onsubmit': 2,
        'form::target': 10,
        'h1::align': 0,
        'h2::align': 0,
        'h3::align': 0,
        'h4::align': 0,
        'h5::align': 0,
        'h6::align': 0,
        'hr::align': 0,
        'hr::noshade': 0,
        'hr::size': 0,
        'hr::width': 0,
        'iframe::align': 0,
        'iframe::frameborder': 0,
        'iframe::height': 0,
        'iframe::marginheight': 0,
        'iframe::marginwidth': 0,
        'iframe::width': 0,
        'img::align': 0,
        'img::alt': 0,
        'img::border': 0,
        'img::height': 0,
        'img::hspace': 0,
        'img::ismap': 0,
        'img::name': 7,
        'img::src': 1,
        'img::usemap': 11,
        'img::vspace': 0,
        'img::width': 0,
        'input::accept': 0,
        'input::accesskey': 0,
        'input::align': 0,
        'input::alt': 0,
        'input::autocomplete': 0,
        'input::checked': 0,
        'input::disabled': 0,
        'input::ismap': 0,
        'input::maxlength': 0,
        'input::name': 8,
        'input::onblur': 2,
        'input::onchange': 2,
        'input::onfocus': 2,
        'input::onselect': 2,
        'input::readonly': 0,
        'input::size': 0,
        'input::src': 1,
        'input::tabindex': 0,
        'input::type': 0,
        'input::usemap': 11,
        'input::value': 0,
        'ins::cite': 1,
        'ins::datetime': 0,
        'label::accesskey': 0,
        'label::for': 5,
        'label::onblur': 2,
        'label::onfocus': 2,
        'legend::accesskey': 0,
        'legend::align': 0,
        'li::type': 0,
        'li::value': 0,
        'map::name': 7,
        'menu::compact': 0,
        'ol::compact': 0,
        'ol::start': 0,
        'ol::type': 0,
        'optgroup::disabled': 0,
        'optgroup::label': 0,
        'option::disabled': 0,
        'option::label': 0,
        'option::selected': 0,
        'option::value': 0,
        'p::align': 0,
        'pre::width': 0,
        'q::cite': 1,
        'select::disabled': 0,
        'select::multiple': 0,
        'select::name': 8,
        'select::onblur': 2,
        'select::onchange': 2,
        'select::onfocus': 2,
        'select::size': 0,
        'select::tabindex': 0,
        'table::align': 0,
        'table::bgcolor': 0,
        'table::border': 0,
        'table::cellpadding': 0,
        'table::cellspacing': 0,
        'table::frame': 0,
        'table::rules': 0,
        'table::summary': 0,
        'table::width': 0,
        'tbody::align': 0,
        'tbody::char': 0,
        'tbody::charoff': 0,
        'tbody::valign': 0,
        'td::abbr': 0,
        'td::align': 0,
        'td::axis': 0,
        'td::bgcolor': 0,
        'td::char': 0,
        'td::charoff': 0,
        'td::colspan': 0,
        'td::headers': 6,
        'td::height': 0,
        'td::nowrap': 0,
        'td::rowspan': 0,
        'td::scope': 0,
        'td::valign': 0,
        'td::width': 0,
        'textarea::accesskey': 0,
        'textarea::cols': 0,
        'textarea::disabled': 0,
        'textarea::name': 8,
        'textarea::onblur': 2,
        'textarea::onchange': 2,
        'textarea::onfocus': 2,
        'textarea::onselect': 2,
        'textarea::readonly': 0,
        'textarea::rows': 0,
        'textarea::tabindex': 0,
        'tfoot::align': 0,
        'tfoot::char': 0,
        'tfoot::charoff': 0,
        'tfoot::valign': 0,
        'th::abbr': 0,
        'th::align': 0,
        'th::axis': 0,
        'th::bgcolor': 0,
        'th::char': 0,
        'th::charoff': 0,
        'th::colspan': 0,
        'th::headers': 6,
        'th::height': 0,
        'th::nowrap': 0,
        'th::rowspan': 0,
        'th::scope': 0,
        'th::valign': 0,
        'th::width': 0,
        'thead::align': 0,
        'thead::char': 0,
        'thead::charoff': 0,
        'thead::valign': 0,
        'tr::align': 0,
        'tr::bgcolor': 0,
        'tr::char': 0,
        'tr::charoff': 0,
        'tr::valign': 0,
        'ul::compact': 0,
        'ul::type': 0,
    }),
    (html4.eflags = {
        OPTIONAL_ENDTAG: 1,
        EMPTY: 2,
        CDATA: 4,
        RCDATA: 8,
        UNSAFE: 16,
        FOLDABLE: 32,
        SCRIPT: 64,
        STYLE: 128,
    }),
    (html4.ELEMENTS = {
        a: 0,
        abbr: 0,
        acronym: 0,
        address: 0,
        applet: 16,
        area: 2,
        b: 0,
        base: 18,
        basefont: 18,
        bdo: 0,
        big: 0,
        blockquote: 0,
        body: 49,
        br: 2,
        button: 0,
        caption: 0,
        center: 0,
        cite: 0,
        code: 0,
        col: 2,
        colgroup: 1,
        dd: 1,
        del: 0,
        dfn: 0,
        dir: 0,
        div: 0,
        dl: 0,
        dt: 1,
        em: 0,
        fieldset: 0,
        font: 0,
        form: 0,
        frame: 18,
        frameset: 16,
        h1: 0,
        h2: 0,
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0,
        head: 49,
        hr: 2,
        html: 49,
        i: 0,
        iframe: 4,
        img: 2,
        input: 2,
        ins: 0,
        isindex: 18,
        kbd: 0,
        label: 0,
        legend: 0,
        li: 1,
        link: 18,
        map: 0,
        menu: 0,
        meta: 18,
        noframes: 20,
        noscript: 20,
        object: 16,
        ol: 0,
        optgroup: 0,
        option: 1,
        p: 1,
        param: 18,
        pre: 0,
        q: 0,
        s: 0,
        samp: 0,
        script: 84,
        select: 0,
        small: 0,
        span: 0,
        strike: 0,
        strong: 0,
        style: 148,
        sub: 0,
        sup: 0,
        table: 0,
        tbody: 1,
        td: 1,
        textarea: 8,
        tfoot: 1,
        th: 1,
        thead: 1,
        title: 24,
        tr: 1,
        tt: 0,
        u: 0,
        ul: 0,
        var: 0,
    }),
    (html4.URIEFFECTS = {}),
    (html4.LOADERTYPES = {}),
    void 0 !== exports
        ? (void 0 !== module &&
              module.exports &&
              (exports = module.exports = html4),
          (exports.URI = html4))
                    : 'undefined' != typeof window && (window.html4 = html4);