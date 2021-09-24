/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Module that provides constants for use inside Blockly. Do not
 * use these constants outside of the core library.
 * @author fenichel@google.com (Rachel Fenichel)
 * @package
 */
'use strict';

goog.module('Blockly.internalConstants');

const {ConnectionType} = goog.require('Blockly.ConnectionType');


/**
 * The multiplier for scroll wheel deltas using the line delta mode.
 * @type {number}
 */
const LINE_MODE_MULTIPLIER = 40;
exports.LINE_MODE_MULTIPLIER = LINE_MODE_MULTIPLIER;

/**
 * The multiplier for scroll wheel deltas using the page delta mode.
 * @type {number}
 */
const PAGE_MODE_MULTIPLIER = 125;
exports.PAGE_MODE_MULTIPLIER = PAGE_MODE_MULTIPLIER;

/**
 * Number of pixels the mouse must move before a drag starts.
 */
const DRAG_RADIUS = 5;
exports.DRAG_RADIUS = DRAG_RADIUS;

/**
 * Number of pixels the mouse must move before a drag/scroll starts from the
 * flyout.  Because the drag-intention is determined when this is reached, it is
 * larger than DRAG_RADIUS so that the drag-direction is clearer.
 */
const FLYOUT_DRAG_RADIUS = 10;
exports.FLYOUT_DRAG_RADIUS = FLYOUT_DRAG_RADIUS;

/**
 * Maximum misalignment between connections for them to snap together.
 */
const SNAP_RADIUS = 28;
exports.SNAP_RADIUS = SNAP_RADIUS;

/**
 * Maximum misalignment between connections for them to snap together,
 * when a connection is already highlighted.
 */
const CONNECTING_SNAP_RADIUS = SNAP_RADIUS;
exports.CONNECTING_SNAP_RADIUS = CONNECTING_SNAP_RADIUS;

/**
 * How much to prefer staying connected to the current connection over moving to
 * a new connection.  The current previewed connection is considered to be this
 * much closer to the matching connection on the block than it actually is.
 */
const CURRENT_CONNECTION_PREFERENCE = 8;
exports.CURRENT_CONNECTION_PREFERENCE = CURRENT_CONNECTION_PREFERENCE;

/**
 * Delay in ms between trigger and bumping unconnected block out of alignment.
 */
const BUMP_DELAY = 250;
exports.BUMP_DELAY = BUMP_DELAY;

/**
 * Maximum randomness in workspace units for bumping a block.
 */
const BUMP_RANDOMNESS = 10;
exports.BUMP_RANDOMNESS = BUMP_RANDOMNESS;

/**
 * Number of characters to truncate a collapsed block to.
 */
const COLLAPSE_CHARS = 30;
exports.COLLAPSE_CHARS = COLLAPSE_CHARS;

/**
 * Length in ms for a touch to become a long press.
 */
const LONGPRESS = 750;
exports.LONGPRESS = LONGPRESS;

/**
 * Prevent a sound from playing if another sound preceded it within this many
 * milliseconds.
 */
const SOUND_LIMIT = 100;
exports.SOUND_LIMIT = SOUND_LIMIT;

/**
 * When dragging a block out of a stack, split the stack in two (true), or drag
 * out the block healing the stack (false).
 */
const DRAG_STACK = true;
exports.DRAG_STACK = DRAG_STACK;

/**
 * The richness of block colours, regardless of the hue.
 * Must be in the range of 0 (inclusive) to 1 (exclusive).
 */
const HSV_SATURATION = 0.45;
exports.HSV_SATURATION = HSV_SATURATION;

/**
 * The intensity of block colours, regardless of the hue.
 * Must be in the range of 0 (inclusive) to 1 (exclusive).
 */
const HSV_VALUE = 0.65;
exports.HSV_VALUE = HSV_VALUE;

/**
 * Sprited icons and images.
 */
const SPRITE = {
  width: 96,
  height: 124,
  url: 'sprites.png'
};
exports.SPRITE = SPRITE;

/**
 * ENUM for no drag operation.
 * @const
 */
const DRAG_NONE = 0;
exports.DRAG_NONE = DRAG_NONE;

/**
 * ENUM for inside the sticky DRAG_RADIUS.
 * @const
 */
const DRAG_STICKY = 1;
exports.DRAG_STICKY = DRAG_STICKY;

/**
 * ENUM for inside the non-sticky DRAG_RADIUS, for differentiating between
 * clicks and drags.
 * @const
 */
const DRAG_BEGIN = 1;
exports.DRAG_BEGIN = DRAG_BEGIN;

/**
 * ENUM for freely draggable (outside the DRAG_RADIUS, if one applies).
 * @const
 */
const DRAG_FREE = 2;
exports.DRAG_FREE = DRAG_FREE;

/**
 * Lookup table for determining the opposite type of a connection.
 * @const
 */
const OPPOSITE_TYPE = [];
OPPOSITE_TYPE[ConnectionType.INPUT_VALUE] = ConnectionType.OUTPUT_VALUE;
OPPOSITE_TYPE[ConnectionType.OUTPUT_VALUE] = ConnectionType.INPUT_VALUE;
OPPOSITE_TYPE[ConnectionType.NEXT_STATEMENT] =
    ConnectionType.PREVIOUS_STATEMENT;
OPPOSITE_TYPE[ConnectionType.PREVIOUS_STATEMENT] =
    ConnectionType.NEXT_STATEMENT;

exports.OPPOSITE_TYPE = OPPOSITE_TYPE;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 */
const VARIABLE_CATEGORY_NAME = 'VARIABLE';
exports.VARIABLE_CATEGORY_NAME = VARIABLE_CATEGORY_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * variable blocks.
 * @const {string}
 */
const VARIABLE_DYNAMIC_CATEGORY_NAME = 'VARIABLE_DYNAMIC';
exports.VARIABLE_DYNAMIC_CATEGORY_NAME = VARIABLE_DYNAMIC_CATEGORY_NAME;

/**
 * String for use in the "custom" attribute of a category in toolbox XML.
 * This string indicates that the category should be dynamically populated with
 * procedure blocks.
 * @const {string}
 */
const PROCEDURE_CATEGORY_NAME = 'PROCEDURE';
exports.PROCEDURE_CATEGORY_NAME = PROCEDURE_CATEGORY_NAME;

/**
 * String for use in the dropdown created in field_variable.
 * This string indicates that this option in the dropdown is 'Rename
 * variable...' and if selected, should trigger the prompt to rename a variable.
 * @const {string}
 */
const RENAME_VARIABLE_ID = 'RENAME_VARIABLE_ID';
exports.RENAME_VARIABLE_ID = RENAME_VARIABLE_ID;

/**
 * String for use in the dropdown created in field_variable.
 * This string indicates that this option in the dropdown is 'Delete the "%1"
 * variable' and if selected, should trigger the prompt to delete a variable.
 * @const {string}
 */
const DELETE_VARIABLE_ID = 'DELETE_VARIABLE_ID';
exports.DELETE_VARIABLE_ID = DELETE_VARIABLE_ID;
