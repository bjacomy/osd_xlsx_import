import React, {Component, Fragment} from 'react';
import {
  EuiCallOut,
  EuiSpacer,
  EuiButtonEmpty,
  EuiForm,
  EuiFormRow,
  EuiFlexItem,
  EuiFlexGroup,
  EuiPanel
} from '@elastic/eui';

class StepThree extends Component {
  constructor(props) {
    super(props);
  }

  handleClickNewImport = () => {
    window.location.reload();
  }

  render() {
    return (
      <Fragment>
          <EuiForm>
            <EuiFormRow>
              <EuiCallOut
                title= "Your file have been imported !"
                color="success"
                iconType="check">
                  <EuiSpacer size="s"/>
                  <p>{this.props.nbDocument} document(s) have been imported into {this.props.indexName}.</p>
                  <p>File name : {this.props.fileName}</p>
                  <p>Sheet name : {this.props.sheetName}</p>
              </EuiCallOut>
            </EuiFormRow>
            <EuiFormRow>
              <EuiFlexGroup gutterSize="s" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty href="../app/management/opensearch-dashboards/indexPatterns/create" size="s" iconType="arrowRight">
                    Create the index pattern
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFormRow>
            <EuiFormRow>
              <EuiFlexGroup gutterSize="s" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty onClick={this.handleClickNewImport} size="s" iconType="arrowRight">
                    Import a new file
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFormRow>
          </EuiForm>
      </Fragment>
    );
  }
}

export default StepThree
