import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type');

  if (contentType && contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    let tableId;
    let fields = {};

    // Determine the table ID and fields based on the form type
    switch (data.formType) {
      case 'Onderhoud':
        tableId = 'tblbAJlqcsNeTwaLG';
        fields = {
          voornaam: data.voornaam,
          achternaam: data.achternaam,
          email: data.email,
          telefoon_nummer: data.telefoon_nummer,
          adres: data.adres,
          photos: data['file-upload'],
          onderhoudsdetails: data.onderhoudsdetails,
        };
        break;
      case 'aanhuur':
        tableId = 'tbl00IUO0bFxhUBR1';
        fields = {
          Name: data.name,
          type: data['property-status'],
          locatie: data.location,
          samenstelling: data.composition,
          aantal_personen: data.occupants,
          slaapkamers: data.bedrooms,
          budget: data.budget,
          'Per wanneer': data['move-in-date'],
          werk_je: data.employment,
          verdien_je_maandhuur: data.income,
          garantsteller: data.guarantor,
          telefoonnummer: data.phone,
          email_adres: data.email,
          extra_informatie: data['extra-info'],
        };
        break;
      case 'Contact':
        tableId = 'tblrhm9WMdL8IecSI';
        fields = {
          Name: data['full-name'],
          email: data.email,
          telefoon: data.phone,
          bericht: data.message,
        };
        break;
      default:
        return new Response('Invalid form type', { status: 400 });
    }

    // Send data to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${tableId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      },
    );

    const airtableResponse = await response.json();

    console.log('AIRTABLE RESPONSE:', JSON.stringify(airtableResponse));

    if (!response.ok) {
      return new Response('Error', { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    const data = await request.json();

    let tableId;
    let fields = {};

    // Determine the table ID and fields based on the form type
    switch (data.formType) {
      case 'Onderhoud':
        tableId = 'tblbAJlqcsNeTwaLG';
        fields = {
          voornaam: data.voornaam,
          achternaam: data.achternaam,
          email: data.email,
          telefoon_nummer: data.telefoon_nummer,
          adres: data.adres,
          photos: data['file-upload'],
          onderhoudsdetails: data.onderhoudsdetails,
        };
        break;
      case 'aanhuur':
        tableId = 'tbl00IUO0bFxhUBR1';
        fields = {
          Name: data.name,
          type: data['property-status'],
          locatie: data.location,
          samenstelling: data.composition,
          aantal_personen: data.occupants,
          slaapkamers: data.bedrooms,
          budget: data.budget,
          'Per wanneer': data['move-in-date'],
          werk_je: data.employment,
          verdien_je_maandhuur: data.income,
          garantsteller: data.guarantor,
          telefoonnummer: data.phone,
          email_adres: data.email,
          extra_informatie: data['extra-info'],
        };
        break;
      case 'Contact':
        tableId = 'tblrhm9WMdL8IecSI';
        fields = {
          Name: data['full-name'],
          email: data.email,
          telefoon: data.phone,
          bericht: data.message,
        };
        break;
      default:
        return new Response('Invalid form type', { status: 400 });
    }

    // Send data to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${tableId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      },
    );

    const airtableResponse = await response.json();

    console.log('AIRTABLE RESPONSE:', JSON.stringify(airtableResponse));

    if (!response.ok) {
      return new Response('Error', { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  }
}
