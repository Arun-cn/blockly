/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Former goog.module ID: Blockly.Events

import {Abstract, AbstractEventJson} from './events_abstract.js';
import {BlockBase, BlockBaseJson} from './events_block_base.js';
import {BlockChange, BlockChangeJson} from './events_block_change.js';
import {BlockCreate, BlockCreateJson} from './events_block_create.js';
import {BlockDelete, BlockDeleteJson} from './events_block_delete.js';
import {BlockDrag, BlockDragJson} from './events_block_drag.js';
import {
  BlockFieldIntermediateChange,
  BlockFieldIntermediateChangeJson,
} from './events_block_field_intermediate_change.js';
import {BlockMove, BlockMoveJson} from './events_block_move.js';
import {BubbleOpen, BubbleOpenJson, BubbleType} from './events_bubble_open.js';
import {Click, ClickJson, ClickTarget} from './events_click.js';
import {CommentBase, CommentBaseJson} from './events_comment_base.js';
import {CommentChange, CommentChangeJson} from './events_comment_change.js';
import {
  CommentCollapse,
  CommentCollapseJson,
} from './events_comment_collapse.js';
import {CommentCreate, CommentCreateJson} from './events_comment_create.js';
import {CommentDelete} from './events_comment_delete.js';
import {CommentDrag, CommentDragJson} from './events_comment_drag.js';
import {CommentMove, CommentMoveJson} from './events_comment_move.js';
import {CommentResize, CommentResizeJson} from './events_comment_resize.js';
import {MarkerMove, MarkerMoveJson} from './events_marker_move.js';
import {Selected, SelectedJson} from './events_selected.js';
import {ThemeChange, ThemeChangeJson} from './events_theme_change.js';
import {
  ToolboxItemSelect,
  ToolboxItemSelectJson,
} from './events_toolbox_item_select.js';
import {TrashcanOpen, TrashcanOpenJson} from './events_trashcan_open.js';
import {UiBase} from './events_ui_base.js';
import {VarBase, VarBaseJson} from './events_var_base.js';
import {VarCreate, VarCreateJson} from './events_var_create.js';
import {VarDelete, VarDeleteJson} from './events_var_delete.js';
import {VarRename, VarRenameJson} from './events_var_rename.js';
import {ViewportChange, ViewportChangeJson} from './events_viewport.js';
import * as eventUtils from './utils.js';
import {FinishedLoading} from './workspace_events.js';

// Events.
export {
  Abstract,
  AbstractEventJson,
  BlockBase,
  BlockBaseJson,
  BlockChange,
  BlockChangeJson,
  BlockCreate,
  BlockCreateJson,
  BlockDelete,
  BlockDeleteJson,
  BlockDrag,
  BlockDragJson,
  BlockFieldIntermediateChange,
  BlockFieldIntermediateChangeJson,
  BlockMove,
  BlockMoveJson,
  BubbleOpen,
  BubbleOpenJson,
  BubbleType,
  Click,
  ClickJson,
  ClickTarget,
  CommentBase,
  CommentBaseJson,
  CommentChange,
  CommentChangeJson,
  CommentCollapse,
  CommentCollapseJson,
  CommentCreate,
  CommentCreateJson,
  CommentDelete,
  CommentDrag,
  CommentDragJson,
  CommentMove,
  CommentMoveJson,
  CommentResize,
  CommentResizeJson,
  FinishedLoading,
  MarkerMove,
  MarkerMoveJson,
  Selected,
  SelectedJson,
  ThemeChange,
  ThemeChangeJson,
  ToolboxItemSelect,
  ToolboxItemSelectJson,
  TrashcanOpen,
  TrashcanOpenJson,
  UiBase,
  VarBase,
  VarBaseJson,
  VarCreate,
  VarCreateJson,
  VarDelete,
  VarDeleteJson,
  VarRename,
  VarRenameJson,
  ViewportChange,
  ViewportChangeJson,
};

// Event types.
export const BLOCK_CHANGE = eventUtils.BLOCK_CHANGE;
export const BLOCK_CREATE = eventUtils.BLOCK_CREATE;
export const BLOCK_DELETE = eventUtils.BLOCK_DELETE;
export const BLOCK_DRAG = eventUtils.BLOCK_DRAG;
export const BLOCK_MOVE = eventUtils.BLOCK_MOVE;
export const BLOCK_FIELD_INTERMEDIATE_CHANGE =
  eventUtils.BLOCK_FIELD_INTERMEDIATE_CHANGE;
export const BUBBLE_OPEN = eventUtils.BUBBLE_OPEN;
export type BumpEvent = eventUtils.BumpEvent;
export const BUMP_EVENTS = eventUtils.BUMP_EVENTS;
export const CHANGE = eventUtils.CHANGE;
export const CLICK = eventUtils.CLICK;
export const COMMENT_CHANGE = eventUtils.COMMENT_CHANGE;
export const COMMENT_CREATE = eventUtils.COMMENT_CREATE;
export const COMMENT_DELETE = eventUtils.COMMENT_DELETE;
export const COMMENT_MOVE = eventUtils.COMMENT_MOVE;
export const COMMENT_RESIZE = eventUtils.COMMENT_RESIZE;
export const COMMENT_DRAG = eventUtils.COMMENT_DRAG;
export const CREATE = eventUtils.CREATE;
export const DELETE = eventUtils.DELETE;
export const FINISHED_LOADING = eventUtils.FINISHED_LOADING;
export const MARKER_MOVE = eventUtils.MARKER_MOVE;
export const MOVE = eventUtils.MOVE;
export const SELECTED = eventUtils.SELECTED;
export const THEME_CHANGE = eventUtils.THEME_CHANGE;
export const TOOLBOX_ITEM_SELECT = eventUtils.TOOLBOX_ITEM_SELECT;
export const TRASHCAN_OPEN = eventUtils.TRASHCAN_OPEN;
export const UI = eventUtils.UI;
export const VAR_CREATE = eventUtils.VAR_CREATE;
export const VAR_DELETE = eventUtils.VAR_DELETE;
export const VAR_RENAME = eventUtils.VAR_RENAME;
export const VIEWPORT_CHANGE = eventUtils.VIEWPORT_CHANGE;

// Event utils.
export const clearPendingUndo = eventUtils.clearPendingUndo;
export const disable = eventUtils.disable;
export const enable = eventUtils.enable;
export const filter = eventUtils.filter;
export const fire = eventUtils.fire;
export const fromJson = eventUtils.fromJson;
export const getDescendantIds = eventUtils.getDescendantIds;
export const get = eventUtils.get;
export const getGroup = eventUtils.getGroup;
export const getRecordUndo = eventUtils.getRecordUndo;
export const isEnabled = eventUtils.isEnabled;
export const setGroup = eventUtils.setGroup;
export const setRecordUndo = eventUtils.setRecordUndo;
export const disableOrphans = eventUtils.disableOrphans;
