// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:client_mobile/main.dart';

void main() {
  testWidgets('Home screen smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that the app title is displayed
    expect(
      find.text('PapDaew'),
      findsNWidgets(2),
    ); // Once in AppBar, once in MaterialApp title

    // Verify that the welcome message is displayed
    expect(find.text('Welcome to PapDaew'), findsOneWidget);

    // Verify that the AppBar is present
    expect(find.byType(AppBar), findsOneWidget);
  });
}
