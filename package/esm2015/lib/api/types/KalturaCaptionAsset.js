/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAsset } from './KalturaAsset';
/**
 * @record
 */
export function KalturaCaptionAssetArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.captionParamsId;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.language;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.label;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.format;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaCaptionAssetArgs.prototype.accuracy;
export class KalturaCaptionAsset extends KalturaAsset {
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
            objectType: { type: 'c', default: 'KalturaCaptionAsset' },
            captionParamsId: { type: 'n' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            languageCode: { type: 'es', readOnly: true, subTypeConstructor: KalturaLanguageCode, subType: 'KalturaLanguageCode' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            label: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCaptionAssetStatus, subType: 'KalturaCaptionAssetStatus' },
            parentId: { type: 's' },
            accuracy: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptionAsset.prototype.captionParamsId;
    /** @type {?} */
    KalturaCaptionAsset.prototype.language;
    /** @type {?} */
    KalturaCaptionAsset.prototype.languageCode;
    /** @type {?} */
    KalturaCaptionAsset.prototype.isDefault;
    /** @type {?} */
    KalturaCaptionAsset.prototype.label;
    /** @type {?} */
    KalturaCaptionAsset.prototype.format;
    /** @type {?} */
    KalturaCaptionAsset.prototype.status;
    /** @type {?} */
    KalturaCaptionAsset.prototype.parentId;
    /** @type {?} */
    KalturaCaptionAsset.prototype.accuracy;
}
typesMappingStorage['KalturaCaptionAsset'] = KalturaCaptionAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhcHRpb25Bc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWhFLE1BQU0sMEJBQTJCLFNBQVEsWUFBWTs7OztJQVlqRCxZQUFZLElBQStCO1FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM3RixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQzFILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDakcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNoSSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZUNvZGUgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZUNvZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldCwgS2FsdHVyYUFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdGlvbkFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRBcmdzIHtcbiAgICBjYXB0aW9uUGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRsYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdGlzRGVmYXVsdD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRsYWJlbD8gOiBzdHJpbmc7XG5cdGZvcm1hdD8gOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdHBhcmVudElkPyA6IHN0cmluZztcblx0YWNjdXJhY3k/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FwdGlvbkFzc2V0IGV4dGVuZHMgS2FsdHVyYUFzc2V0IHtcblxuICAgIGNhcHRpb25QYXJhbXNJZCA6IG51bWJlcjtcblx0bGFuZ3VhZ2UgOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdHJlYWRvbmx5IGxhbmd1YWdlQ29kZSA6IEthbHR1cmFMYW5ndWFnZUNvZGU7XG5cdGlzRGVmYXVsdCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRmb3JtYXQgOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXM7XG5cdHBhcmVudElkIDogc3RyaW5nO1xuXHRhY2N1cmFjeSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhcHRpb25Bc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0JyB9LFxuXHRcdFx0XHRjYXB0aW9uUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMYW5ndWFnZUNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlQ29kZScgfSxcblx0XHRcdFx0aXNEZWZhdWx0IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25UeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cycgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWNjdXJhY3kgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhcHRpb25Bc3NldCddID0gS2FsdHVyYUNhcHRpb25Bc3NldDsiXX0=