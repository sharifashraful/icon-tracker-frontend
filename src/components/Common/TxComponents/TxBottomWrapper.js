import React, { Component } from 'react';
import {
  TxBottom
} from '../../../components'
import {
  TX_TYPE_DATA
} from '../../../utils/const'

class TxBottomWrapper extends Component {
  render() {
    const {
      txData,
      goAllTx,
      txType,
      address
    } = this.props

    const tableClassName =
      TX_TYPE_DATA[txType] ?
      TX_TYPE_DATA[txType]['className'] : ''

    const noBoxText =
      TX_TYPE_DATA[txType] ?
      TX_TYPE_DATA[txType]['noBoxText'] : ''

    const totalText =
      TX_TYPE_DATA[txType] ?
      TX_TYPE_DATA[txType]['totalText'] : ''

    return (
      <TxBottom
        txData={txData}
        goAllTx={goAllTx}
        txType={txType}
        address={address}
        tableClassName={tableClassName}
        noBoxText={noBoxText}
        totalText={totalText}
      />
    )
  }
}

export default TxBottomWrapper;
