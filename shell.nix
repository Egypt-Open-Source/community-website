{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    name = "egypt-open-source-website";
    buildInputs = with pkgs; [
        hugo
    ];
}
