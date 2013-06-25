#!/usr/bin/ruby
# -*- coding: utf-8 -*-
require 'open-uri'
require 'nokogiri'
require 'json'


if __FILE__ == $0
  uri = 'http://www.kansai-u.ac.jp/Fc_inf/tp/tp_staff.html'
  
  html = Nokogiri::HTML(open(uri))
  th_list = html.at('div.table_wrapper/table').xpath('tr/th')
  
  staffs = []
  th_list.each do |th|
    staffs.push(th.xpath('a').text.gsub('　', ' ')) unless th[:class] =~ /h_left/
  end

  open('staffs.json', 'w') do |io|
    JSON.dump(staffs, io)
  end
end
