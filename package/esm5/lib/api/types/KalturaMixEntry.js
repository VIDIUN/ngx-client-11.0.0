/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEditorType } from './KalturaEditorType';
import { KalturaPlayableEntry } from './KalturaPlayableEntry';
/**
 * @record
 */
export function KalturaMixEntryArgs() { }
/** @type {?|undefined} */
KalturaMixEntryArgs.prototype.editorType;
/** @type {?|undefined} */
KalturaMixEntryArgs.prototype.dataContent;
var KalturaMixEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMixEntry, _super);
    function KalturaMixEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMixEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMixEntry' },
            hasRealThumbnail: { type: 'b', readOnly: true },
            editorType: { type: 'en', subTypeConstructor: KalturaEditorType, subType: 'KalturaEditorType' },
            dataContent: { type: 's' }
        });
        return result;
    };
    return KalturaMixEntry;
}(KalturaPlayableEntry));
export { KalturaMixEntry };
if (false) {
    /** @type {?} */
    KalturaMixEntry.prototype.hasRealThumbnail;
    /** @type {?} */
    KalturaMixEntry.prototype.editorType;
    /** @type {?} */
    KalturaMixEntry.prototype.dataContent;
}
typesMappingStorage['KalturaMixEntry'] = KalturaMixEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1peEVudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWl4RW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFReEYsSUFBQTtJQUFxQywyQ0FBb0I7SUFNckQseUJBQVksSUFBMkI7ZUFFbkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNsRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MEJBbkNMO0VBV3FDLG9CQUFvQixFQXlCeEQsQ0FBQTtBQXpCRCwyQkF5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFZGl0b3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRWRpdG9yVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWFibGVFbnRyeSwgS2FsdHVyYVBsYXlhYmxlRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUGxheWFibGVFbnRyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1peEVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3Mge1xuICAgIGVkaXRvclR5cGU/IDogS2FsdHVyYUVkaXRvclR5cGU7XG5cdGRhdGFDb250ZW50PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1peEVudHJ5IGV4dGVuZHMgS2FsdHVyYVBsYXlhYmxlRW50cnkge1xuXG4gICAgcmVhZG9ubHkgaGFzUmVhbFRodW1ibmFpbCA6IGJvb2xlYW47XG5cdGVkaXRvclR5cGUgOiBLYWx0dXJhRWRpdG9yVHlwZTtcblx0ZGF0YUNvbnRlbnQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNaXhFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWl4RW50cnknIH0sXG5cdFx0XHRcdGhhc1JlYWxUaHVtYm5haWwgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlZGl0b3JUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVkaXRvclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVkaXRvclR5cGUnIH0sXG5cdFx0XHRcdGRhdGFDb250ZW50IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNaXhFbnRyeSddID0gS2FsdHVyYU1peEVudHJ5OyJdfQ==