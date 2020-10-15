import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import PropTypes from 'prop-types'

import routes from '@src/config/routes'
import mapsConfig from '@src/config/maps'

import MapAutosuggestStyles from './MapAutosuggestStyles';

const mapsOptions = mapsConfig.types.map(item => (
  { code: item.code, label: item.displayName }
))

class MapAutosuggest extends Component {
  static getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()

    const testRow = (row) => {
      const regexp = new RegExp(inputValue, 'g')
      return regexp.test(row.label.toLowerCase())
    }

    return inputValue.length === 0 ?
      mapsOptions :
      [
        ...mapsOptions.filter(row => testRow(row)),
        ...mapsOptions.filter(row => !testRow(row)),
      ]
  }

  static getSuggestionValue(suggestion) {
    return suggestion.label
  }

  static renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion.label}
      </div>
    )
  }

  static shouldRenderSuggestions() {
    return true;
  }

  static getDisplayValue(props) {
    const displayName = (mapType) =>
      mapsConfig.types.filter(i => i.code === mapType)[0].displayName

    return (props.currentPath === routes.editor || !props.mapType)
      ? ''
      : displayName(props.mapType)
  }

  constructor(props) {
    super(props)

    this.state = {
      value: MapAutosuggest.getDisplayValue(props),
      suggestions: [],
    }

    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: MapAutosuggest.getDisplayValue(nextProps),
    })
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    })
  }

  onBlur(event, { highlightedSuggestion }) {
    if (!highlightedSuggestion) return;
    this.handleValueChanged(highlightedSuggestion);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: MapAutosuggest.getSuggestions(value),
    })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    })
  }

  onSuggestionSelected(event, { suggestion }) {
    this.handleValueChanged(suggestion);
  }

  handleValueChanged(suggestion) {
    const { code } = suggestion;
    this.props.onMapTypeChange(code);
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Select a map',
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
    }

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={MapAutosuggest.getSuggestionValue}
          renderSuggestion={MapAutosuggest.renderSuggestion}
          inputProps={inputProps}
          highlightFirstSuggestion
          shouldRenderSuggestions={MapAutosuggest.shouldRenderSuggestions}
          onSuggestionSelected={this.onSuggestionSelected}
        />

        <MapAutosuggestStyles />
      </div>
    )
  }
}

MapAutosuggest.propTypes = {
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
  mapType: PropTypes.string.isRequired,
}

export default MapAutosuggest
