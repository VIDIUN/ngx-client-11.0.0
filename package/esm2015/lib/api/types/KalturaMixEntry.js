/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaMixEntry extends KalturaPlayableEntry {
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
            objectType: { type: 'c', default: 'KalturaMixEntry' },
            hasRealThumbnail: { type: 'b', readOnly: true },
            editorType: { type: 'en', subTypeConstructor: KalturaEditorType, subType: 'KalturaEditorType' },
            dataContent: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMixEntry.prototype.hasRealThumbnail;
    /** @type {?} */
    KalturaMixEntry.prototype.editorType;
    /** @type {?} */
    KalturaMixEntry.prototype.dataContent;
}
typesMappingStorage['KalturaMixEntry'] = KalturaMixEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1peEVudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWl4RW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVF4RixNQUFNLHNCQUF1QixTQUFRLG9CQUFvQjs7OztJQU1yRCxZQUFZLElBQTJCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNsRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVkaXRvclR5cGUgfSBmcm9tICcuL0thbHR1cmFFZGl0b3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YWJsZUVudHJ5LCBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbGF5YWJsZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWl4RW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFQbGF5YWJsZUVudHJ5QXJncyB7XG4gICAgZWRpdG9yVHlwZT8gOiBLYWx0dXJhRWRpdG9yVHlwZTtcblx0ZGF0YUNvbnRlbnQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWl4RW50cnkgZXh0ZW5kcyBLYWx0dXJhUGxheWFibGVFbnRyeSB7XG5cbiAgICByZWFkb25seSBoYXNSZWFsVGh1bWJuYWlsIDogYm9vbGVhbjtcblx0ZWRpdG9yVHlwZSA6IEthbHR1cmFFZGl0b3JUeXBlO1xuXHRkYXRhQ29udGVudCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1peEVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNaXhFbnRyeScgfSxcblx0XHRcdFx0aGFzUmVhbFRodW1ibmFpbCA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVkaXRvclR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRWRpdG9yVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRWRpdG9yVHlwZScgfSxcblx0XHRcdFx0ZGF0YUNvbnRlbnQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1peEVudHJ5J10gPSBLYWx0dXJhTWl4RW50cnk7Il19