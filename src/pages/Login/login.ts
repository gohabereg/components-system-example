export default `<div>
    <h1>Login page</h1>
    {{#Card}}
        {{#each buttons}}
            {{{Button label=this.label type=../type onClick=this.onClick}}}
        {{/each}}
    {{/Card}}
</div>`

