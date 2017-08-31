var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={"contactItem"}>
        <img className={"contactImage col-6"} src={"http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"} />
        <p className={"contactLabel col-3"}>
          Imię: { this.props.item.firstName }
        </p>
        <p className={"contactLabel col-3"}>
          Nazwisko: { this.props.item.lastName }
        </p>
        <a className={"contactLabel col-3"} href={ "mailto: " + this.props.item.email }>
          { this.props.item.email }
        </a>
      </div>      
    )
  },
});