/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginData } from './KalturaPluginData';
/**
 * @record
 */
export function KalturaFairplayEntryContextPluginDataArgs() { }
/** @type {?|undefined} */
KalturaFairplayEntryContextPluginDataArgs.prototype.publicCertificate;
export class KalturaFairplayEntryContextPluginData extends KalturaPluginData {
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
            objectType: { type: 'c', default: 'KalturaFairplayEntryContextPluginData' },
            publicCertificate: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFairplayEntryContextPluginData.prototype.publicCertificate;
}
typesMappingStorage['KalturaFairplayEntryContextPluginData'] = KalturaFairplayEntryContextPluginData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxNQUFNLDRDQUE2QyxTQUFRLGlCQUFpQjs7OztJQUl4RSxZQUFZLElBQWlEO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpbkRhdGEsIEthbHR1cmFQbHVnaW5EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVBsdWdpbkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGYWlycGxheUVudHJ5Q29udGV4dFBsdWdpbkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFQbHVnaW5EYXRhQXJncyB7XG4gICAgcHVibGljQ2VydGlmaWNhdGU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmFpcnBsYXlFbnRyeUNvbnRleHRQbHVnaW5EYXRhIGV4dGVuZHMgS2FsdHVyYVBsdWdpbkRhdGEge1xuXG4gICAgcHVibGljQ2VydGlmaWNhdGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGYWlycGxheUVudHJ5Q29udGV4dFBsdWdpbkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YScgfSxcblx0XHRcdFx0cHVibGljQ2VydGlmaWNhdGUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YSddID0gS2FsdHVyYUZhaXJwbGF5RW50cnlDb250ZXh0UGx1Z2luRGF0YTsiXX0=