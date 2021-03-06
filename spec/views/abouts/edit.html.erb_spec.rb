require 'spec_helper'

describe "abouts/edit" do
  before(:each) do
    @about = assign(:about, stub_model(About,
      :title => "MyString",
      :body => "MyText",
      :link => "MyString"
    ))
  end

  it "renders the edit about form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => abouts_path(@about), :method => "post" do
      assert_select "input#about_title", :name => "about[title]"
      assert_select "textarea#about_body", :name => "about[body]"
      assert_select "input#about_link", :name => "about[link]"
    end
  end
end
