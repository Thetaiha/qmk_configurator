/* Copyright 2022 - Generated by convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ ² │ & │ é │ " │ ' │ ( │ - │ è │ _ │ ç │ à │ ) │ = │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ A │ Z │ E │ R │ T │ Y │ U │ I │ O │ P │ ^ │ $ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ Q │ S │ D │ F │ G │ H │ J │ K │ L │ M │ ù │ * │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ < │ W │ X │ C │ V │ B │ N │ , │ ; │ : │ ! │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  KC_GRV: { name: '²', title: 'FR_SUP2' },
  KC_1: { name: '1\n&', title: 'FR_AMPR' },
  KC_2: { name: '2\né', title: 'FR_EACU' },
  KC_3: { name: '3\n"', title: 'FR_DQUO' },
  KC_4: { name: "4\n'", title: 'FR_QUOT' },
  KC_5: { name: '5\n(', title: 'FR_LPRN' },
  KC_6: { name: '6\n-', title: 'FR_MINS' },
  KC_7: { name: '7\nè', title: 'FR_EGRV' },
  KC_8: { name: '8\n_', title: 'FR_UNDS' },
  KC_9: { name: '9\nç', title: 'FR_CCED' },
  KC_0: { name: '0\nà', title: 'FR_AGRV' },
  KC_MINS: { name: '°\n)', title: 'FR_RPRN' },
  KC_EQL: { name: '+\n=', title: 'FR_EQL' },
  // Row 2
  KC_Q: { name: 'A', title: 'FR_A' },
  KC_W: { name: 'Z', title: 'FR_Z' },
  KC_E: { name: 'E', title: 'FR_E' },
  KC_R: { name: 'R', title: 'FR_R' },
  KC_T: { name: 'T', title: 'FR_T' },
  KC_Y: { name: 'Y', title: 'FR_Y' },
  KC_U: { name: 'U', title: 'FR_U' },
  KC_I: { name: 'I', title: 'FR_I' },
  KC_O: { name: 'O', title: 'FR_O' },
  KC_P: { name: 'P', title: 'FR_P' },
  KC_LBRC: { name: '¨\n^', title: 'FR_CIRC (dead)' },
  KC_RBRC: { name: '£\n$', title: 'FR_DLR' },
  // Row 3
  KC_A: { name: 'Q', title: 'FR_Q' },
  KC_S: { name: 'S', title: 'FR_S' },
  KC_D: { name: 'D', title: 'FR_D' },
  KC_F: { name: 'F', title: 'FR_F' },
  KC_G: { name: 'G', title: 'FR_G' },
  KC_H: { name: 'H', title: 'FR_H' },
  KC_J: { name: 'J', title: 'FR_J' },
  KC_K: { name: 'K', title: 'FR_K' },
  KC_L: { name: 'L', title: 'FR_L' },
  KC_SCLN: { name: 'M', title: 'FR_M' },
  KC_QUOT: { name: '%\nù', title: 'FR_UGRV' },
  KC_NUHS: { name: 'µ\n*', title: 'FR_ASTR' },
  // Row 4
  KC_NUBS: { name: '>\n<', title: 'FR_LABK' },
  KC_Z: { name: 'W', title: 'FR_W' },
  KC_X: { name: 'X', title: 'FR_X' },
  KC_C: { name: 'C', title: 'FR_C' },
  KC_V: { name: 'V', title: 'FR_V' },
  KC_B: { name: 'B', title: 'FR_B' },
  KC_N: { name: 'N', title: 'FR_N' },
  KC_M: { name: '?\n,', title: 'FR_COMM' },
  KC_COMM: { name: '.\n;', title: 'FR_SCLN' },
  KC_DOT: { name: '/\n:', title: 'FR_COLN' },
  KC_SLSH: { name: '§\n!', title: 'FR_EXLM' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ ° │ + │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │ ¨ │ £ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │ % │ µ │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ > │   │   │   │   │   │   │ ? │ . │ / │ § │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(KC_1)': { name: '1', title: 'FR_1' },
  KC_EXLM: { name: '1', title: 'FR_1' },
  'S(KC_2)': { name: '2', title: 'FR_2' },
  KC_AT: { name: '2', title: 'FR_2' },
  'S(KC_3)': { name: '3', title: 'FR_3' },
  KC_HASH: { name: '3', title: 'FR_3' },
  'S(KC_4)': { name: '4', title: 'FR_4' },
  KC_DLR: { name: '4', title: 'FR_4' },
  'S(KC_5)': { name: '5', title: 'FR_5' },
  KC_PERC: { name: '5', title: 'FR_5' },
  'S(KC_6)': { name: '6', title: 'FR_6' },
  KC_CIRC: { name: '6', title: 'FR_6' },
  'S(KC_7)': { name: '7', title: 'FR_7' },
  KC_AMPR: { name: '7', title: 'FR_7' },
  'S(KC_8)': { name: '8', title: 'FR_8' },
  KC_ASTR: { name: '8', title: 'FR_8' },
  'S(KC_9)': { name: '9', title: 'FR_9' },
  KC_LPRN: { name: '9', title: 'FR_9' },
  'S(KC_0)': { name: '0', title: 'FR_0' },
  KC_RPRN: { name: '0', title: 'FR_0' },
  'S(KC_MINS)': { name: '°', title: 'FR_DEG' },
  KC_UNDS: { name: '°', title: 'FR_DEG' },
  'S(KC_EQL)': { name: '+', title: 'FR_PLUS' },
  KC_PLUS: { name: '+', title: 'FR_PLUS' },
  // Row 2
  'S(KC_LBRC)': { name: '¨', title: 'FR_DIAE (dead)' },
  KC_LCBR: { name: '¨', title: 'FR_DIAE (dead)' },
  'S(KC_RBRC)': { name: '£', title: 'FR_PND' },
  KC_RCBR: { name: '£', title: 'FR_PND' },
  // Row 3
  'S(KC_QUOT)': { name: '%', title: 'FR_PERC' },
  KC_DQUO: { name: '%', title: 'FR_PERC' },
  'S(KC_NUHS)': { name: 'µ', title: 'FR_MICR' },
  // Row 4
  'S(KC_NUBS)': { name: '>', title: 'FR_RABK' },
  'S(KC_M)': { name: '?', title: 'FR_QUES' },
  'S(KC_COMM)': { name: '.', title: 'FR_DOT' },
  KC_LT: { name: '.', title: 'FR_DOT' },
  'S(KC_DOT)': { name: '/', title: 'FR_SLSH' },
  KC_GT: { name: '/', title: 'FR_SLSH' },
  'S(KC_SLSH)': { name: '§', title: 'FR_SECT' },
  KC_QUES: { name: '§', title: 'FR_SECT' },

  /* AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │   │ ~ │ # │ { │ [ │ | │ ` │ \ │   │ @ │ ] │ } │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │ € │   │   │   │   │   │   │   │   │ ¤ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │   │   │   │   │   │   │   │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'ALGR(KC_2)': { name: '~', title: 'FR_TILD (dead)' },
  'ALGR(KC_3)': { name: '#', title: 'FR_HASH' },
  'ALGR(KC_4)': { name: '{', title: 'FR_LCBR' },
  'ALGR(KC_5)': { name: '[', title: 'FR_LBRC' },
  'ALGR(KC_6)': { name: '|', title: 'FR_PIPE' },
  'ALGR(KC_7)': { name: '`', title: 'FR_GRV (dead)' },
  'ALGR(KC_8)': { name: '\\', title: 'FR_BSLS' },
  'ALGR(KC_0)': { name: '@', title: 'FR_AT' },
  'ALGR(KC_MINS)': { name: ']', title: 'FR_RBRC' },
  'ALGR(KC_EQL)': { name: '}', title: 'FR_RCBR' },
  // Row 2
  'ALGR(KC_E)': { name: '€', title: 'FR_EURO' },
  'ALGR(KC_RBRC)': { name: '¤', title: 'FR_CURR' },

  /* Other keys */
  KC_BSLS: { name: 'µ\n*', title: '' },
  'S(KC_BSLS)': { name: 'µ', title: '' },
  KC_TILD: { name: '²', title: 'S(FR_SUP2)' },
  KC_COLN: { name: 'M', title: 'S(FR_M) (capital M)' },
  KC_PIPE: { name: 'µ', title: 'FR_MICR (capital µ)' },

  SC_LSPO: { name: 'LS / 9', title: 'Left Shift when held, 9 when tapped' },
  SC_RSPC: { name: 'RS / 0', title: 'Right Shift when held, 0 when tapped' },
  SC_LCPO: { name: 'LC / 9', title: 'Left Control when held, 9 when tapped' },
  SC_RCPC: { name: 'RC / 0', title: 'Right Control when held, 0 when tapped' },
  SC_LAPO: { name: 'LA / 9', title: 'Left Alt when held, 9 when tapped' },
  SC_RAPC: { name: 'RA / 0', title: 'Right Alt when held, 0 when tapped' },

  QK_GESC: {
    name: '²\nEsc',
    title: 'Esc normally, but ² when Shift or GUI is active'
  }
};