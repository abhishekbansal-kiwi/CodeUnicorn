//
//  AppDelegate.swift
//  AwesomeProject
//
//  Created by Kiwi Tech on 07/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//
import Foundation
import UIKit



@UIApplicationMain

class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  
  var bridge: RCTBridge!
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    
    let jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index.ios", fallbackResource:nil)
    
    let rootView = RCTRootView(bundleURL:jsCodeLocation as URL!, moduleName: "AwesomeProject", initialProperties: nil, launchOptions:launchOptions)
    
    self.bridge = rootView?.bridge
    
    self.window = UIWindow(frame: UIScreen.main.bounds)
    let rootViewController = UIViewController()
    
    rootViewController.view = rootView
    
    rootViewController.view.backgroundColor = UIColor.white;
    
    self.window!.rootViewController = rootViewController;
    self.window!.makeKeyAndVisible()
    
    return true
  }
}
