import chai from "chai";
import {Catalogue} from "../src/productCatalogue.js";
import {Product} from "../src/product.js";
const expect = chai.expect;

let cat = null;
let batch = null;

// Setup
cat = new Catalogue("Test Catalogue");
cat.addProduct(new Product("A123", "Product 1", 100, 10, 10.0));
cat.addProduct(new Product("A124", "Product 2", 100, 10.0));
cat.addProduct(new Product("A125", "Product 3", 100, 10, 10.0));

describe("Catalogue", () => {
  beforeEach(() => {   // NEW CODE
    cat = new Catalogue("Test Catalogue");
    cat.addProduct(new Product("A123", "Product 1", 100, 10, 10.0, 10));
    cat.addProduct(new Product("A124", "Product 2", 100, 10.0, 10));
    cat.addProduct(new Product("A125", "Product 3", 100, 10, 10.0, 10));
  });
  describe("findProductById", function () {
    it("should find a valid product id", function () {
      const result = cat.findProductById("A123");
      expect(result.name).to.equal("Product 1");
    });
    it("should return undefined for invalid product id", function () {
      const result = cat.findProductById("A321");
      expect(result).to.be.undefined;
    });
  });
  describe("removeProductById", () => {
    it("should remove product with a valid id", function () {
      let result = cat.removeProductById("A123");
      expect(result.id).to.equal("A123");
      // Check object state
      result = cat.findProductById("A123");
      expect(result).to.be.undefined;
    });
    it("should return undefined when asked to remove invalid product", function () {
      const result = cat.removeProductById("A321");
      expect(result).to.be.undefined;
    });
  });
});