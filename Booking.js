function handleLogin(e){

    const form = e.target.elements;

    e.preventDefault();

    const name = form.name.value;
    const contact = form.contact.value;
    const pax = form.pax.value;
    const date = form.date.value;
    const time = form.time.value;

    const output = {
      name,contact,pax,date,time
    };

    console.log(output);
    alert("Reservation Success!")
    return output;
  }