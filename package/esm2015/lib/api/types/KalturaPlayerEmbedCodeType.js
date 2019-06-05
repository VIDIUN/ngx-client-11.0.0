/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayerEmbedCodeTypeArgs() { }
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.id;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.label;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.entryOnly;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.minVersion;
export class KalturaPlayerEmbedCodeType extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayerEmbedCodeType' },
            id: { type: 's' },
            label: { type: 's' },
            entryOnly: { type: 'b' },
            minVersion: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.id;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.label;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.entryOnly;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.minVersion;
}
typesMappingStorage['KalturaPlayerEmbedCodeType'] = KalturaPlayerEmbedCodeType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLE1BQU0saUNBQWtDLFNBQVEsaUJBQWlCOzs7O0lBTzdELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGlkPyA6IHN0cmluZztcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRlbnRyeU9ubHk/IDogYm9vbGVhbjtcblx0bWluVmVyc2lvbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRlbnRyeU9ubHkgOiBib29sZWFuO1xuXHRtaW5WZXJzaW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFiZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlPbmx5IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdG1pblZlcnNpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUnXSA9IEthbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlOyJdfQ==