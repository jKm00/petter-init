import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.a9d1f0e8.js";const v=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md"}'),i={name:"introduction.md"},p=s('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><h2 id="what-is-petter-init" tabindex="-1">What is petter-init? <a class="header-anchor" href="#what-is-petter-init" aria-label="Permalink to &quot;What is petter-init?&quot;">​</a></h2><p>petter-init is a <a href="https://www.npmjs.com/package/petter-init" target="_blank" rel="noreferrer">npm package</a> that scaffolds projects, with TailwindCSS configured, and ready-to-code. The tool is supposed to be a better initializer when you want to use TailwindCSS in your projects.</p><h2 id="why-petter-init" tabindex="-1">Why petter-init? <a class="header-anchor" href="#why-petter-init" aria-label="Permalink to &quot;Why petter-init?&quot;">​</a></h2><p>TailwindCSS is great for styling your website quickly. However, there are several steps to setting up TailwindCSS before you can start using it. This can be cumbersome in smaller projects, where you might just want to test something.</p><p>I decided to create petter-init after getting sick of setting up TailwindCSS for simple applications where I just wanted to try something. To my surprise, <a href="https://youtu.be/lHZwlzOUOZ4?si=MsXA5NBZohrFK_b_&amp;t=200" target="_blank" rel="noreferrer">Fireship is also tired of configuring TailwindCSS</a>.</p><h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h2><p>petter-init will do the steps listed on <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank" rel="noreferrer">tailwindcss framework guides</a> for the selected framework and package manager.</p><ol><li>React and Vue projects are initialized with:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-p_nBH" id="tab-liuvq--" checked="checked"><label for="tab-liuvq--">npm</label><input type="radio" name="group-p_nBH" id="tab-PIYFjeG"><label for="tab-PIYFjeG">pnpm</label><input type="radio" name="group-p_nBH" id="tab-_x4J-2R"><label for="tab-_x4J-2R">yarn</label></div><div class="blocks"><div class="language-npm vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm create vite@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm create vite@latest</span></span></code></pre></div><div class="language-pnpm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pnpm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm create vite@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm create vite@latest</span></span></code></pre></div><div class="language-yarn vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yarn</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn create vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn create vite</span></span></code></pre></div></div></div><p>SvelteKit projects are initialized with:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ofg5r" id="tab-ktMaxL6" checked="checked"><label for="tab-ktMaxL6">npm</label><input type="radio" name="group-ofg5r" id="tab-FCjgZjp"><label for="tab-FCjgZjp">pnpm</label><input type="radio" name="group-ofg5r" id="tab-paYdLqp"><label for="tab-paYdLqp">yarn</label></div><div class="blocks"><div class="language-npm vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm create svelte@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm create svelte@latest</span></span></code></pre></div><div class="language-pnpm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pnpm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm create svelte@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm create svelte@latest</span></span></code></pre></div><div class="language-yarn vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yarn</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn create svelte</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn create svelte</span></span></code></pre></div></div></div><ol start="2"><li>In your new project, petter-init runs:</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-d8pRa" id="tab-VWTRHPR" checked="checked"><label for="tab-VWTRHPR">npm</label><input type="radio" name="group-d8pRa" id="tab-U0Io5ir"><label for="tab-U0Io5ir">pnpm</label><input type="radio" name="group-d8pRa" id="tab-UuDJ8Xw"><label for="tab-UuDJ8Xw">yarn</label></div><div class="blocks"><div class="language-npm vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install tailwindcss postcss autoprefixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install tailwindcss postcss autoprefixer</span></span></code></pre></div><div class="language-pnpm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pnpm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install tailwindcss postcss autoprefixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install tailwindcss postcss autoprefixer</span></span></code></pre></div><div class="language-yarn vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yarn</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn install tailwindcss postcss autoprefixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn install tailwindcss postcss autoprefixer</span></span></code></pre></div></div></div><ol start="3"><li>Copying necessary template files using <code>fs.copyFileSync</code> and removing boilerplate files.</li></ol>',15),n=[p];function l(o,r,c,d,h,u){return a(),t("div",null,n)}const b=e(i,[["render",l]]);export{v as __pageData,b as default};