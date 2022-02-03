import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
// Tiny MCE Script https://cdn.tiny.cloud/1/l2jqii2eg9la4ze8mhf7wikmnos54euhf11nugwz6hcgj87s/tinymce/5/tinymce.min.js
export interface IProps {}
export interface IState {
  content?: string;
}

export default class TinyMCE extends Component<IProps, IState> {
  state: any;
  API_KEY: any;
  constructor(props: IProps) {
    super(props);
    this.API_KEY = process.env.TINYMCE_API_KEY;
    this.state = { content: '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content: any, editor: any) {
    this.setState({ content });
  }

  render() {
    console.log('TinyMCE', this.API_KEY)
    return (
      <Editor apiKey={this.API_KEY} value={this.state.content} onEditorChange={this.handleEditorChange} />
    )
  }
}
