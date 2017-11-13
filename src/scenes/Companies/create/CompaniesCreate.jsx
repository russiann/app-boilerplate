import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input } from 'preact-f7';
import { Form, connect } from '../../../components/Form';

const Input = connect(F7Input);

class CompaniesCreate extends Component {

  state = {
    company: { ...defaults.company },
    account: { ...defaults.account }
  }

  updateForm = (form) => (data) => {
    this.setState({ [form]: Object.assign(defaults[form], data) });
  }

  render() {
    const { companies, create } = this.props;

    return (
      <Page name="Signup" >
        <Navbar title="New Company" />

        <Block title="Company Infos" />
        <Form data={this.state.company} onChange={this.updateForm('company')} >
          <F7Form >
            <Input name="name" type="text" label="Name" placeholder="company name" />
            <Input name="slug" type="text" label="Slug" placeholder="company-slug" />
            <Input name="link" type="text" label="Dashboard Link" placeholder="http://..." />
          </F7Form>
        </Form>

        <Block title="Moip Account" />
        <Form data={this.state.account} onChange={this.updateForm('account')} >
          <F7Form >
            <Input name="email.address" type="email" label="Email" placeholder="email" />
            <Input name="person.name" type="text" label="First Name" placeholder="first name" />
            <Input name="person.lastName" type="text" label="Last Name" placeholder="last name" />
            <Input name="person.taxDocument.number" type="text" label="CPF" placeholder="CPF" />
            <Input name="person.identityDocument.number" type="text" label="RG" placeholder="RG" />
            <Input name="person.identityDocument.issuer" type="text" label="Issuer" placeholder="issuer" />
            <Input name="person.identityDocument.issueDate" type="text" label="Issue Date" placeholder="AAAA-MM-DD" />
            <Input name="person.birthDate" type="text" label="Birth Date" placeholder="AAAA-MM-DD" />
            
            <Input name="person.phone.countryCode" type="text" label="Phone (Country Code)" placeholder="55" />
            <Input name="person.phone.areaCode" type="text" label="Phone (Area Code)" placeholder="85" />
            <Input name="person.phone.number" type="text" label="Phone (Area Code)" placeholder="99999 9999" />

            <Input name="person.address.street" type="text" label="Address (Street)" placeholder="Street" />
            <Input name="person.address.streetNumber" type="text" label="Phone (Number)" placeholder="Number" />
            <Input name="person.address.district" type="text" label="Phone (District)" placeholder="District" />
            <Input name="person.address.zipCode" type="text" label="Phone (ZipCode)" placeholder="60000000" />
            <Input name="person.address.city" type="text" label="Phone (City)" placeholder="City" />
            <Input name="person.address.state" type="text" label="Phone (State)" placeholder="State" />
            <Input name="person.address.country" type="text" label="Phone (Country)" placeholder="Country" />
          
          </F7Form>
        </Form>

        <Block>
          <Button fill big title="Registrar!" onClick={() => create(this.state)} />
        </Block>
        
      </Page>
    )
  }
}

const defaults = {
  company: {
    name: 'Company Name',
    slug: 'company-name',
    link: 'http://delivery2me.com.br/company-name'
  },
  account: {
    email: {
      address: 'company@d2m.com.br'
    },
    person: {
      name: 'Jose',
      lastName: 'da Silva',
      taxDocument: {
          type: 'CPF',
          number: '053.215.503-36'
      }, 
      identityDocument: {
        type : 'RG',
        number: '200804412312',
        issuer: 'SSP',
        issueDate: '2008-08-01' 
      },
      birthDate: '1994-08-01',
      phone: {
        countryCode: '55',
        areaCode: '11',
        number: '965213244'
      },
      address: {
        street: 'Av. Brigadeiro Faria Lima',
        streetNumber: '2927',
        district: 'Itaim',
        zipCode: '01234-000',
        city: 'São Paulo',
        state: 'SP',
        country: 'BRA'
      }
    },
    type: "MERCHANT"
  }
}

export default CompaniesCreate;
