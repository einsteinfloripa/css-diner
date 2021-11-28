var levels = [
  {
    helpTitle : "Escolhe elementos baseado em sua tag",
    selectorName : "Seletor por tag",
    doThis : "Selecione os pratos",
    selector : "prato",
    syntax : "A",
    help : "",
    examples : [
      '<strong>div</strong> seleciona todos elementos<tag>div</tag>.',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <prato/>
    <prato/>
    `
  },
  {
    doThis : "Selecione as toalhas",
    selector : "toalha",
    syntax : "A",
    helpTitle : "Escolhe elementos baseado em sua tag",
    selectorName : "Seletor por tag",
    help : "",
    examples : [
      '<strong>div</strong> seleciona todos elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <toalha/>
    <prato/>
    <toalha/>
    `
  },
  {
    doThis : "Selecione o prato chique",
    selector : "#chique",
    selectorName: "Seletor por ID",
    helpTitle: "Escolhe elementos baseados no valor de seu atributo id",
    syntax: "#id",
    help : "",
    examples : [
      '<strong>#cool</strong> seleciona o elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> eleciona o elemento com <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <prato id="chique"/>
    <prato/>
    <toalha/>
    `
  },
  {
    helpTitle: "Selecione o elemento que está dentro de outro elemento",
    selectorName : "Descendentes",
    doThis : "Select the apple on the plate",
    selector : "prato maçã",
    syntax: "A&nbsp;&nbsp;B",
    help : "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <toalha/>
    <prato>
      <maçã/>
    </prato>
    <maçã/>
    `
  },
  {
    doThis : "Selecione o picles no prato chique",
    selector : "#chique picles",
    helpTitle: "Combine the Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'You can combine any selector with the descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <toalha>
    <laranja/>
    </toalha>
    <prato id="fancy">
      <picles/>
    </prato>
    <prato>
      <picles/>
    </prato>
    `
  },
  {
    doThis : "Selecione as Maçãs pequenas",
    selector : ".pequeno",
    selectorName: "Seletor por classe",
    helpTitle: "Select elements by their class",
    syntax: ".classname",
    help : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples : [
    '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <maçã/>
    <maçã class="small"/>
    <prato>
      <maçã class="small"/>
    </prato>
    <prato/>
    `
  },
  {
    doThis : "Selecione as Laranjas pequenas",
    selector : "laranja.pequeno",
    helpTitle: "Combine the Class Selector",
    syntax: "A.className",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    examples : [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <maçã/>
    <maçã class="small"/>
    <toalha>
      <laranja class="small"/>
    </toalha>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="small"/>
    </prato>`
  },
  {
    doThis : "Selecione as Laranjas pequenas nas toalhas",
    selector : "toalha laranja.pequeno",
    syntax: "Put your back into it!",
    helpTitle: "You can do it...",
    help : 'Combine what you learned in the last few levels to solve this one!',
    boardMarkup : `
    <toalha>
      <laranja/>
    </toalha>
    <laranja class="small"/>
    <toalha>
      <laranja class="small"/>
    </toalha>
    <toalha>
      <maçã class="small"/>
    </toalha>
    <toalha>
      <laranja class="small"/>
    </toalha>
    `
  },
  {
    doThis : "Selecione todos os pratos e toalhas",
    selector : "prato,toalha",
    selectorName : "Combinador por vírgula",
    helpTitle: "Combine, selectors, with... commas!",
    syntax : "A, B",
    help : 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
    '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    boardMarkup : `
    <picles class="small"/>
    <picles/>
    <prato>
      <picles/>
    </prato>
    <toalha>
      <picles/>
    </toalha>
    <prato>
      <picles/>
    </prato>
    <picles/>
    <picles class="small"/>
    `
  },
  {
    doThis : "Selecione tudo!",
    selector : "*",
    selectorName:  "Seletor universal",
    helpTitle: "You can select everything!",
    syntax : "*",
    help : 'You can select all elements with the universal selector! ',
    examples : [
      '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
    ],
    boardMarkup : `
    <maçã/>
    <prato>
      <laranja class="small" />
    </prato>
    <toalha/>
    <toalha>
      <laranja/>
    </toalha>
    <prato id="fancy"/>
    `
  },
  {
    doThis : "Selecione tudo que está em um prato",
    selector : "prato *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help : 'This selects all elements inside of <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'
    ],
    boardMarkup: `
    <prato id="fancy">
      <laranja class="small"/>
    </prato>
    <prato>
      <picles/>
    </prato>
    <maçã class="small"/>
    <prato>
      <maçã/>
    </prato>`
  },
  {
    doThis : "Selecione toda maçã que está ao lado de um prato",
    selector : "prato + maçã",
    helpTitle: "Select an element that directly follows another element",
    selectorName: "Irmãos Adjacentes",
    syntax : "A + B",
    help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
    ],
    boardMarkup : `
    <toalha>
      <maçã class="small"/>
    </toalha>
    <prato />
    <maçã class="small"/>
    <prato />
    <maçã/>
    <maçã class="small"/>
    <maçã class="small"/>
    `
  },
  {
    selectorName: "Irmãos",
    helpTitle: "Select elements that follows another element",
    syntax: "A ~ B",
    doThis : "Selecione os picles que estão depois da toalha",
    selector : "toalha ~ picles",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
    boardMarkup : `
    <picles/>
    <toalha>
      <laranja class="small"/>
    </toalha>
    <picles class="small"/>
    <picles/>
    <prato>
      <picles/>
    </prato>
    <prato>
      <picles class="small"/>
    </prato>
    `
  },
  {
    selectorName: "Filhos",
    syntax: "A > B&nbsp;",
    doThis : "Selecione a Maçã que está diretamente em cima de um prato",
    selector : "prato > maçã",
    helpTitle: "Select direct children of an element",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <prato>
      <toalha>
        <maçã/>
      </toalha>
    </prato>
    <prato>
      <maçã/>
    </prato>
    <prato/>
    <maçã/>
    <maçã class="small"/>
    `
  },
  {
    selectorName: "Primeiro filho Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Selecione a laranja de cima",
    selector : "prato :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
    boardMarkup :`
    <toalha/>
    <prato />
    <prato>
      <laranja />
      <laranja />
      <laranja />
    </prato>
    <picles class="small" />
    `
  },
  {
    selectorName: "Apenas filhos de Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Selecione a Maçã e o Picles que estão em um prato",
    selector : "prato :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato>
      <maçã/>
    </prato>
    <prato>
      <picles />
    </prato>
    <toalha>
      <picles />
    </toalha>
    <prato>
      <laranja class="small"/>
      <laranja/>
    </prato>
    <picles class="small"/>
    `
  },
  {
    selectorName: "Último filho Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Selecione a Maçã e o Picles pequenos",
    selector : ".pequeno:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <prato id="fancy">
      <maçã class="small"/>
    </prato>
    <prato/>
    <prato>
      <laranja class="small"/>
      <laranja>
    </prato>
    <picles class="small"/>`
  },
  {
    selectorName: "Enésimo filho Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Selecione o terceiro prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato id="fancy"/>
    `
  },
  {
    selectorName: "Enésimo último filho Pseudo-selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "selecione a primeira toalha",
    selector : "toalha:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    boardMarkup: `
    <prato/>
    <toalha/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <toalha/>
    `
  },
  {
    selectorName: "Primeiro do tipo",
    helpTitle: "Select the first element of a specific type",
    doThis : "Selecione a primeira Maçã",
    selector : "maçã:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <laranja class="small"/>
    <maçã/>
    <maçã class="small"/>
    <maçã/>
    <maçã class="small"/>
    <prato>
      <laranja class="small"/>
      <laranja/>
    </prato>
    `
  },
  {
    selectorName: "Enésimo do tipo",
    doThis: "Selecione todos os pratos pares",
    selector: "prato:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato/>
    <prato id="fancy"/>
    <prato/>
    `
  },
  {
    selectorName: "Enésimo do tipo com fórmula",
    doThis: "Selecione cada segundo prato, começando do terceiro",
    selector: "prato:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <prato/>
    <prato>
      <picles class="small" />
    </prato>
    <prato>
      <maçã class="small" />
    </prato>
    <prato/>
    <prato>
      <maçã />
    </prato>
    <prato/>
    `
  },
  {
    selectorName: "Apenas do tipo",
    helpTitle: "Select elements that are the only ones of their type within their parent element",
    selector : "maçã:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecione a Maçã no prato do meio",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    boardMarkup: `
    <prato id="fancy">
      <maçã class="small" />
      <maçã />
    </prato>
    <prato>
      <maçã class="small" />
    </prato>
    <prato>
      <picles />
    </prato>
    `
  },
  {
    selectorName: "Último do tipo",
    helpTitle: "Select the last element of a specific type",
    doThis : "Selecione a última maçã e laranja",
    selector : ".pequeno:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <laranja class="small"/>
    <laranja class="small" />
    <picles />
    <picles />
    <maçã class="small" />
    <maçã class="small" />
    `
  },
  {
    selectorName: "Vazio",
    helpTitle: "Select elements that don't have children",
    doThis : "Selecione as toalhas vazias",
    selector : "toalha:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <toalha/>
    <toalha>
      <picles class="small"/>
    </toalha>
    <prato/>
    <toalha/>`
  },
  {
    selectorName: "Negação",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Selecione as Maçãs grandes",
    selector : "maçã:not(.pequeno)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <prato id="fancy">
      <maçã class="small" />
    </prato>
    <prato>
      <maçã />
    </prato>
    <maçã />
    <prato>
      <laranja class="small" />
    </prato>
    <picles class="small" />
    `
  },
  {
    selectorName: "Seletor por atributo",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Selecione os itens que são para alguém",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <toalha><maçã class="small"/></toalha>
    <maçã for="Ethan"/>
    <prato for="Alice"><picles/></prato>
    <toalha for="Clara"><laranja/></toalha>
    <picles/>`
  },
  {
    selectorName: "Seletor por atributo",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Selecione os pratos que são para alguém",
    selector : "prato[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <prato for="Sarah"><picles/></prato>
    <prato for="Luke"><maçã/></prato>
    <prato/>
    <toalha for="Steve"><laranja/></toalha>
    `
  },
  {
    selectorName: "Seletor por atributo (valor)",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Selecione a refeição de Vitaly",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <maçã for="Alexei" />
    <toalha for="Albina"><maçã /></toalha>
    <toalha for="Vitaly"><laranja/></toalha>
    <picles/>
    `
  },
  {
    selectorName: "Seletor por atributo (Começa com)",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Selecione os itens para nomes que começam com 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <prato for="Sam"><picles/></prato>
    <toalha for="Sarah"><maçã class="small"/></toalha>
    <toalha for="Mary"><laranja/></toalha>
    `
  },
  {
    selectorName: "Seletor por atributo (Termina com)",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Selecione os itens para nomes que terminam com 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <maçã class="small"/>
    <toalha for="Hayato"><picles/></toalha>
    <maçã for="Ryota"></maçã>
    <prato for="Minato"><laranja/></prato>
    <picles class="small"/>
    `
  },
  {
    selectorName: "Seletor por atributo (Possui)",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Selecione as refeições para nomes que contenham 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <toalha for="Robbie"><maçã /></toalha>
    <toalha for="Timmy"><picles /></toalha>
    <toalha for="Bobby"><laranja /></toalha>
    `
  }
];
