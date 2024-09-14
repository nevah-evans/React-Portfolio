import Header from "../Header";

export default function Contact() {
  return (
    <div id="contact-page">
      <Header />

      <form id="form">
        <div class="row input-group">
          <label class="col-name-label">Name</label>
          <div class="col-sm-3">
          <input type="text" aria-label="name" class="form-control"></input>
          </div>
        </div>

        <div class="row mb-6">
          <label for="email" class="col-form-label">Email Address</label>
          <div class="col-sm-3">
            <input type="email" class="form-control" id="email"></input>
          </div>
        </div>

        <div class="row input-group">
          <label class="col-message-label">Message</label>
          <div class="col-sm-3">
          <textarea class="form-control" aria-label="Message"></textarea>
        </div>
        </div>

        <div class="col-sm-3">
        <button type="submit" id="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}
