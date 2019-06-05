/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUploadErrorCode } from './KalturaUploadErrorCode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUploadResponseArgs() { }
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.uploadTokenId;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.fileSize;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.errorCode;
/** @type {?|undefined} */
KalturaUploadResponseArgs.prototype.errorDescription;
var KalturaUploadResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUploadResponse, _super);
    function KalturaUploadResponse(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUploadResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUploadResponse' },
            uploadTokenId: { type: 's' },
            fileSize: { type: 'n' },
            errorCode: { type: 'en', subTypeConstructor: KalturaUploadErrorCode, subType: 'KalturaUploadErrorCode' },
            errorDescription: { type: 's' }
        });
        return result;
    };
    return KalturaUploadResponse;
}(KalturaObjectBase));
export { KalturaUploadResponse };
if (false) {
    /** @type {?} */
    KalturaUploadResponse.prototype.uploadTokenId;
    /** @type {?} */
    KalturaUploadResponse.prototype.fileSize;
    /** @type {?} */
    KalturaUploadResponse.prototype.errorCode;
    /** @type {?} */
    KalturaUploadResponse.prototype.errorDescription;
}
typesMappingStorage['KalturaUploadResponse'] = KalturaUploadResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVwbG9hZFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXBsb2FkUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLElBQUE7SUFBMkMsaURBQWlCO0lBT3hELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQXZDTDtFQWEyQyxpQkFBaUIsRUEyQjNELENBQUE7QUEzQkQsaUNBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZEVycm9yQ29kZSB9IGZyb20gJy4vS2FsdHVyYVVwbG9hZEVycm9yQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVwbG9hZFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHVwbG9hZFRva2VuSWQ/IDogc3RyaW5nO1xuXHRmaWxlU2l6ZT8gOiBudW1iZXI7XG5cdGVycm9yQ29kZT8gOiBLYWx0dXJhVXBsb2FkRXJyb3JDb2RlO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVwbG9hZFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdXBsb2FkVG9rZW5JZCA6IHN0cmluZztcblx0ZmlsZVNpemUgOiBudW1iZXI7XG5cdGVycm9yQ29kZSA6IEthbHR1cmFVcGxvYWRFcnJvckNvZGU7XG5cdGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcGxvYWRSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXBsb2FkUmVzcG9uc2UnIH0sXG5cdFx0XHRcdHVwbG9hZFRva2VuSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXJyb3JDb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwbG9hZEVycm9yQ29kZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkRXJyb3JDb2RlJyB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcGxvYWRSZXNwb25zZSddID0gS2FsdHVyYVVwbG9hZFJlc3BvbnNlOyJdfQ==