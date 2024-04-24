import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
const chai = use(chaiHttp)
import { describe, it } from 'mocha';
describe('Books API', () => {
  describe("GET /books", () => {
    it("It should GET all the books", (done) => {
        import('../server.js').then((serverModule) => {
            const server = serverModule.default; 
            chai.request(server)
                .get("/books")
                .end((err, response) => {
                    if (err) {
                        console.error(err);
                        return done(err);
                    }
                    chai.expect(response).to.have.status(200);
                    done();
                });
        }).catch((err) => {
            console.error(err);
            done(err);
        });
    });
  });

  describe("GET /books/:id", () => {
    it("It should GET a specific book by ID", (done) => {
        import('../server.js').then((serverModule) => {
            const server = serverModule.default; 
            chai.request(server)
                .get("/books/1")
                .end((err, response) => {
                    if (err) {
                        console.error(err);
                        return done(err);
                    }
                    chai.expect(response).to.have.status(200);
                    done();
                });
        }).catch((err) => {
            console.error(err);
            done(err);
        });
    });
  });

  it("It should return 404 if book ID does not exist", (done) => {
    import('../server.js').then((serverModule) => {
        const server = serverModule.default; 
        chai.request(server)
            .get("/books/999")
            .end((err, response) => {
                if (err) {
                    console.error(err);
                    return done(err);
                }
                chai.expect(response).to.have.status(404);
                done();
            });
    }).catch((err) => {
        console.error(err);
        done(err);
    });
  });

  describe("POST /books", () => {
    it("It should POST a new book", (done) => {
        const newBook = {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "published_date": "1960-07-11",
            "genre": "Fiction"
        };
        import('../server.js').then((serverModule) => {
            const server = serverModule.default; 
            chai.request(server)
                .post("/books")
                .send(newBook)
                .end((err, response) => {
                    if (err) {
                        console.error(err);
                        return done(err);
                    }
                    chai.expect(response).to.have.status(201);
                    done();
                });
        }).catch((err) => {
            console.error(err);
            done(err);
        });
    });
  });
});
