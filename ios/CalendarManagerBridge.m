//
//  CalendarManagerBridge.m
//  AwesomeProject
//
//  Created by Kiwi Tech on 06/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

//#import <Foundation/Foundation.h>

// CalendarManagerBridge.m
//#import <React/RCTBridgeModule.h>


#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

RCT_EXTERN_METHOD(addEvent2:(NSString *)name location:(NSString *)location date:(NSString *)date)

RCT_EXTERN_METHOD(findEvents:(RCTResponseSenderBlock)callback)

@end
