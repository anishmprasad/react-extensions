import React from 'react';
import DateRangeSelector from 'react-daterangeselector';
import 'react-daterangeselector/dist/styles.min.css';
export default function Calender(props) {
  return React.createElement(DateRangeSelector, props);
}
Calender.defaultProps = {
  inputComponent: React.createElement("input", {
    type: "text",
    name: "dates",
    className: "pull-right"
  }),
  options: {
    opens: 'left',
    buttonClasses: ['btn btn-sm'],
    applyClass: 'btn-primary',
    separator: ' to ',
    format: 'L',
    dateLimit: {
      days: 90
    },
    ranges: {
      'Last 7 Days': [new Date('2019-10-13T00:00:00.000Z'), new Date('2019-10-19T23:59:59.999Z')],
      'Last 28 Days': [new Date('2019-09-22T00:00:00.000Z'), new Date('2019-10-19T23:59:59.999Z')],
      'October 2019': [new Date('2019-10-01T00:00:00.000Z'), new Date('2019-10-31T23:59:59.999Z')],
      'September 2019': [new Date('2019-09-01T00:00:00.000Z'), new Date('2019-09-30T23:59:59.999Z')],
      'August 2019': [new Date('2019-08-01T00:00:00.000Z'), new Date('2019-08-31T23:59:59.999Z')],
      'July 2019': [new Date('2019-07-01T00:00:00.000Z'), new Date('2019-07-31T23:59:59.999Z')],
      'June 2019': [new Date('2019-06-01T00:00:00.000Z'), new Date('2019-06-30T23:59:59.999Z')]
    },
    locale: {
      applyLabel: 'Update',
      cancelLabel: 'Clear',
      fromLabel: 'Start date',
      toLabel: 'End date',
      customRangeLabel: 'Custom'
    },
    minDate: new Date('2013-10-01T00:00:00.000Z'),
    alwaysShowCalendars: true
  },
  callback: function callback() {}
};
//# sourceMappingURL=index.js.map
