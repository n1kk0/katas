import 'package:dart_katas/anchorize.dart';
import 'package:test/test.dart';

void main() {
  group('Anchorize me', () {
    test('Basic test set!', () {
      expect(
        '<xmp>' + anchorize('hello http://world.com !') + '</xmp>',
        equals('<xmp>hello <a href="http://world.com">http://world.com</a> !</xmp>')
      );

      expect(
        '<xmp>' + anchorize('Hello https://World.com') + '</xmp>',
        equals('<xmp>Hello <a href="https://World.com">https://World.com</a></xmp>')
      );

      expect(
        '<xmp>' + anchorize('Hello FTP://World.com') + '</xmp>',
        equals('<xmp>Hello <a href="FTP://World.com">FTP://World.com</a></xmp>')
      );
    });
  });
}