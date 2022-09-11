import React from "react";

export default function CreateEventPage() {
  return (
    <div className="evnt--form">
      <h1 style={{fontWeight: "bold",
      margin:"0px",
            paddingTop: "20px",
            paddingLeft: "10px",
            color: "rgb(250, 150, 186)",
            fontFamily: "sans-serif",}}>Create An Event</h1>
            <hr />
      <form action="">
        <section class="Event">
          <h2>Tell us more about your event:</h2>
          <p>
            <label for="name">EVENT NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Event name..."
              required
            />
            <label for="Description">DESCRIPTION</label>
            <textarea name="Description" id="" cols="30" rows="10"></textarea>
          </p>
        </section>
        <section class="contact">
            <h2>Contact details for enquiries:</h2>
            <p>
                <label for="name" id="name">NAME</label>
                <input type="text" name="name" id="name" placeholder="Your name" required/>
                <label for="email">EMAIL</label>
                <input type="text" name="email" id="email" placeholder="Email" required/>
            </p>
            <p>
                <label for="number">PHONE NUMBER</label>
                <input type="text" name="number" id="number" placeholder="e.g 081XXXXXX" required/>
            </p>
        </section>
        <section class="Event">
            <h2>Event venue:</h2>
            <p>
                <label for="address">ADDRESS</label>
                <textarea name="address" id="" cols="30" rows="10"></textarea>
            </p>
        </section>
        <section class="contact">
            <h2>Event details:</h2>
            <p>
                <label for="table" id="table-label"> Table </label>
                <input type="text" name="table" placeholder="Enter amount of tables" required>
                </input>
                <label for="chair" id="chair-label"> Chair </label>
                <input type="text" name="chair" placeholder="Enter amount of chairs" required>
                </input>
            </p>
            <p>

                <label for="dropdown" id="tents" class="form-inputa"> Select tent </label>
                <select id="dropdown" placeholder="select...">
                    <option value="tent_1">couple's tent</option>
                    <option value="tent_2">carnival tent</option>
                    <option value="tent_3">festival tent</option>
                    <option value="tent_4">120 capacity</option>
                    <option value="tent_5">250 capacity</option>
                    <option value="tent_6">500 capacity</option>
                    <option value="tent_7">1000 capacity</option>
                </select>
            </p>
        </section>
        <section class="contact">
            <h2>Pick date of event:</h2>
            <p>

                <input type="date" id="Event" name="Event-date"/>
            </p>

        </section>
        <section>
            <label for="refer_anuolu">
                <h2>Would you recommend DeluxeEvent to a friend?</h2>
            </label>

            <input id="refer_anuolu" type="radio" name="anuolu" value="definitely"/>
            <label for="female">Definitely</label><br/>
            <input id="refer_anuolu" type="radio" name="anuolu" value="Maybe"/>
            <label for="female">Maybe</label><br/>

            <input id="refer_anuolu" type="radio" name="anuolu" value="Not sure"/>
            <label for="female">Not sure</label>
        </section>
        <button id="btn">Book Event</button>
      </form>
    </div>
  );
}
