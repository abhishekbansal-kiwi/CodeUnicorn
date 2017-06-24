//
//  CalendarManager.swift
//  AwesomeProject
//
//  Created by Kiwi Tech on 06/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

// CalendarManager.swift

@objc(CalendarManager)

class CalendarManager: NSObject {

  @objc(addEvent:location:date:)
  func addEvent(name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date);
    
  }
  @objc(addEvent2:location:date:)
  func addEvent2(name: String, location: String, date: String) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date);
    let dateStr: Date! = RCTConvert.nsDate(date);
    print(dateStr);

  }
  
  
   @objc func findEvents(_ callback:RCTResponseSenderBlock) -> Void{
   
    let events: [String] = [String]();
    callback(events);
  }
}
