describe("Quotes App", () =>{
 beforeEach(() => {
    cy.visit("http://localhost:1234");
 })
    
const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input[name=author]");
const foobarInput = () => cy.get("input[name=foobar]");
const submitBtn = () => cy.get(`button[id="submitBtn"]`);
const cancelBtn = () => cy.get(`button[id="cancelBtn"]`); 

it("sanity check to make sure test work ", ()=> {
expect(1 + 2).to.equal(3);
expect(2 + 2).not.equal(5);
expect({}).not.to.equal({});
expect({}).to.eql({}); 
})

it("the proper elements are showing", ()=> {
    textInput().should("exist");
    authorInput().should("exist");
    foobarInput().should("not.exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains("Submit Quote").should("exist");
    cy.contains(/submit quote/i).should("exist");
})
describe("Filling out the inputs and cancelling", ()=> {
it("can navigate to the site", () =>{
   cy.url().should("include", "localhost"); 
})
it("submit button starts out disabled", () =>{
    submitBtn().should("be.disabled");
})
it("can type in the inputs", () =>{
   textInput()
   .should("have.value","")
   .type("CSS RULEZ")
   .should("have.value", "CSS RULEZ");

   authorInput()
   .should("have.value","")
   .type("CRHarding")
   .should("have.value", "CRHarding");
   
})
it("the submit button enables when both inputs are filled out", ()=>{
  authorInput().type("Sydney");
  textInput().type("This is Fun"); 
  submitBtn().should("not.be.disabled"); 
})
it("cancel button can reset inputs and disable the submit button", ()=>{
  authorInput().type("Sydney");
  textInput().type(" Fun"); 
  cancelBtn().click();
  textInput().should("have.value", "");
  authorInput().should("have.value", ""); 
  submitBtn().should("be.disabled");
})
describe("Adding a new quote", () => {
    it("can submit and delete new quote", () =>{
        textInput().type("CSS RULEZ");
        authorInput().type("CRHarding");
        submitBtn().click();
        cy.contains("CSS RULEZ").siblings("button:nth-of-type(2)").click();
        // cy.contains("CSS RULEZ").should("not.exist");
    })
})
describe("Editing an existing quote", () => {
    it("canedit quote", () => {
        textInput().type("GoGo Like Diego");
        authorInput().type("Karatesyd");
        submitBtn().click();
        cy.contains("GoGo Like Diego").siblings("button:nth-of-type(1)".click)
        // textInput().should("have.value", "GoGo Like Diego"),
        // authorInput().should("have.value", "CRHarding");
        // textInput().type("levi Sit!");
        // authorInput().type()
    })
})


})














})