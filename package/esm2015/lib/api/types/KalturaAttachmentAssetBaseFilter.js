/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaAttachmentAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.formatIn;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusNotIn;
export class KalturaAttachmentAssetBaseFilter extends KalturaAssetFilter {
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
            objectType: { type: 'c', default: 'KalturaAttachmentAssetBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaAttachmentType, subType: 'KalturaAttachmentType' },
            formatIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaAttachmentAssetStatus, subType: 'KalturaAttachmentAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.formatIn;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaAttachmentAssetBaseFilter'] = KalturaAttachmentAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRhY2htZW50QXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsTUFBTSx1Q0FBd0MsU0FBUSxrQkFBa0I7Ozs7SUFRcEUsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMxSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldEZpbHRlciwgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0YWNobWVudEFzc2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB7XG4gICAgZm9ybWF0RXF1YWw/IDogS2FsdHVyYUF0dGFjaG1lbnRUeXBlO1xuXHRmb3JtYXRJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c3RhdHVzTm90SW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXR0YWNobWVudEFzc2V0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlciB7XG5cbiAgICBmb3JtYXRFcXVhbCA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcblx0Zm9ybWF0SW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXR0YWNobWVudEFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Zm9ybWF0RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXR0YWNobWVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRUeXBlJyB9LFxuXHRcdFx0XHRmb3JtYXRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFBdHRhY2htZW50QXNzZXRCYXNlRmlsdGVyOyJdfQ==